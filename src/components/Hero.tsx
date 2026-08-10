import React from 'react';
import { Calendar, Phone, MapPin, Sparkles, Heart, ChevronDown, Award, Star } from 'lucide-react';
import heroBg from '../assets/images/lotus_flower_bg_1785510350982.jpg';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-rose-watercolor">
      {/* Background Hero Image with Soft Watercolor Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Salón de Belleza Maite Flor de Loto Aesthetica"
          className="w-full h-full object-cover object-center opacity-45 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf5f7]/80 via-[#fcf5f7]/60 to-[#fcf5f7]"></div>
      </div>

      {/* Decorative Subtle Floral & Butterfly Blur Accents */}
      <div className="absolute top-12 left-6 md:left-20 w-48 h-48 bg-pink-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 md:right-24 w-64 h-64 bg-rose-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Main Typography & Team Info - directly over background */}
        <div className="max-w-3xl mx-auto mb-10">
          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4 leading-tight drop-shadow-xs">
            Salón de Belleza <span className="text-[#e07a8b] italic">Maite</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl mx-auto text-lg sm:text-2xl text-slate-800 font-serif italic mb-8 drop-shadow-xs">
            Tu espacio de belleza y cuidado personal en <strong className="font-semibold text-slate-900 not-italic">Fuengirola</strong>
          </p>

          {/* Team Teaser Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-pink-200/80 text-slate-800 text-xs sm:text-sm font-medium shadow-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
              <span><strong>Peluquería:</strong> Rocío</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 text-slate-800 text-xs sm:text-sm font-medium shadow-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span><strong>Estética:</strong> Maribel</span>
            </span>
            <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-fuchsia-200/80 text-slate-800 text-xs sm:text-sm font-medium shadow-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500"></span>
              <span><strong>Uñas:</strong> Arantxa</span>
            </span>
          </div>
        </div>

        {/* Primary Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          {/* Main Booking Button (Dark Pink / Rose Deep) */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#e07a8b] via-pink-700 to-[#9d174d] text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:from-pink-700 hover:to-rose-900 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5 text-pink-100" />
            <span>Pide tu cita</span>
          </button>

          {/* Secondary Rates / Contact Scroll Button */}
          <a
            href="#tarifas"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-pink-50 text-slate-800 border border-pink-200 font-semibold text-base shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
          >
            <span>Ver Tarifas</span>
            <ChevronDown className="w-4 h-4 text-[#e07a8b]" />
          </a>
        </div>

        {/* Quick Features / Trust Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-pink-200/60">
          <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-pink-100 shadow-2xs">
            <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-[#e07a8b]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-xs text-slate-500">Ubicación céntrica</span>
              <span className="text-xs font-bold text-slate-800">{SALON_INFO.addressShort}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-pink-100 shadow-2xs">
            <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-[#e07a8b]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-xs text-slate-500">Tecnología Avance</span>
              <span className="text-xs font-bold text-slate-800">Depilación Láser SHR</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-pink-100 shadow-2xs">
            <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-[#e07a8b]">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-xs text-slate-500">Trato Familiar</span>
              <span className="text-xs font-bold text-slate-800">Atención 100% Personalizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

