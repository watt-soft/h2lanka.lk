import React from 'react';
import HeroVisual from './HeroVisual';
import HeroContent from './HeroContent';
import ValuePillars from './ValuePillars';
import Container from '../layout/Container';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-10 sm:pt-15 lg:pt-4 pb-24 sm:pb-28 overflow-hidden bg-slate-50/50"
    >
      {/* Background Visual Landscape */}
      <HeroVisual />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex-grow flex items-center">
        <Container size="xl">
          <HeroContent />
        </Container>
      </div>

      {/* Floating 3-Card Value Pillars Banner */}
      <ValuePillars />
    </section>
  );
};

export default Hero;

