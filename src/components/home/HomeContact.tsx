import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';
import { footerContact } from '../../data/footer';

export const HomeContact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedReg, setCopiedReg] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(footerContact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyReg = async () => {
    try {
      await navigator.clipboard.writeText('PV-00289140');
      setCopiedReg(true);
      setTimeout(() => setCopiedReg(false), 2000);
    } catch {
      setCopiedReg(true);
      setTimeout(() => setCopiedReg(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50/80 via-white to-sky-50/30 border-t border-slate-200/80 scroll-mt-24 sm:scroll-mt-28"
      aria-label="Contact H2 Lanka"
    >
      {/* Ambient background soft glow */}
      <div className="absolute top-1/3 -left-36 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-semibold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>COLOMBO HEADQUARTERS • DIRECT INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#062A56] tracking-tight">
            Connect With H2 Lanka
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Partner with H2 Lanka (Pvt) Ltd to co-develop clean hydrogen infrastructure, explore green offtake supply, or structure international clean-energy investments.
          </p>
        </div>

        {/* 3 Executive Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-10 sm:mb-14 items-stretch">
          {/* Card 1: Colombo Headquarters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#094792]/10 to-cyan-500/10 border border-[#094792]/20 flex items-center justify-center text-[#094792] shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-[#094792]" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Active Hub</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#094792] block mb-1">
                  Location & Facility
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#062A56] tracking-tight">
                  Colombo Headquarters
                </h3>
              </div>

              <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <span>{footerContact.address}</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Central coordination hub for green hydrogen feasibility studies, site acquisitions, and deep-water Power-to-X marine bunkering development.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#094792]">
              <span>South Asia Operations Hub</span>
              <span className="text-slate-400 font-mono text-[11px]">UTC+5:30</span>
            </div>
          </motion.div>

          {/* Card 2: Direct Inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ring-1 ring-[#00B4D8]/10"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#00B4D8] shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  Direct Response
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00B4D8] block mb-1">
                  Executive Communications
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#062A56] tracking-tight">
                  Direct Inquiries
                </h3>
              </div>

              {/* Email with 1-Click Copy */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <a
                    href={`mailto:${footerContact.email}`}
                    className="text-sm font-bold text-[#083870] hover:text-[#00B4D8] transition-colors truncate mr-2"
                  >
                    {footerContact.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#094792] hover:bg-white transition-all shadow-xs shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    <AnimatePresence mode="wait">
                      {copiedEmail ? (
                        <motion.span
                          key="copied"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.7, opacity: 0 }}
                          className="flex items-center gap-1 text-[11px] font-bold text-emerald-600"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.7, opacity: 0 }}
                        >
                          <Copy className="w-4 h-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Telephone */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <Phone className="w-4 h-4 text-[#094792] shrink-0" />
                  <a
                    href={`tel:${footerContact.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-medium hover:text-[#094792] transition-colors"
                  >
                    {footerContact.phone}
                  </a>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{footerContact.hours}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Button
                variant="primary"
                size="xs"
                href={`mailto:${footerContact.email}`}
                icon={<Mail className="w-3 h-3" />}
              >
                Send Email
              </Button>
              <span className="text-[11px] text-slate-400">Response within 24h</span>
            </div>
          </motion.div>

          {/* Card 3: Official Corporate Registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>Incorporated</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Legal Governance & Registration
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#062A56] tracking-tight">
                  Official Corporate Status
                </h3>
              </div>

              {/* Legal Entity Box with 1-Click Copy */}
              <div className="space-y-3">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Registration Number
                    </span>
                    <span className="text-sm font-mono font-bold text-[#062A56]">
                      PV-00289140
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyReg}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#094792] hover:bg-white transition-all shadow-xs cursor-pointer"
                    title="Copy registration number"
                    aria-label="Copy registration number"
                  >
                    <AnimatePresence mode="wait">
                      {copiedReg ? (
                        <motion.span
                          key="copied-reg"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.7, opacity: 0 }}
                          className="flex items-center gap-1 text-[11px] font-bold text-emerald-600"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy-reg"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.7, opacity: 0 }}
                        >
                          <Copy className="w-4 h-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Registered under the Companies Act No. 7 of 2007, Democratic Socialist Republic of Sri Lanka.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Verified Legal Entity</span>
              </span>
              <span className="text-slate-400 font-mono text-[11px]">Sri Lanka</span>
            </div>
          </motion.div>
        </div>

        {/* Enterprise Quick-Connect Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[#062A56] via-[#083870] to-[#041E40] text-white shadow-xl overflow-hidden border border-slate-700/60"
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Institutional & Commercial Partnerships
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Planning a Green Hydrogen Project in Sri Lanka?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with our project development team to structure utility-scale electrolysis feasibility, regional renewable integration, or clean export off-take.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button
                variant="gradient"
                size="md"
                href={`mailto:${footerContact.email}?subject=Enterprise%20Partnership%20Inquiry%20-%20H2%20Lanka`}
                icon={<Mail className="w-4 h-4" />}
                showArrow
                fullWidth="mobile"
              >
                Email Executive Desk
              </Button>
              <Button
                variant="dark"
                size="md"
                href={`tel:${footerContact.phone.replace(/[^0-9+]/g, '')}`}
                icon={<Phone className="w-4 h-4 text-cyan-400" />}
                fullWidth="mobile"
              >
                Call Office
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeContact;
