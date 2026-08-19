import React from 'react';
import { Search, Compass, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: <Search className="w-6 h-6 text-cyan-400" />,
    title: 'Diagnóstico / Análisis',
    description:
      'Evaluamos los requerimientos técnicos, la infraestructura actual, los objetivos comerciales y los cuellos de botella para trazar una hoja de ruta clara.',
    badge: 'Fase Inicial',
    color: 'from-cyan-500/20 to-transparent border-cyan-500/30',
  },
  {
    step: '02',
    icon: <Compass className="w-6 h-6 text-indigo-400" />,
    title: 'Propuesta & Arquitectura',
    description:
      'Diseñamos el esquema técnico, la arquitectura de software desacoplada, la interfaz de usuario y definimos el cronograma de entregas oportunas.',
    badge: 'Diseño Técnico',
    color: 'from-indigo-500/20 to-transparent border-indigo-500/30',
  },
  {
    step: '03',
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    title: 'Desarrollo Iterativo',
    description:
      'Construcción limpia en código modular con entregas parciales semanales. Pruebas continuas para asegurar que el sistema no falle bajo carga.',
    badge: 'Construcción',
    color: 'from-purple-500/20 to-transparent border-purple-500/30',
  },
  {
    step: '04',
    icon: <Rocket className="w-6 h-6 text-emerald-400" />,
    title: 'Despliegue & Soporte',
    description:
      'Puesta en producción optimizada con SSL, CDN global, auditoría Lighthouse 100/100 y acompañamiento técnico posterior para garantizar continuidad.',
    badge: 'Puesta en Marcha',
    color: 'from-emerald-500/20 to-transparent border-emerald-500/30',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-widest">
            Metodología de Trabajo
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proceso Transparente de <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">4 Pasos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Sin fricciones ni sorpresas. Seguimos un flujo de trabajo estructurado diseñado para entregar soluciones de software en tiempos récord.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {STEPS.map((item, idx) => (
            <div
              key={item.step}
              className={`relative flex flex-col justify-between rounded-3xl border bg-gradient-to-b ${item.color} bg-slate-900/60 p-7 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-700/80">
                    {item.step}
                  </span>
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono font-bold text-slate-300 mb-3">
                  {item.badge}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Paso {idx + 1} de 4</span>
                <span className="text-indigo-400 font-bold">100% Claridad</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box inside Process */}
        <div className="mt-16 text-center">
          <button
            type="button"
            data-trigger-whatsapp
            data-whatsapp-msg="Hola Aleric.dev, me gustaría agendar un diagnóstico inicial para evaluar un proyecto."
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-purple-950/50 hover:scale-105 transition cursor-pointer border border-purple-400/30"
          >
            <span>Agendar Diagnóstico Inicial Gratuito</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};
