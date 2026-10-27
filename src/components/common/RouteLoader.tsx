import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../../utils/assetPath';
import type { RouteKey } from '../../hooks/useHashRouter';

export interface RouteLoaderProps {
  currentRoute?: RouteKey;
}

const ROUTE_CONFIG: Record<
  string,
  { title: string; subtitle: string; tag: string }
> = {
  about: {
    title: 'About H2 Lanka',
    subtitle: 'Synchronizing enterprise capabilities, value chain & strategic roadmap...',
    tag: 'ABOUT H2 LANKA',
  },
  'our-focus': {
    title: 'Strategic Focus',
    subtitle: 'Preparing 10 clean-energy thrusts & integrated hydrogen solutions...',
    tag: 'STRATEGIC FOCUS',
  },
  partners: {
    title: 'Strategic Partners',
    subtitle: 'Connecting Korean & global clean-tech collaboration networks...',
    tag: 'GLOBAL ALLIANCES',
  },
  home: {
    title: 'Zero-Carbon Future',
    subtitle: 'Accelerating Sri Lanka’s national hydrogen ecosystem...',
    tag: 'ZERO-CARBON SYSTEM',
  },
};

export const RouteLoader: React.FC<RouteLoaderProps> = ({
  currentRoute = 'home',
}) => {
  const meta = ROUTE_CONFIG[currentRoute] || ROUTE_CONFIG.home;

  return (
    <motion.div
      key={`route-loader-${currentRoute}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative w-full min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-5.5rem)] flex flex-col items-center justify-center px-4 py-8 select-none overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label={`Loading ${meta.title}`}
    >
      {/* Atmospheric Soft Gradient Mesh Lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-cyan-500/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Centerpiece Container (Vertically centered) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto space-y-6 sm:space-y-7">
        {/* Glowing 3D Emblem with Generous Circular Orbit Clearance */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          {/* Breathing Radiant Glow Aura */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/35 via-sky-400/25 to-emerald-400/35 blur-xl"
          />

          {/* Static Subtle Track Ring */}
          <div className="absolute inset-0 rounded-full border border-slate-200/80 pointer-events-none" />

          {/* Smooth Counter-Clockwise Dashed Ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/30 border-dashed animate-spin [animation-duration:12s] pointer-events-none" />

          {/* Dynamic Clean Energy Orbital Ring (Clear 24px-28px buffer from logo) */}
          <div className="absolute inset-0 rounded-full border-2 border-t-[#00B4D8] border-r-[#10B981] border-b-transparent border-l-transparent animate-spin [animation-duration:2.2s] pointer-events-none" />

          {/* Central Logo Mark (With ample internal padding/clearance to prevent overlap) */}
          <div className="relative z-10 p-4 sm:p-5 flex items-center justify-center">
            <picture className="block">
              <source srcSet={getAssetPath('/logo-mark.webp')} type="image/webp" />
              <img
                src={getAssetPath('/logo-mark.png')}
                alt="H2 Lanka"
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-[0_8px_16px_rgba(0,180,216,0.25)]"
                width={64}
                height={64}
                loading="eager"
              />
            </picture>
          </div>
        </div>

        {/* Telemetry Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-200/90 shadow-2xs backdrop-blur-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-slate-600 font-semibold">
            H2 LANKA // {meta.tag}
          </span>
        </div>

        {/* Dynamic Route Title & Subtitle */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#062A56] tracking-tight">
            Loading{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
              {meta.title}
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm sm:max-w-md mx-auto leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Glowing Dynamic Fluid Progress Beam */}
        <div className="relative w-56 sm:w-72 h-1.5 bg-slate-200/70 rounded-full overflow-hidden border border-slate-300/50 shadow-inner">
          <motion.div
            className="absolute top-0 bottom-0 w-2/5 rounded-full bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981] shadow-[0_0_12px_rgba(0,180,216,0.7)]"
            animate={{
              x: ['-100%', '260%'],
            }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RouteLoader;

