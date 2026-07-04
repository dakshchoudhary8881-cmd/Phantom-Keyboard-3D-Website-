'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface OverlayText {
  section: number;
  title: string;
  subtitle: string;
}

interface ScrollOverlayProps {
  overlayTexts: OverlayText[];
  totalFrames: number;
}

export default function ScrollOverlay({ overlayTexts, totalFrames }: ScrollOverlayProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollProgress(progress);

      // Calculate which overlay should be visible based on progress
      const sectionHeight = 1 / overlayTexts.length;
      for (let i = 0; i < overlayTexts.length; i++) {
        const sectionStart = sectionHeight * i;
        const sectionEnd = sectionHeight * (i + 1);
        if (progress >= sectionStart && progress < sectionEnd) {
          setActiveOverlay(overlayTexts[i].section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [overlayTexts]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
      {overlayTexts.map((overlay) => (
        <motion.div
          key={overlay.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeOverlay === overlay.section ? 1 : 0,
            y: activeOverlay === overlay.section ? 0 : 20,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center px-4"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: activeOverlay === overlay.section ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent"
          >
            {overlay.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: activeOverlay === overlay.section ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl"
          >
            {overlay.subtitle}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
