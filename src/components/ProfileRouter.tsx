import React from 'react';
import { 
  Globe, 
  Rocket, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileSpreadsheet, 
  HelpCircle
} from 'lucide-react';

export const ProfileRouter: React.FC = () => {
  return (
    <div id="soluciones" className="scroll-mt-20 flex flex-col divide-y divide-slate-200 dark:divide-slate-800/80">
      
      {/* ========================================================================= */}
      {/* SECCIÓN 1: DESARROLLO WEB & LANDINGS DE ALTA CONVERSIÓN */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Contenido comercial no técnico */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Solución 01 · Presencia Comercial &amp; Ventas</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Páginas Web y Tiendas Online diseñadas para{' '}
                <span className="text-cyan-600 dark:text-cyan-400">multiplicar tus ventas</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Si tu sitio web actual es lento, confuso o está lleno de menús interminables, tus visitantes se van sin comprar. Diseñamos <strong>landings comerciales de alto impacto</strong> que atrapan la atención en los primeros 3 segundos y guían a cada usuario directo a comprar, cotizar o escribirte por WhatsApp.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Landings enfocadas exclusivamente en conversión</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Sin distracciones ni páginas secundarias. Cada elemento persuade al cliente a tomar acción inmediata.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Velocidad instantánea en cualquier celular (Eficiencia Pura)</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Tiempos de carga menores a 1 segundo. Tus anuncios de Meta y Google no perderán dinero por visitantes que se aburren esperando.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">E-commerce ágil con pagos por PSE, tarjetas y transferencias</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Catálogos directos sin la pesadez de plataformas tradicionales que se cuelgan o requieren soporte continuo.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/desarrollo-web"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-cyan-500/20 transition group"
                >
                  <span>Ver Solución de Desarrollo Web</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/desarrollo-web#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition"
                >
                  Cotización Rápida
                </a>
              </div>
            </div>

            {/* Elemento visual de impacto */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Impacto en Ventas</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">+35% Conversión</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="block text-3xl font-black text-cyan-600 dark:text-cyan-400">&lt; 0.5s</span>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wide font-medium">Carga en Celular</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="block text-3xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wide font-medium">Calidad Google</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span>📱 Adaptado a WhatsApp &amp; Móvil</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Garantizado</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span>💳 Pagos PSE &amp; Tarjetas</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Integrado</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span>⚡ Entrega Express</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">3 - 7 Días</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900 text-xs text-cyan-950 dark:text-cyan-200 leading-relaxed font-medium">
                  💡 <strong>¿Por qué funciona?</strong> Porque tu cliente solo necesita ver tu oferta clara y tener un botón directo para comprar o hablar contigo sin esperas.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: SOFTWARE & SISTEMAS A LA MEDIDA */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual a la izquierda (Split Invertido) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Control Operativo Total</span>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">100% Tu Propiedad</span>
                </div>

                {/* Comparativa visual Excel vs Plataforma */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200">
                    <div className="font-bold flex items-center gap-2 mb-1">
                      <FileSpreadsheet className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      <span>El Riesgo de Excel &amp; Software Rígido:</span>
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-90">Archivos duplicados, fórmulas borradas, falta de permisos por usuario y licencias mensuales caras en dólares que no se adaptan a ti.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200">
                    <div className="font-bold flex items-center gap-2 mb-1">
                      <Rocket className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Con tu Propia Plataforma Aleric:</span>
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-90">Un solo lugar accesible desde navegador o celular, permisos por rol, datos protegidos y adaptada 100% a tu forma de operar.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-center text-[11px] font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">Cero Licencias</span>
                    <span className="font-bold text-slate-900 dark:text-white">Código Tuyo</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">Acceso Móvil</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Web &amp; Apps B2C</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido comercial a la derecha */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-4 h-4" />
                <span>Solución 02 · Sal de Excel &amp; Crea tus Apps</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Sal del desorden de Excel y deja de{' '}
                <span className="text-indigo-600 dark:text-indigo-400">depender de software rígido</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Hacer crecer un negocio sobre hojas de cálculo desordenadas o pagar mensualidades abusivas por sistemas enlatados que no se adaptan a tus procesos frena a tu empresa. Desarrollamos <strong>plataformas y aplicaciones a la medida</strong> para centralizar tu operación o para hacer realidad tus ideas de negocio en web y aplicaciones móviles para tus clientes (B2C).
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Adiós al infierno de archivos compartidos de Excel</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Toda tu información sincronizada en tiempo real, sin peligro de fórmulas rotas o datos borrados por error humano.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Tu empresa no debe cambiar para adaptarse al software</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">El software se construye exactamente alrededor de tus flujos de trabajo, clientes, inventarios y políticas comerciales.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Ideas de negocio hechas realidad (Aplicaciones Web y Móviles B2C)</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">¿Quieres lanzar una plataforma para tus usuarios finales? Desarrollamos productos intuitivos, rápidos y listos para monetizar.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/software-a-medida"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-indigo-500/20 transition group"
                >
                  <span>Conoce el Software a Medida</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/software-a-medida#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition shadow-sm"
                >
                  Cuéntanos tu Necesidad
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3: AUTOMATIZACIONES & WHATSAPP PARA TU NEGOCIO */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Contenido comercial */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Solución 03 · Atención, Cobros &amp; Operación 24/7</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                No pierdas más clientes en WhatsApp por{' '}
                <span className="text-emerald-600 dark:text-emerald-400">demorarte en contestar</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Cuando un cliente escribe con dinero en la mano y nadie le responde al instante, busca a tu competencia. Automatizamos la <strong>atención en WhatsApp, las cotizaciones rápidas y los recordatorios de cobro</strong> para que tu equipo deje de perder tiempo en tareas repetitivas y se concentre en cerrar negocios.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Atención comercial y calificación de prospectos 24/7</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Respuestas inmediatas a dudas frecuentes, horarios y precios base a cualquier hora del día o de la noche.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Cotizaciones instantáneas en el chat</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">El prospecto responde preguntas guiadas y recibe su estimado de inmediato, pasando con tu asesor solo para cerrar la compra.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Cobranzas automáticas sin incomodar a tus clientes</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Recordatorios amables antes y el día del vencimiento con enlace directo de pago y confirmación de recibo al instante.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/automatizaciones"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-emerald-500/20 transition group"
                >
                  <span>Descubre las Automatizaciones</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/automatizaciones#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition"
                >
                  Automatizar mi WhatsApp
                </a>
              </div>
            </div>

            {/* Visual a la derecha */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Flujo Comercial Automatizado</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    Activo 24/7
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold mb-0.5">Paso 1: Mensaje Entrante</div>
                    <div className="text-slate-800 dark:text-slate-200 font-sans">El cliente escribe a tu WhatsApp preguntando por un servicio o precio.</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-cyan-600 dark:text-cyan-400 uppercase font-bold mb-0.5">Paso 2: Respuesta Inmediata</div>
                    <div className="text-slate-800 dark:text-slate-200 font-sans">El bot oficial responde en 2 segundos con opciones interactivas y recoge requerimientos.</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase font-bold mb-0.5">Paso 3: Cotización &amp; Cobranza</div>
                    <div className="text-slate-800 dark:text-slate-200 font-sans">Genera el presupuesto estimado o envía el recordatorio de pago con link directo.</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 font-sans text-[11px] font-medium">
                    🛡️ <strong>Tecnología Segura:</strong> Usamos WhatsApp Cloud API oficial de Meta y conectores como n8n y Chatwoot. Cero riesgo de bloqueos de línea.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 4: CONSULTORÍA TÉCNICA SENIOR */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual a la izquierda (Split Invertido) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Ingeniería &amp; Auditoría Senior</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold">Diagnóstico Certero</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">🔍 Auditoría de Código &amp; Deuda Técnica</span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">Identificamos la causa raíz de lentitud, caídas y fallos en tu software actual.</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">⚙️ Integraciones Siigo ERP &amp; APIs</span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">Conectamos tu facturación electrónica Siigo, pasarelas y servicios externos.</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">🩹 Rescate de Plataformas Legacy</span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">Recuperamos y modernizamos sistemas abandonados o mal implementados por otros proveedores.</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">🎓 Acompañamiento &amp; Capacitación Técnica</span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">Mentoría técnica senior para elevar la calidad de código de tus desarrolladores.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido comercial a la derecha */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Solución 04 · Respaldo de Ingeniería Senior</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Diagnóstico, rescate de plataformas y{' '}
                <span className="text-amber-600 dark:text-amber-400">dirección técnica experta</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                ¿Tu software está fallando, tus desarrolladores están estancados o tu proveedor anterior te dejó un sistema a medias? Ofrecemos <strong>Consultoría Técnica Senior</strong> para auditar la salud de tu código, rescatar proyectos críticos, conectar sistemas empresariales como <strong>Siigo ERP</strong> y capacitar técnicamente a tu equipo con los más altos estándares de ingeniería.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Auditoría imparcial sin compromisos</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Te decimos con total transparencia el estado real de tu aplicación, riesgos de seguridad y plan de acción.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Integraciones contables y de negocio (Siigo ERP, WhatsApp, n8n)</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Conectamos tus sistemas para emitir facturación electrónica automática y sincronizar inventarios y clientes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Capacitación y mentoría técnica a desarrolladores</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Revisión de código en vivo y mejores prácticas de Fullstack TypeScript, PostgreSQL y Python para tu equipo.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/consultoria-tecnica"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition group"
                >
                  <span>Ver Servicios de Consultoría Técnica</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/consultoria-tecnica#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition shadow-sm"
                >
                  Agendar Diagnóstico
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 5: ¿NO ENCUENTRAS LO QUE BUSCAS? (PROYECTO ESPECIAL) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>¿Requerimiento Mixto o Proyecto Especial?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            ¿No encuentras exactamente lo que necesitas o tu proyecto combina varias áreas?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Muchas empresas necesitan una solución integral que combine página web, automatizaciones de WhatsApp y software a la medida. <strong>Escríbenos directamente</strong> y armamos una propuesta personalizada a la escala exacta de tu presupuesto y tiempos.
          </p>

          <div className="pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-indigo-500/30 transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Cuéntanos tu Proyecto (Ir a Contacto)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
