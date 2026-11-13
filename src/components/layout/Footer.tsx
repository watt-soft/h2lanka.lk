import React from 'react';
import { MapPin, Mail, Phone, ArrowUp, Clock } from 'lucide-react';
import Container from './Container';
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
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-[#030F22] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <HydrogenBackground variant="minimal" speedMultiplier={0.7} particleDensity={18} />
      </div>
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-emerald-500/15 blur-3xl" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1.7fr] gap-9 sm:gap-10 lg:gap-16 pb-8 pt-8 sm:pb-8 sm:pt-8">
          <div className="flex flex-col gap-3">
            <a
              href="#/"
              className="inline-flex flex-col rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="H2 Lanka Home"
            >
              <span className="text-3xl font-bold leading-tight tracking-wide text-white">
                <span className="text-cyan-400">H2</span> Lanka
              </span>
              <span className="pl-1 text-base font-medium text-slate-300">(Pvt) Ltd</span>
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

          <nav aria-label="Footer navigation" className="space-y-4 lg:justify-self-center">
            <div className="border-b border-slate-700 p-1 pb-3">
              <h2 className="text-xl font-bold uppercase tracking-[0.08em] text-white sm:text-xl">
                {footerNavigation.title}
              </h2>
            </div>
            <ul className="space-y-2.5 pt-2">
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
                    className="group inline-flex min-h-7 items-center gap-1.5 text-base font-medium text-cyan-500 transition-colors hover:text-white focus:outline-none focus:text-white sm:text-lg"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 transition-colors group-hover:bg-white group-focus-visible:bg-white"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-1 lg:w-full lg:justify-self-end lg:pl-16 xl:pl-36">
            <div id="footer-contact" className="w-full max-w-[360px] p-1 space-y-4 scroll-mt-28 lg:ml-auto lg:w-fit">
              <div className="border-b border-slate-700 pb-3">
                <h2 className="text-xl font-bold uppercase tracking-[0.08em] text-white sm:text-xl">
                  {footerContact.title}
                </h2>
              </div>

              <div className="space-y-4 pt-3">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                  <a
                    href={`tel:${footerContact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base text-slate-200 transition-colors hover:text-cyan-300 sm:text-lg"
                  >
                    {footerContact.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                  <a
                    href={`mailto:${footerContact.email}`}
                    className="text-base text-slate-200 transition-colors hover:text-cyan-300 sm:text-lg"
                  >
                    {footerContact.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                  <address className="not-italic text-base leading-relaxed text-slate-200 sm:text-lg">
                    {footerContact.address.map((line, index) => (
                      <React.Fragment key={line}>
                        {line}
                        {index < footerContact.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </address>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-slate-300" />
                  <span className="leading-relaxed">
                    {footerContact.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-700 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {currentYear} H2 Lanka (Pvt) Ltd. Powering Sri Lanka&apos;s Hydrogen Future. All rights reserved.
            </p>
            <p>
              Website designed &amp; developed by WATTSOFT (Pvt) Ltd.
            </p>
          </div>

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
