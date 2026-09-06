import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

function localContactApiPlugin() {
  return {
    name: 'local-contact-api',
    apply: 'serve', // Solo activo durante npm run dev
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method === 'POST') {
          const env = loadEnv('development', process.cwd(), '');
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const { onRequestPost } = await server.ssrLoadModule('./functions/api/contact.ts');

              const dummyRequest = new Request('http://localhost/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
              });

              const response = await onRequestPost({
                request: dummyRequest,
                env: {
                  RESEND_API_KEY: env.RESEND_API_KEY || process.env.RESEND_API_KEY,
                  RESEND_FROM_EMAIL: env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL,
                  IS_LOCAL_DEV: 'true',
                },
              });

              res.statusCode = response.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(await response.text());
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message || 'Error local' }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [localContactApiPlugin()],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
