import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, MessageCircle, Sparkles, CheckCircle } from 'lucide-react';
import { PROFESSIONALS } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProfessionalId?: string;
  defaultServiceName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultProfessionalId,
  defaultServiceName,
}) => {
  const [selectedProId, setSelectedProId] = useState<string>(defaultProfessionalId || 'rocio');
  const [service, setService] = useState<string>(defaultServiceName || '');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('11:00');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (defaultProfessionalId) {
      setSelectedProId(defaultProfessionalId);
    }
    if (defaultServiceName) {
      setService(defaultServiceName);
    }
  }, [defaultProfessionalId, defaultServiceName]);

  if (!isOpen) return null;

  const currentPro = PROFESSIONALS.find((p) => p.id === selectedProId) || PROFESSIONALS[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `Hola ${currentPro.name}, me gustaría pedir cita en Salón de Belleza Maite:
• Servicio: ${service || 'Consulta General'}
• Fecha preferida: ${date || 'A convenir'}
• Hora preferida: ${time || 'Cualquiera'}
• Nombre cliente: ${name || 'Sin especificar'}
• Teléfono: ${phone || 'Sin especificar'}
${notes ? `• Notas: ${notes}` : ''}`;

    const whatsappUrl = `https://wa.me/34${currentPro.phone}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleCallBooking = () => {
    window.location.href = `tel:${currentPro.phone}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-pink-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-pink-800 via-rose-800 to-pink-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-200 mb-1">
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span>Reserva Rápida de Cita Previa</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Pide tu Cita en Salón Maite
          </h3>
          <p className="text-pink-100 text-xs font-light mt-1">
            C/ Pérez de Ayala nº 6, Fuengirola
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-900">
                ¡Solicitud enviada!
              </h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Se ha abierto la conversación con <strong>{currentPro.name}</strong> en WhatsApp para confirmar la hora exacta de tu cita.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-pink-700 text-white font-medium text-sm shadow hover:bg-pink-800 transition-colors"
              >
                Volver al sitio
              </button>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              {/* Specialist Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Selecciona la Especialista / Área:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PROFESSIONALS.map((pro) => (
                    <button
                      key={pro.id}
                      type="button"
                      onClick={() => setSelectedProId(pro.id)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col items-center text-center ${
                        selectedProId === pro.id
                          ? 'border-pink-600 bg-pink-50/90 text-pink-900 ring-2 ring-pink-500/30'
                          : 'border-slate-200 hover:border-pink-200 text-slate-700'
                      }`}
                    >
                      <span className="font-bold text-sm block">{pro.name}</span>
                      <span className="text-[10px] text-pink-700 font-medium">
                        {pro.specialty === 'peluqueria' && 'Peluquería'}
                        {pro.specialty === 'estetica' && 'Estética'}
                        {pro.specialty === 'unas' && 'Uñas'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  2. Servicio deseado:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Depilación Láser SHR, Corte y Mechas, Uñas Gel..."
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-sm outline-none transition-all"
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Fecha preferida:
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-pink-500 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Hora orientativa:
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-pink-500 text-sm outline-none bg-white"
                  >
                    <option value="10:00">10:00 h</option>
                    <option value="11:30">11:30 h</option>
                    <option value="13:00">13:00 h</option>
                    <option value="16:00">16:00 h</option>
                    <option value="17:30">17:30 h</option>
                    <option value="18:30">18:30 h</option>
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Tu Nombre:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-pink-500 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Tu Teléfono:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-pink-500 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar por WhatsApp a {currentPro.name}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCallBooking}
                  className="w-full py-2.5 rounded-2xl bg-pink-50 hover:bg-pink-100 text-pink-900 border border-pink-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-pink-700" />
                  <span>O llamar directamente al {currentPro.formattedPhone}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
