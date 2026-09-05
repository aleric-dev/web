declare const process: any;

interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service_type?: string;
  budget?: string;
  message?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const data: ContactPayload = await context.request.json();
    const { name, email, phone, service_type, budget, message } = data;

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
      <div class="value">${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}">${escapeHtml(phone)}</a>` : 'No proporcionado'}</div>
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
