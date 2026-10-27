import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { getAssetPath } from '../../utils/assetPath';

export const NationalEconomyVision: React.FC = () => {
  return (
    <section
      id="national-economy-vision"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-slate-50/60 border-t border-slate-100/90"
      aria-label="Building Sri Lanka's Green Hydrogen Economy"
    >
      {/* Atmospheric Soft Cyan & Emerald Ambient Glows */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Column: Line-Art Ecosystem Infographic */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-start"
          >
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <picture className="block">
                <source srcSet={getAssetPath('/economy-infographic.webp')} type="image/webp" />
                <img
                  src={getAssetPath('/economy-infographic.png')}
                  alt="Building Sri Lanka's Green Hydrogen Economy Infographic"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-xs"
                  width={860}
                  height={234}
                  loading="lazy"
                />
              </picture>
            </div>
          </motion.div>

          {/* Right Column: Mission Typography & Accent Divider */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#062A56] tracking-tight leading-[1.2]">
              Building Sri Lanka’s{' '}
              <span className="text-[#10B981]">Green Hydrogen</span>{' '}
              Economy
            </h2>

            {/* Solid Horizontal Accent Line */}
            <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#094792] rounded-full mx-auto lg:mx-0 my-3 sm:my-4" />

            <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal">
              H2 Lanka (Pvt) Ltd is a pioneering clean energy company dedicated to developing green hydrogen solutions across Sri Lanka and beyond.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default NationalEconomyVision;

