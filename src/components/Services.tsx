import React from 'react';
import { Layout, Cpu, Bot, ShieldCheck, GraduationCap, ArrowRight, Check } from 'lucide-react';

interface ServiceItem {
  id: string;
  route: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  snippet: string;
  description: string;
  features: string[];
  gradient: string;
  borderGlow: string;
  badge: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    route: '/desarrollo-web',
    icon: <Layout className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />,
    title: 'Desarrollo Web & Landings',
    tagline: 'Alta Conversión & Velocidad',
    snippet: 'Sitios web ultrarrápidos y Landings persuasivas estructuradas estratégicamente para convertir visitas en ventas.',
    description:
      'Diseñamos y maquetamos sitios web ultrarrápidos, optimizados para SEO y estructurados estratégicamente para convertir visitas en clientes reales.',
    features: [
      'Landings de alta conversión optimizadas',
      'Sitios corporativos informativos & E-commerce',
      'Puntaje 100/100 en Google Lighthouse',
    ],
    gradient: 'from-cyan-500/10 via-blue-500/5 to-transparent',
    borderGlow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/20',
    badge: 'Alta Conversión',
  },
  {
    id: 'custom-software',
    route: '/software-a-medida',
    icon: <Cpu className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
    title: 'Software & SaaS a la Medida',
    tagline: 'Sistemas Complejos & CRMs',
    snippet: 'Construcción de software empresarial robusto adaptado a la lógica exacta de tu negocio con arquitectura escalable.',
    description:
      'Construimos software empresarial desde cero adaptado a la lógica exacta de tu negocio, garantizando escalabilidad, seguridad y mantenibilidad.',
    features: [
      'Plataformas SaaS y paneles de administración',
      'CRMs y sistemas ERP a la medida',
      'Arquitectura desacoplada e APIs REST/GraphQL',
    ],
    gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
    borderGlow: 'hover:border-indigo-500/50 hover:shadow-indigo-500/20',
    badge: 'Arquitectura Escalable',
  },
  {
    id: 'automation',
    route: '/automatizaciones',
    icon: <Bot className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
    title: 'Automatización & WhatsApp',
    tagline: 'WhatsApp API, n8n & Bots',
    snippet: 'Eliminamos tareas repetitivas conectando tus ventas y operaciones con bots inteligentes y flujos en n8n.',
    description:
      'Eliminamos tareas repetitivas y cuellos de botella conectando tus sistemas mediante bots inteligentes, flujos en n8n y scripts personalizados.',
    features: [
      'Integraciones con WhatsApp API & Chatwoot',
      'Flujos automatizados en n8n & webhooks',
      'Sincronización en tiempo real entre sistemas',
    ],
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
    badge: 'Cero Fricción',
  },
  {
    id: 'tech-advisory',
    route: '/consultoria-tecnica',
    icon: <ShieldCheck className="w-7 h-7 text-amber-600 dark:text-amber-400" />,
    title: 'Consultoría & Auditoría CTO',
    tagline: 'Rescate de Código & Diagnóstico',
    snippet: 'Evaluación imparcial de software, saneamiento de código legacy y auditoría técnica de proveedores externos.',
    description:
      'Evaluamos, diagnosticamos y saneamos código con problemas técnicos, garantizando la continuidad de tu negocio y la calidad de tus proveedores.',
    features: [
      'Auditoría y rescate de proyectos legacy',
      'Validación e inspección de proveedores externos',
      'Refactorización y reducción de deuda técnica',
    ],
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
    borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/20',
    badge: 'Diagnóstico Pro',
  },
  {
    id: 'mentorship',
    route: '/mentoria-fullstack',
    icon: <GraduationCap className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
    title: 'Mentoría & Capacitación Devs',
    tagline: 'Full Stack Mastery 1-a-1',
    snippet: 'Acompañamiento especializado 1-a-1 para acelerar el dominio del stack tecnológico moderno y limpias arquitecturas.',
    description:
      'Acompañamiento 1-a-1 y capacitaciones especializadas para acelerar el dominio del stack tecnológico moderno y buenas prácticas de ingeniería.',
    features: [
      'Maestría Full Stack (TypeScript, React, NestJS)',
      'Buenas prácticas de limpia arquitectura & Testing',
      'Desbloqueo de retos técnicos en proyectos reales',
    ],
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
    borderGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
    badge: 'Full Stack Mastery',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 relative bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-bold uppercase tracking-widest">
            Servicios Destacados &amp; Favoritos
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Soluciones de Ingeniería diseñadas para <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400 bg-clip-text text-transparent">Escalar</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            Potenciamos la competitividad digital de tu empresa con productos web de alta calidad, código mantenible y automatizaciones.
          </p>
        </div>

        {/* Responsive Cards Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 bg-gradient-to-b ${service.gradient} p-8 backdrop-blur-md transition-all duration-300 ${service.borderGlow} hover:-translate-y-1.5 shadow-md hover:shadow-xl`}
            >
              <div>
                {/* Card Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {service.tagline}
                </p>

                {/* 2-Line Descriptive Snippet (Extracto de 2 líneas) */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal line-clamp-2">
                  {service.snippet}
                </p>

                {/* Quick Features */}
                <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800/80 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <span className="mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: "Saber más →" Link + Cotizar CTA */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={service.route}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-600 hover:text-white border border-indigo-200 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider transition cursor-pointer group/link shadow-sm"
                >
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>

                <a
                  href="#contacto"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white dark:bg-slate-950 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition shadow-sm cursor-pointer"
                >
                  <span>Cotizar este Servicio</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
