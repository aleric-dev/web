import React from 'react';
import { Globe, Rocket, Zap, ShieldCheck, GraduationCap, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProfileOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  path: string;
  isScrollTarget?: boolean;
  icon: React.ReactNode;
  accentColor: string;
  borderHover: string;
  buttonColor: string;
  starFeatures: string[];
}

const OPTIONS: ProfileOption[] = [
  {
    id: 'web',
    title: 'Desarrollo Web & Landings',
    subtitle: 'Sitios comerciales, corporativos y tiendas E-commerce',
    description: 'Páginas de alta velocidad y diseño persuasivo optimizadas para captar prospectos y multiplicar tus ventas.',
    badge: 'Para Marcas & PyMEs',
    path: '/desarrollo-web',
    icon: <Globe className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />,
    accentColor: 'from-cyan-500/10 dark:from-cyan-500/20 via-blue-500/5 dark:via-blue-500/10 to-transparent',
    borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/20',
    buttonColor: 'group-hover:bg-cyan-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-950',
    starFeatures: [
      'Landings de Alta Conversión',
      'Tiendas E-commerce Escalables',
      'Sitios Web 100/100 en Google Lighthouse',
    ],
  },
  {
    id: 'software',
    title: 'Software & SaaS a la Medida',
    subtitle: 'Plataformas web complejas, CRMs y paneles de control',
    description: 'Sistemas digitales construidos a la medida de tu operación para organizar procesos y escalar tu empresa.',
    badge: 'Para Startups & Empresas',
    path: '/software-a-medida',
    icon: <Rocket className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
    accentColor: 'from-indigo-500/10 dark:from-indigo-500/20 via-purple-500/5 dark:via-purple-500/10 to-transparent',
    borderHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/20',
    buttonColor: 'group-hover:bg-indigo-600 group-hover:text-white',
    starFeatures: [
      'Plataformas SaaS Multi-tenant',
      'CRMs & ERPs Personalizados',
      'Desarrollo de APIs REST & GraphQL',
    ],
  },
  {
    id: 'automatizacion',
    title: 'Automatización & WhatsApp API',
    subtitle: 'Integraciones inteligentes, bots n8n y flujos sin fricción',
    description: 'Elimina el trabajo manual repetitivo. Conectamos tus ventas y atención con respuestas automáticas 24/7.',
    badge: 'Para Operaciones & Ventas',
    path: '/automatizaciones',
    icon: <Zap className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
    accentColor: 'from-emerald-500/10 dark:from-emerald-500/20 via-teal-500/5 dark:via-teal-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
    buttonColor: 'group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-950',
    starFeatures: [
      'Bots de WhatsApp Cloud API 24/7',
      'Flujos Automáticos n8n & Webhooks',
      'Integración Chatwoot Multiagente',
    ],
  },
  {
    id: 'consultoria',
    title: 'Consultoría & Auditoría Técnica',
    subtitle: 'Revisión imparcial de código y rescate de proyectos',
    description: 'Evaluamos el estado real de tu software, solucionamos problemas técnicos y auditamos proveedores externos.',
    badge: 'Para CTOs & Líderes Tech',
    path: '/consultoria-tecnica',
    icon: <ShieldCheck className="w-7 h-7 text-amber-600 dark:text-amber-400" />,
    accentColor: 'from-amber-500/10 dark:from-amber-500/20 via-orange-500/5 dark:via-orange-500/10 to-transparent',
    borderHover: 'hover:border-amber-500/50 hover:shadow-amber-500/20',
    buttonColor: 'group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-slate-950',
    starFeatures: [
      'Auditoría de Código & Deuda Técnica',
      'Rescate de Proyectos Legacy',
      'Inspección de Proveedores Externos',
    ],
  },
  {
    id: 'mentoria',
    title: 'Mentoría & Capacitación Tech',
    subtitle: 'Acompañamiento 1-a-1 en desarrollo moderno',
    description: 'Entrenamiento práctico para profesionales y freelancers que buscan acelerar su nivel técnico y dominar proyectos.',
    badge: 'Para Devs & Freelancers',
    path: '/mentoria-fullstack',
    icon: <GraduationCap className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
    accentColor: 'from-purple-500/10 dark:from-purple-500/20 via-pink-500/5 dark:via-pink-500/10 to-transparent',
    borderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
    buttonColor: 'group-hover:bg-purple-600 group-hover:text-white',
    starFeatures: [
      'Maestría Full Stack 1-a-1',
      'TypeScript, React 19 & NestJS',
      'Clean Code & Testing Automatizado',
    ],
  },
  {
    id: 'custom-contact',
    title: 'Consulta General / Proyecto Especial',
    subtitle: '¿Tu requerimiento no encaja en las opciones anteriores?',
    description: 'Cuéntanos tu requerimiento o idea de negocio directamente. Evaluamos tu proyecto y armamos una propuesta a la medida.',
    badge: 'Atención 1-a-1',
    path: '#contacto',
    isScrollTarget: true,
    icon: <MessageSquare className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
    accentColor: 'from-emerald-500/10 dark:from-emerald-500/20 via-indigo-500/5 dark:via-indigo-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
    buttonColor: 'group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-950',
    starFeatures: [
      'Propuesta Comercial Personalizada',
      'Evaluación de Viabilidad Técnica',
      'Respuesta en menos de 24 Horas',
    ],
  },
];

export const ProfileRouter: React.FC = () => {
  return (
    <section id="soluciones" className="py-16 relative bg-slate-100/60 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest">
            ¿Qué solución necesitas para tu negocio?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selecciona la categoría de tu interés
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explora nuestra propuesta especializada según el tipo de servicio que requieres.
          </p>
        </div>

        {/* Options Grid (6 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {OPTIONS.map((opt) => (
            <a
              key={opt.id}
              href={opt.path}
              className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 bg-gradient-to-b ${opt.accentColor} p-7 backdrop-blur-md transition-all duration-300 ${opt.borderHover} hover:-translate-y-1 shadow-md hover:shadow-xl cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                    {opt.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {opt.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {opt.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {opt.subtitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                  {opt.description}
                </p>

                {/* 3 Servicios Estrella Destacados */}
                <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 mb-6">
                  <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                    Servicios Estrella Incluidos:
                  </span>
                  {opt.starFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className={`w-full flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 transition ${opt.buttonColor}`}>
                  <span>{opt.isScrollTarget ? 'Ir a Formulario de Contacto' : 'Ver Detalles de la Solución'}</span>
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
