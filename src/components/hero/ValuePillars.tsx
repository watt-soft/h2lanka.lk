import React from 'react';
import { motion } from 'framer-motion';
import { valuePillarsData } from '../../data/valuePillars';
import PillarCard from './PillarCard';
import Container from '../layout/Container';
import { cn } from '../../utils/cn';

export interface ValuePillarsProps {
  className?: string;
}

export const ValuePillars: React.FC<ValuePillarsProps> = ({ className = '' }) => {
  return (
    <div className={cn('relative z-20 w-full', className)}>
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-slate-300/40 border border-slate-100/90 p-2 sm:p-3 md:p-1 lg:p-1.5"
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
