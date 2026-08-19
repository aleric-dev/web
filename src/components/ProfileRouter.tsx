import React from 'react';
import { Globe, Rocket, Zap, ShieldCheck, GraduationCap, MessageSquare, ArrowRight } from 'lucide-react';

interface ProfileOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  path?: string;
  isModalTrigger?: boolean;
  customMsg?: string;
  icon: React.ReactNode;
  accentColor: string;
  borderHover: string;
  buttonColor: string;
}

const OPTIONS: ProfileOption[] = [
  {
    id: 'web',
    title: 'Desarrollo Web & Landings',
    subtitle: 'Sitios comerciales, corporativos y tiendas E-commerce',
    description: 'Páginas de alta velocidad y diseño persuasivo optimizadas para captar prospectos y multiplicar tus ventas.',
    badge: 'Para Marcas & PyMEs',
    path: '/desarrollo-web',
    icon: <Globe className="w-7 h-7 text-cyan-400" />,
    accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/20',
    buttonColor: 'group-hover:bg-cyan-500 group-hover:text-slate-950',
  },
  {
    id: 'software',
    title: 'Software & SaaS a la Medida',
    subtitle: 'Plataformas web complejas, CRMs y paneles de control',
    description: 'Sistemas digitales construidos a la medida de tu operación para organizar procesos y escalar tu empresa.',
    badge: 'Para Startups & Empresas',
    path: '/software-a-medida',
    icon: <Rocket className="w-7 h-7 text-indigo-400" />,
    accentColor: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    borderHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/20',
    buttonColor: 'group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    id: 'automatizacion',
    title: 'Automatización & WhatsApp API',
    subtitle: 'Integraciones inteligentes, bots n8n y flujos sin fricción',
    description: 'Elimina el trabajo manual repetitivo. Conectamos tus ventas y atención con respuestas automáticas 24/7.',
    badge: 'Para Operaciones & Ventas',
    path: '/automatizaciones',
    icon: <Zap className="w-7 h-7 text-emerald-400" />,
    accentColor: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
    buttonColor: 'group-hover:bg-emerald-500 group-hover:text-slate-950',
  },
  {
    id: 'consultoria',
    title: 'Consultoría & Auditoría Técnica',
    subtitle: 'Revisión imparcial de código y rescate de proyectos',
    description: 'Evaluamos el estado real de tu software, solucionamos problemas técnicos y auditamos proveedores externos.',
    badge: 'Para CTOs & Líderes Tech',
    path: '/consultoria-tecnica',
    icon: <ShieldCheck className="w-7 h-7 text-amber-400" />,
    accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderHover: 'hover:border-amber-500/50 hover:shadow-amber-500/20',
    buttonColor: 'group-hover:bg-amber-500 group-hover:text-slate-950',
  },
  {
    id: 'mentoria',
    title: 'Mentoría & Capacitación Tech',
    subtitle: 'Acompañamiento 1-a-1 en desarrollo moderno',
    description: 'Entrenamiento práctico para profesionales y freelancers que buscan acelerar su nivel técnico y dominar proyectos.',
    badge: 'Para Devs & Freelancers',
    path: '/mentoria-fullstack',
    icon: <GraduationCap className="w-7 h-7 text-purple-400" />,
    accentColor: 'from-purple-500/20 via-pink-500/10 to-transparent',
    borderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
    buttonColor: 'group-hover:bg-purple-600 group-hover:text-white',
  },
  {
    id: 'custom-contact',
    title: 'Consulta General / Proyecto Especial',
    subtitle: '¿Tu requerimiento no encaja en las opciones anteriores?',
    description: 'Cuéntanos tu requerimiento o idea de negocio directamente. Evaluamos tu proyecto y armamos una propuesta a la medida.',
    badge: 'Atención 1-a-1',
    isModalTrigger: true,
    customMsg: 'Hola Aleric.dev, tengo una consulta para un proyecto especial que no encaja en las categorías principales.',
    icon: <MessageSquare className="w-7 h-7 text-emerald-400" />,
    accentColor: 'from-emerald-500/20 via-indigo-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
    buttonColor: 'group-hover:bg-emerald-500 group-hover:text-slate-950',
  },
];

export const ProfileRouter: React.FC = () => {
  const handleCardClick = (e: React.MouseEvent, opt: ProfileOption) => {
    if (opt.isModalTrigger) {
      e.preventDefault();
      if ((window as any).openWhatsAppModal) {
        (window as any).openWhatsAppModal(opt.customMsg || undefined);
      }
    }
  };

  return (
    <section className="py-12 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest">
            ¿Qué solución necesitas para tu negocio?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selecciona la categoría de tu interés
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explora nuestra propuesta especializada según el tipo de servicio que requieres.
          </p>
        </div>

        {/* Options Grid (6 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {OPTIONS.map((opt) => (
            <a
              key={opt.id}
              href={opt.path || '#'}
              onClick={(e) => handleCardClick(e, opt)}
              className={`group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b ${opt.accentColor} bg-slate-900/60 p-7 backdrop-blur-md transition-all duration-300 ${opt.borderHover} hover:-translate-y-1 shadow-xl cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
                    {opt.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-bold text-slate-300">
                    {opt.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                  {opt.title}
                </h3>

                <p className="text-xs font-semibold text-slate-400 mb-4">
                  {opt.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                  {opt.description}
                </p>
              </div>

              <div>
                <div className={`w-full flex items-center justify-between py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-200 transition ${opt.buttonColor}`}>
                  <span>{opt.isModalTrigger ? 'Contactar Directamente' : 'Ver Detalles de la Solución'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
