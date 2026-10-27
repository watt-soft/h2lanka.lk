import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Briefcase, GraduationCap, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import type { LeaderProfile } from '../../types/leadership';
import { getAssetPath } from '../../utils/assetPath';
import Button from '../common/Button';
import { cn } from '../../utils/cn';

interface LeaderBioModalProps {
  leader: LeaderProfile | null;
  onClose: () => void;
}

export const LeaderBioModal: React.FC<LeaderBioModalProps> = ({ leader, onClose }) => {
  // Lock body scroll and compensate scrollbar width to prevent background layout shift
  useEffect(() => {
    if (!leader) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [leader, onClose]);

  const isAdvisory = leader?.category === 'advisory';

  return (
    <AnimatePresence>
      {leader && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-modal-name"
        >
          {/* Backdrop with Blur & Light Dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container: Bottom Sheet on Mobile, Centered Card on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col z-10 overscroll-contain"
          >
            {/* Modal Header Bar */}
            <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-bold tracking-wide">
                <Award className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>{leader.categoryLabel}</span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#094792] cursor-pointer"
                aria-label="Close leader profile modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 sm:space-y-8 flex-1">
              {/* ========================================================= */}
              {/* MOBILE-ONLY COMPACT HERO HEADER (< md)                    */}
              {/* Ensures instant identity recognition without 400px scroll */}
              {/* ========================================================= */}
              <div className="md:hidden flex items-start gap-4 pb-4 border-b border-slate-150">
                <div className="w-24 sm:w-28 aspect-[4/5] rounded-2xl overflow-hidden shadow-md shrink-0 border border-slate-200 bg-slate-100">
                  <picture>
                    <source srcSet={getAssetPath(leader.image.webp)} type="image/webp" />
                    <img
                      src={getAssetPath(leader.image.jpg)}
                      alt={leader.image.alt}
                      className="w-full h-full object-cover object-top"
                      width={640}
                      height={800}
                    />
                  </picture>
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3
                    id="leader-modal-name"
                    className="text-xl sm:text-2xl font-extrabold text-[#062A56] tracking-tight leading-tight"
                  >
                    {leader.name}
                  </h3>
                  <span
                    className={cn(
                      'inline-block text-xs font-bold px-2.5 py-0.5 rounded-md border',
                      isAdvisory
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-blue-50 text-[#083870] border-blue-200'
                    )}
                  >
                    {leader.role}
                  </span>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2">
                    {leader.domain}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 pt-1">
                    <Briefcase className="w-3 h-3 text-[#094792] shrink-0" />
                    <span>{leader.experience}</span>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* MAIN CONTENT GRID (2 Columns on Desktop)                  */}
              {/* ========================================================= */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Desktop Left Column: Large Portrait & Credentials */}
                <div className="hidden md:block md:col-span-5 space-y-4 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-slate-100 border border-slate-200 group">
                    <picture>
                      <source srcSet={getAssetPath(leader.image.webp)} type="image/webp" />
                      <img
                        src={getAssetPath(leader.image.jpg)}
                        alt={leader.image.alt}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        width={640}
                        height={800}
                      />
                    </picture>

                    {/* Gradient overlay at base of desktop portrait */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={cn(
                          'text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-md shadow-md border truncate',
                          isAdvisory
                            ? 'bg-slate-950/85 text-emerald-300 border-emerald-400/40'
                            : 'bg-slate-950/85 text-cyan-300 border-cyan-400/40'
                        )}
                      >
                        {leader.role}
                      </span>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#094792]">
                      <Briefcase className="w-3.5 h-3.5 text-[#094792]" />
                      <span>Professional Experience</span>
                    </div>
                    <p className="text-xs text-slate-700 font-semibold">
                      {leader.experience}
                    </p>
                  </div>

                  {/* Qualifications */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <GraduationCap className="w-3.5 h-3.5 text-[#094792]" />
                      <span>Key Qualifications & Affiliations</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Name & Multi-Paragraph Biography */}
                <div className="md:col-span-7 space-y-5">
                  {/* Desktop Only Identity Block */}
                  <div className="hidden md:block">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#094792] mb-1">
                      <Sparkles className="w-3 h-3 text-[#00B4D8]" />
                      <span>{leader.categoryLabel}</span>
                    </div>
                    <h3
                      id="leader-modal-name-desktop"
                      className="text-2xl sm:text-3xl font-extrabold text-[#062A56] tracking-tight"
                    >
                      {leader.name}
                    </h3>
                    <p className="text-base font-bold text-[#094792] mt-0.5">
                      {leader.role}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                      {leader.domain}
                    </p>
                  </div>

                  {/* Mobile Only Qualifications Section */}
                  <div className="md:hidden space-y-2 pb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <GraduationCap className="w-3.5 h-3.5 text-[#094792]" />
                      <span>Key Qualifications & Affiliations</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Biography Paragraphs */}
                  <div className="space-y-3.5 text-slate-700 leading-relaxed font-normal">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Executive Biography & Background
                    </span>
                    {leader.fullBio.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-slate-600 text-sm sm:text-base leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Strategic Focus & Core Competencies */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Strategic Focus & Contributions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {leader.keyPillars.map((pillar) => (
                        <div
                          key={pillar}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-800 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="truncate">{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Bar with Common Button Components */}
            <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-t border-slate-100 bg-slate-50/80 backdrop-blur-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500 hidden sm:inline-block font-medium">
                H2 Lanka (Pvt) Ltd • Executive Stewardship
              </span>
              <div className="flex flex-row items-center justify-end gap-2.5 sm:gap-3 w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onClose}
                  className="flex-1 sm:flex-none justify-center"
                >
                  Close
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  href={`mailto:info@h2lanka.lk?subject=Inquiry%20regarding%20${encodeURIComponent(
                    leader.name
                  )}%20-%20H2%20Lanka`}
                  icon={<Mail className="w-3.5 h-3.5" />}
                  showArrow
                  className="flex-1 sm:flex-none justify-center"
                >
                  Contact Office
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeaderBioModal;
