import React from 'react';
import Container from '../layout/Container';
import HydrogenBackground from '../common/HydrogenBackground';
import AboutHeader from './AboutHeader';
import VisionMissionCards from './VisionMissionCards';
import ValueChainGrid from './ValueChainGrid';
import StrategicPillars from './StrategicPillars';
import ExecutionPipeline from './ExecutionPipeline';
import CommitmentsGrid from './CommitmentsGrid';
import AboutCTA from './AboutCTA';

export const About: React.FC = () => {
  return (
    <section
      id="about-us"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-100"
      aria-label="About H2 Lanka"
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

      {/* Atmospheric Soft Gradient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 -right-48 w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {/* 1. Header & Overview Metrics */}
        <AboutHeader />

        {/* 2. Core Anchors: Vision & Mission Dual Showcase */}
        <VisionMissionCards />

        {/* 3. The Hydrogen Value Chain: 9 Capabilities with Filter */}
        <ValueChainGrid />

        {/* 4. Strategic Foundations: Research, Global Alliances, Sri Lanka Focus */}
        <StrategicPillars />

        {/* 5. Execution Pathway: 5-Stage Progressive Roadmap */}
        <ExecutionPipeline />

        {/* 6. Core Values: Enduring Commitments */}
        <CommitmentsGrid />

        {/* 7. Action Banner: Powering the Future */}
        <AboutCTA />
      </Container>
    </section>
  );
};

export default About;

