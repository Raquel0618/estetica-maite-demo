import React, { useState } from 'react';
import { Tag, Sparkles, Check, Gift, Zap, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { PRICING_CATEGORIES } from '../data/salonData';

interface RatesSectionProps {
  onOpenBooking: (professionalId?: string, serviceName?: string) => void;
}

export const RatesSection: React.FC<RatesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('laser-shr');

  const currentCategory = PRICING_CATEGORIES.find((cat) => cat.id === activeTab) || PRICING_CATEGORIES[0];

  return (
    <section id="tarifas" className="py-20 bg-rose-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            Transparencia & Mejores Precios
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mb-4">
            Tarifas y Precios Oficiales
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Consulta nuestras tarifas transparentes sin sorpresas y descubre nuestras promociones en bonos de depilación láser SHR.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {PRICING_CATEGORIES.map((category) => {
            const isActive = category.id === activeTab;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-800 to-rose-800 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-pink-100/60 border border-pink-100 shadow-2xs'
                }`}
              >
                <span>{category.title}</span>
                {category.id === 'laser-shr' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-400 text-slate-950 font-extrabold uppercase tracking-wide">
                    Láser SHR
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Header */}
        <div className="bg-white rounded-3xl border border-pink-100 shadow-md p-6 sm:p-10 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-pink-100">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold mb-2">
                {currentCategory.badge}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {currentCategory.title}
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                {currentCategory.subtitle}
              </p>
            </div>

            <button
              onClick={() => onOpenBooking(currentCategory.id === 'peluqueria' ? 'rocio' : currentCategory.id === 'unas' ? 'arantxa' : 'maribel')}
              className="self-start md:self-center px-6 py-3 rounded-2xl bg-pink-700 hover:bg-pink-800 text-white font-medium text-sm shadow flex items-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Consultar / Pedir Cita</span>
            </button>
          </div>

          {/* Featured Packs (Specifically for Depilación Láser SHR Completo Mujer & Hombre) */}
          {currentCategory.featuredPacks && (
            <div className="my-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                Packs Estrella Depilación Láser SHR (Folleto Oficial)
              </h4>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentCategory.featuredPacks.map((pack, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl p-6 border-2 transition-all ${
                      pack.popular
                        ? 'border-pink-500 bg-gradient-to-br from-pink-50/90 via-white to-rose-50/50 shadow-md'
                        : 'border-pink-200 bg-white shadow-xs'
                    }`}
                  >
                    {pack.popular && (
                      <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-pink-600 text-white text-[11px] font-bold uppercase tracking-wider shadow">
                        ★ Más Solicitado
                      </span>
                    )}

                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="font-serif text-2xl font-bold text-slate-900">
                          {pack.name}
                        </h5>
                        <p className="text-xs text-slate-600 mt-1 max-w-sm">
                          {pack.description}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="block text-2xl font-extrabold text-pink-800">
                          {pack.singlePrice}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">/ sesión suelta</span>
                      </div>
                    </div>

                    {/* Bonus Option Box */}
                    {pack.bonusPrice && (
                      <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Gift className="w-5 h-5 text-pink-700 shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-slate-900 block">
                              Opción Bono Especial: {pack.bonusPrice}
                            </span>
                            <span className="text-[11px] text-pink-800 font-medium">
                              {pack.bonusSessions}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => onOpenBooking('maribel', `Bono ${pack.name}`)}
                          className="px-3.5 py-1.5 rounded-lg bg-pink-800 hover:bg-pink-900 text-white text-xs font-semibold shadow-xs"
                        >
                          Reservar Bono
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Table / List */}
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
              Desglose de Tarifas Individuales:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-2xl bg-pink-50/40 hover:bg-pink-50 border border-pink-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span>
                    <span className="text-sm font-medium text-slate-800">{item.name}</span>
                  </div>

                  <div className="text-right pl-4">
                    <span className="text-sm font-bold font-mono text-pink-900 bg-white px-2.5 py-1 rounded-lg border border-pink-100 shadow-2xs">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Nota sobre valoraciones:</strong> Para casos particulares o zonas combinadas, nuestras especialistas realizan un diagnóstico y presupuesto personalizado gratuito antes del tratamiento.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
