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
      {/* Header Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight leading-tight"
      >
        About{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#00B4D8]">
          H2 Lanka
        </span>
      </motion.h2>

      {/* Narrative Lead Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal"
      >
        <p>
          <strong className="font-semibold text-[#083870]">H2 Lanka (Pvt) Ltd.</strong> is a pioneering clean energy company dedicated to accelerating Sri Lanka's Energy transition towards a sustainable hydrogen economy. The company specializes in the development, promotion, and implementation of green hydrogen technologies, renewable energy solutions, decarbonization strategies, and innovative energy infrastructure that support national and global climate objectives.
        </p>
        <p>
          Established with the vision of becoming Sri Lanka's leading hydrogen solutions provider, H2 Lanka serves as a strategic platform connecting government institutions, industry, investors, academia, and international technology partners to foster innovation and investment in the clean energy sector.
        </p>
        <p>
          As Sri Lanka advances towards carbon neutrality and energy independence, H2 Lanka is committed to delivering world-class technical expertise, project development, research, policy support, and investment facilitation across the hydrogen value chain.
        </p>
      </motion.div>

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

