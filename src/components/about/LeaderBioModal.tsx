import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Briefcase, GraduationCap, CheckCircle2, Mail } from 'lucide-react';
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

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {leader && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 md:p-6 overflow-y-auto"
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
            className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[85vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col z-10 overscroll-contain sm:my-auto"
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
            <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 sm:space-y-7 flex-1">
              {/* ========================================================= */}
              {/* UNIFIED EXECUTIVE HERO HEADER                             */}
              {/* ========================================================= */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 pb-6 border-b border-slate-150">
                {/* Round Profile Picture */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 ring-4 ring-[#094792]/15 shadow-md bg-white shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                    <picture>
                      <source srcSet={getAssetPath(leader.image.webp)} type="image/webp" />
                      <img
                        src={getAssetPath(leader.image.jpg)}
                        alt={leader.image.alt}
                        className="w-full h-full object-cover object-[center_top] transition-transform duration-500 hover:scale-105"
                        width={640}
                        height={800}
                      />
                    </picture>
                  </div>
                </div>

                {/* Identity & Core Details */}
                <div className="space-y-1.5 text-center sm:text-left flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span
                      className={cn(
                        'text-xs font-bold px-2.5 py-0.5 rounded-full border shadow-2xs',
                        isAdvisory
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-blue-50 text-[#083870] border-blue-200'
                      )}
                    >
                      {leader.role}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      <Briefcase className="w-3 h-3 text-[#094792] shrink-0" />
                      <span>{leader.experience}</span>
                    </span>
                  </div>

                  <h3
                    id="leader-modal-name"
                    className="text-2xl sm:text-3xl font-extrabold text-[#062A56] tracking-tight"
                  >
                    {leader.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#094792]">
                    {leader.domain}
                  </p>

                  {/* Credentials / Qualifications Pills */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
                    {leader.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        <GraduationCap className="w-3 h-3 text-[#094792] shrink-0" />
                        <span>{cred}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* CONTENT GRID: BIOGRAPHY & STRATEGIC PILLARS               */}
              {/* ========================================================= */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Left: Executive Biography (7 cols on desktop) */}
                <div className="md:col-span-7 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Executive Biography & Background
                  </span>
                  <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {leader.fullBio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Right: Strategic Focus & Contributions (5 cols on desktop) */}
                <div className="md:col-span-5 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Strategic Focus & Contributions
                    </span>
                    <div className="space-y-2">
                      {leader.keyPillars.map((pillar) => (
                        <div
                          key={pillar}
                          className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:bg-slate-100/70 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{pillar}</span>
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
    </AnimatePresence>,
    document.body
  );
};

export default LeaderBioModal;

