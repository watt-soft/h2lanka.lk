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
      {/* Subtle Hydrogen Micro-Particle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <HydrogenBackground
          variant="minimal"
          interactive={false}
          speedMultiplier={0.35}
          particleDensity={16}
        />
      </div>

      {/* Atmospheric Soft Gradient Glow Blobs */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 -left-48 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

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

