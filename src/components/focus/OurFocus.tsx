import React from 'react';
import Container from '../layout/Container';
import HydrogenBackground from '../common/HydrogenBackground';
import { getAssetPath } from '../../utils/assetPath';

export const OurFocus: React.FC = () => {
  const imageSrc = getAssetPath('our-focus.jpg');

  return (
    <section
      id="our-focus"
      className="relative py-10 sm:py-10 lg:py-10 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-100"
      aria-label="Our Focus"
    >
      {/* Atmosphere particles */}
      <div className="sticky top-0 h-screen w-full pointer-events-none overflow-hidden -mb-[100vh] z-0">
        <HydrogenBackground
          variant="minimal"
          interactive={false}
          speedMultiplier={0.75}
          particleDensity={20}
        />
      </div>

      <Container size="xl" className="relative z-10 space-y-8 sm:space-y-10">
        {/* Topic: Our Focus */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
              Focus
            </span>
          </h2>
        </div>

        {/* Full Size Image */}
        <div className="w-full">
          <img
            src={imageSrc}
            alt="Our Focus"
            className="w-full h-auto object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default OurFocus;

