import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Compass, Globe2 } from 'lucide-react';
import { aboutMetricsData } from '../../data/about';

export const AboutHeader: React.FC = () => {
  const metricIcons = [
    <Sparkles key="1" className="w-5 h-5 text-emerald-600" />,
    <Compass key="2" className="w-5 h-5 text-[#00B4D8]" />,
    <Globe2 key="3" className="w-5 h-5 text-[#094792]" />,
    <Shield key="4" className="w-5 h-5 text-emerald-700" />,
  ];

  return (
    <div className="relative max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
      {/* Eyebrow Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#083870] text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide shadow-xs max-w-full"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="sm:hidden whitespace-nowrap">ABOUT H2 LANKA</span>
        <span className="hidden sm:inline whitespace-nowrap">ABOUT H2 LANKA • CATALYZING CLEAN ENERGY</span>
      </motion.div>

      {/* Main Section Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#062A56] tracking-tight leading-[1.12]"
      >
        Pioneering Sri Lanka’s{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#00B4D8]">
          Green Hydrogen
        </span>{' '}
        Ecosystem
      </motion.h2>

      {/* Narrative Lead Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal"
      >
        <strong className="font-semibold text-[#083870]">H2 Lanka (Pvt) Ltd.</strong> is a Sri Lankan clean energy and hydrogen technology venture dedicated to accelerating the transition towards a low-carbon, sustainable, and energy-secure future. We develop, integrate, and promote innovative green hydrogen and renewable energy solutions for Sri Lanka and the wider South Asian region.
      </motion.p>

      {/* 4 Metric / Impact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left"
      >
        {aboutMetricsData.map((metric, idx) => (
          <div
            key={metric.id}
            className="group relative p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-300/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                {metricIcons[idx % metricIcons.length]}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#062A56] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mt-0.5">
                {metric.label}
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutHeader;

