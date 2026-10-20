import React from 'react';
import { ChevronDown } from 'lucide-react';
import HeroVisual from './HeroVisual';
import HeroContent from './HeroContent';
import ValuePillars from './ValuePillars';
import Container from '../layout/Container';

export const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-between pt-6 sm:pt-8 lg:pt-6 pb-6 md:pb-8 lg:pb-10 bg-slate-50/50"
      >
        {/* Background Visual Landscape */}
        <HeroVisual />

        {/* Main Content Area */}
        <div className="relative z-10 w-full flex-grow flex items-center">
          <Container size="xl">
            <HeroContent />
          </Container>
        </div>

        {/* Mobile Animated Scroll Cue (reveals that pillars are right below) */}
        <div className="relative z-20 md:hidden flex justify-center pb-3">
          <a
            href="#pillars"
            className="inline-flex flex-col items-center gap-1 text-slate-600 hover:text-[#062A56] transition-colors group"
            aria-label="Scroll to value pillars"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 group-hover:text-[#083870] transition-colors">
              Explore Pillars
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#083870]" />
          </a>
        </div>

        {/* Desktop Value Pillars: Slim, compact ribbon moved lower down so imagery is visible */}
        <div className="hidden md:block w-full md:translate-y-6 lg:translate-y-8">
          <ValuePillars />
        </div>
      </section>

      {/* Mobile Value Pillars: Positioned cleanly below the hero section without overlapping the imagery */}
      <section id="pillars" className="md:hidden py-10 px-2 sm:px-4 bg-gradient-to-b from-white via-slate-50/80 to-white">
        <ValuePillars />
      </section>
    </>
  );
};

export default Hero;

