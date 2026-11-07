import React from 'react';
import { MapPin, Mail, Phone, ArrowUp, ShieldCheck, Clock } from 'lucide-react';
import Container from './Container';
import Logo from '../common/Logo';
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
    <footer className="bg-[#041E40] text-white border-t border-slate-700">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] gap-9 sm:gap-10 lg:gap-16 py-10 sm:py-12">
          <div className="space-y-5">
            <a
              href="#/"
              className="inline-block rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="H2 Lanka Home"
            >
              <Logo layout="horizontal" size="md" theme="dark" />
            </a>

            <div className="flex items-center gap-3">
              {footerSocials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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

          <nav aria-label="Footer navigation" className="space-y-4">
            <h2 className="text-sm font-bold text-white">
              {footerNavigation.title}
            </h2>
            <ul className="space-y-3">
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
                    className="inline-flex min-h-6 items-center text-sm text-slate-300 transition-colors hover:text-cyan-300 focus:outline-none focus:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            id="footer-contact"
            className="space-y-4 scroll-mt-28"
          >
            <h2 className="text-sm font-bold text-white">
              {footerContact.title}
            </h2>
            <address className="space-y-3 not-italic text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>
                  {footerContact.address.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < footerContact.address.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <a href={`mailto:${footerContact.email}`} className="break-all transition-colors hover:text-cyan-300">
                  {footerContact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <a href={`tel:${footerContact.phone.replace(/[^0-9+]/g, '')}`} className="transition-colors hover:text-cyan-300">
                  {footerContact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 pt-1 text-xs text-slate-400">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                <span>{footerContact.hours}</span>
              </div>
              <div className="flex items-start gap-3 pt-1 text-xs text-slate-400">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" />
                <span>{footerContact.registration}</span>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-700 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © {currentYear} H2 Lanka (Pvt) Ltd. All rights reserved. Powering Sri Lanka’s Hydrogen Future.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-end">
            <div className="flex items-center gap-4">
              {footerLegalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-white focus:outline-none focus:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-slate-200 transition-colors hover:border-cyan-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4 text-cyan-300" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
