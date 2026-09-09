# 📚 Índice General de Documentación — Aleric.dev

Bienvenido al centro de documentación oficial de **Aleric.dev**. Este repositorio de documentos reúne la visión comercial, la arquitectura técnica, los modelos operativos con plantillas contractuales y la estrategia de contenidos de la boutique tecnológica.

Está diseñado para servir como referencia integral tanto para el equipo interno (ingenieros, comerciales, creadores de contenido) como para clientes y aliados estratégicos.

---

## 🧭 Mapa de Documentación

A continuación se detalla la estructura modular de la documentación, organizada de forma secuencial como los capítulos de un libro:

```
DOCS/
├── 📖 index.md                                      # [Tú estás aquí] Índice general y guía de navegación
├── 💼 1-portafolio-de-servicios-y-oferta-comercial.md # Oferta comercial, servicios y tabuladores de precios (USD / COP)
├── 🛠️ 2-arquitectura-tecnica-y-stack.md            # Stack técnico estándar (Web, Software a Medida, Automatizaciones)
├── ⚖️ 3-modelo-operativo-conversion-y-ventas.md    # Funnel comercial y documentación legal (Cotización, Contrato, Entrega)
└── 📱 4-ideas-contenido-redes-sociales.md          # 60+ ideas prácticas de contenido para redes (Guía no técnica)
```

---

## 📑 Resumen de Capítulos

### [Capítulo 1: Portafolio de Servicios y Oferta Comercial](./1-portafolio-de-servicios-y-oferta-comercial.md)
* **Audiencia principal**: Clientes potenciales, equipo comercial, directores de proyecto.
* **Propósito**: Presentar de manera clara y estructurada qué hace Aleric.dev, cuáles son los problemas reales que resuelve cada servicio, los entregables garantizados y los rangos de precios de referencia.
* **Contenido destacado**:
  * Las 4 líneas de especialidad: *Desarrollo Web & Landings CRO*, *Software & SaaS a la Medida*, *Automatizaciones & WhatsApp Cloud API*, *Consultoría Técnica Senior*.
  * Tabuladores de precios bimoneda (**USD** para mercado internacional y **COP** para Colombia).
  * Modalidades de contratación (Precio fijo por proyecto vs. Retainer mensual / Horas de soporte).
  * Políticas de pago y condiciones comerciales transparentes.

---

### [Capítulo 2: Arquitectura Técnica y Stack Tecnológico](./2-arquitectura-tecnica-y-stack.md)
* **Audiencia principal**: Desarrolladores, arquitectos de software, CTOs de clientes y asistentes de IA.
* **Propósito**: Establecer el estándar canónico de herramientas y tecnologías adoptadas en Aleric.dev para garantizar proyectos de alta velocidad, escalabilidad y cero deuda técnica.
* **Contenido destacado**:
  * **Stack de este proyecto (`web`)**: Astro 5, TypeScript 5.8, Tailwind CSS, React 19 Islands, Cloudflare Pages Functions y Resend API.
  * **Stack estándar para Desarrollo Web**: Astro + Tailwind CSS para 100/100 en Google Lighthouse.
  * **Stack estándar para Software a la Medida & SaaS**: Next.js (App Router), React 19, NestJS, FastAPI (Python), PostgreSQL, Prisma/Drizzle ORM, Redis y Docker.
  * **Stack estándar para Automatizaciones & Integraciones**: WhatsApp Cloud API oficial de Meta, n8n, Chatwoot y Siigo ERP API.
  * Patrones de seguridad (Honeypot, sanitización) y buenas prácticas de ingeniería.

---

### [Capítulo 3: Modelo Operativo, Conversión y Documentación Legal](./3-modelo-operativo-conversion-y-ventas.md)
* **Audiencia principal**: Equipo comercial, líderes de operaciones, asesores legales y clientes en proceso de cierre.
* **Propósito**: Describir el recorrido completo desde que un prospecto entra en contacto hasta la entrega definitiva del software, acompañado del marco legal estandarizado que protege a ambas partes.
* **Contenido destacado**:
  * Embudo de conversión y tiempos de respuesta (SLA < 4h).
  * **Plantilla A — Modelo de Cotización y Propuesta Comercial Formal**: Alcance, entregables, cronograma e hitos de pago.
  * **Plantilla B — Contrato Marco de Prestación de Servicios de Software**: Cláusulas de cesión total de derechos patrimoniales de autor (propiedad 100% del cliente), confidencialidad (NDA), garantías técnicas de 30 días y condiciones de pago.
  * **Plantilla C — Acta de Entrega Final a Satisfacción y Cesión de Activos**: Checklist de traspaso de repositorios GitHub, accesos a servidores y paz y salvo comercial.
  * Protocolo para gestión de solicitudes de cambio de alcance (*Change Requests*).

---

### [Capítulo 4: Estrategia e Ideas de Contenido para Redes Sociales](./4-ideas-contenido-redes-sociales.md)
* **Audiencia principal**: Community managers, redactores, creadores de contenido y personal no técnico de marketing.
* **Propósito**: Brindar un banco de más de 60 ideas prácticas, ordenadas por pilares temáticos, para comunicar la propuesta de valor de Aleric.dev en redes sociales (Instagram, LinkedIn, TikTok, X/Twitter) sin tecnicismos complejos.
* **Contenido destacado**:
  * Guía de estilo y tono de voz para hablarle a dueños de negocios y tomadores de decisiones.
  * 6 pilares temáticos: *Dolores y Soluciones de Negocio*, *Mitos vs Realidades del Software*, *Automatizaciones con WhatsApp*, *Conversión Web & CRO*, *Detrás de Cámaras y Confianza*, *Venta Directa & Llamados a la Acción*.
  * Fichas estructuradas con formato recomendado (*Reel, Carrusel, Post corto*), gancho (*Hook*), explicación simple, guion o ejemplo y llamada a la acción (*CTA*).

---

## ⚙️ Documentos Complementarios en la Raíz del Repositorio

Además de los manuales en `DOCS/`, en la raíz del proyecto encontrarás:

* **[`README.md`](../README.md)**: Documento maestro del proyecto `aleric-dev/web`, que incluye la visión de marca, estructura de carpetas, y la **Guía Completa de Despliegue en Cloudflare Pages, variables de entorno y comandos locales**.
* **[`AGENTS.md`](../AGENTS.md)**: Manual operativo y directrices técnicas para asistentes de inteligencia artificial (modelos LLM), asegurando velocidad y coherencia en cada modificación.

---

## 🔄 Flujo de Lectura Recomendado según tu Rol

| Tu Rol o Perfil | Documentos Prioritarios a Consultar |
| :--- | :--- |
| **Cliente o Prospecto Comercial** | [1. Portafolio de Servicios](./1-portafolio-de-servicios-y-oferta-comercial.md) → [3. Modelo Operativo y Legal](./3-modelo-operativo-conversion-y-ventas.md) |
| **Desarrollador / Ingeniero de Software** | [2. Arquitectura y Stack](./2-arquitectura-tecnica-y-stack.md) → [`AGENTS.md`](../AGENTS.md) → [`README.md`](../README.md) |
| **Marketing / Community Manager** | [4. Ideas de Contenido para Redes](./4-ideas-contenido-redes-sociales.md) → [1. Portafolio de Servicios](./1-portafolio-de-servicios-y-oferta-comercial.md) |
| **Líder Operativo / Legal** | [3. Modelo Operativo y Legal](./3-modelo-operativo-conversion-y-ventas.md) → [1. Portafolio de Servicios](./1-portafolio-de-servicios-y-oferta-comercial.md) |

---
*© Aleric.dev — Documentación Técnica y Comercial.*
