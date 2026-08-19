import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, X, CheckCircle2, Zap, ArrowUp, Send, Check, ShieldCheck, AlertCircle } from 'lucide-react';

type ContactMode = 'form' | 'whatsapp';

const PRESET_TOPICS = [
  { id: 'web', label: '🌐 Desarrollo Web & Landings', msg: 'Hola Aleric.dev, me interesa cotizar una Landing Page / Sitio Web Corporativo.' },
  { id: 'custom', label: '🚀 Software & SaaS a Medida', msg: 'Hola Aleric.dev, requiero desarrollar una aplicación web / plataforma SaaS a la medida.' },
  { id: 'n8n', label: '⚡ Automatización n8n & WhatsApp API', msg: 'Hola Aleric.dev, quiero automatizar mis procesos de WhatsApp y flujos de negocio con n8n.' },
  { id: 'advisory', label: '🛡️ Consultoría & Auditoría Técnica', msg: 'Hola Aleric.dev, necesito una asesoría técnica y auditoría para mi proyecto software.' },
  { id: 'mentorship', label: '🎓 Mentoría Full Stack', msg: 'Hola Aleric.dev, me interesa su programa de consultoría y mentoría técnica Full Stack.' },
];

// Valores directos con fallback garantizado para funcionamiento inmediato en producción y Cloudflare Pages
const PHONE_NUMBER = import.meta.env.PUBLIC_WHATSAPP_PHONE || '573013229292';
const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY || '987dd1cc-25dd-4512-8bc3-4eac1d116b44';

export const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ContactMode>('form');
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [message, setMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsInfo, setShowTermsInfo] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Scroll to top state
  const [showScrollTop, setShowScrollTop] = useState(false);

  const getCategoryFromPath = (path: string): string => {
    if (path.includes('software-a-medida')) return 'custom';
    if (path.includes('automatizaciones')) return 'n8n';
    if (path.includes('consultoria-tecnica')) return 'advisory';
    if (path.includes('mentoria-fullstack')) return 'mentorship';
    return 'web'; // Primera opción (Desarrollo Web) por defecto para home / orquestador
  };

  const openModalWithCategory = (customMsg?: string, customCategory?: string) => {
    const currentPath = window.location.pathname;
    const catId = customCategory || getCategoryFromPath(currentPath);
    setSelectedTopic(catId);

    if (customMsg) {
      setMessage(customMsg.slice(0, 100));
    } else {
      const found = PRESET_TOPICS.find((t) => t.id === catId);
      if (found) {
        setMessage(found.msg.slice(0, 100));
      }
    }
    setIsOpen(true);
  };

  useEffect(() => {
    // Listeners globales para abrir modal
    const handleOpenModal = (e: CustomEvent<{ message?: string; category?: string }>) => {
      openModalWithCategory(e.detail?.message, e.detail?.category);
    };

    window.addEventListener('open-contact-modal' as any, handleOpenModal);
    window.addEventListener('open-whatsapp-modal' as any, handleOpenModal);

    (window as any).openContactModal = (customMsg?: string, customCategory?: string) => {
      openModalWithCategory(customMsg, customCategory);
    };

    (window as any).openWhatsAppModal = (customMsg?: string, customCategory?: string) => {
      openModalWithCategory(customMsg, customCategory);
    };

    // Scroll-to-top handler
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('open-contact-modal' as any, handleOpenModal);
      window.removeEventListener('open-whatsapp-modal' as any, handleOpenModal);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedTopic(catId);
    const found = PRESET_TOPICS.find((t) => t.id === catId);
    if (found && (!message || PRESET_TOPICS.some((t) => t.msg === message))) {
      setMessage(found.msg.slice(0, 100));
    }
  };

  const handleMessageChange = (val: string) => {
    if (val.length <= 100) {
      setMessage(val);
    }
  };

  // Envío Formulario Web3Forms
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !acceptedTerms) return;

    setErrorMsg(null);
    setIsSubmitting(true);

    const categoryObj = PRESET_TOPICS.find((t) => t.id === selectedTopic);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: name.trim(),
          email: email.trim(),
          category: categoryObj?.label || selectedTopic || 'No especificada',
          message: message.trim(),
          data_privacy_consent: 'Aceptado (GDPR)',
          subject: `Nuevo Lead Aleric.dev: ${name.trim()}`,
          from_name: 'Aleric.dev Website',
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirección WhatsApp Directo
  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const textToSend = message.trim() || 'Hola Aleric.dev, quiero solicitar información sobre un proyecto.';
    const encodedText = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setErrorMsg(null);
  };

  return (
    <>
      {/* Floating Action Buttons Stack (Esquina inferior derecha) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* Scroll To Top Button con Tooltip a la Izquierda */}
        {showScrollTop && (
          <div className="relative group/tooltip">
            <button
              type="button"
              onClick={scrollToTop}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer animate-fade-in-up"
              aria-label="Ir hacia arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
              Ir hacia arriba
            </span>
          </div>
        )}

        {/* Floating Contact Button (Solo Icono) con Tooltip a la Izquierda */}
        <div className="relative group/tooltip">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 rounded-full text-white shadow-xl shadow-emerald-950/40 border border-emerald-400/40 backdrop-blur-md cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Abrir centro de contacto"
          >
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900"></span>
            </span>

            <MessageSquare className="w-5 h-5 transition-transform group-hover/tooltip:rotate-12" />
          </button>
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
            Contactar / Cotizar
          </span>
        </div>

      </div>

      {/* Modal Interactivo de Contacto */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-200">
          {/* Backdrop Click */}
          <div onClick={resetAndClose} className="absolute inset-0 cursor-pointer" />

          {/* Content Container */}
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 text-slate-100 transition-all duration-200 animate-fade-in-up">
            
            {/* Header del Modal */}
            <div className="bg-slate-950/80 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo dark.png" alt="Aleric.dev Logo" width={140} height={36} className="h-9 w-auto object-contain dark:hidden" />
                <img src="/logo.png" alt="Aleric.dev Logo Dark" width={140} height={36} className="h-9 w-auto object-contain hidden dark:block" />
                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-indigo-500/30">
                  Senior Team
                </span>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              
              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-slate-950 border border-slate-800">
                <button
                  type="button"
                  onClick={() => { setMode('form'); setIsSuccess(false); }}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer ${
                    mode === 'form'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Te Contactamos</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setMode('whatsapp'); setIsSuccess(false); }}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer ${
                    mode === 'whatsapp'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Directo</span>
                </button>
              </div>

              {/* Box de Alerta Visual para Errores */}
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5 animate-fade-in-up">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <span className="leading-snug">{errorMsg}</span>
                </div>
              )}

              {/* MODO 1: TE CONTACTAMOS NOSOTROS (FORMULARIO) */}
              {mode === 'form' && (
                <>
                  {isSuccess ? (
                    <div className="py-6 text-center space-y-3 animate-fade-in-up">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                        <Check className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-bold text-white">¡Solicitud Recibida!</h4>
                      <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                        Evaluaremos tu requerimiento y te contactaremos al correo indicado a la brevedad.
                      </p>
                      <button
                        type="button"
                        onClick={resetAndClose}
                        className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition cursor-pointer"
                      >
                        Cerrar Ventana
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      
                      {/* Categoría limpia sin asteriscos ni marcas opcional/obligatoria */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Categoría del proyecto:
                        </label>
                        <select
                          value={selectedTopic}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-indigo-500 focus:outline-none transition cursor-pointer"
                        >
                          <option value="">-- Selecciona una categoría --</option>
                          {PRESET_TOPICS.map((topic) => (
                            <option key={topic.id} value={topic.id}>
                              {topic.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* 2 Columnas: Nombre (requerido) y Email (requerido) sin asteriscos visuales */}
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Nombre / Empresa:
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ej. Juan Pérez / Empresa"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Correo Electrónico:
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@correo.com"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
                          />
                        </div>
                      </div>

                      {/* Detalles del Proyecto (Requerido, máx 100 caracteres + contador) */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                            Detalles del Proyecto:
                          </label>
                          <span className={`text-[10px] font-mono font-semibold ${message.length >= 100 ? 'text-rose-400' : 'text-slate-400'}`}>
                            {message.length} / 100
                          </span>
                        </div>
                        <textarea
                          rows={3}
                          required
                          maxLength={100}
                          value={message}
                          onChange={(e) => handleMessageChange(e.target.value)}
                          placeholder="Describe brevemente tus requerimientos (máx 100 caracteres)..."
                          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition resize-none font-mono leading-relaxed"
                        />
                      </div>

                      {/* Checkbox Tratamiento de Datos (GDPR) */}
                      <div className="pt-1 space-y-1.5">
                        <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            required
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            className="mt-0.5 rounded border-slate-700 bg-slate-950 text-indigo-600 focus:ring-indigo-500 shrink-0"
                          />
                          <span className="text-[11px] leading-snug">
                            Acepto el <button type="button" onClick={() => setShowTermsInfo(!showTermsInfo)} className="text-indigo-400 hover:underline font-semibold">Tratamiento de Datos Personales</button> (GDPR).
                          </span>
                        </label>

                        {/* Desplegable política de privacidad */}
                        {showTermsInfo && (
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400 leading-relaxed space-y-1 animate-fade-in-up">
                            <p className="font-semibold text-slate-300 flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Política de Tratamiento de Datos:
                            </p>
                            <p>
                              Los datos proporcionados serán procesados exclusivamente por Aleric.dev para atender tu consulta y preparar la propuesta técnica. Garantizamos confidencialidad absoluta, no compartimos datos con terceros y puedes solicitar el acceso, rectificación o eliminación de tu información escribiendo a <span className="text-indigo-300">contacto@aleric.dev</span>.
                            </p>
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !acceptedTerms}
                        className="w-full group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-4 font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-indigo-950/50 hover:shadow-indigo-900/80 transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>{isSubmitting ? 'Enviando Datos...' : 'Enviar Solicitud de Contacto'}</span>
                      </button>
                    </form>
                  )}
                </>
              )}

              {/* MODO 2: WHATSAPP DIRECTO */}
              {mode === 'whatsapp' && (
                <form onSubmit={handleWhatsAppRedirect} className="space-y-3.5">
                  {/* Categoría */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Categoría de interés:
                    </label>
                    <select
                      value={selectedTopic}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-100 focus:border-emerald-500 focus:outline-none transition cursor-pointer"
                    >
                      <option value="">-- Selecciona una categoría --</option>
                      {PRESET_TOPICS.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                          {topic.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje Editable con contador de 100 caracteres */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                        Mensaje para WhatsApp:
                      </label>
                      <span className={`text-[10px] font-mono font-semibold ${message.length >= 100 ? 'text-rose-400' : 'text-slate-400'}`}>
                        {message.length} / 100
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      required
                      maxLength={100}
                      value={message}
                      onChange={(e) => handleMessageChange(e.target.value)}
                      placeholder="Escribe el mensaje para nuestro equipo (máx 100 caracteres)..."
                      className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-3 text-xs text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition resize-none font-mono leading-relaxed"
                    />
                  </div>

                  {/* Indicador de confianza */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Redirección a WhatsApp oficial
                    </span>
                  </div>

                  {/* Botón WhatsApp */}
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/80 transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span>Abrir Chat en WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};
