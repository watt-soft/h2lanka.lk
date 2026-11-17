import React from 'react';
import Container from '../layout/Container';
import HydrogenBackground from '../common/HydrogenBackground';
import { getAssetPath } from '../../utils/assetPath';

const focusInfographics = [
  {
    src: 'focus-hydrogen-ecosystem.jpg',
    alt: 'Hydrogen ecosystem in Sri Lanka, from renewable production through storage and transport to end use',
  },
  {
    src: 'focus-priority-sectors.jpg',
    alt: 'Priority sectors for hydrogen in Sri Lanka, including cement, fertilizer, mobility, power, shipping, aviation, steel, and ports',
  },
  {
    src: 'focus-roadmap.jpg',
    alt: 'Green hydrogen roadmap for short-, medium-, and long-term development in Sri Lanka',
  },
  {
    src: 'focus-benefits.jpg',
    alt: 'Hydrogen economy benefits, including carbon reduction, energy security, foreign exchange, green jobs, industrial decarbonization, and innovation',
  },
  {
    src: 'focus-strategic-partners.jpg',
    alt: 'Strategic partners ecosystem for developing the hydrogen economy',
  },
];

export const OurFocus: React.FC = () => {
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

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6 lg:grid-rows-2 xl:h-[580px]">
          {focusInfographics.map((infographic, index) => (
            <div
              key={infographic.src}
              className={`w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2 ${
                index === 3 ? 'lg:col-start-2' : index === 4 ? 'lg:col-start-4' : ''
              }`}
            >
              <div className="relative aspect-[4/3] w-full xl:aspect-auto xl:h-full">
                <img
                  src={getAssetPath(infographic.src)}
                  alt={infographic.alt}
                  className="absolute inset-0 h-fix w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurFocus;

