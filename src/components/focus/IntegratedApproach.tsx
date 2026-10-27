import React from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Zap,
  Truck,
  Sparkles,
  LineChart,
  Rocket,
  ChevronRight,
} from 'lucide-react';
import { approachStepsData } from '../../data/focus';
import type { ApproachStepItem } from '../../types/focus';
import { cn } from '../../utils/cn';

export const IntegratedApproach: React.FC = () => {
  const approachPillSteps = [
    { name: 'Renewable Energy', isLast: false },
    { name: 'Green Hydrogen', isLast: false },
    { name: 'Applications', isLast: false },
    { name: 'Power-to-X', isLast: false },
    { name: 'Investment', isLast: false },
    { name: 'Commercialization', isLast: true },
  ];

  const getStepIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-white' };
    switch (iconName) {
      case 'Sun': return <Sun {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'LineChart': return <LineChart {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      default: return <Zap {...props} />;
    }
  };

  return (
    <div className="relative rounded-3xl p-5 sm:p-8 lg:p-12 bg-gradient-to-br from-[#041E40] via-[#062A56] to-[#03152E] text-white shadow-2xl border border-slate-700/60 overflow-hidden">
      {/* Background Energy Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Header & Motto */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-semibold tracking-wide">
          <span>OUR INTEGRATED APPROACH</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          From Concept to Practical Value
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Through this end-to-end framework, H2 Lanka transforms green hydrogen from an emerging technology into practical, bankable projects that create measurable environmental, economic, and social value.
        </p>

        {/* Responsive Sequential Monospace Conduit */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 px-3.5 sm:px-4 py-2 sm:py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 font-mono text-[11px] sm:text-xs md:text-sm text-cyan-300 tracking-wider max-w-full shadow-inner">
            {approachPillSteps.map((step) => (
              <span
                key={step.name}
                className={cn(
                  'inline-flex items-center gap-1.5 whitespace-nowrap',
                  step.isLast ? 'text-emerald-400 font-bold' : 'text-cyan-300'
                )}
              >
                <span>{step.name}</span>
                {!step.isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 6-Stage Conduit Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {approachStepsData.map((stepItem: ApproachStepItem, idx) => (
          <motion.div
            key={stepItem.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group relative p-5 rounded-2xl bg-slate-900/70 border border-slate-700/70 hover:border-cyan-400/80 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Step Number & Node Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-400/20">
                  0{stepItem.step}
                </span>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#094792] to-emerald-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  {getStepIcon(stepItem.iconName)}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {stepItem.title}
              </h4>
              <p className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">
                {stepItem.subtitle}
              </p>

              {/* Description */}
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                {stepItem.description}
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Step 0{stepItem.step}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedApproach;

