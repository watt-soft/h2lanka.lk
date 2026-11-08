import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Factory,
  FlaskConical,
  Lightbulb,
  Presentation,
  TrendingUp,
} from 'lucide-react';

export const AboutHeader: React.FC = () => {
  const philosophyStages = [
    { title: 'Research', icon: FlaskConical },
    { title: 'Innovation', icon: Lightbulb },
    { title: 'Demonstration', icon: Presentation },
    { title: 'Investment', icon: TrendingUp },
    { title: 'Commercialization', icon: Factory },
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

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="pt-4 sm:pt-6"
      >
        <h3 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight leading-tight">
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
            Philosophy
          </span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {philosophyStages.map(({ title, icon: Icon }, index) => (
            <div key={title} className="relative">
              <div className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/80 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-emerald-600 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#062A56]">
                  {title}
                </span>
              </div>
              {index < philosophyStages.length - 1 && (
                <ArrowRight
                  className="absolute -right-4 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-emerald-600 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHeader;

