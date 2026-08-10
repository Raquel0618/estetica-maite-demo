import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, Heart } from 'lucide-react';
import { SALON_INFO, PROFESSIONALS } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: (professionalId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios y Profesionales', href: '#servicios' },
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Contacto y Redes', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium shadow-inner flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-pink-200 animate-pulse hidden sm:inline" />
        <span>🌸 Tu espacio de estética, peluquería y uñas en Fuengirola — C/ Pérez de Ayala nº 6</span>
        <span className="hidden md:inline font-semibold opacity-90">| Cita previa recomendada</span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-pink-100'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-pink-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 border border-pink-300 flex items-center justify-center text-pink-700 shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-xl font-serif">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-pink-800 transition-colors">
                  Salón de Belleza <span className="text-pink-700 italic">Maite</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-pink-600 font-semibold -mt-1">
                  Fuengirola
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-pink-700 font-medium text-sm tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-600 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Direct Phone Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                  onBlur={() => setTimeout(() => setPhoneDropdownOpen(false), 200)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-pink-200 bg-pink-50/60 text-pink-800 hover:bg-pink-100 text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-pink-600" />
                  <span>Llamar a una especialista</span>
                </button>

                {phoneDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-pink-100 py-2 z-50 animate-fadeIn">
                    <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-pink-50">
                      Teléfonos directos por área:
                    </div>
                    {PROFESSIONALS.map((pro) => (
                      <a
                        key={pro.id}
                        href={`tel:${pro.phone}`}
                        className="flex items-center justify-between px-4 py-2.5 hover:bg-pink-50/70 transition-colors text-xs text-slate-700"
                      >
                        <div>
                          <span className="font-semibold text-slate-900 block">{pro.name}</span>
                          <span className="text-[11px] text-pink-700">{pro.role}</span>
                        </div>
                        <span className="font-mono text-pink-800 font-bold bg-pink-100/70 px-2 py-0.5 rounded text-[11px]">
                          {pro.formattedPhone}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Booking Button */}
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-700 via-rose-700 to-pink-800 text-white font-medium text-sm shadow-md hover:shadow-lg hover:from-pink-800 hover:to-rose-900 transition-all transform active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Pide tu cita</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="md:hidden px-3 py-1.5 rounded-full bg-pink-700 text-white text-xs font-medium flex items-center gap-1 shadow"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Cita</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-pink-50 transition-colors focus:outline-none"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-pink-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 border-b border-pink-100 shadow-xl py-4 px-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 font-medium py-2 px-3 rounded-xl hover:bg-pink-50 text-sm transition-colors border-l-2 border-transparent hover:border-pink-600"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-pink-100 space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3">
                  Contactar por Especialidad
                </p>
                {PROFESSIONALS.map((pro) => (
                  <a
                    key={pro.id}
                    href={`tel:${pro.phone}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 text-xs text-slate-800"
                  >
                    <span>
                      <strong className="text-pink-900">{pro.name}</strong> ({pro.specialty.toUpperCase()})
                    </span>
                    <span className="font-mono font-bold text-pink-800">{pro.formattedPhone}</span>
                  </a>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-pink-700 to-rose-700 text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Pide tu Cita Previa</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
