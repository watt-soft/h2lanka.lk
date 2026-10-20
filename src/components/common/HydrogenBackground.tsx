import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

export interface HydrogenBackgroundProps {
  className?: string;
  variant?: 'hero' | 'minimal' | 'subtle';
  interactive?: boolean;
  speedMultiplier?: number;
  particleDensity?: number;
}

interface Particle {
  baseX: number;
  x: number;
  y: number;
  radius: number;
  speedY: number;
  angle: number;
  wobbleSpeed: number;
  wobbleRadius: number;
  colorRgb: string; // e.g. "0, 180, 216"
  baseAlpha: number;
  currentAlpha: number;
  vx: number;
  vy: number;
}

export const HydrogenBackground: React.FC<HydrogenBackgroundProps> = ({
  className = '',
  variant = 'hero',
  interactive = variant === 'hero',
  speedMultiplier = 1,
  particleDensity,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Configuration according to variant
    const isHero = variant === 'hero';
    const isMinimal = variant === 'minimal';

    // Particle count calculation based on canvas area
    const getParticleCount = (w: number, h: number) => {
      if (particleDensity !== undefined) return particleDensity;
      const area = w * h;
      if (isHero) {
        // approx 50-65 on desktop, 25-35 on mobile
        return Math.min(Math.max(Math.floor(area / 22000), 24), 70);
      }
      if (isMinimal) {
        // approx 12-20 on desktop, 8-12 on mobile
        return Math.min(Math.max(Math.floor(area / 65000), 8), 22);
      }
      // subtle
      return Math.min(Math.max(Math.floor(area / 38000), 16), 40);
    };

    // Color palette: Cyan, Sky Blue, and Renewable Emerald
    const colorPalette = [
      '0, 180, 216', // Electric Cyan (#00B4D8)
      '2, 132, 199', // Sky Brand Blue (#0284C7)
      '16, 185, 129', // Renewable Emerald (#10B981)
      '56, 189, 248', // Hydrogen Flame Light (#38BDF8)
    ];

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Resize handler with DPR scaling
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-initialize particles to fit new canvas size
      initParticles();
    };

    const initParticles = () => {
      const count = getParticleCount(width, height);
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = isMinimal
          ? Math.random() * 2 + 1.2
          : Math.random() * 3 + 1.5;

        // Upward buoyancy speed (always rising)
        const baseSpeed = (isMinimal ? 0.25 : 0.45) * speedMultiplier;
        const speedY = (Math.random() * 0.4 + baseSpeed) * -1;

        const wobbleRadius = Math.random() * 15 + 5;
        const wobbleSpeed = Math.random() * 0.02 + 0.01;
        const colorRgb = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        // Base opacity: Minimal is very faint (0.07 - 0.15), Hero is vibrant (0.25 - 0.65)
        const baseAlpha = isMinimal
          ? Math.random() * 0.12 + 0.05
          : Math.random() * 0.45 + 0.2;

        particles.push({
          baseX: x,
          x,
          y,
          radius,
          speedY,
          angle: Math.random() * Math.PI * 2,
          wobbleSpeed,
          wobbleRadius,
          colorRgb,
          baseAlpha,
          currentAlpha: baseAlpha,
          vx: 0,
          vy: 0,
        });
      }

      particlesRef.current = particles;
    };

    // Track mouse for interactive deflection
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Page visibility listener to stop rendering when tab is hidden
    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationFrameId.current) {
        lastTime = performance.now();
        render(lastTime);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial resize setup
    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Animation Loop
    let lastTime = performance.now();
    const maxConnectionDistance = isHero ? 115 : 75;
    const mouseRadius = 140;

    const render = (time: number) => {
      if (!isTabVisible) {
        animationFrameId.current = 0;
        return;
      }

      const delta = Math.min((time - lastTime) / 16.67, 2); // normalize to ~60fps
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Upward buoyant movement
          p.y += p.speedY * delta;

          // Horizontal sine-wave wobble (rising micro-bubble oscillation)
          p.angle += p.wobbleSpeed * delta;
          const targetX = p.baseX + Math.sin(p.angle) * p.wobbleRadius;
          p.x = targetX + p.vx;

          // Drag decay for impulse velocity
          p.vx *= 0.94;
          p.vy *= 0.94;

          // Interactive cursor repulsion
          if (interactive && mouse.x !== null && mouse.y !== null) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseRadius && dist > 0) {
              const force = (1 - dist / mouseRadius) * 2.2;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }

          p.y += p.vy;

          // Recycle particle when it floats past top
          if (p.y < -20) {
            p.y = height + Math.random() * 20;
            p.baseX = Math.random() * width;
            p.x = p.baseX;
            p.vx = 0;
            p.vy = 0;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorRgb}, ${p.baseAlpha})`;
        ctx.fill();

        // Draw soft ambient glow aura around the bubble
        if (!isMinimal) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.colorRgb}, ${p.baseAlpha * 0.18})`;
          ctx.fill();
        }
      }

      // 2. Draw molecular bond connection lines (H-H bonds)
      const maxBonds = isHero ? particles.length : Math.floor(particles.length * 0.7);
      for (let i = 0; i < maxBonds; i++) {
        for (let j = i + 1; j < maxBonds; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const bondAlpha = (1 - dist / maxConnectionDistance) * (isMinimal ? 0.08 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 180, 216, ${bondAlpha})`;
            ctx.lineWidth = isHero ? 0.85 : 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      resizeObserver.disconnect();
    };
  }, [variant, interactive, speedMultiplier, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 pointer-events-none select-none', className)}
      aria-hidden="true"
    />
  );
};

export default HydrogenBackground;

