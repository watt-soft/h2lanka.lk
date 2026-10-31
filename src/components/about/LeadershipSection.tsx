import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, GraduationCap } from 'lucide-react';
import Button from '../common/Button';
import LeaderBioModal from './LeaderBioModal';
import { leadershipProfiles } from '../../data/leadership';
import type { LeaderProfile, LeadershipCategory } from '../../types/leadership';
import { getAssetPath } from '../../utils/assetPath';
import { cn } from '../../utils/cn';

export const LeadershipSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<LeadershipCategory>('all');
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

  const filteredLeaders =
    activeCategory === 'all'
      ? leadershipProfiles
      : leadershipProfiles.filter((leader) => leader.category === activeCategory);

  const categories: { key: LeadershipCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Leadership', count: leadershipProfiles.length },
    {
      key: 'board',
      label: 'Board of Directors',
      count: leadershipProfiles.filter((l) => l.category === 'board').length,
    },
    {
      key: 'advisory',
      label: 'Advisory & Partners',
      count: leadershipProfiles.filter((l) => l.category === 'advisory').length,
    },
  ];

  return (
    <div id="leadership" className="space-y-8 sm:space-y-10 scroll-mt-24" aria-label="Leadership & Strategic Advisory">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-semibold tracking-wide shadow-xs">
          <Users className="w-3.5 h-3.5 text-[#00B4D8]" />
          <span>EXECUTIVE STEWARDSHIP & TECHNICAL ADVISORY</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062A56] tracking-tight">
          Leadership & <span className="text-[#094792]">Strategic Advisory</span>
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Guided by seasoned leaders in clean energy policy, corporate banking, international development, and advanced green hydrogen engineering.
        </p>

        {/* Compact Category Filter Tabs */}
        <div className="pt-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <Button
                key={cat.key}
                variant={isActive ? 'primary' : 'secondary'}
                size="xs"
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'transition-all duration-200 cursor-pointer shadow-xs text-[11px] py-1 px-3',
                  !isActive && 'text-slate-600 hover:text-slate-900 border-slate-200 bg-white/90 hover:bg-slate-50'
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    'ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full font-bold transition-colors',
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  )}
                >
                  {cat.count}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Compact 4-Card Responsive Grid (max-w-6xl for optimal desktop proportions) */}
      <motion.div
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredLeaders.map((leader, index) => {
            const isAdvisory = leader.category === 'advisory';

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
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#094792]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#094792] max-w-sm sm:max-w-none mx-auto w-full"
              >
                {/* Photo Frame with Proportional Aspect Ratio */}
                <div>
                  <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <picture>
                      <source srcSet={getAssetPath(leader.image.webp)} type="image/webp" />
                      <img
                        src={getAssetPath(leader.image.jpg)}
                        alt={leader.image.alt}
                        className="w-full h-full object-cover object-[center_top] transition-transform duration-500 ease-out group-hover:scale-105"
                        width={640}
                        height={800}
                        loading="lazy"
                      />
                    </picture>

                    {/* Top Right Category Glass Tag */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-950/70 text-slate-200 backdrop-blur-md border border-white/10 shadow-xs flex items-center gap-1">
                        <Award className="w-2.5 h-2.5 text-[#00B4D8]" />
                        <span>{leader.category === 'board' ? 'Director' : 'Advisory'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body with Compact Typography */}
                  <div className="p-4 sm:p-4.5 space-y-2">
                    <div>
                      {/* Role Pill */}
                      <span
                        className={cn(
                          'inline-block text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border mb-1.5 truncate max-w-full',
                          isAdvisory
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-blue-50 text-[#083870] border-blue-200'
                        )}
                      >
                        {leader.role}
                      </span>

                      <h4 className="text-base sm:text-lg font-bold text-[#062A56] tracking-tight group-hover:text-[#094792] transition-colors line-clamp-1">
                        {leader.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-[#094792] line-clamp-1 mt-0.5">
                        {leader.domain}
                      </p>
                    </div>

                    {/* Credential Tags */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {leader.credentials.slice(0, 2).map((cred) => (
                        <span
                          key={cred}
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          <GraduationCap className="w-3 h-3 text-[#094792] shrink-0" />
                          <span className="truncate">{cred}</span>
                        </span>
                      ))}
                    </div>

                    {/* Bio Excerpt (Trimmed to 2 lines for compact height) */}
                    <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed pt-0.5">
                      {leader.bioExcerpt}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer with Compact Button */}
                <div className="px-4 pb-4 pt-2.5 border-t border-slate-100">
                  <Button
                    variant="secondary"
                    size="xs"
                    fullWidth="mobile"
                    showArrow
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLeader(leader);
                    }}
                    className="w-full text-xs font-bold text-[#083870] group-hover:bg-[#094792] group-hover:text-white group-hover:border-[#094792] transition-colors py-1.5"
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

