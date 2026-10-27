import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Sparkles, CheckCircle2 } from 'lucide-react';
import { focusSpotlightsData } from '../../data/focus';
import type { FocusSpotlightItem } from '../../types/focus';

export const FocusSpotlight: React.FC = () => {
  const getSpotlightIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-cyan-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-300" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide">
          <span>MACRO TRANSFORMATION PILLARS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight">
          Strategic Impact on Sri Lanka’s Economy
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Targeting the highest-leverage intersections where clean hydrogen delivers immediate economic sovereignty, industrial decarbonization, and foreign exchange generation.
        </p>
      </div>

      {/* 3 Spotlight Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
        {focusSpotlightsData.map((spotlight: FocusSpotlightItem, idx) => (
          <motion.div
            key={spotlight.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative rounded-3xl p-7 sm:p-8 bg-gradient-to-br ${spotlight.accentGradient} text-white shadow-xl border border-slate-700/60 overflow-hidden flex flex-col justify-between`}
          >
            {/* Subtle Atmospheric Energy Aura */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-500" />

            <div className="relative z-10 space-y-4">
              {/* Header Icon & Stat Pill */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {getSpotlightIcon(spotlight.iconName)}
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-white tracking-tight">
                    {spotlight.stat}
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-cyan-300">
                    {spotlight.statLabel}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                  {spotlight.subtitle}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {spotlight.title}
                </h4>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {spotlight.description}
              </p>
            </div>

            {/* Strategic Bullets */}
            <div className="relative z-10 mt-6 pt-5 border-t border-slate-700/70 space-y-2.5">
              {spotlight.points.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-xs text-slate-200 leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FocusSpotlight;

