import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, CheckCircle2 } from 'lucide-react';

export const VisionMissionCards: React.FC = () => {
  const missionItems = [
    'Develop commercially viable green hydrogen projects.',
    'Promote hydrogen mobility and hydrogen-powered transport solutions.',
    'Support green ammonia production for export and industrial use.',
    "Facilitate technology transfer, investment, and capacity building in Sri Lanka's hydrogen sector.",
    "Contribute to achieving Sri Lanka's net-zero and renewable energy goals.",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
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

        {/* Top Header Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-2xl lg:text-2xl sm:text-lg font-semibold tracking-wide uppercase">
            <Compass className="w-5 h-5 text-emerald-400" />
            <span>Our Vision</span>
          </div>
        </div>

        {/* Vertically Centered Core Statement */}
        <div className="relative z-10 my-auto py-6 sm:py-8">
          <p className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-white leading-relaxed tracking-tight">
            “To position <span className="text-emerald-300 font-bold">Sri Lanka</span> as a regional hub for green hydrogen production and utilization while contributing to national energy security, industrial decarbonization, and sustainable economic growth.”
          </p>
        </div>

        {/* Bottom Strategic Focus Pillars */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {/* {visionTags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-lg bg-white/10 text-emerald-100/90 border border-white/10 backdrop-blur-xs"
            >
              {tag}
            </span>
          ))} */}
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

        {/* Top Header Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#094792]/10 border border-[#094792]/20 text-[#083870] text-base lg:text-2xl sm:text-lg font-semibold tracking-wide uppercase">
            <Target className="w-5 h-5 text-[#094792]" />
            <span>Our Mission</span>
          </div>
        </div>

        {/* Mission Strategic Objectives List */}
        <div className="relative z-10 my-auto py-5 sm:py-6">
          <ul className="space-y-3.5 sm:space-y-4">
            {missionItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-slate-700">
                <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Alignment Subtext */}
        <div className="relative z-10 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-medium">
          {/* <span>Aligned with National Climate & Net-Zero Roadmap</span> */}
          {/* <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default VisionMissionCards;

