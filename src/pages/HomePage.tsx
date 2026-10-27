import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Zap,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Hero from '../components/hero/Hero';
import NationalEconomyVision from '../components/home/NationalEconomyVision';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'H2 Lanka (Pvt) Ltd | Powering Sri Lanka’s Hydrogen Future';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-16 sm:space-y-24"
    >
      {/* 1. Hero Section with 3D Headline, Landscape Visual, and Value Pillars */}
      <Hero />

      {/* 2. National Green Hydrogen Economy Vision Banner (Web sample 2.jpeg) */}
      <NationalEconomyVision />

      {/* 3. Strategic Gateway Portals to Inner Pages */}
      <section className="relative py-4 sm:py-5" aria-label="Explore H2 Lanka">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>EXPLORE OUR PLATFORM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight">
              Pioneering Clean Hydrogen in Sri Lanka
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Discover how H2 Lanka connects renewable power potential with world-class engineering, research, and international investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Gateway Card 1: About Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#062A56] via-[#083870] to-[#041E40] text-white shadow-xl border border-slate-700/60 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500" />

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Corporate Story & Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  About H2 Lanka
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Learn about our founding mission, our 5-pillar execution roadmap, our commitment to national energy security, and our leadership team bridging research and real-world deployment.
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-5 border-t border-slate-700/70 flex items-center justify-between gap-3">
                <Button
                  variant="emerald"
                  size="sm"
                  href="#/about"
                  showArrow
                  fullWidth="mobile"
                >
                  Discover Our Story
                </Button>
                <span className="text-xs font-mono text-emerald-300/80 hidden sm:inline-block">#/about</span>
              </div>
            </motion.div>

            {/* Gateway Card 2: Our Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 text-slate-900 shadow-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#094792]/10 border border-[#094792]/20 flex items-center justify-center text-[#094792]">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#094792] block">
                  10 Strategic Focus Areas
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062A56] tracking-tight">
                  Our Focus & Capabilities
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Explore our dedicated focus areas across green hydrogen production, solar and wind integration, industrial decarbonization, hydrogen mobility, and Power-to-X marine bunkering.
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-5 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  href="#/our-focus"
                  showArrow
                  fullWidth="mobile"
                >
                  Explore Capabilities
                </Button>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">#/our-focus</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. Contact & Corporate Inquiries Section (Kept on Home Page as requested) */}
      <section id="contact" className="relative py-14 sm:py-20 bg-slate-50/70 border-t border-slate-200/80 scroll-mt-24" aria-label="Contact H2 Lanka">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>COLOMBO HEADQUARTERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062A56] tracking-tight">
              Connect With H2 Lanka
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Partner with H2 Lanka (Pvt) Ltd to co-develop clean hydrogen infrastructure, explore green offtake supply, or structure international clean-energy investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {/* Card 1: Headquarters */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#094792] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#062A56]">Headquarters</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Colombo, Sri Lanka
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-[#094792]">
                South Asia Operations Hub
              </div>
            </div>

            {/* Card 2: Email & Inquiries */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#00B4D8] mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#062A56]">Direct Inquiries</h3>
                <a
                  href="mailto:info@h2lanka.lk"
                  className="mt-2 text-sm text-[#094792] hover:underline font-semibold block"
                >
                  info@h2lanka.lk
                </a>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Mon – Fri: 8:30 AM – 5:30 PM (SLST)</span>
              </div>
            </div>

            {/* Card 3: Official Registration */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#062A56]">Official Corporate Status</h3>
                <p className="mt-2 text-xs font-mono text-slate-700 leading-relaxed">
                  H2 Lanka (Pvt) Ltd<br />
                  Registration: PV-00289140
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Incorporated in Sri Lanka</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
};

export default HomePage;

