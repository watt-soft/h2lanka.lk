import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUp, ShieldCheck, Clock } from 'lucide-react';
import Container from './Container';
import Logo from '../common/Logo';
import HydrogenBackground from '../common/HydrogenBackground';
import { scrollToFooterContact } from '../../utils/scrollToFooterContact';
import {
  footerNavigation,
  footerContact,
  footerSocials,
  footerLegalLinks,
} from '../../data/footer';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030F22] text-white overflow-hidden border-t border-slate-800/80 pt-16 sm:pt-20 pb-12 select-none">
      {/* Subtle Hydrogen Micro-Particle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <HydrogenBackground variant="minimal" speedMultiplier={0.7} particleDensity={18} />
      </div>

      {/* Atmospheric Cyan and Emerald Radial Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">

        {/* ================================================================= */}
        {/* 2. FOUR-COLUMN MAIN CONTENT GRID                                  */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          {/* Column 1: Brand & Mission (Wide 2-column span on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#/" className="inline-block focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg" aria-label="H2 Lanka Home">
              <Logo layout="horizontal" size="md" theme="dark" />
            </a>


            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {footerSocials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 border border-slate-700/80 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-200 group shadow-sm"
                >
                  {social.platform === 'linkedin' && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                    </svg>
                  )}
                  {social.platform === 'mail' && <Mail className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white">
              {footerNavigation.title}
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === '#footer-contact' || link.href === '#/contact') {
                        e.preventDefault();
                        scrollToFooterContact({ updateHash: true });
                      }
                    }}
                    className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hydrogen Focus Areas */}

          {/* Column 4: Contact & Headquarters */}
          <div
            id="footer-contact"
            className="space-y-4 scroll-mt-28 p-4 -m-4 rounded-2xl transition-all duration-500"
          >
            <h3 className="text-sm font-bold tracking-wider uppercase text-white">
              {footerContact.title}
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{footerContact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${footerContact.email}`} className="hover:text-cyan-400 transition-colors">
                  {footerContact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${footerContact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-cyan-400 transition-colors">
                  {footerContact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{footerContact.hours}</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{footerContact.registration}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. BOTTOM LEGAL & COPYRIGHT BAR                                   */}
        {/* ================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} H2 Lanka (Pvt) Ltd. All rights reserved. Powering Sri Lanka’s Hydrogen Future.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {footerLegalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-slate-200 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Back to Top Smooth Button */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </motion.button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
