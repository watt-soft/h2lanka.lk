import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../../utils/assetPath';
import HydrogenBackground from '../common/HydrogenBackground';

export const HeroVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      {/* Background Image Container */}
      <picture>
        <source srcSet={getAssetPath('/hero-clean.webp')} type="image/webp" />
        <img
          src={getAssetPath('/hero-clean.jpg')}
          alt="H2 Lanka Clean Green Hydrogen Facility"
          className="w-full h-full object-cover object-[70%_center] lg:object-right-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Atmospheric & Contrast Gradient Overlay */}
      {/* Soft fade on the left to ensure maximum text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60 md:via-white/40 lg:w-3/5" />

      {/* Subtle top shade to ground the navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/70 via-white/20 to-transparent" />

      {/* Subtle bottom gradient to smoothly transition into the value pillars */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent" />

      {/* Live Hydrogen Particle & Molecular Motion Engine (Hero tier) */}
      <HydrogenBackground variant="hero" interactive={true} className="z-10" />

      {/* Ambient Hydrogen Energy Glow (Breathing mesh atmosphere) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            y: [-12, 12, -12],
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [12, -12, 12],
            scale: [1.05, 0.95, 1.05],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl"
        />
      </div>
    </div>
  );
};

export default HeroVisual;

