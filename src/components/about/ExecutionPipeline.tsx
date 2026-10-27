import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Activity, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';
import { pipelineStagesData } from '../../data/about';
import type { PipelineStageItem } from '../../types/about';

export const ExecutionPipeline: React.FC = () => {
  const getStageIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-white' };
    switch (iconName) {
      case 'Search': return <Search {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      default: return <Search {...props} />;
    }
  };

  return (
    <div className="relative rounded-3xl p-7 sm:p-10 lg:p-12 bg-gradient-to-br from-[#041E40] via-[#062A56] to-[#03152E] text-white shadow-2xl border border-slate-700/60 overflow-hidden">
      {/* Background Energy Blooms */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-semibold tracking-wide">
          <span>PROJECT LIFECYCLE ROADMAP</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          From Ideas to Implementation
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Our integrated pathway moves promising clean hydrogen initiatives from initial theoretical modeling all the way to bankable utility deployment.
        </p>

        {/* Philosophy Monospace Pill */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 font-mono text-xs sm:text-sm text-cyan-300 tracking-wider">
            <span>Research</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            <span>Innovation</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            <span>Demonstration</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            <span>Investment</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-bold">Commercialization</span>
          </div>
        </div>
      </div>

      {/* Progressive 5-Stage Stepper Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
        {pipelineStagesData.map((stage: PipelineStageItem, idx) => (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative p-5 rounded-2xl bg-slate-900/70 border border-slate-700/70 hover:border-cyan-400/80 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Step Number & Node Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-400/20">
                  0{stage.step}
                </span>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#094792] to-emerald-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  {getStageIcon(stage.iconName)}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {stage.title}
              </h4>
              <p className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">
                {stage.subtitle}
              </p>

              {/* Description */}
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                {stage.description}
              </p>
            </div>

            {/* Bottom Accent Line */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Phase {stage.step}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExecutionPipeline;

