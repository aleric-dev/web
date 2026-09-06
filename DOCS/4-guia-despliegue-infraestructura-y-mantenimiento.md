# Guía de Despliegue, Infraestructura y Mantenimiento — Aleric.dev

Este documento establece el procedimiento estándar para la compilación, despliegue continuo en **Cloudflare Pages**, configuración de variables de entorno y auditoría de rendimiento en **Aleric.dev**.

---

## 1. Despliegue en Cloudflare Pages

El frontend está optimizado para compilarse y distribuirse globalmente a través de la red perimetral de **Cloudflare Pages**.

### Parámetros de Compilación en Cloudflare Pages
- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node.js Version**: `18.x` o superior (configurado mediante la variable `NODE_VERSION: 18.20.0` o archivo `.nvmrc`).

### Variables de Entorno en Producción
En el panel de Cloudflare Pages (*Settings -> Environment Variables*), configurar:

| Variable | Descripción | Sensible |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Clave secreta de la API de Resend para envío de correos | Sí |
| `RESEND_FROM_EMAIL` | Dirección de remitente verificada (ej. `Aleric.dev <notification@aleric.dev>`) | No |

> **Nota de Seguridad**: Se ha eliminado la necesidad de `TURNSTILE_SECRET_KEY` y del widget de Cloudflare Turnstile para evitar problemas de carga o fallos de visualización en navegadores con bloqueadores.

---

## 2. Ejecución Local y Comandos de Desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo en localhost:4321
npm run dev

# 3. Compilar bundle estático de producción
npm run build

# 4. Previsualizar compilación localmente
npm run preview
```

---

## 3. Estándares de Rendimiento y SEO Técnico

Todas las páginas de Aleric.dev deben cumplir con los siguientes estándares de calidad antes de cada publicación:

1. **Google Lighthouse**:
   - Rendimiento (*Performance*): > 95/100
   - Accesibilidad: 100/100
   - Buenas Prácticas: 100/100
   - SEO: 100/100
2. **Schema.org JSON-LD**:
   - Estructuración semántica de `ProfessionalService` con catálogo de ofertas detallado en cada página.
3. **OpenGraph & Twitter Cards**:
   - Metaetiquetas completas para previsualización atractiva al compartir enlaces en WhatsApp, LinkedIn y Twitter.
