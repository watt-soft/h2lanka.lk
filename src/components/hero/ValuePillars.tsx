import React from 'react';
import { motion } from 'framer-motion';
import { valuePillarsData } from '../../data/valuePillars';
import PillarCard from './PillarCard';
import Container from '../layout/Container';

export const ValuePillars: React.FC = () => {
  return (
    <div className="relative z-20 w-full mt-6 sm:mt-8 lg:mt-12 -mb-16 sm:-mb-20">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-300/40 border border-slate-100/90 p-2 sm:p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {valuePillarsData.map((pillar) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ValuePillars;
