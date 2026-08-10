import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, CheckCircle2, Scissors, Sparkle, Heart } from 'lucide-react';
import { PROFESSIONALS } from '../data/salonData';

interface TeamSectionProps {
  onOpenBooking: (professionalId: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="servicios" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Floral Accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Nuestras Especialistas
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mb-4">
            Servicios y Profesionales
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            En el Salón de Belleza Maite cada área está liderada por una profesional apasionada para garantizarte resultados excepcionales y una atención cercana.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFESSIONALS.map((pro) => (
            <div
              key={pro.id}
              className="bg-[#FFFDFE] rounded-3xl border border-pink-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Image & Header Overlay */}
              <div className="relative h-64 overflow-hidden bg-pink-50">
                <img
                  src={pro.image}
                  alt={`Especialista ${pro.name} - ${pro.role}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Role Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${pro.avatarBg}`}>
                    {pro.role}
                  </span>
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold leading-snug">
                    {pro.specialty === 'peluqueria' && 'Peluquería'}
                    {pro.specialty === 'estetica' && 'Estética'}
                    {pro.specialty === 'unas' && 'Uñas'}
                    <span className="block text-pink-200 text-lg font-normal italic">
                      A cargo de {pro.name}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {pro.bio}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Especialidades Destacadas:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {pro.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Phone & Action Controls */}
                <div className="pt-4 border-t border-pink-100 space-y-3">
                  {/* Phone Call Box */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-pink-700 text-white flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-semibold block">Teléfono directo</span>
                        <a
                          href={`tel:${pro.phone}`}
                          className="font-mono text-sm font-bold text-pink-900 hover:underline"
                        >
                          {pro.formattedPhone}
                        </a>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/34${pro.phone}?text=${encodeURIComponent(`Hola ${pro.name}, me gustaría pedir cita para un servicio de ${pro.role} en Salón de Belleza Maite.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-1 text-xs font-medium"
                      title="Escribir por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>

                  {/* Booking Trigger */}
                  <button
                    onClick={() => onOpenBooking(pro.id)}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-800 to-rose-800 hover:from-pink-900 hover:to-rose-900 text-white font-semibold text-sm shadow transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Pedir Cita con {pro.name}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
