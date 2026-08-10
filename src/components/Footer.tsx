import React from 'react';
import { Heart, MapPin, Phone, Instagram, Facebook, ArrowUp, Calendar } from 'lucide-react';
import { SALON_INFO, PROFESSIONALS } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative pt-16 pb-12 overflow-hidden">
      {/* Decorative floral watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-pink-600 text-white flex items-center justify-center font-serif text-lg font-bold">
                M
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Salón de Belleza <span className="text-pink-400 italic">Maite</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Tu espacio de estética, peluquería y uñas de confianza en Fuengirola. Nos apasiona cuidar de ti con un trato personalizado y las mejores tecnologías.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SALON_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="text-pink-500">🌸</span> Menú Principal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-pink-300 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-pink-300 transition-colors">Servicios y Profesionales</a>
              </li>
              <li>
                <a href="#tarifas" className="hover:text-pink-300 transition-colors">Tarifas y Depilación Láser</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-pink-300 transition-colors">Contacto y Redes Oficiales</a>
              </li>
            </ul>
          </div>

          {/* Direct Phones */}
          <div>
            <h4 className="font-serif text-white font-bold text-base mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-500" /> Directos por Área
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PROFESSIONALS.map((p) => (
                <li key={p.id} className="flex items-center justify-between">
                  <span className="text-slate-400">
                    <strong>{p.name}</strong> ({p.specialty.toUpperCase()})
                  </span>
                  <a
                    href={`tel:${p.phone}`}
                    className="font-mono text-pink-400 font-semibold hover:underline"
                  >
                    {p.formattedPhone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Invitation */}
          <div>
            <h4 className="font-serif text-white font-bold text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-500" /> Te esperamos
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              {SALON_INFO.address}
            </p>
            <p className="text-xs text-pink-300/90 italic font-serif mb-4">
              "Ven a visitarnos y regálate un momento de paz, cuidado y belleza hecho a tu medida."
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 rounded-xl bg-pink-700 hover:bg-pink-800 text-white font-semibold text-xs shadow transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Pedir Cita Previa</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Salón de Belleza Maite. Todos los derechos reservados. Fuengirola, Málaga.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-pink-400 transition-colors group"
          >
            <span>Volver arriba</span>
            <div className="p-1 rounded-full bg-slate-800 group-hover:bg-pink-700 text-slate-300 group-hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
