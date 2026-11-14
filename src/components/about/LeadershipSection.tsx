import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import LeaderBioModal from './LeaderBioModal';
import { leadershipProfiles } from '../../data/leadership';
import type { LeaderProfile } from '../../types/leadership';
import { getAssetPath } from '../../utils/assetPath';

export const LeadershipSection: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

  return (
    <div id="leadership" className="space-y-8 sm:space-y-10 scroll-mt-24" aria-label="Leadership & Strategic Advisory">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight leading-tight">
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0284C7] to-[#10B981]">
            Team
          </span>
        </h3>

      </div>

      {/* Compact 4-Card Responsive Grid (max-w-6xl for optimal desktop proportions) */}
      <motion.div
        layout
        className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {leadershipProfiles.map((leader, index) => {
            return (
              <motion.div
                key={leader.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedLeader(leader)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedLeader(leader);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full executive profile of ${leader.name}`}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#094792]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#094792] p-5 sm:p-6 text-center w-full sm:w-[calc(50%-0.625rem)] lg:w-64"
              >
                {/* Top Category Tag */}
                {/* <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <span
                    className={cn(
                      'text-[10px] font-semibold px-2 py-0.5 rounded-full border shadow-xs flex items-center gap-1',
                      isAdvisory
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-blue-50 text-[#083870] border-blue-200'
                    )}
                  >
                    <Award className={cn('w-2.5 h-2.5', isAdvisory ? 'text-emerald-600' : 'text-[#00B4D8]')} />
                    <span>{leader.category === 'board' ? 'Director' : 'Advisory'}</span>
                  </span>
                </div> */}

                {/* Round Profile Image */}
                <div className="pt-2 pb-3 flex justify-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 ring-4 ring-[#094792]/10 group-hover:ring-[#094792]/30 transition-all duration-300 bg-white shadow-sm shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                      <picture>
                        <source srcSet={getAssetPath(leader.image.webp)} type="image/webp" />
                        <img
                          src={getAssetPath(leader.image.jpg)}
                          alt={leader.image.alt}
                          className="w-full h-full object-cover object-[center_top] transition-transform duration-500 ease-out group-hover:scale-110"
                          width={640}
                          height={800}
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>

                {/* Card Body: Name, Position, & Domain */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-center px-1">
                  <h4 className="text-base sm:text-lg font-bold text-[#062A56] tracking-tight group-hover:text-[#094792] transition-colors line-clamp-1">
                    {leader.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#094792] line-clamp-2 min-h-[2rem] flex items-center justify-center">
                    {leader.role}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {leader.domain}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 mt-3 w-full border-t border-slate-100">
                  <Button
                    variant="secondary"
                    size="xs"
                    showArrow
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLeader(leader);
                    }}
                    className="w-full py-1.5 text-xs font-bold text-[#083870] transition-colors hover:!border-[#094792] hover:!bg-[#094792] hover:!text-white"
                  >
                    View Profile
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Accessible Leader Bio Modal */}
      <LeaderBioModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />
    </div>
  );
};

export default LeadershipSection;

