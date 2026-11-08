import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import HydrogenBackground from '../components/common/HydrogenBackground';
import { getAssetPath } from '../utils/assetPath';

export const PartnersPage: React.FC = () => {
  const partnerLogos = [
    { name: 'G Philos', image: '/partners/g-philos.png' },
    { name: 'H2 Korea', image: '/partners/h2-korea.png' },
    { name: 'KOGAS', image: '/partners/kogas.png' },
    { name: 'ICBT Campus', image: '/partners/icbt.png' },
    { name: 'Hydrogen New Zealand', image: '/partners/hydrogen-new-zealand.webp' },
    { name: 'INSEE', image: '/partners/insee.png' },
    { name: 'University of Vavuniya', image: '/partners/university-of-vavuniya.png' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    // className="pt-16 sm:pt-20 lg:pt-24"
    >
      <section
        id="partners"
        className="relative  py-10 sm:py-10 lg:py-10 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white"
        aria-label="Strategic Partners"
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

        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-12 w-[450px] h-[450px] rounded-full bg-emerald-500/12 blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10 space-y-10 sm:space-y-14 lg:space-y-10">
          {/* Header */}
          <div className="relative max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">


            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight leading-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
                Partners
              </span>
            </h2>

          </div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-x-auto pb-2"
            aria-label="Partner organizations"
          >
            <div className="flex min-w-max items-center justify-center gap-4 sm:gap-6">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-24 w-36 sm:h-28 sm:w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm"
                >
                  <img
                    src={getAssetPath(partner.image)}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </Container>
      </section>
    </motion.div>
  );
};

export default PartnersPage;
