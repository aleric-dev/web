# 🤖 AGENTS.md — Directrices Operativas para Asistentes de Inteligencia Artificial

> **Manual de Contexto Rápido y Reglas de Desarrollo**  
> *Repositorio*: `aleric-dev/web`  
> *Objetivo*: Proveer contexto técnico instantáneo a modelos de IA para realizar cambios rápidos, seguros y alineados con la filosofía de ingeniería de Aleric.dev.

---

## 📌 1. Visión y Propósito del Proyecto

Este repositorio contiene la plataforma web comercial de **Aleric.dev**, desarrolladores de software enfocados en ayudarte a crecer como empresa. Especialistas en desarrollo web de alta conversión (CRO), plataformas y SaaS a la medida, automatizaciones comerciales con WhatsApp y arquitectura cloud de alto rendimiento para el mercado hispanohablante.

### 💼 Regla Fundamental Comercial: Cero Jerga Técnica para Clientes de Negocio
* **Al cliente final (empresario, director comercial, emprendedor) le da igual la tecnología o el stack**:
  - No profundizar en tecnologías, nombres de frameworks (React, NestJS, Astro, Node, etc.) ni bases de datos en la narrativa comercial principal.
  - La comunicación debe centrarse en tres dimensiones críticas para el cliente:
    1. **Diagnóstico de Fugas Reales**: Cuánto dinero, tiempo o clientes está perdiendo hoy (WhatsApp sin responder a tiempo, páginas lentas que desperdician la pauta, desorden operativo en Excel, sistemas caídos).
    2. **Los 3 Pilares y Garantías de Valor (Sostenibles y No Agotadores)**:
       - *Desarrollo Personalizado Adaptado a tu Empresa*: Construido exactamente para la operación del cliente. Cero plantillas genéricas que le obliguen a cambiar cómo trabaja.
       - *Propiedad 100% de la Empresa*: El código fuente, las bases de datos y la infraestructura son del cliente. Cero mensualidades forzadas por empleado o asiento.
       - *Soporte Extendido por Suscripción*: Mantenimiento preventivo, soporte prioritario y evolución continua mediante una suscripción mensual predecible. El cliente nunca queda abandonado y el equipo técnico mantiene ingresos recurrentes sostenibles.
    3. **Transformación Tangible (Antes vs. Después)**: Contraste honesto de cómo opera el negocio hoy (fricción, demoras, estrés) vs. cómo opera con Aleric (automatización 24/7, velocidad < 1s, control total).

### 🎨 Estándar Visual Anti-IA Cliché (Ingeniería de Alta Gama)
* **Terminantemente Prohibido**: Cards genéricas de IA (cajas flotantes con degradados morados/neón, sombras difusas exageradas `shadow-2xl`, emojis gigantes decorativos sin propósito comercial, o imágenes cuadradas gigantescas que saturan la pantalla).
* **Estándar Requerido**: Interfaces estructurales y sobrias inspiradas en **Linear, Stripe, Raycast**:
  - Rejillas geométricas y tableros comparativos *side-by-side*.
  - Imágenes compactas panorámicas (16:9) con marcos nítidos y micro-pills informativas.
  - Bordes nítidos de 1px (`border-slate-200 dark:border-slate-800`), fondos profundos (`bg-slate-50 dark:bg-slate-950`).
  - Indicadores de estado funcionales (rojo/rose para dolor/fricción, esmeralda/índigo para solución).
  - Tipografía jerárquica con micro-badges monoespaciados (`font-mono text-xs uppercase tracking-wider`).

### 📐 Flujo Narrativo Canónico de Conversión
1. `CommercialHero`: Promesa clara de ventas y crecimiento + tags de texto de las 4 especialidades.
2. `BusinessPainPoints`: Diagnóstico visual de fugas reales con imágenes de casos concretos.
3. `ProfileRouter` / Servicios: Sección interactiva desarrollada que invita a ver el detalle de cada especialidad con botón dedicado y resumen inferior.
4. `BusinessGuarantees`: Los 3 pilares de valor (Desarrollo a la Medida, Propiedad Total y Soporte por Suscripción) con imágenes compactas 16:9.
5. `BeforeAfterTransform`: Impacto real en el día a día (Antes vs. Con Aleric).
6. `WhyUsSection`: Metodología ágil en 4 pasos (Diagnóstico ➔ Prototipo ➔ Construcción ➔ Lanzamiento).
7. `FaqSection`: Preguntas frecuentes de negocio (tiempos, pagos y propiedad).
8. `ContactSection`: Formulario directo de cotización.

### Principio Fundamental de Rendimiento
* **Rendimiento Máximo y Cero Bloatware**: El sitio debe mantener puntuaciones de **95-100 en Google Lighthouse** (Rendimiento, Accesibilidad, Buenas Prácticas y SEO).
* **Cero JavaScript Innecesario**: Solo se despacha JavaScript al navegador en las islas interactivas que estrictamente lo requieran.

---

## 🗂️ 2. Mapa Rápido de la Estructura de Carpetas

```text
web/
├── AGENTS.md                   # [Este archivo] Guía operativa para asistentes de IA
├── README.md                   # Blueprint comercial y guía de despliegue Cloudflare
├── DOCS/                       # Centro de documentación integral (Libro)
│   ├── index.md                # Índice maestro y enlaces a toda la documentación
│   ├── 1-portafolio-de-servicios-y-oferta-comercial.md # Precios USD/COP y servicios
│   ├── 2-arquitectura-tecnica-y-stack.md          # Stack canónico de todos los proyectos
│   ├── 3-modelo-operativo-conversion-y-ventas.md  # Contratos, cotizaciones y actas
│   └── 4-ideas-contenido-redes-sociales.md        # 70 ideas de posts para redes
├── functions/
│   └── api/
│       └── contact.ts          # Cloudflare Pages Function (Endpoint POST /api/contact)
├── public/                     # Favicons, logotipos e imágenes estáticas
├── src/
│   ├── components/             # Componentes modulares (.astro y .tsx)
│   ├── layouts/                # Plantillas base HTML (SEO, OpenGraph, Fuentes)
│   ├── pages/                  # Rutas estáticas de la plataforma
│   └── styles/
│       └── global.css          # Estilos globales y tokens semánticos de color
├── astro.config.mjs            # Configuración de Astro con integraciones React y Tailwind
├── tailwind.config.mjs         # Configuración del sistema de diseño
└── tsconfig.json               # Configuración estricta de TypeScript
```

---

## ⚡ 3. Comandos de Terminal

Ejecutar siempre en el directorio raíz de `web/`:

```bash
# Desarrollo local (http://localhost:4321)
npm run dev

# Compilación estática de producción (valida errores de tipos y sintaxis)
npm run build

# Previsualización del build estático generado
npm run preview
```

> ⚠️ **Regla de Validación**: Antes de dar por finalizada cualquier tarea de código, ejecuta siempre `npm run build` para asegurar que no existan errores de compilación o fallos de tipos TypeScript.

---

## 🎨 4. Convenciones de Código y Buenas Prácticas

### 4.1. Componentes Astro vs. Componentes React
1. **Prioriza Astro (.astro)**: Todo componente visual, estático o que solo renderice contenido debe ser un componente `.astro`.
2. **React (.tsx) solo para Islas Interactivas**: Usa React 19 únicamente cuando se requiera manejo de estado complejo en el cliente (como `ProfileRouter.tsx`).
3. **Directivas de Hidratación**:
   * Usa `client:load` para componentes que deban ser interactivos inmediatamente (por ejemplo, el enrutador de perfiles).
   * Usa `client:visible` para componentes interactivos más abajo del primer pliegue (*viewport*).

### 4.2. Estilos con Tailwind CSS
* Emplea clases utilitarias de Tailwind coherentes con la paleta existente (tonos `slate`, `indigo`, `emerald`).
* Respeta el soporte para modo oscuro mediante el prefijo `dark:` (ej. `bg-white dark:bg-slate-900 text-slate-900 dark:text-white`).
* No introduzcas hojas de estilo CSS aisladas ni estilos en línea a menos que sea estrictamente necesario.

### 4.3. TypeScript Estricto
* Todos los archivos de script deben tener tipado estricto.
* Evita el uso de `any`. Define interfaces o tipos claros para todas las `props` y datos de APIs.

---

## 🛡️ 5. Manejo del Formulario de Contacto y Seguridad

* **Endpoint**: `POST /api/contact` procesado por `functions/api/contact.ts` (Cloudflare Pages Functions).
* **Anti-Spam sin Captcha**: No instales widgets de Cloudflare Turnstile ni reCAPTCHA. El sistema utiliza un **Honeypot invisible** con el campo `_company_website_hp`. Si este campo contiene algún valor, la petición se descarta automáticamente.
* **Proveedor de Correo**: Utiliza **Resend API** con la variable `RESEND_API_KEY`. Envía una copia a `contacto@aleric.dev` y una confirmación de cortesía al correo del cliente.

---

## 📈 6. Estándares de SEO y Accesibilidad

* **Estructura Semántica**: Utiliza siempre etiquetas HTML5 semánticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **Encabezados**: Solo debe haber un único `<h1>` por cada página. Los demás encabezados deben seguir una jerarquía estricta (`<h2>`, `<h3>`).
* **Imágenes**: Todas las imágenes deben incluir atributo `alt` descriptivo y dimensiones explícitas (`width` y `height`) para prevenir saltos de maquetación (*Cumulative Layout Shift - CLS*).
* **Enlaces**: Usa textos de enlace claros y descriptivos; evita textos genéricos como "haz clic aquí".

---

## 📚 7. Relación con la Documentación en `DOCS/`

Si necesitas revisar detalles comerciales, el stack de otros proyectos de clientes o formatos contractuales, consulta:
* `DOCS/1-portafolio-de-servicios-y-oferta-comercial.md`: Para alinear textos o propuestas con los precios y servicios oficiales.
* `DOCS/2-arquitectura-tecnica-y-stack.md`: Para consultar el stack de NestJS, Next.js, FastAPI, PostgreSQL, n8n o WhatsApp Cloud API.
* `DOCS/3-modelo-operativo-conversion-y-ventas.md`: Para revisar el flujo de atención y contratos.
* `DOCS/4-ideas-contenido-redes-sociales.md`: Para redactar copys o ideas de marketing.

---
*© Aleric.dev — Guía Operativa para Asistentes de IA.*
