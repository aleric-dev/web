import React from 'react';
import { Layout, Cpu, Bot, ShieldCheck, GraduationCap, ArrowRight, Check } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  borderGlow: string;
  badge: string;
  whatsappMsg: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: <Layout className="w-7 h-7 text-cyan-400" />,
    title: 'Desarrollo Web',
    tagline: 'Landings de Alta Conversión & Sitios Corporativos',
    description:
      'Diseñamos y maquetamos sitios web ultrarrápidos, optimizados para SEO y estructurados estratégicamente para convertir visitas en clientes reales.',
    features: [
      'Landings de alta conversión optimizadas',
      'Sitios corporativos informativos & institucionales',
      'E-commerces y tiendas virtuales escalables',
      'Puntaje 100/100 en Google Lighthouse',
    ],
    gradient: 'from-cyan-500/10 via-blue-500/5 to-transparent',
    borderGlow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
    badge: 'Alta Conversión',
    whatsappMsg: 'Hola Aleric.dev, me interesa contratar el servicio de Desarrollo Web (Landings/E-commerce).',
  },
  {
    id: 'custom-software',
    icon: <Cpu className="w-7 h-7 text-indigo-400" />,
    title: 'Desarrollo a la Medida',
    tagline: 'Sistemas Web Complejos, CRMs & SaaS',
    description:
      'Construimos software empresarial desde cero adaptado a la lógica exacta de tu negocio, garantizando escalabilidad, seguridad y mantenibilidad.',
    features: [
      'Aplicaciones web complejas & portales',
      'Plataformas SaaS y paneles de administración',
      'CRMs y sistemas ERP a la medida',
      'Arquitectura desacoplada e APIs REST/GraphQL',
    ],
    gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
    borderGlow: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    badge: 'Arquitectura Escalable',
    whatsappMsg: 'Hola Aleric.dev, necesito una cotización para un Desarrollo a la Medida (SaaS/CRM/Web App).',
  },
  {
    id: 'automation',
    icon: <Bot className="w-7 h-7 text-emerald-400" />,
    title: 'Automatización de Procesos',
    tagline: 'WhatsApp API, n8n, Chatwoot & Python',
    description:
      'Eliminamos tareas repetitivas y cuellos de botella conectando tus sistemas mediante bots inteligentes, flujos en n8n y scripts personalizados.',
    features: [
      'Integraciones con WhatsApp API & Chatwoot',
      'Flujos automatizados en n8n & webhooks',
      'Scripts personalizados en Python para extracción de datos',
      'Sincronización en tiempo real entre sistemas',
    ],
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    badge: 'Cero Fricción',
    whatsappMsg: 'Hola Aleric.dev, me interesa el servicio de Automatización de Procesos (WhatsApp API / n8n / Python).',
  },
  {
    id: 'tech-advisory',
    icon: <ShieldCheck className="w-7 h-7 text-amber-400" />,
    title: 'Asesorías Tecnológicas',
    tagline: 'Auditoría & Rescate de Proyectos Legacy',
    description:
      'Evaluamos, diagnosticamos y saneamos código con problemas técnicos, garantizando la continuidad de tu negocio y la calidad de tus proveedores.',
    features: [
      'Auditoría y rescate de proyectos legacy o deficientes',
      'Optimización del desempeño de equipos dev',
      'Validación técnica e inspección de proveedores externos',
      'Refactorización y reducción de deuda técnica',
    ],
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
    borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    badge: 'Diagnóstico Pro',
    whatsappMsg: 'Hola Aleric.dev, requiero una Asesoría Tecnológica (Auditoría de código o rescate de proyecto legacy).',
  },
  {
    id: 'mentorship',
    icon: <GraduationCap className="w-7 h-7 text-purple-400" />,
    title: 'Consultorías & Mentoría Técnica',
    tagline: 'Maestría Full Stack para Pros & Equipos',
    description:
      'Acompañamiento 1-a-1 y capacitaciones especializadas para acelerar el dominio del stack tecnológico moderno y buenas prácticas de ingeniería.',
    features: [
      'Acompañamiento a estudiantes, profesionales y freelancers',
      'Maestría Full Stack (TypeScript, React, NestJS, PostgreSQL)',
      'Buenas prácticas de limpia arquitectura & Testing',
      'Resolución de bloqueos técnicos complejos en proyectos reales',
    ],
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
    borderGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
    badge: 'Full Stack Mastery',
    whatsappMsg: 'Hola Aleric.dev, deseo información sobre la Consultoría & Mentoría Técnica Full Stack.',
  },
];

export const Services: React.FC = () => {
  const triggerWhatsApp = (msg: string) => {
    if ((window as any).openWhatsAppModal) {
      (window as any).openWhatsAppModal(msg);
    }
  };

  return (
    <section id="servicios" className="py-24 relative bg-slate-950 overflow-hidden border-t border-slate-900">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-widest">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Soluciones de Ingeniería diseñadas para <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Escalar</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            Ofrecemos capacidades técnicas avanzadas en desarrollo de software, automatización e ingeniería de sistemas para potenciar tu operación.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b ${service.gradient} p-8 backdrop-blur-md transition-all duration-300 ${service.borderGlow} hover:-translate-y-1 shadow-xl`}
            >
              <div>
                {/* Header card info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono font-bold text-slate-300">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-indigo-400 mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="mt-0.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => triggerWhatsApp(service.whatsappMsg)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-indigo-600 border border-slate-800 hover:border-indigo-500 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white transition shadow-md group/btn cursor-pointer"
                >
                  <span>Cotizar este Servicio</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
