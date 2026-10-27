import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetPath } from '../../utils/assetPath';
import HydrogenBackground from './HydrogenBackground';

export interface PreloaderProps {
  onComplete?: () => void;
  minDurationMs?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  minDurationMs,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Clear any legacy session storage key on mount
  useEffect(() => {
    try {
      sessionStorage.removeItem('h2_preloader_seen');
    } catch {
      // Ignore
    }
  }, []);

  // Preload critical assets concurrently while animating progress (deduplicated modern formats)
  useEffect(() => {
    const criticalImages = [
      getAssetPath('/hero-clean.webp'),
      getAssetPath('/logo.webp'),
      getAssetPath('/logo-mark.webp'),
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Natural progressive increment calculation with adaptive device duration
  useEffect(() => {
    // Adaptive duration: 750ms on mobile, 1100ms on desktop for swift loading
    const duration = minDurationMs ?? (window.innerWidth < 768 ? 750 : 1100);
    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Ease-out cubic curve for natural feel
      const easedProgress = Math.floor((1 - Math.pow(1 - rawProgress, 3)) * 100);

      setProgress(easedProgress);

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Snappy completion hold of 100ms before exit
        setTimeout(() => {
          setIsFinished(true);
        }, 100);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [minDurationMs]);

  // Dynamic telemetry status message
  const getStatusMessage = (p: number) => {
    if (p < 25) return 'Initiating Zero-Carbon Grid...';
    if (p < 50) return 'Energizing Water Electrolysis (2H₂O → 2H₂ + O₂)...';
    if (p < 75) return 'Synthesizing Pure Green Hydrogen...';
    if (p < 100) return 'Pressurizing Clean Storage Systems...';
    return '100% Clean Energy Ready';
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          key="h2-preloader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#04142B] text-white select-none overflow-hidden transform-gpu will-change-transform"
        >
          {/* Live Hydrogen Effervescence Canvas in background */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <HydrogenBackground variant="hero" interactive={false} />
          </div>

          {/* Atmospheric Ambient Glow Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl" />
          </div>

          {/* Top Telemetry Header */}
          <motion.div
            exit={{ opacity: 0, y: -20, transition: { duration: 0.35, ease: 'easeOut' } }}
            className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-slate-400">
                H2 LANKA // ZERO-CARBON SYSTEM
              </span>
            </div>

            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest uppercase text-emerald-400 font-medium">
              GREEN HYDROGEN // ACTIVE
            </span>
          </motion.div>

          {/* Centerpiece: Glowing 3D Emblem & Brand Title */}
          <motion.div
            exit={{
              scale: 1.2,
              opacity: 0,
              filter: 'blur(4px)',
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            className="relative z-10 my-auto flex flex-col items-center text-center max-w-xl mx-auto px-4"
          >
            {/* 3D Emblem with Breathing Pulse & Completion Energy Bloom */}
            <div className="relative mb-6">
              {/* Cyan / Emerald halo rings with radiant bloom on 100% */}
              <motion.div
                animate={{
                  scale: progress === 100 ? [1.1, 1.45] : [1, 1.15, 1],
                  opacity: progress === 100 ? [0.6, 0.9] : [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: progress === 100 ? 0.35 : 2.2,
                  repeat: progress === 100 ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-400/40 via-sky-400/40 to-emerald-400/40 blur-2xl"
              />

              <picture>
                <source srcSet={getAssetPath('/logo-mark.webp')} type="image/webp" />
                <img
                  src={getAssetPath('/logo-mark.png')}
                  alt="H2 Lanka Mark"
                  className="relative h-20 w-20 sm:h-24 sm:w-24 object-contain drop-shadow-[0_10px_20px_rgba(0,180,216,0.4)]"
                  width={96}
                  height={96}
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
            >
              H2 Lanka <span className="text-cyan-400 font-semibold text-xl sm:text-2xl">(Pvt) Ltd</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-xs sm:text-sm text-slate-400 max-w-sm tracking-wide"
            >
              Accelerating Sri Lanka’s Green Hydrogen Future
            </motion.p>
          </motion.div>

          {/* Bottom Telemetry & Progress Gauge */}
          <motion.div
            exit={{ opacity: 0, y: 20, transition: { duration: 0.35, ease: 'easeOut' } }}
            className="relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-3"
          >
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
              {/* Dynamic Status Text */}
              <motion.span
                key={getStatusMessage(progress)}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-cyan-300 font-medium truncate max-w-[240px] sm:max-w-none"
              >
                {getStatusMessage(progress)}
              </motion.span>

              {/* Numerical Percentage */}
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono shrink-0">
                <span>{progress}</span>
                <span className="text-sm sm:text-base text-cyan-400 ml-1">%</span>
              </div>
            </div>

            {/* Glowing Gradient Progress Bar Track */}
            <div className="relative w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/60 p-0.5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981] shadow-[0_0_15px_rgba(0,180,216,0.8)] relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              >
                {/* Moving Light Shimmer on the bar */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
