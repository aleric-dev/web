import React from 'react';
import { 
  Globe, 
  Rocket, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export const ProfileRouter: React.FC = () => {
  return (
    <div id="soluciones" className="scroll-mt-20 flex flex-col divide-y divide-slate-200 dark:divide-slate-800/80">
      
      {/* Barra de Selección Rápida de Soluciones */}
      <div className="py-6 bg-white dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Especialidades Comerciales
            </span>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">
              ¿Qué necesita tu empresa hoy?
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <a
              href="#desarrollo-web-solucion"
              className="px-3.5 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/70 hover:bg-cyan-100 transition flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>01. Páginas Web</span>
            </a>
            <a
              href="#software-medida-solucion"
              className="px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/70 hover:bg-indigo-100 transition flex items-center gap-1.5"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>02. Software a Medida</span>
            </a>
            <a
              href="#automatizaciones-solucion"
              className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 hover:bg-emerald-100 transition flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>03. Automatizaciones</span>
            </a>
            <a
              href="#consultoria-solucion"
              className="px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/70 hover:bg-amber-100 transition flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>04. Consultoría</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN 1: DESARROLLO WEB & LANDINGS DE ALTA CONVERSIÓN */}
      {/* ========================================================================= */}
      <section id="desarrollo-web-solucion" className="scroll-mt-24 py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Contenido Izquierda */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Solución 01 · Páginas Web &amp; Ventas</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Páginas web y tiendas para <span className="text-cyan-600 dark:text-cyan-400">multiplicar tus ventas</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Olvídate de páginas lentas y menús confusos que hacen que tus clientes se vayan. Diseñamos <strong>landings comerciales ultrarrápidas</strong> que atrapan la atención y llevan a cada visitante a comprar o escribirte por WhatsApp.
              </p>

              <div className="space-y-3 pt-1 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span><strong>Carga en &lt; 1s en celular:</strong> tus campañas publicitarias y anuncios no pierden dinero por esperas.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span><strong>Pagos y pedidos fáciles:</strong> integración con PSE, tarjetas de crédito y WhatsApp directo.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="/desarrollo-web"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-cyan-500/20 transition group"
                >
                  <span>Ver Solución Web</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition"
                >
                  Cotizar mi Página
                </a>
              </div>
            </div>

            {/* Imagen Derecha */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 group">
                <img
                  src="/assets/solution-web.jpg"
                  alt="Desarrollo de páginas web y tiendas online Aleric.dev"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  width="640"
                  height="480"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: SOFTWARE & SISTEMAS A LA MEDIDA */}
      {/* ========================================================================= */}
      <section id="software-medida-solucion" className="scroll-mt-24 py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Imagen Izquierda (Layout Invertido) */}
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 group">
                <img
                  src="/assets/solution-software.jpg"
                  alt="Plataforma de software a la medida Aleric.dev"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  width="640"
                  height="480"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido Derecha */}
            <div className="lg:col-span-6 space-y-5 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-4 h-4" />
                <span>Solución 02 · Sal de Excel &amp; Centraliza tu Empresa</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Sal del desorden de Excel con tu <span className="text-indigo-600 dark:text-indigo-400">propio software</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Hacer crecer tu negocio sobre hojas de cálculo compartidas que se desconfiguran o pagar mensualidades caras por software rígido frena tu operación. Desarrollamos <strong>tu propia plataforma web a la medida</strong> para que tengas el control total de ventas, clientes e inventario.
              </p>

              <div className="space-y-3 pt-1 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span><strong>Roles seguros por empleado:</strong> cada persona solo ve y edita lo que le corresponde.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span><strong>Código 100% tuyo:</strong> cero ataduras ni pagos mensuales abusivos por usuario.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="/software-a-medida"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-indigo-500/20 transition group"
                >
                  <span>Conocer Software a Medida</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition shadow-xs"
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
      <section id="automatizaciones-solucion" className="scroll-mt-24 py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Contenido Izquierda */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Solución 03 · Ventas &amp; Atención por WhatsApp</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Atiende y cobra por WhatsApp en <span className="text-emerald-600 dark:text-emerald-400">menos de 2 segundos</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Cuando un cliente te escribe listo para comprar y nadie le contesta rápido, se va con tu competencia. Automatizamos <strong>respuestas inmediatas, cotizaciones en vivo y recordatorios de pago</strong> para que tu empresa nunca duerma.
              </p>

              <div className="space-y-3 pt-1 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span><strong>Cero clientes esperando:</strong> atención comercial guiada 24/7 con API oficial de WhatsApp (sin bloqueos).</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span><strong>Cobranza sin desgaste:</strong> recordatorios amables con link de pago directo y recibo al instante.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="/automatizaciones"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition group"
                >
                  <span>Ver Ventas por WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition"
                >
                  Cotizar WhatsApp
                </a>
              </div>
            </div>

            {/* Imagen Derecha */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 group">
                <img
                  src="/assets/solution-automation.jpg"
                  alt="Automatización comercial de WhatsApp Aleric.dev"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  width="640"
                  height="480"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 4: CONSULTORÍA TÉCNICA SENIOR */}
      {/* ========================================================================= */}
      <section id="consultoria-solucion" className="scroll-mt-24 py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Imagen Izquierda (Layout Invertido) */}
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 group">
                <img
                  src="/assets/solution-consultancy.jpg"
                  alt="Consultoría técnica y auditoría de software Aleric.dev"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  width="640"
                  height="480"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contenido Derecha */}
            <div className="lg:col-span-6 space-y-5 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Solución 04 · Respaldo de Ingeniería Senior</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Diagnóstico, rescate de plataformas y <span className="text-amber-600 dark:text-amber-400">dirección técnica</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                ¿Tu software actual se cae, está lento o tu proveedor anterior te dejó el sistema a medias? Realizamos <strong>auditorías imparciales</strong> para encontrar la causa raíz, rescatamos código crítico y conectamos tus plataformas con <strong>tus sistemas contables y ERP</strong>.
              </p>

              <div className="space-y-3 pt-1 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span><strong>Diagnóstico certero:</strong> te explicamos en español claro qué está fallando y cómo solucionarlo.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span><strong>Integraciones que funcionan:</strong> conectamos facturación electrónica, sistemas contables, CRM y pasarelas de pago.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="/consultoria-tecnica"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition group"
                >
                  <span>Ver Consultoría Técnica</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition shadow-xs"
                >
                  Agendar Diagnóstico
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
