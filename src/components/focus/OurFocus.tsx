import React, { useState } from 'react';
import Container from '../layout/Container';
import HydrogenBackground from '../common/HydrogenBackground';
import FocusHeader from './FocusHeader';
import FocusGrid from './FocusGrid';
import FocusSpotlight from './FocusSpotlight';
import IntegratedApproach from './IntegratedApproach';
import FocusCTA from './FocusCTA';
import type { FocusClusterId } from '../../types/focus';

export const OurFocus: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<FocusClusterId>('all');

  return (
    <section
      id="our-focus"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white border-t border-slate-100"
      aria-label="Our Focus"
    >
      {/* Subtle Hydrogen Micro-Particle Atmosphere (Viewport-pinned for 60 FPS performance) */}
      <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden -mb-[100vh] z-0">
        <HydrogenBackground
          variant="minimal"
          interactive={false}
          speedMultiplier={0.75}
          particleDensity={22}
        />
      </div>

      {/* Atmospheric Soft Gradient Glow Blobs */}
      <div className="absolute top-1/4 -right-12 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -left-12 w-[450px] h-[450px] rounded-full bg-emerald-500/12 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {/* 1. Focus Header & Cluster Navigation */}
        <FocusHeader
          selectedCluster={selectedCluster}
          onSelectCluster={setSelectedCluster}
        />

        {/* 2. 10 Focus Thrusts Interactive Explorer */}
        <FocusGrid selectedCluster={selectedCluster} />

        {/* 3. Strategic Impact Spotlight */}
        <FocusSpotlight />

        {/* 4. The 6-Stage Integrated Approach */}
        <IntegratedApproach />

        {/* 5. Partnership Callout Ribbon */}
        <FocusCTA />
      </Container>
    </section>
  );
};

export default OurFocus;

