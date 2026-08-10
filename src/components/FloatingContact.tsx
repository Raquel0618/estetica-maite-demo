import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, X, Sparkles } from 'lucide-react';
import { PROFESSIONALS } from '../data/salonData';

interface FloatingContactProps {
  onOpenBooking: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenBooking }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3">
      {/* Expanded Quick Call Options */}
      {expanded && (
        <div className="bg-white rounded-2xl shadow-2xl border border-pink-200 p-3 space-y-2 animate-fadeIn max-w-xs">
          <div className="flex items-center justify-between pb-2 border-b border-pink-100 text-xs font-bold text-slate-800">
            <span className="flex items-center gap-1 text-pink-700">
              <Sparkles className="w-3.5 h-3.5" />
              Llamar a un área:
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {PROFESSIONALS.map((pro) => (
            <a
              key={pro.id}
              href={`tel:${pro.phone}`}
              className="flex items-center justify-between p-2 rounded-xl bg-pink-50/70 hover:bg-pink-100/80 transition-colors text-xs text-slate-800"
            >
              <div>
                <span className="font-bold text-slate-900 block">{pro.name}</span>
                <span className="text-[10px] text-pink-700">{pro.role}</span>
              </div>
              <span className="font-mono font-bold text-pink-900 bg-white px-2 py-0.5 rounded text-[11px] border border-pink-100">
                {pro.formattedPhone}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Trigger Buttons Group */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-3.5 rounded-full bg-pink-700 text-white shadow-xl hover:bg-pink-800 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-xs font-semibold"
          title="Llamada directa"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Teléfonos Directos</span>
        </button>

        <button
          onClick={onOpenBooking}
          className="px-5 py-3.5 rounded-full bg-gradient-to-r from-rose-800 to-pink-800 text-white font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <Calendar className="w-4 h-4 text-pink-200" />
          <span>Pide tu Cita</span>
        </button>
      </div>
    </div>
  );
};
