import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import type { LeaderProfile } from '../../types/leadership';
import { getAssetPath } from '../../utils/assetPath';
import Button from '../common/Button';

interface LeaderBioModalProps {
  leader: LeaderProfile | null;
  onClose: () => void;
}

export const LeaderBioModal: React.FC<LeaderBioModalProps> = ({ leader, onClose }) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!leader) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [leader, onClose]);

  return (
    <AnimatePresence>
      {leader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-modal-title"
        >
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10 my-auto"
          >
            {/* Modal Header Bar with Close Button */}
            <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-slate-100 bg-slate-50/70">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>{leader.categoryLabel}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#094792]"
                aria-label="Close leader profile modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Left Column: Portrait & Quick Credentials */}
                <div className="md:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/5] bg-slate-100 border border-slate-200">
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

                  {/* Experience Badge */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#094792]">
                      <Briefcase className="w-3.5 h-3.5 text-[#094792]" />
                      <span>Professional Experience</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      {leader.experience}
                    </p>
                  </div>

                  {/* Credentials List */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Key Qualifications</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Name, Titles & Full Narrative Biography */}
                <div className="md:col-span-7 space-y-5">
                  <div>
                    <h3
                      id="leader-modal-title"
                      className="text-2xl sm:text-3xl font-extrabold text-[#062A56] tracking-tight"
                    >
                      {leader.name}
                    </h3>
                    <p className="text-base font-bold text-[#094792] mt-1">
                      {leader.role}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                      {leader.domain}
                    </p>
                  </div>

                  {/* Biography Paragraphs */}
                  <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {leader.fullBio.map((paragraph, index) => (
                      <p key={index} className="text-slate-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key Pillars */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Strategic Focus & Contributions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {leader.keyPillars.map((pillar) => (
                        <div
                          key={pillar}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700 p-2 rounded-lg bg-slate-50 border border-slate-150"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end">
              <Button variant="secondary" size="sm" onClick={onClose}>
                Close Profile
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeaderBioModal;

