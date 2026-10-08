import React, { useState } from 'react';
import { 
  Globe, 
  Rocket, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface Specialty {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  tabActiveClass: string;
  tabInactiveClass: string;
  titlePrefix: string;
  highlightedText: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageBadge: string;
  detailUrl: string;
  contactService: string;
  quickSummary: string;
}

const specialties: Specialty[] = [
  {
    id: 'web',
    name: 'Desarrollo Web',
    category: 'Ventas & Tráfico',
    icon: Globe,
    accentColor: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-950/70 border-cyan-200 dark:border-cyan-800',
    badgeText: 'text-cyan-700 dark:text-cyan-300',
    tabActiveClass: 'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-500/25 scale-[1.02]',
    tabInactiveClass: 'border-cyan-200 dark:border-cyan-800/70 text-cyan-700 dark:text-cyan-300 bg-cyan-50/60 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/60',
    titlePrefix: 'Páginas web y tiendas para ',
    highlightedText: 'multiplicar tus ventas',
    description: 'Diseñamos landings comerciales ultrarrápidas que atrapan la atención y llevan a cada visitante a comprar o escribirte por WhatsApp en menos de un segundo.',
    bullets: [
      'Carga en < 0.5s en celular: cero dinero perdido en publicidad por demoras.',
      'Botones directos de compra, pasarelas de pago (PSE, tarjetas) y WhatsApp.',
      'Estructura de alta conversión (CRO) sin menús confusos donde el cliente se pierde.'
    ],
    image: '/assets/services/solution-web.jpg',
    imageAlt: 'Desarrollo de páginas web y tiendas online Aleric.dev',
    imageBadge: 'Carga < 0.5s · Alta Conversión',
    detailUrl: '/desarrollo-web',
    contactService: 'Desarrollo Web & Landings de Alta Conversión',
    quickSummary: 'Landings y tiendas en línea con apertura instantánea (< 1s) para que no pierdas visitas de publicidad.'
  },
  {
    id: 'software',
    name: 'Software a Medida',
    category: 'Operaciones & Sal de Excel',
    icon: Rocket,
    accentColor: 'text-indigo-600 dark:text-indigo-400',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-200 dark:border-indigo-800',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    tabActiveClass: 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-[1.02]',
    tabInactiveClass: 'border-indigo-200 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 bg-indigo-50/60 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60',
    titlePrefix: 'Sal del desorden de Excel con tu ',
    highlightedText: 'propio software a medida',
    description: 'Reemplaza hojas de cálculo desordenadas o licencias mensuales caras por una plataforma web propia y segura, con control de inventarios, pedidos y clientes.',
    bullets: [
      'Roles y permisos estrictos: cada empleado ve únicamente lo que le corresponde.',
      'Código 100% de tu propiedad: cero mensualidades forzadas por empleado o asiento.',
      'Acceso desde cualquier computador o celular con sincronización en tiempo real.'
    ],
    image: '/assets/services/solution-software.jpg',
    imageAlt: 'Plataforma de software a la medida Aleric.dev',
    imageBadge: 'Código 100% Tuyo · Cero Licencias',
    detailUrl: '/software-a-medida',
    contactService: 'Desarrollo de Software & SaaS a la Medida',
    quickSummary: 'Plataformas web propias para centralizar pedidos, clientes e inventarios sin riesgo de fórmulas rotas.'
  },
  {
    id: 'automatizaciones',
    name: 'Ventas por WhatsApp',
    category: 'Atención 24/7 & Cobranzas',
    icon: Zap,
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-800',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    tabActiveClass: 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/25 scale-[1.02]',
    tabInactiveClass: 'border-emerald-200 dark:border-emerald-800/70 text-emerald-700 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60',
    titlePrefix: 'Atención y ventas comerciales automáticas por ',
    highlightedText: 'WhatsApp las 24 horas',
    description: 'Responde a prospectos en 2 segundos, genera cotizaciones guiadas al instante y envía recordatorios de cobranza amables sin desgastar a tu equipo.',
    bullets: [
      'Respuestas inmediatas día y noche: no vuelvas a perder clientes por demoras.',
      'Cotización automática en el mismo chat y pase al asesor cuando están listos.',
      'WhatsApp Cloud API oficial: cero riesgos de bloqueos de número.'
    ],
    image: '/assets/services/solution-automation.jpg',
    imageAlt: 'Automatización comercial de WhatsApp Aleric.dev',
    imageBadge: 'WhatsApp Cloud API · Respuestas 2s',
    detailUrl: '/automatizaciones',
    contactService: 'Automatización de Operaciones & WhatsApp API',
    quickSummary: 'Flujos oficiales en WhatsApp Cloud API para responder en 2s, cotizar y recordar pagos sin intervención manual.'
  },
  {
    id: 'consultoria',
    name: 'Consultoría Técnica',
    category: 'Auditoría & Rescate Cloud',
    icon: ShieldCheck,
    accentColor: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/70 border-amber-200 dark:border-amber-800',
    badgeText: 'text-amber-700 dark:text-amber-300',
    tabActiveClass: 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-500/25 scale-[1.02]',
    tabInactiveClass: 'border-amber-200 dark:border-amber-800/70 text-amber-700 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60',
    titlePrefix: 'Diagnóstico senior y rescate de ',
    highlightedText: 'plataformas con problemas',
    description: 'Identificamos cuellos de botella de lentitud, solucionamos fallas críticas, auditamos código legacy e integramos APIs complejas (ERP, facturación, pasarelas).',
    bullets: [
      'Diagnóstico en 48 horas de cuellos de botella, bugs y vulnerabilidades.',
      'Integración de sistemas empresariales, facturación electrónica y ERPs.',
      'Acompañamiento y mentoría técnica senior para tu equipo interno.'
    ],
    image: '/assets/services/solution-consultancy.jpg',
    imageAlt: 'Consultoría técnica y auditoría de software Aleric.dev',
    imageBadge: 'Diagnóstico 48h · Ingeniería Senior',
    detailUrl: '/consultoria-tecnica',
    contactService: 'Consultoría Técnica Senior',
    quickSummary: 'Auditoría de código, rescate de sistemas caídos y conexión de APIs complejas (facturación, ERPs).'
  }
];

export const ProfileRouter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('web');

  const activeSpecialty = specialties.find(s => s.id === activeTab) || specialties[0];
  const ActiveIcon = activeSpecialty.icon;

  return (
    <section id="soluciones" className="scroll-mt-20 py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado Principal de Especialidades Comerciales */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            Especialidades Comerciales
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            ¿Qué necesita tu empresa hoy?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Presiona cada servicio para conocer cómo resolvemos cada reto de tu operación:
          </p>

          {/* Selector de Pestañas Interactivas con Nombres Oficiales y Colores de Servicio */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {specialties.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeTab;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  type="button"
                  className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-2xs ${
                    isActive ? s.tabActiveClass : s.tabInactiveClass
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel Protagonista de la Especialidad Seleccionada */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xs mb-16 transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Información de Negocio */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-bold uppercase tracking-wider ${activeSpecialty.badgeBg} ${activeSpecialty.badgeText}`}>
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>{activeSpecialty.category}</span>
                </span>
                <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                  {activeSpecialty.name}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                {activeSpecialty.titlePrefix}
                <span className={activeSpecialty.accentColor}>{activeSpecialty.highlightedText}</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {activeSpecialty.description}
              </p>

              {/* Puntos Clave de Valor */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 text-left w-full pt-1">
                {activeSpecialty.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Botones de Invitación al Detalle */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                <a
                  href={activeSpecialty.detailUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider shadow-sm transition group"
                >
                  <span>Ver Detalle de {activeSpecialty.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-800 transition shadow-2xs"
                >
                  Cotizar esta Solución
                </a>
              </div>

            </div>

            {/* Columna Derecha: Imagen Real de la Solución */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-950 shadow-md group">
                <img
                  src={activeSpecialty.image}
                  alt={activeSpecialty.imageAlt}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                  width="640"
                  height="480"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{activeSpecialty.imageBadge}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PARTE INFERIOR: VISTA BREVE DE TODAS LAS ESPECIALIDADES */}
        {/* ========================================================================= */}
        <div className="border-t border-slate-200 dark:border-slate-800/80 pt-12">
          <div className="text-center sm:text-left mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Resumen Ejecutivo
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Los 4 Servicios en Breve
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Haz clic en cualquier servicio para ver su alcance completo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialties.map((item) => {
              const Icon = item.icon;
              const isSelected = item.id === activeTab;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-100 dark:bg-slate-900 border-indigo-500/50 shadow-xs'
                      : 'bg-white dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      <span className="text-[10px] font-mono text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.name}
                    </h5>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {item.quickSummary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <a
                      href={item.detailUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <span>Ver Detalle</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
