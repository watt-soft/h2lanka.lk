import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Handshake,
  Cpu,
  GraduationCap,
  Building2,
  CheckCircle2,
  Mail,
  ArrowRight,
} from 'lucide-react';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import HydrogenBackground from '../components/common/HydrogenBackground';

export const PartnersPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strategic Partners | H2 Lanka (Pvt) Ltd';
  }, []);

  const partnerPillars = [
    {
      id: 'korean-alliance',
      title: 'Korean Clean-Tech Alliance',
      subtitle: 'Advanced Electrolysis & FCEV Tech',
      description: 'Forging deep strategic alliances with South Korea’s leading hydrogen technology providers, electrolyzer manufacturers, and fuel-cell infrastructure innovators to localize advanced hardware for South Asia.',
      icon: <Cpu className="w-6 h-6 text-[#00B4D8]" />,
      highlights: [
        'Hardware localization and balance-of-plant integration',
        'Direct partnerships with tier-1 Korean hydrogen EPCs',
        'High-pressure fueling infrastructure technology transfer',
      ],
    },
    {
      id: 'climate-finance',
      title: 'Bilateral & Climate Financing',
      subtitle: 'Bankable Green Capital',
      description: 'Collaborating with multilateral climate funds, regional development banks, and institutional clean-energy investors to structure blended finance for utility-scale green hydrogen projects in Sri Lanka.',
      icon: <Building2 className="w-6 h-6 text-emerald-500" />,
      highlights: [
        'Concessional green debt and carbon credit financing',
        'Risk-sharing frameworks for pioneer demonstration plants',
        'Comprehensive bankability and techno-economic audits',
      ],
    },
    {
      id: 'research-universities',
      title: 'Academic & R&D Consortia',
      subtitle: 'Knowledge Transfer & Capacity',
      description: 'Bridging premier Sri Lankan universities and technical research bodies with global clean-energy laboratories to nurture local engineering talent, technical standards, and certified safety operators.',
      icon: <GraduationCap className="w-6 h-6 text-[#094792]" />,
      highlights: [
        'Joint scientific studies on tropical electrolysis efficiency',
        'Hydrogen safety and technical workforce certification',
        'Academic exchange programs and localized PhD research',
      ],
    },
    {
      id: 'industry-offtake',
      title: 'Industrial Offtake Alliances',
      subtitle: 'Decarbonizing Heavy Consumers',
      description: 'Engaging domestic port authorities, textile manufacturers, tea processing clusters, and fertilizer producers under long-term clean hydrogen supply agreements.',
      icon: <Handshake className="w-6 h-6 text-teal-600" />,
      highlights: [
        'Green ammonia bunkering at Colombo & Hambantota ports',
        'Industrial thermal energy substitution roadmaps',
        'Cross-sector decarbonization consortium building',
      ],
    },
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
        className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white"
        aria-label="Strategic Partners"
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

        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

        <Container size="xl" className="relative z-10 space-y-20 sm:space-y-24 lg:space-y-32">
          {/* Header */}
          <div className="relative max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-[#083870] text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide shadow-xs max-w-full">
              <Globe className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
              <span className="sm:hidden whitespace-nowrap">GLOBAL ALLIANCES</span>
              <span className="hidden sm:inline whitespace-nowrap">GLOBAL & KOREAN COLLABORATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#062A56] tracking-tight leading-[1.12]">
              Building Strategic{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
                International Partnerships
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-normal">
              The development of a competitive hydrogen economy requires robust synergy across governments, technology innovators, researchers, utilities, and green financiers. H2 Lanka is the trusted regional gateway connecting Sri Lanka with the world.
            </p>
          </div>

          {/* 4 Partnership Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {partnerPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-400/80 shadow-xs hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                    {pillar.icon}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#062A56] group-hover:text-[#094792] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  {pillar.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Callout Action Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-[#062A56] via-[#083870] to-[#041E40] text-white shadow-2xl border border-slate-700/60 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-semibold tracking-wide">
                  <span>INITIATE AN ALLIANCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Interested in Exploring Joint Clean-Tech Opportunities?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect directly with our corporate development and international relations leadership in Colombo to discuss technology transfer, pilot demonstration, or green investment.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  href="#/contact"
                  className="px-6 py-3 font-semibold shadow-lg shadow-cyan-500/20 bg-gradient-to-r from-[#094792] to-[#00B4D8] hover:from-[#083870] hover:to-[#38BDF8] text-white border-0"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Contact Our Alliances Team</span>
                </Button>

                <a
                  href="#/our-focus"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all duration-200 group"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </motion.div>
  );
};

export default PartnersPage;
