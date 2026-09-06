# Arquitectura Técnica y Stack Tecnológico — Aleric.dev

Este documento detalla la infraestructura, tecnologías de desarrollo, patrones de arquitectura y estándares de ingeniería implementados en los proyectos de **Aleric.dev**.

---

## 1. Stack Tecnológico de la Plataforma `Aleric.dev Web`

El sitio corporativo y comercial de Aleric.dev está desarrollado bajo la filosofía de máxima eficiencia y mínima sobrecarga de ejecución:

- **Framework**: [Astro](https://astro.build) (v5+) con arquitectura de islas (*Astro Islands*).
- **Enfoque de Renderizado**: Estático de alto rendimiento (`output: "static"`), pre-renderizando las páginas en HTML puro durante el build.
- **Estilos**: Tailwind CSS v3 con diseño adaptativo móvil, modo oscuro/claro nativo y variables semánticas.
- **Tipado & Lenguaje**: TypeScript 5.8 estricto en todos los módulos y componentes.
- **Componentes Dinámicos**: React 19 (`@astrojs/react`) utilizado exclusivamente en islas interactivas (`ProfileRouter.tsx`), garantizando 0 bytes de JS en secciones estáticas.
- **Funciones Serverless**: Cloudflare Pages Functions (`functions/api/contact.ts`) para el procesamiento seguro de formularios sin backend dedicado.
- **Servicio Transaccional de Email**: Resend API (`resend`) con plantillas HTML minimalistas y entrega directa con SPF/DKIM configurados.

---

## 2. Stack Tecnológico para Proyectos de Clientes

Implementamos un stack moderno, probado en entornos de alta demanda y respaldado por la industria:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CAPA DE CLIENTE (UI)                          │
│  React 19  │  Next.js (App Router)  │  Astro 5  │  Tailwind CSS        │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (HTTPS / REST / WebSockets)
┌────────────────────────────────────▼────────────────────────────────────┐
│                         CAPA DE SERVICIOS & APIs                        │
│  NestJS (TypeScript)  │  FastAPI (Python)  │  Node.js  │  Zod Validation│
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│                    PERSISTENCIA & GESTIÓN DE DATOS                      │
│  PostgreSQL  │  Prisma / Drizzle ORM  │  Redis (Cache)  │  Supabase     │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
┌────────────────────────────────────▼────────────────────────────────────┐
│              ORQUESTACIÓN, APIS EXTERNAS & AUTOMATIZACIONES             │
│  WhatsApp Cloud API (Meta)  │  n8n (Workflows)  │  Siigo ERP API (REST) │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.1. Fullstack TypeScript
- **Frontend**: React 19 con Server Components, hooks personalizados, layouts modulares y estados optimizados.
- **Backend con NestJS**: Inyección de dependencias, controladores tipados, validación con `class-validator` y `Zod`, y autenticación mediante JWT y OAuth2.
- **Node.js**: Microservicios ligeros con Express o Fastify para procesamiento en streaming.

### 2.2. Bases de Datos con PostgreSQL
- Modelado relacional normalizado con soporte para campos semiestructurados (`JSONB`).
- Optimización de rendimiento mediante índices B-Tree, índices compuestos e índices invertidos GIN para búsquedas textuales rápidas.
- Políticas de seguridad a nivel de fila (*Row Level Security - RLS*) en entornos multi-inquilino (*multi-tenant*).
- Gestión de esquemas y migraciones reproducibles con Prisma ORM y Drizzle ORM.

### 2.3. Python para Automatización & APIs Rápidas
- **FastAPI**: Construcción de microservicios asíncronos con validación automática mediante Pydantic y documentación OpenAPI nativa.
- **Scripts de Automatización & ETL**: Tareas programadas para extracción de datos, sincronización entre bases de datos y procesamiento batch de archivos Excel/CSV.

### 2.4. Integración WhatsApp Cloud API de Meta
- Conexión directa mediante la API oficial alojada en los servidores de Meta, garantizando **cero riesgo de bloqueo de línea** (a diferencia de librerías basadas en emuladores Web).
- Webhooks HTTPS para recepción de mensajes entrantes, confirmaciones de entrega y clics en botones interactivos en tiempo real.
- Plantillas dinámicas aprobadas para recordatorios de cobro y notificaciones transaccionales.

### 2.5. Integración con Siigo ERP
- Consumo seguro de la API REST oficial de Siigo en Colombia/Latinoamérica:
  - Generación automática de Facturas Electrónicas tras confirmación de pago en e-commerce.
  - Creación y actualización de Terceros (clientes y proveedores).
  - Consulta de stock y actualización de precios en tiempo real.
  - Generación de Recibos de Caja asociados a pedidos.

---

## 3. Seguridad y Protección Anti-Spam (Sin Turnstile)

Para maximizar la experiencia del usuario y evitar problemas de carga lenta o widgets bloqueados por extensiones del navegador, se implementa una estrategia de protección por capas:

1. **Honeypot Invisible (`_company_website_hp`)**:
   - Campo de formulario oculto para humanos pero completado por bots automatizados. Si contiene cualquier valor, la solicitud se rechaza silenciosamente sin consumir recursos ni enviar emails.
2. **Validación de Expresión Regular de Correo**:
   - Comprobación sintáctica estricta antes de procesar el mensaje.
3. **Control de Longitud y Sanitización**:
   - Límites de caracteres (< 1000 caracteres) y eliminación de secuencias maliciosas para prevenir inyecciones.
4. **Política de Tratamiento de Datos Obligatoria**:
   - El formulario exige consentimiento explícito mediante checkbox para cumplir con las normativas legales de protección de datos (Habeas Data / GDPR).
