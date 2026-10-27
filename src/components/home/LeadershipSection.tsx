import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, ChevronRight, GraduationCap } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';
import LeaderBioModal from './LeaderBioModal';
import { leadershipProfiles } from '../../data/leadership';
import type { LeaderProfile, LeadershipCategory } from '../../types/leadership';
import { getAssetPath } from '../../utils/assetPath';

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
    <section
      id="leadership"
      className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden scroll-mt-24"
      aria-label="Leadership & Strategic Advisory"
    >
      {/* Ambient background soft glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#083870] text-xs font-semibold tracking-wide shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>EXECUTIVE STEWARDSHIP & TECHNICAL ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#062A56] tracking-tight">
            Leadership & <span className="text-[#094792]">Strategic Advisory</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Guided by seasoned leaders in clean energy policy, corporate banking, international development, and advanced green hydrogen engineering.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#094792] text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader, index) => {
              const isAdvisory = leader.category === 'advisory';

              return (
                <motion.div
                  key={leader.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Image Frame */}
                  <div>
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 border-b border-slate-100">
                      <picture>
                        <source srcSet={getAssetPath(leader.image.webp)} type="image/webp" />
                        <img
                          src={getAssetPath(leader.image.jpg)}
                          alt={leader.image.alt}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          width={640}
                          height={800}
                          loading="lazy"
                        />
                      </picture>

                      {/* Gradient Vignette at Bottom of Image */}
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />

                      {/* Role Floating Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs truncate ${
                            isAdvisory
                              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-400/30'
                              : 'bg-slate-950/80 text-cyan-300 border border-cyan-400/30'
                          }`}
                        >
                          {leader.role}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#062A56] tracking-tight group-hover:text-[#094792] transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#094792] line-clamp-1 mt-0.5">
                          {leader.domain}
                        </p>
                      </div>

                      {/* Credential Tags */}
                      <div className="flex flex-wrap gap-1">
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

                      {/* Bio Excerpt */}
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {leader.bioExcerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-slate-100/90 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="xs"
                      onClick={() => setSelectedLeader(leader)}
                      className="text-[#094792] hover:text-[#083870] -ml-2 font-bold flex items-center gap-1"
                    >
                      <span>View Full Profile</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>

                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <Award className="w-3 h-3 text-cyan-500" />
                      <span>{leader.category === 'board' ? 'Director' : 'Adviser'}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Accessible Leader Bio Modal */}
      <LeaderBioModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />
    </section>
  );
};

export default LeadershipSection;

