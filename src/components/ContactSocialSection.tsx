import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, ExternalLink, MessageCircle, Navigation, Sparkles } from 'lucide-react';
import { SALON_INFO, PROFESSIONALS } from '../data/salonData';
import fuengirolaMapImg from '../assets/images/fuengirola_map_salon_1785512361012.jpg';

export const ContactSocialSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-white relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" />
            Contacto & Redes Oficiales
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mb-4">
            Estamos encantadas de atenderte
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Contacta directamente con la especialista de tu elección o visítanos en nuestro salón en Fuengirola.
          </p>
        </div>

        {/* Top Grid: Direct Phones & Salon Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Direct Phone Numbers by Area (Highlighted Card) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-pink-900 via-rose-900 to-pink-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Subtle Floral watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-serif pointer-events-none">🌸</div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-800/80 border border-pink-700 text-pink-200 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atención directa por especialistas</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-white">
                Teléfonos de Contacto Directo
              </h3>
              <p className="text-pink-200 text-sm font-light mb-6">
                Llama directamente a la profesional encargada de tu servicio para resolver dudas o agendar tu hora:
              </p>

              <div className="space-y-4">
                {PROFESSIONALS.map((pro) => (
                  <div
                    key={pro.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink-700/80 flex items-center justify-center text-white border border-pink-500/30">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">
                          {pro.specialty === 'peluqueria' && 'Peluquería'}
                          {pro.specialty === 'estetica' && 'Estética'}
                          {pro.specialty === 'unas' && 'Uñas'}
                          <span className="font-normal text-pink-200 text-sm"> ({pro.name})</span>
                        </div>
                        <span className="text-xs text-pink-300">{pro.role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <a
                        href={`tel:${pro.phone}`}
                        className="px-4 py-2 rounded-xl bg-white text-pink-900 font-mono font-bold text-sm hover:bg-pink-100 transition-colors shadow-xs flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-pink-700" />
                        <span>{pro.formattedPhone}</span>
                      </a>

                      <a
                        href={`https://wa.me/34${pro.phone}?text=${encodeURIComponent(`Hola ${pro.name}, me gustaría información o pedir cita en Salón de Belleza Maite.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                        title="Enviar WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-pink-800/80 text-xs text-pink-200/80 text-center sm:text-left">
              📍 Ubicado en el corazón de Fuengirola • C/ Pérez de Ayala nº 6
            </div>
          </div>

          {/* Location & Opening Hours Card */}
          <div className="lg:col-span-5 bg-[#FFFDFE] rounded-3xl border border-pink-100 p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-pink-700" />
                <span>Ubicación y Horarios</span>
              </h3>

              {/* Address Box */}
              <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-100">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-800 block mb-1">
                  Dirección Física:
                </span>
                <p className="text-slate-800 font-medium text-base">
                  {SALON_INFO.address}
                </p>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-pink-700 hover:text-pink-900 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Cómo llegar en Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Opening Hours Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-pink-700" />
                  <span>Horario de Atención:</span>
                </span>

                <div className="space-y-2 text-sm text-slate-700">
                  {SALON_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-0.5 border-b border-slate-100 last:border-0">
                      <span className="font-medium text-slate-800">{h.days}</span>
                      <span className="font-mono text-pink-800 font-bold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Real Interactive Fuengirola Google Map */}
            <div className="mt-6 rounded-2xl overflow-hidden border-2 border-pink-200 relative bg-pink-50 shadow-sm flex flex-col">
              <div className="bg-pink-100/80 px-4 py-2 border-b border-pink-200 flex items-center justify-between text-xs font-medium text-pink-900">
                <span className="flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-pink-700" />
                  Mapa de Fuengirola (C/ Pérez de Ayala nº 6)
                </span>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-pink-700 hover:text-pink-900 underline flex items-center gap-1"
                >
                  <span>Abrir App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative h-48 w-full bg-rose-50">
                <iframe
                  title="Mapa Salón de Belleza Maite Fuengirola"
                  src="https://maps.google.com/maps?q=Calle%20Perez%20de%20Ayala%206,%2029640%20Fuengirola,%20Malaga,%20Spain&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Big Prominent Official Social Media Section */}
        <div className="bg-gradient-to-r from-pink-100/80 via-rose-50 to-pink-100/80 rounded-3xl p-8 sm:p-12 border border-pink-200 text-center">
          <span className="text-pink-600 text-sm font-serif italic mb-2 block">
            ¡Síguenos y descubre nuestros últimos trabajos!
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Redes Sociales Oficiales
          </h3>
          <p className="max-w-xl mx-auto text-slate-600 text-sm sm:text-base mb-8">
            Mira nuestras transformaciones de cabello, diseños de uñas semipermanentes y antes/después de estética en nuestras cuentas oficiales:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Facebook Large Button */}
            <a
              href={SALON_INFO.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white hover:bg-blue-50/50 border-2 border-blue-200 shadow-md hover:shadow-xl transition-all flex items-center gap-4 text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Facebook className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block">Facebook Oficial</span>
                <h4 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-blue-700 transition-colors">
                  Síguenos en Facebook
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  {SALON_INFO.facebook.handle}
                </span>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* Instagram Large Button */}
            <a
              href={SALON_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white hover:bg-pink-50/50 border-2 border-pink-300 shadow-md hover:shadow-xl transition-all flex items-center gap-4 text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 block">Instagram Oficial</span>
                <h4 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-pink-700 transition-colors">
                  Descubre nuestros trabajos
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  {SALON_INFO.instagram.handle}
                </span>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-pink-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
