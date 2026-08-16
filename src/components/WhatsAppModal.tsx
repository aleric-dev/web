import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface WhatsAppModalProps {
  phoneNumber?: string;
  defaultCategory?: string;
}

const PRESET_TOPICS = [
  { id: 'web', label: '🌐 Desarrollo Web', msg: 'Hola Aleric.dev, me interesa cotizar una Landing Page / Sitio Web Corporativo.' },
  { id: 'custom', label: '🚀 Software a Medida', msg: 'Hola Aleric.dev, requiero desarrollar una aplicación web / plataforma SaaS a la medida.' },
  { id: 'n8n', label: '⚡ Automatización n8n / API', msg: 'Hola Aleric.dev, quiero automatizar mis procesos de WhatsApp y flujos de negocio con n8n.' },
  { id: 'advisory', label: '🛡️ Auditoría & Rescate Legacy', msg: 'Hola Aleric.dev, necesito una asesoría técnica y auditoría para mi proyecto software.' },
  { id: 'mentorship', label: '🎓 Mentoría Full Stack', msg: 'Hola Aleric.dev, me interesa su programa de consultoría y mentoría técnica Full Stack.' },
];

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  phoneNumber = '573000000000', // Reemplazar con número real si se requiere
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    'Hola Aleric.dev, me interesa solicitar una cotización/asesoría para un proyecto de software...'
  );
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  useEffect(() => {
    // Listener para eventos globales de apertura desde cualquier botón
    const handleOpenModal = (e: CustomEvent<{ message?: string }>) => {
      if (e.detail?.message) {
        setMessage(e.detail.message);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-whatsapp-modal' as any, handleOpenModal);

    // Método global helper para facilitar llamada inline desde HTML/Astro
    (window as any).openWhatsAppModal = (customMsg?: string) => {
      if (customMsg) setMessage(customMsg);
      setIsOpen(true);
    };

    return () => {
      window.removeEventListener('open-whatsapp-modal' as any, handleOpenModal);
    };
  }, []);

  const handleSelectTopic = (topic: typeof PRESET_TOPICS[0]) => {
    setSelectedTopic(topic.id);
    setMessage(topic.msg);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const encodedText = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Floating Action Button (Esquina inferior derecha) */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 p-4 rounded-full text-white shadow-xl shadow-emerald-950/40 border border-emerald-400/40 backdrop-blur-md cursor-pointer"
          aria-label="Abrir chat de WhatsApp"
        >
          {/* Pulsating Ring Indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
          </span>

          <MessageSquare className="w-6 h-6 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline font-bold text-sm tracking-wide pr-1">
            Cotizar por WhatsApp
          </span>
        </motion.button>
      </div>

      {/* Modal Interactivo de Chat */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md">
            {/* Backdrop Click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full sm:max-w-lg bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 text-slate-100"
            >
              {/* Header del Chat */}
              <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 p-0.5 flex items-center justify-center shadow-md">
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-extrabold text-indigo-400 text-lg">
                        A
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-white text-base">Aleric.dev</h3>
                      <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-indigo-500/30">
                        Senior Team
                      </span>
                    </div>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                      <Zap className="w-3 h-3 fill-emerald-400" /> En línea • Respuesta inmediata
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <form onSubmit={handleSend} className="p-5 space-y-4">
                {/* Saludo inicial estilo chat */}
                <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
                  <p className="font-semibold text-indigo-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-400" /> ¡Bienvenido a Aleric.dev!
                  </p>
                  <p>
                    Cuéntanos sobre tu proyecto o necesidad técnica. Te responderemos directamente en WhatsApp con un diagnóstico y cotización oportuna.
                  </p>
                </div>

                {/* Chips de selección rápida */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Selecciona una categoría de interés:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_TOPICS.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleSelectTopic(topic)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition ${
                          selectedTopic === topic.id
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                            : 'bg-slate-800/90 border-slate-700/80 text-slate-300 hover:border-slate-600 hover:text-white'
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensaje Editable */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Tu Mensaje para WhatsApp:
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe los detalles de tu proyecto..."
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition resize-none font-mono text-xs leading-relaxed"
                  />
                </div>

                {/* Indicadores de confianza */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Directo al WhatsApp oficial
                  </span>
                  <span>Respuesta &lt;15 min</span>
                </div>

                {/* CTA Submit Button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 py-3.5 px-5 font-bold text-white shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/80 transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>Enviar Mensaje a WhatsApp</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
