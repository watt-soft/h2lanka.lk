import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const VisionMissionCards: React.FC = () => {
  const visionHighlights = [
    'Leading platform for green hydrogen & renewable energy integration',
    'Catalyzing a competitive, low-carbon clean economy across South Asia',
    'Connecting clean power, electrolysis, transport, and Power-to-X',
  ];

  const missionBridges = [
    'Research & Technology',
    'Policy & Regulation',
    'Capital Investment',
    'Commercial Deployment',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="group relative rounded-3xl p-7 sm:p-9 lg:p-10 bg-gradient-to-br from-[#062A56] via-[#083870] to-[#041E40] text-white shadow-xl shadow-slate-900/10 border border-slate-700/50 overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle Atmospheric Energy Aura */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Top Header Badge & Icon */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Future Direction
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our Vision
            </h3>
            <p className="mt-3 text-emerald-200/90 text-sm sm:text-base font-semibold leading-relaxed">
              To become a leading Sri Lankan platform for green hydrogen, renewable energy integration, and clean-energy technology.
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            Our vision is to establish hydrogen as an indispensable pillar of Sri Lanka’s clean energy economy by connecting renewable power harvesting, green electrolysis production, storage, sustainable mobility, industrial decarbonization, and emerging Power-to-X technologies.
          </p>

          <div className="pt-2 space-y-2.5 border-t border-slate-700/60">
            {visionHighlights.map((hl) => (
              <div key={hl} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-emerald-300/80">
          <span className="font-medium tracking-wide">Pioneering Sri Lanka’s Regional Clean Energy Platform</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-emerald-400" />
        </div>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="group relative rounded-3xl p-7 sm:p-9 lg:p-10 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 text-slate-900 shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle Atmospheric Energy Aura */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-[#094792]/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Top Header Badge & Icon */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#094792]/10 text-[#083870] border border-[#094792]/20">
              Operational Mandate
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#094792]/10 border border-[#094792]/20 flex items-center justify-center text-[#094792] shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Target className="w-6 h-6" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062A56] tracking-tight">
              Our Mission
            </h3>
            <p className="mt-3 text-[#094792] text-sm sm:text-base font-semibold leading-relaxed">
              Providing practical, commercially viable, and technically sound clean hydrogen solutions.
            </p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            We bridge the gap between research, technology, policy, investment, and commercial implementation, empowering industries to slash fossil-fuel reliance and transforming promising hydrogen technologies from concept into real-world, bankable operations.
          </p>

          <div className="pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Bridging Crucial Stages:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {missionBridges.map((bridge) => (
                <div
                  key={bridge}
                  className="px-3 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-[#083870] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                  <span>{bridge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <span className="font-medium tracking-wide text-[#094792]">From Demonstration to Industrial Scale</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#094792]" />
        </div>
      </motion.div>
    </div>
  );
};

export default VisionMissionCards;

