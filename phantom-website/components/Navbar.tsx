'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent"
        >
          ⚙ PHANTOM
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-white hover:text-phantom-cyan transition duration-300">
            Features
          </Link>
          <Link href="#specs" className="text-white hover:text-phantom-cyan transition duration-300">
            Specs
          </Link>
          <Link href="#buy" className="text-white hover:text-phantom-cyan transition duration-300">
            Shop
          </Link>
        </div>

        {/* Buy Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass px-6 py-2 rounded-lg bg-gradient-to-r from-phantom-cyan to-phantom-purple hover:shadow-lg hover:shadow-phantom-cyan/50 transition-all duration-300 font-semibold"
        >
          Buy Now
        </motion.button>
      </div>
    </motion.nav>
  );
}
