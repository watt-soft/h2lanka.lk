import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Button from '../common/Button';
import Logo from '../common/Logo';

export const HeroContent: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl xl:max-w-2xl py-6 sm:py-8 md:py-3 lg:py-4"
    >
      {/* Brand Logo Above Headline */}
      <motion.div
        variants={itemVariants}
        className="-mt-2 sm:-mt-4 md:-mt-5 lg:-mt-7 mb-5 sm:mb-6 md:mb-5 lg:mb-6 flex justify-start"
      >
        <Logo layout="vertical" variant="full" size="xl" className="justify-start -ml-2 drop-shadow-md" />
      </motion.div>

      {/* Hero Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-extrabold tracking-tight leading-[1.08]"
      >
        <span className="block text-[#062A56]">
          Powering Sri Lanka’s
        </span>
        <span className="block text-[#15803D] mt-1 sm:mt-2">
          Hydrogen Future
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        className="mt-6 text-base sm:text-lg lg:text-xl text-slate-800 font-medium leading-relaxed max-w-lg"
      >
        Accelerating the transition to a clean, secure and sustainable energy economy
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
      >
        <Button
          variant="primary"
          size="md"
          href="#about-us"
          showArrow
          className="px-7 py-3 font-semibold"
        >
          About Us
        </Button>

        <Button
          variant="secondary"
          size="md"
          href="#our-focus"
          showArrow
          className="px-7 py-3 font-semibold"
        >
          Our Focus
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

