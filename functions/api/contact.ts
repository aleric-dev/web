declare const process: any;

interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
  IS_LOCAL_DEV?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  country_code?: string;
  phone_number?: string;
  service_type?: string;
  budget?: string;
  message?: string;
  _company_website_hp?: string;
  'cf-turnstile-response'?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const data: ContactPayload = await context.request.json();
    const { name, email, phone, country_code, phone_number, service_type, budget, message, _company_website_hp } = data;

    // 1. Detección de Bot vía Honeypot (trampa invisible)
    if (_company_website_hp) {
      console.warn('[Anti-Bot] Honeypot activado. Rechazando solicitud de bot.');
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Validación de Cloudflare Turnstile
    const turnstileToken = data['cf-turnstile-response'];
    const turnstileSecret = context.env?.TURNSTILE_SECRET_KEY || (typeof process !== 'undefined' ? process.env?.TURNSTILE_SECRET_KEY : undefined);

    if (turnstileSecret && turnstileToken) {
      try {
        const formData = new URLSearchParams();
        formData.append('secret', turnstileSecret);
        formData.append('response', turnstileToken);

        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: formData,
        });

        const outcome: any = await verifyRes.json();
        console.log('[Turnstile Verify Result]:', outcome);

        if (!outcome.success) {
          console.warn('[Anti-Bot] Verificación Turnstile fallida:', outcome['error-codes']);

          // En desarrollo local (localhost o 127.0.0.1), Cloudflare puede tardar minutos en propagar el hostname
          // o requerir headers específicos. En local no bloqueamos las pruebas del desarrollador:
          const isLocalhost = context.env?.IS_LOCAL_DEV === 'true' || context.request.url.includes('localhost') || context.request.url.includes('127.0.0.1') || (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production');
          
          if (!isLocalhost) {
            return new Response(
              JSON.stringify({
                success: false,
                error: 'Validación de seguridad fallida. Por favor recarga e intenta de nuevo.',
              }),
              {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
              }
            );
          } else {
            console.log('[Anti-Bot Local Pass] Entorno local detectado: permitiendo envío de prueba.');
          }
        }
      } catch (err) {
        console.error('Error al verificar Turnstile:', err);
      }
    }

    if (!name || !email || !budget || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Por favor completa los campos obligatorios (Nombre, Correo, Presupuesto y Mensaje).' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: 'Por favor ingresa un correo electrónico válido (ejemplo: tu@empresa.com).' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (message.trim().length > 1000) {
      return new Response(
        JSON.stringify({ success: false, error: 'El detalle del proyecto no puede superar los 1000 caracteres.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Formatear teléfono con código de país si viene separado
    let formattedPhone = (phone || '').trim();
    if (!formattedPhone && phone_number) {
      const code = (country_code || '').trim();
      const num = phone_number.trim();
      formattedPhone = code ? `${code} ${num}` : num;
    }

    const apiKey = context.env?.RESEND_API_KEY || (typeof process !== 'undefined' ? process.env?.RESEND_API_KEY : undefined);

    if (!apiKey) {
      console.error('RESEND_API_KEY no configurada');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Falta configurar RESEND_API_KEY en las variables de entorno.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const recipient = 'contacto@aleric.dev';
    const subject = `Nuevo Lead desde Aleric.dev: ${name} (${service_type || 'General'})`;
    const fromAddress = context.env?.RESEND_FROM_EMAIL || (typeof process !== 'undefined' ? process.env?.RESEND_FROM_EMAIL : undefined) || 'Aleric.dev <notification@aleric.dev>';

    // Plantilla de correo limpia, clara y minimalista
    const htmlBody = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Lead - Aleric.dev</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f1f5f9;
      margin: 0;
      padding: 30px 15px;
      color: #0f172a;
    }
    .container {
      max-width: 580px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 32px 28px;
    }
    .brand {
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
      padding-bottom: 16px;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 24px;
    }
    .brand span {
      color: #4f46e5;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 6px 0;
    }
    .subtitle {
      font-size: 13px;
      color: #64748b;
      margin: 0 0 24px 0;
    }
    .item {
      padding: 10px 0;
      border-bottom: 1px solid #f1f5f9;
    }
    .label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      margin-bottom: 3px;
    }
    .value {
      font-size: 14px;
      color: #0f172a;
      font-weight: 500;
    }
    .value a {
      color: #4f46e5;
      text-decoration: none;
    }
    .message-section {
      margin-top: 20px;
      padding-top: 10px;
    }
    .message-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
      white-space: pre-wrap;
      margin-top: 6px;
    }
    .reply-hint {
      margin-top: 24px;
      padding: 12px 16px;
      background: #eff6ff;
      border-left: 3px solid #3b82f6;
      border-radius: 4px;
      font-size: 12px;
      color: #1e40af;
      line-height: 1.5;
    }
    .footer {
      margin-top: 24px;
      font-size: 11px;
      color: #94a3b8;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="brand">
      Aleric<span>.dev</span>
    </div>

    <h1 class="title">Nuevo contacto recibido</h1>
    <p class="subtitle">Se ha enviado un mensaje a través del formulario de la web.</p>

    <div class="item">
      <div class="label">Nombre / Empresa</div>
      <div class="value"><strong>${escapeHtml(name)}</strong></div>
    </div>

    <div class="item">
      <div class="label">Correo Electrónico</div>
      <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
    </div>

    <div class="item">
      <div class="label">Teléfono / WhatsApp</div>
      <div class="value">${formattedPhone ? `<a href="https://wa.me/${formattedPhone.replace(/[^0-9]/g, '')}">${escapeHtml(formattedPhone)}</a>` : 'No proporcionado'}</div>
    </div>

    <div class="item">
      <div class="label">Servicio Solicitado</div>
      <div class="value">${escapeHtml(service_type || 'Consulta General / Proyecto Especial')}</div>
    </div>

    <div class="item">
      <div class="label">Presupuesto Estimado</div>
      <div class="value">${escapeHtml(budget || 'Flexible / Por definir')}</div>
    </div>

    <div class="message-section">
      <div class="label">Mensaje / Requerimientos</div>
      <div class="message-box">${escapeHtml(message)}</div>
    </div>

    <div class="reply-hint">
      <strong>Responder directo:</strong> Puedes darle a "Responder" en tu cliente de correo (Gmail/Outlook) y le llegará directo a <strong>${escapeHtml(email)}</strong>.
    </div>

    <div class="footer">
      Mensaje enviado desde aleric.dev • Enrutado a contacto@aleric.dev
    </div>
  </div>
</body>
</html>`;

    // Envío directo y único mediante Resend API
    let res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        reply_to: email,
        subject,
        html: htmlBody,
      }),
    });

    // Si falla por dominio no verificado aún en Resend, reintentar con el remitente de prueba oficial
    if (!res.ok) {
      const firstError = await res.text();
      console.warn('Primer intento con remitente personalizado falló, probando con onboarding@resend.dev:', firstError);

      res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Aleric.dev <onboarding@resend.dev>',
          to: [recipient],
          reply_to: email,
          subject,
          html: htmlBody,
        }),
      });
    }

    if (res.ok) {
      const responseData = await res.json();
      return new Response(JSON.stringify({ success: true, provider: 'resend', data: responseData }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const finalError = await res.text();
      console.error('Error al enviar con Resend:', finalError);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'No se pudo enviar el correo por Resend. Revisa tu RESEND_API_KEY o el estado de tu cuenta.',
          details: finalError,
        }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error: any) {
    console.error('Error procesando formulario:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Error interno al procesar el formulario' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
