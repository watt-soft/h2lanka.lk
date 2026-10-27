import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Handshake, Compass, CheckCircle2 } from 'lucide-react';
import { strategicPillarsData } from '../../data/about';
import type { StrategicPillarItem } from '../../types/about';

export const StrategicPillars: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-[#094792]" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-[#00B4D8]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-600" />;
      default:
        return <Microscope className="w-6 h-6 text-[#094792]" />;
    }
  };

  const getAccentBorder = (accent: 'blue' | 'cyan' | 'green') => {
    switch (accent) {
      case 'blue': return 'border-t-4 border-t-[#094792] hover:border-[#094792]/40';
      case 'cyan': return 'border-t-4 border-t-[#00B4D8] hover:border-[#00B4D8]/40';
      case 'green': return 'border-t-4 border-t-emerald-500 hover:border-emerald-500/40';
    }
  };

  const getIconContainerStyle = (accent: 'blue' | 'cyan' | 'green') => {
    switch (accent) {
      case 'blue': return 'bg-blue-50 border-blue-100';
      case 'cyan': return 'bg-cyan-50 border-cyan-100';
      case 'green': return 'bg-emerald-50 border-emerald-100';
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide">
          <span>STRATEGIC FOUNDATIONS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight">
          Pillars of Sustainable Growth
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Grounding our operational framework in rigorous engineering, world-class international alliances, and a clear national mandate for Sri Lanka.
        </p>
      </div>

      {/* 3 Strategic Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
        {strategicPillarsData.map((pillar: StrategicPillarItem, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${getAccentBorder(pillar.accentColor)}`}
          >
            <div>
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-xs ${getIconContainerStyle(pillar.accentColor)}`}>
                {getPillarIcon(pillar.iconName)}
              </div>

              {/* Title & Subtitle */}
              <h4 className="text-xl font-bold text-[#062A56] tracking-tight leading-snug">
                {pillar.title}
              </h4>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Strategic Highlights */}
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#062A56]">
                Key Focus:
              </div>
              {pillar.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StrategicPillars;

