---
name: frontend-design
description: Directrices maestras de diseño frontend de alta ingeniería para el ecosistema Aleric Dev (web, client-previews, admin, generate-media). Aplica estética sobria estilo Linear/Stripe/Raycast, erradica clichés de IA, y estandariza tokens de Tailwind, tipografía y micro-interacciones.
---

# 🎨 Skill: Frontend Design & UI Engineering (Aleric Dev)

Esta skill define el estándar canónico de ingeniería visual y experiencia de usuario para todas las aplicaciones y herramientas del ecosistema **Aleric Dev**.

---

## 🚫 1. Reglas Anti-IA Cliché (Prohibiciones Estrictas)

Al diseñar o modificar interfaces en proyectos de Aleric Dev, queda **estrictamente prohibido**:

1. **Gradientes Neón Estridentes**: Prohibido usar degradados morado/rosa/azul fosforescente sin justificación de marca (`from-purple-500 via-pink-500 to-indigo-500`).
2. **Textos y Copys Genéricos**: Prohibidas frases vacías como *"Revoluciona tu empresa con el poder de la innovación digital"*, *"Lleva tu negocio al siguiente nivel con soluciones disruptivas"*. Los copys deben ser concisos, numéricos y orientados a valor comercial tangible.
3. **Tarjetas Flotantes con Sombras Excesivas**: Prohibido el abuso de `shadow-2xl` difuminado que hace flotar cajas sin jerarquía geométrica.
4. **Ilustraciones Cartoon o Iconos Gigantes sin Propósito**: No uses iconos decorativos gigantes ni avatares abstractos que denotan generación automática.

---

## 💎 2. Estándar de Diseño Aleric Dev (High-End Engineering)

Inspiración directa: **Linear, Stripe, Vercel, Raycast**.

### Paleta Cromática y Fondos:
- **Pizarra profunda de fondo**: `#0B0F19`, `#0D1117`, o `#040B1B`.
- **Superficies y Cards elevadas**: `#0F172A`, `#111827`, `#1E293B`.
- **Bordes geométricos nítidos de 1px**: `border-slate-800` o `border-white/10`.
- **Acentos Funcionales**:
  - **Esmeralda Aleric**: `#10B981` / `#059669` (éxito, estados activos, botones de conversión).
  - **Índigo Técnico**: `#6366F1` / `#4F46E5` (interacciones principales, selección, foco).
  - **Ámbar Cálido**: `#D97706` / `#F59E0B` (avisos, estados en revisión).

### Tipografía y Jerarquía:
- **Títulos y encabezados**: *Inter* o *Plus Jakarta Sans* con tracking ligero (`tracking-tight`) y pesos `font-bold` o `font-semibold`.
- **Cuerpo y lectura**: *Inter* con interlineado holgado (`leading-relaxed`), texto secundario en `text-slate-400` y terciario en `text-slate-500`.
- **Datos técnicos, IDs, métricas y código**: *JetBrains Mono* o *Fira Code* con espaciado consistente.

---

## ⚡ 3. Directrices de Componentes y Código (React 19 & Astro 5)

1. **Prioridad Vectorial SVG**:
   - Todo isotipo, logotipo o icono en la interfaz debe ser **SVG puro**.
   - Solo se admiten archivos PNG/JPG cuando sea estrictamente obligatorio para protocolos externos (como la tarjeta `og-image.png` para rastreadores de WhatsApp/LinkedIn).
2. **Micro-interacciones Cómodas**:
   - Transiciones rápidas: `transition-colors duration-150` o `duration-200`.
   - Hover sobrio: variación sutil de brillo (`hover:bg-slate-800/60`, `hover:border-slate-700`).
   - Estados activos táctiles: `active:scale-[0.98]`.
3. **Accesibilidad (WCAG AA)**:
   - Contraste mínimo de 4.5:1 entre texto y fondo.
   - Todo botón interactivo debe contar con `aria-label` descriptivo si solo contiene icono.
   - Anillos de foco visibles y accesibles por teclado: `focus:outline-none focus:ring-2 focus:ring-indigo-500/40`.

---

## 📋 4. Checklist Pre-Entrega (Pre-Flight)

Antes de dar por completada cualquier interfaz visual:
- [ ] ¿Se eliminaron textos genéricos o de relleno?
- [ ] ¿El contraste en dark mode es perfecto y legible sin esfuerzo visual?
- [ ] ¿Los bordes de 1px separan claramente las áreas sin depender de sombras gigantes?
- [ ] ¿El layout es 100% responsivo en móvil (360px), tablet y pantallas ultra-anchas?
- [ ] ¿La compilación pasa con 0 errores de TypeScript y 0 warnings de estilos?
