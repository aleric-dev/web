# 🛠️ Arquitectura Técnica y Stack Tecnológico — Aleric.dev

> **Documento de Estándares de Ingeniería**  
> *Parte de la documentación central de [Aleric.dev](./index.md).*  
> *Define las decisiones técnicas oficiales para esta plataforma y para todos los proyectos de clientes.*

---

## 🧭 Índice del Documento
- [1. Filosofía de Ingeniería en Aleric.dev](#1-filosofía-de-ingeniería-en-alericdev)
- [2. Stack Técnico de este Proyecto: `Aleric.dev Web`](#2-stack-técnico-de-este-proyecto-alericdev-web)
- [3. Stack Canónico para Proyectos de Clientes](#3-stack-canónico-para-proyectos-de-clientes)
  - [3.1. Ecosistema de Desarrollo Web & Landings CRO](#31-ecosistema-de-desarrollo-web--landings-cro)
  - [3.2. Ecosistema de Software a la Medida & SaaS](#32-ecosistema-de-software-a-la-medida--saas)
  - [3.3. Ecosistema de Automatizaciones & Integraciones](#33-ecosistema-de-automatizaciones--integraciones)
- [4. Estándares de Seguridad y Protección Anti-Spam](#4-estándares-de-seguridad-y-protección-anti-spam)
- [5. Infraestructura, Entornos y Despliegues](#5-infraestructura-entornos-y-despliegues)

---

## 1. Filosofía de Ingeniería en Aleric.dev

En **Aleric.dev** seguimos 4 principios innegociables al construir software:

1. **Rendimiento Radical (Zero Bloatware)**: No incluimos librerías ni frameworks pesados a menos que resuelvan una necesidad de negocio real. Cada kilobyte enviado al cliente debe justificar su valor.
2. **Tipado Estricto de Extremo a Extremo**: Empleamos **TypeScript** en modo estricto en toda la capa web y backend, complementado con validaciones de esquemas en tiempo de ejecución (**Zod / Pydantic**).
3. **Propiedad y Portabilidad Absoluta**: Construimos con herramientas de código abierto o estándares de industria que el cliente pueda ejecutar en cualquier proveedor cloud sin quedar atrapado en plataformas propietarias.
4. **Separación de Responsabilidades**: Arquitectura modular con desacoplamiento entre UI, lógica de negocio y capa de datos.

---

## 2. Stack Técnico de este Proyecto: `Aleric.dev Web`

La web corporativa y comercial de Aleric.dev está diseñada para ofrecer máxima velocidad de carga, SEO impecable y cero mantenimiento de servidores:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        Visitante / Navegador                           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ (HTTPS / Tráfico Web)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      Cloudflare Pages (CDN Edge)                       │
├───────────────────────────────────┬────────────────────────────────────┤
│   HTML Estático Ultraveloz        │   Isla Dinámica Interactiva        │
│   (Astro 5 - 0 bytes JS)          │   (React 19 - ProfileRouter)       │
└───────────────────────────────────┴─────────────────┬──────────────────┘
                                                      │ (POST /api/contact)
                                                      ▼
┌────────────────────────────────────────────────────────────────────────┐
│           Cloudflare Pages Function (functions/api/contact.ts)         │
│           • Detección Anti-Bot Honeypot (_company_website_hp)          │
│           • Validación Sintáctica y Sanitización de Campos             │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ (API REST Segura)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     Resend API (Email Transaccional)                   │
├───────────────────────────────────┬────────────────────────────────────┤
│   Alerta Comercial Interna        │   Confirmación de Cortesía         │
│   contacto@aleric.dev             │   en Bandeja del Cliente           │
└───────────────────────────────────┴────────────────────────────────────┘
```

### Componentes del Stack
* **Framework Principal**: [Astro](https://astro.build) (v5+) configurado con salida estática (`output: "static"`). Las páginas se pre-renderizan a HTML plano durante la compilación.
* **Componentes Dinámicos (Arquitectura de Islas)**: [React 19](https://react.dev) (`@astrojs/react`) integrado únicamente en componentes interactivos que lo requieren (ej. `ProfileRouter.tsx` con `client:load`), manteniendo 0 bytes de JS en el resto de la página.
* **Estilos y Diseño**: [Tailwind CSS](https://tailwindcss.com) (v3) con tokens de color semánticos y soporte completo para modo claro/oscuro mediante clases nativas.
* **Lenguaje & Tipado**: TypeScript 5.8 configurado con tipado estricto en todos los archivos `.ts` y `.tsx`.
* **Backend Serverless**: Cloudflare Pages Functions (`functions/api/contact.ts`) para procesar el formulario de contacto sin necesidad de servidor ni base de datos dedicada.
* **Email Transaccional**: [Resend API](https://resend.com), despachando tanto la notificación interna de nuevos prospectos como un correo de confirmación de marca hacia el cliente.

---

## 3. Stack Canónico para Proyectos de Clientes

Este es el catálogo de tecnologías estándar que implementamos en los 3 pilares de soluciones de Aleric.dev:

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           1. DESARROLLO WEB & LANDINGS CRO                              │
│  Astro 5  │  Tailwind CSS  │  TypeScript  │  Cloudflare Pages / Vercel  │  Resend API   │
└────────────────────────────────────────────┬────────────────────────────────────────────┘
                                             │
┌────────────────────────────────────────────▼────────────────────────────────────────────┐
│                         2. SOFTWARE A LA MEDIDA & SAAS                                  │
│  Frontend: Next.js (App Router) / React 19  │  TanStack Query  │  Zod  │  Tailwind      │
│  Backend: NestJS (Node.js) ó FastAPI (Python)                                            │
│  Datos: PostgreSQL  │  Prisma / Drizzle ORM  │  Redis (Caché & Colas)  │  Supabase       │
│  Infraestructura: Docker  │  Linux VPS (Hetzner/AWS)  │  Cloudflare R2 (S3 Storage)      │
└────────────────────────────────────────────┬────────────────────────────────────────────┘
                                             │
┌────────────────────────────────────────────▼────────────────────────────────────────────┐
│                    3. AUTOMATIZACIONES & INTEGRACIONES EMPRESARIALES                    │
│  Meta WhatsApp Cloud API (Oficial)  │  n8n (Workflows)  │  Chatwoot (Multiagente)       │
│  Siigo ERP API (Facturación Electrónica Colombia)  │  Webhooks  │  Python Batch/Cron    │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.1. Ecosistema de Desarrollo Web & Landings CRO

Para páginas comerciales, landings publicitarias y sitios corporativos donde la prioridad es la velocidad y la tasa de conversión:

* **Núcleo**: **Astro 5** + **TypeScript**.
* **Estilos**: **Tailwind CSS** para un diseño adaptativo fluido y consistencia visual.
* **Gestión de Contenido (Opcional)**: Colecciones de contenido nativas de Astro (`content collections`) con Markdown/MDX, o conexión a CMS headless ligeros (Strapi, Decap, Sanity).
* **Formularios & Leads**: Integración directa con webhooks hacia WhatsApp o correo electrónico mediante funciones serverless en el edge.
* **Analítica & Píxeles**: Carga optimizada de scripts de Google Tag Manager, Meta Pixel y Google Analytics sin bloquear el renderizado inicial.

---

### 3.2. Ecosistema de Software a la Medida & SaaS

Para aplicaciones web complejas, portales multiusuario, paneles administrativos y productos SaaS:

#### Capa Frontend
* **Framework**: **Next.js (App Router)** o **React 19** con Vite para SPAs puras.
* **Manejo de Estado & Servidor**: **TanStack Query** (React Query) para sincronización con caché del servidor.
* **Tablas & Componentes**: **TanStack Table**, **Lucide Icons** y componentes accesibles basados en Radix UI.
* **Validación de Formularios**: **React Hook Form** + **Zod**.

#### Capa Backend & APIs
* **Opción Principal (TypeScript)**: **NestJS** sobre Node.js. Proporciona arquitectura modular empresarial, inyección de dependencias, controladores tipados y documentación OpenAPI (Swagger) automática.
* **Opción Especializada (Python)**: **FastAPI** para servicios orientados a procesamiento intensivo de datos, algoritmos analíticos o microservicios asíncronos.
* **Validación & Contratos**: Tipado end-to-end con esquemas compartidos entre cliente y servidor.

#### Capa de Datos & Persistencia
* **Base de Datos Principal**: **PostgreSQL** (versión 15+), garantizando integridad referencial, transacciones ACID y soporte nativo para campos semiestructurados (`JSONB`).
* **ORMs & Migraciones**: **Prisma ORM** (para desarrollo rápido y tipado seguro) o **Drizzle ORM** (para máximo control sobre las consultas SQL y latencia ultrabaja).
* **Caché y Mensajería**: **Redis** para almacenamiento en memoria de sesiones, limitación de tasa (*rate limiting*) y colas de tareas en segundo plano (BullMQ).
* **Backend-as-a-Service (Alternativo)**: **Supabase** para proyectos con presupuestos o tiempos de entrega muy acotados.

#### Almacenamiento & Multimedia
* **Cloudflare R2** o **AWS S3**: Almacenamiento de objetos compatible con S3 sin costos de transferencia (*egress fees*).

---

### 3.3. Ecosistema de Automatizaciones & Integraciones

Para conectar los sistemas de la empresa con sus canales comerciales y administrativos:

#### WhatsApp Cloud API Oficial de Meta
* Conexión directa mediante la API de Meta for Developers (Graph API).
* **Ventaja crítica**: Cero riesgo de suspensión de línea telefónica, a diferencia de librerías no oficiales basadas en emulación de WhatsApp Web.
* Soporte para botones interactivos, listas desplegables, envío de documentos PDF y plantillas de utilidad aprobadas por Meta.

#### n8n (Orquestación de Flujos de Trabajo)
* Motor de automatización visual de código abierto auto-hospedado en servidores Docker.
* Permite conectar WhatsApp, correos electrónicos, pasarelas de pago, hojas de cálculo y bases de datos sin costos recurrentes por cada paso del flujo (a diferencia de Zapier o Make).

#### Chatwoot (Bandeja de Atención Multiagente)
* Plataforma de comunicación omnicanal de código abierto.
* Permite que múltiples asesores humanos atiendan conversaciones desde un único número oficial de WhatsApp, asignando chats, notas internas y etiquetas de seguimiento.

#### Integración Siigo ERP API
* Conector REST oficial para el software contable líder en Colombia y Latinoamérica:
  * Emisión automática de **Facturación Electrónica** validada ante la DIAN tras compras online.
  * Creación y consulta de terceros (clientes, NITs y proveedores).
  * Descuento de stock en tiempo real y generación de recibos de caja.

---

## 4. Estándares de Seguridad y Protección Anti-Spam

Para proteger los formularios públicos sin perjudicar la velocidad de navegación ni requerir molestos desafíos visuales (como Turnstile o reCAPTCHA que a menudo son bloqueados por extensiones del navegador):

1. **Honeypot Invisible (`_company_website_hp`)**:
   * Campo oculto en el HTML que los humanos no ven ni completan, pero que los bots rellenan automáticamente. Si el campo contiene cualquier valor, la solicitud se acepta con código `200` pero se descarta silenciosamente sin enviar correos ni gastar cuotas de API.
2. **Validación Sintáctica con Regex**:
   * Comprobación estricta de estructura de correos electrónicos antes de cualquier invocación externa.
3. **Límites de Longitud y Sanitización**:
   * Escape preventivo de caracteres HTML especiales (`<`, `>`, `&`, `"`, `'`) y límite de 1000 caracteres por mensaje para mitigar ataques de inyección o sobrecarga de almacenamiento.
4. **Consentimiento Expreso de Datos (Habeas Data)**:
   * Casilla de verificación obligatoria para cumplir con la Ley 1581 de Protección de Datos Personales en Colombia y normativas equivalentes en la región.

---

## 5. Infraestructura, Entornos y Despliegues

* **Frontend Estático y Edge**: Desplegado en **Cloudflare Pages** con red global distribuida de baja latencia.
* **Servicios Backend & Bases de Datos**: Alojados en servidores privados virtuales (**VPS Linux en Hetzner o AWS**) orquestados con **Docker** y **Docker Compose**, con certificados SSL automáticos gestionados por Caddy o Nginx.
* **Control de Versiones**: Repositorios privados en **GitHub**, con ramas protegidas `main` (producción) y `develop` (pruebas).
* **Monitoreo & Logs**: Registro centralizado de excepciones y métricas de disponibilidad.

---
*© Aleric.dev — Arquitectura Técnica y Stack de Ingeniería.*
