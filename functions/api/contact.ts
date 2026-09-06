declare const process: any;

interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
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
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    // 1. Obtener clave de Resend desde el entorno de Cloudflare / Runtime
    const apiKey = context.env?.RESEND_API_KEY || (typeof process !== 'undefined' ? process.env?.RESEND_API_KEY : undefined);

    if (!apiKey) {
      console.error('Falta la clave de API de Resend');
      return new Response(
        JSON.stringify({ success: false, error: 'Falta la clave de API de Resend en las variables de entorno' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data: ContactPayload = await context.request.json();
    const { name, email, phone, country_code, phone_number, service_type, budget, message, _company_website_hp } = data;

    // 2. Detección de Bot vía Honeypot (trampa invisible)
    if (_company_website_hp) {
      console.warn('[Anti-Bot] Honeypot activado. Rechazando solicitud de bot.');
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
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

    const recipient = 'contacto@aleric.dev';
    const subject = `Nuevo Lead desde Aleric.dev: ${name} (${service_type || 'General'})`;
    const fromAddress = 'Aleric.dev <notification@aleric.dev>';

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
      padding-bottom: 18px;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 24px;
    }
    .brand-logo {
      height: 34px;
      width: auto;
      max-width: 170px;
      display: block;
      border: 0;
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
      <img
        src="https://aleric.dev/logo-dark-horizontal.png"
        alt="Aleric Dev"
        width="180"
        style="display: block; width: 180px; max-width: 180px; height: auto; border: 0;"
      />
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

    <div class="footer">
      Mensaje enviado desde aleric.dev
    </div>
  </div>
</body>
</html>`;

    // Plantilla de confirmación para el cliente (Nuevo mensaje independiente)
    const clientHtmlBody = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hemos recibido tu solicitud - Aleric.dev</title>
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
      padding: 36px 30px;
    }
    .brand {
      padding-bottom: 20px;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 24px;
    }
    .brand-logo {
      height: 34px;
      width: auto;
      max-width: 170px;
      display: block;
      border: 0;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 10px 0;
    }
    .text {
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
      margin: 0 0 18px 0;
    }
    .summary-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 18px 20px;
      margin: 24px 0;
    }
    .summary-item {
      font-size: 13px;
      color: #475569;
      margin-bottom: 8px;
    }
    .summary-item:last-child {
      margin-bottom: 0;
    }
    .summary-item strong {
      color: #0f172a;
    }
    .badge {
      display: inline-block;
      padding: 4px 10px;
      background: #e0e7ff;
      color: #3730a3;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 14px;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #f1f5f9;
      font-size: 12px;
      color: #94a3b8;
      text-align: center;
      line-height: 1.5;
    }
    .footer a {
      color: #4f46e5;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="brand">
      <img
        src="https://aleric.dev/logo-dark-horizontal.png"
        alt="Aleric Dev"
        width="180"
        style="display: block; width: 180px; max-width: 180px; height: auto; border: 0;"
      />
    </div>

    <div class="badge">Solicitud Recibida</div>
    <h1 class="title">¡Hola, ${escapeHtml(name)}!</h1>
    <p class="text">
      Confirmamos que hemos recibido tu solicitud correctamente. Nuestro equipo técnico y de asesoría ya está revisando los detalles de tu proyecto para brindarte una respuesta personalizada.
    </p>
    <p class="text">
      Uno de nuestros asesores se pondrá en contacto contigo a este correo en <strong>menos de 24 horas</strong>.
    </p>

    <div class="summary-card">
      <div class="summary-item"><strong>Servicio de interés:</strong> ${escapeHtml(service_type || 'Desarrollo de Software / Web')}</div>
      <div class="summary-item"><strong>Presupuesto estimado:</strong> ${escapeHtml(budget || 'Flexible / Por definir')}</div>
      ${formattedPhone ? `<div class="summary-item"><strong>Teléfono / WhatsApp:</strong> ${escapeHtml(formattedPhone)}</div>` : ''}
    </div>

    <p class="text" style="font-size: 13px; color: #64748b;">
      Si necesitas añadir algún detalle extra o documento antes de que te contactemos, puedes responder directamente a este mensaje.
    </p>

    <div class="footer">
      <strong>Aleric.dev</strong> • Soluciones de Software, Web & Automatización B2B<br>
      <a href="https://aleric.dev">https://aleric.dev</a> • <a href="mailto:contacto@aleric.dev">contacto@aleric.dev</a>
    </div>
  </div>
</body>
</html>`;

    // 1. Envío de notificación interna a contacto@aleric.dev
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

    // Si falla el remitente personalizado, reintentar con onboarding@resend.dev
    let effectiveFrom = fromAddress;
    if (!res.ok) {
      const firstError = await res.text();
      console.warn('Primer intento falló, probando con onboarding@resend.dev:', firstError);

      effectiveFrom = 'Aleric.dev <onboarding@resend.dev>';
      res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: effectiveFrom,
          to: [recipient],
          reply_to: email,
          subject,
          html: htmlBody,
        }),
      });
    }

    if (!res.ok) {
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

    const internalEmailData = await res.json();

    // 2. Envío de confirmación automática al cliente (Mensaje nuevo independiente)
    let clientEmailData = null;
    try {
      const clientRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: effectiveFrom,
          to: [email.trim()],
          reply_to: 'contacto@aleric.dev',
          subject: `Hemos recibido tu solicitud en Aleric.dev (${name})`,
          html: clientHtmlBody,
        }),
      });

      if (clientRes.ok) {
        clientEmailData = await clientRes.json();
        console.log('[Confirmación Cliente] Correo enviado exitosamente:', clientEmailData);
      } else {
        const clientErrText = await clientRes.text();
        console.warn('[Confirmación Cliente] Error al enviar correo al cliente:', clientRes.status, clientErrText);
      }
    } catch (clientErr) {
      console.warn('[Confirmación Cliente] Excepción al enviar confirmación al cliente:', clientErr);
    }

    return new Response(JSON.stringify({
      success: true,
      provider: 'resend',
      data: internalEmailData,
      clientData: clientEmailData,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
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

// Alias para compatibilidad con estándares Astro / Cloudflare
export const POST = onRequestPost;

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
