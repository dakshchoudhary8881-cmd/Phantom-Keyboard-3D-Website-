'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-phantom-cyan/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-phantom-purple/20 rounded-full filter blur-3xl"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-phantom-cyan text-sm font-semibold">
            ✨ Premium Mechanical Keyboard
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-phantom-cyan via-white to-phantom-purple bg-clip-text text-transparent"
        >
          Precision.
          <br />
          Perfected.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
        >
          Premium Mechanical Keyboard Engineered for Creators and Gamers
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredButton('buy')}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-8 py-4 bg-gradient-to-r from-phantom-cyan to-phantom-purple rounded-lg font-bold text-phantom-dark text-lg hover:shadow-2xl hover:shadow-phantom-cyan/50 transition-all duration-300"
          >
            Buy Now → ₹6,999
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredButton('explore')}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-8 py-4 glass rounded-lg font-bold text-phantom-cyan text-lg hover:shadow-2xl hover:shadow-phantom-cyan/30 transition-all duration-300"
          >
            Explore Features ↓
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-phantom-cyan">
            <span className="text-sm font-semibold">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
