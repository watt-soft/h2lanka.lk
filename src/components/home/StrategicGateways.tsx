import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Zap, Handshake, Sparkles } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';
import { prefetchRoute } from '../../utils/prefetchRoutes';

interface GatewayCardData {
  id: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  theme: 'darkNavy' | 'light' | 'midnightAzure';
  buttonVariant: 'emerald' | 'primary' | 'gradient';
  buttonText: string;
  hashLabel: string;
}

const gatewayCards: GatewayCardData[] = [
  {
    id: 'about',
    href: '#/about',
    eyebrow: 'Corporate Story & Roadmap',
    title: 'About H2 Lanka',
    description:
      'Explore our founding mission, 5-pillar execution roadmap, commitment to national energy security, and our leadership team bridging world-class engineering with local deployment.',
    icon: <Compass className="w-6 h-6" />,
    tags: ['5-Pillar Roadmap', 'Energy Security', 'Leadership Team'],
    theme: 'darkNavy',
    buttonVariant: 'emerald',
    buttonText: 'Discover Our Story',
    hashLabel: '#/about',
  },
  {
    id: 'our-focus',
    href: '#/our-focus',
    eyebrow: '10 Strategic Capabilities',
    title: 'Our Focus & Capabilities',
    description:
      'Explore our dedicated focus areas across green hydrogen electrolysis, solar and wind integration, industrial decarbonization, hydrogen mobility, and Power-to-X marine bunkering.',
    icon: <Zap className="w-6 h-6" />,
    tags: ['Electrolysis', 'Solar & Wind', 'PtX Bunkering'],
    theme: 'light',
    buttonVariant: 'primary',
    buttonText: 'Explore Capabilities',
    hashLabel: '#/our-focus',
  },
  {
    id: 'partners',
    href: '#/partners',
    eyebrow: 'Global & Regional Alliances',
    title: 'Strategic Partners',
    description:
      'Forging high-impact alliances with Korean clean-tech consortia, multilateral climate funds, premier academic research bodies, and industrial off-take partners.',
    icon: <Handshake className="w-6 h-6" />,
    tags: ['Korean Alliance', 'Climate Finance', 'Academic R&D'],
    theme: 'midnightAzure',
    buttonVariant: 'gradient',
    buttonText: 'View Alliances',
    hashLabel: '#/partners',
  },
];

export const StrategicGateways: React.FC = () => {
  return (
    <section className="relative py-4 sm:py-6" aria-label="Explore H2 Lanka Platforms">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>EXPLORE OUR PLATFORM & INITIATIVES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight">
            Pioneering Clean Hydrogen in Sri Lanka
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover how H2 Lanka connects renewable power potential with world-class engineering, research, and international investment across three core portals.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {gatewayCards.map((card, index) => {
            const isDarkNavy = card.theme === 'darkNavy';
            const isMidnightAzure = card.theme === 'midnightAzure';
            const isLight = card.theme === 'light';

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => prefetchRoute(card.href)}
                className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden border ${
                  isDarkNavy
                    ? 'bg-gradient-to-br from-[#062A56] via-[#083870] to-[#041E40] text-white border-slate-700/60'
                    : isMidnightAzure
                      ? 'bg-gradient-to-br from-slate-950 via-[#072B57] to-[#083870] text-white border-slate-700/60 md:col-span-2 lg:col-span-1'
                      : 'bg-gradient-to-br from-white via-slate-50 to-blue-50/50 text-slate-900 border-slate-200/90'
                }`}
              >
                {/* Ambient Radial Mesh Glow on Hover */}
                {isDarkNavy && (
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500" />
                )}
                {isMidnightAzure && (
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none group-hover:bg-cyan-400/25 transition-all duration-500" />
                )}
                {isLight && (
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-[#00B4D8]/10 blur-3xl pointer-events-none group-hover:bg-[#00B4D8]/20 transition-all duration-500" />
                )}

                {/* Card Top & Body */}
                <div className="relative z-10 space-y-4">
                  {/* Icon & Eyebrow */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                        isDarkNavy
                          ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
                          : isMidnightAzure
                            ? 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300'
                            : 'bg-[#094792]/10 border-[#094792]/20 text-[#094792]'
                      }`}
                    >
                      {card.icon}
                    </div>

                    {/* Hash Route Pill */}
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                        isLight
                          ? 'bg-slate-100/90 text-slate-500 border-slate-200'
                          : 'bg-white/10 text-slate-300 border-white/15'
                      }`}
                    >
                      {card.hashLabel}
                    </span>
                  </div>

                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block mb-1.5 ${
                        isDarkNavy
                          ? 'text-emerald-400'
                          : isMidnightAzure
                            ? 'text-cyan-300'
                            : 'text-[#094792]'
                      }`}
                    >
                      {card.eyebrow}
                    </span>
                    <h3
                      className={`text-2xl font-extrabold tracking-tight ${
                        isLight ? 'text-[#062A56]' : 'text-white'
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* Micro Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md ${
                          isLight
                            ? 'bg-blue-50 text-[#083870] border border-blue-100'
                            : 'bg-white/10 text-slate-200 border border-white/10'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div
                  className={`relative z-10 mt-8 pt-5 border-t flex items-center justify-between gap-3 ${
                    isLight ? 'border-slate-200/80' : 'border-slate-700/70'
                  }`}
                >
                  <Button
                    variant={card.buttonVariant}
                    size="sm"
                    href={card.href}
                    showArrow
                    fullWidth="mobile"
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StrategicGateways;

