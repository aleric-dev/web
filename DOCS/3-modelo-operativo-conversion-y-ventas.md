# Modelo Operativo, Conversión y Ventas — Aleric.dev

Este documento describe el embudo de conversión, el flujo de atención al cliente, el proceso de cotización rápida y los estándares de entrega de proyectos en **Aleric.dev**.

---

## 1. Embudo de Conversión (Funnel Operativo)

El flujo comercial de Aleric.dev está diseñado para minimizar la fricción del prospecto y maximizar la tasa de conversión desde la primera visita:

```
[ Visitante General / Tráfico Digital ]
                 │
                 ▼
[ Portada Principal index.astro (Sin Tecnicismos) ]
  • Explicación clara de problemas y soluciones
  • 4 Secciones Protagonistas por área de necesidad
  • Bloque especial para proyectos personalizados
                 │
                 ▼
[ Subpáginas de Especialidad o Formulario Directo ]
  • /desarrollo-web | /software-a-medida | /automatizaciones | /consultoria-tecnica
  • Formulario de contacto con pre-selección de servicio y rango de presupuesto
                 │
                 ▼
[ Notificación Inmediata & Diagnóstico Express ]
  • Procesamiento por Cloudflare Pages Function + Resend API
  • Alerta comercial en bandeja interna
                 │
                 ▼
[ Sesión de Calificación de 15 Minutos / Cotización ]
  • Propuesta comercial clara: Alcance, Precio Fijo, Cronograma
                 │
                 ▼
[ Desarrollo Ágil con Entregas Parciales ]
  • Comunicación directa por WhatsApp / Meet
  • Repositorio privado y despliegue continuo
                 │
                 ▼
[ Entrega Definitiva & Propiedad Total ]
  • Transferencia de dominios, accesos cloud y código fuente
```

---

## 2. Flujo de Cotización Express y Calificación

Para acelerar la respuesta a clientes potenciales y no perder oportunidades:

1. **Campos Clave Capturados en el Formulario**:
   - Nombre y Correo electrónico.
   - Teléfono de contacto con código de país.
   - Tipo de Servicio solicitado.
   - Rango estimado de presupuesto (para alinear expectativas y alcance técnico desde el inicio).
   - Detalle conciso del requerimiento.
2. **SLA de Respuesta Comercial**:
   - Primer contacto en menos de 4 horas hábiles.
   - Cotización preliminar formal en menos de 24 a 48 horas.
3. **Modalidades de Contratación**:
   - **Precio Fijo por Proyecto**: Ideal para Landings, Sitios Web, Automatizaciones específicas y MVPs con alcance bien definido.
   - **Bolsa de Horas / Retainer Mensual**: Ideal para Consultoría Técnica continua, rescate de proyectos legacy y mantenimiento evolutivo.

---

## 3. Protocolo de Entrega y Cero Dependencia

A diferencia de las agencias tradicionales que retienen los archivos o cobran comisiones de mantenimiento forzosas:

- **Código Propio**: El cliente recibe el repositorio GitHub / GitLab con propiedad completa.
- **Cuentas a Nombre del Cliente**: Dominios, servidores y cuentas de servicios (Cloudflare, Resend, Supabase, Meta for Developers) quedan registrados a nombre de la empresa del cliente.
- **Documentación de Traspaso**: Se entrega una guía básica de uso y credenciales seguras.
