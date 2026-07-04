'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative bg-phantom-dark border-t border-phantom-cyan/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-phantom-dark/90 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 pb-16 border-b border-phantom-cyan/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Get exclusive news, updates, and offers directly to your inbox
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass rounded-lg bg-phantom-dark/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-phantom-cyan transition-all"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-phantom-cyan to-phantom-purple rounded-lg font-bold text-phantom-dark hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-phantom-cyan mt-4 font-semibold"
              >
                ✓ Successfully subscribed!
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent">
              ⚙ PHANTOM
            </div>
            <p className="text-gray-400">
              Engineering the future of mechanical keyboards.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-phantom-cyan mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-phantom-cyan transition">Phantom X75</a></li>
              <li><a href="#" className="hover:text-phantom-cyan transition">Specifications</a></li>
              <li><a href="#" className="hover:text-phantom-cyan transition">Gallery</a></li>
              <li><a href="#" className="hover:text-phantom-cyan transition">Warranty</a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-phantom-cyan mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-phantom-cyan transition">Documentation</a></li>
              <li><a href="#" className="hover:text-phantom-cyan transition">FAQ</a></li>
              <li><a href="#" className="hover:text-phantom-cyan transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-phantom-cyan transition">Troubleshoot</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-phantom-cyan mb-4">Follow</h4>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Discord', 'YouTube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-phantom-cyan hover:ring-2 hover:ring-phantom-cyan/50 transition-all"
                  title={social}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-phantom-cyan/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2024 Phantom Keyboards. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-phantom-cyan transition">Privacy Policy</a>
              <a href="#" className="hover:text-phantom-cyan transition">Terms of Service</a>
              <a href="#" className="hover:text-phantom-cyan transition">Cookie Settings</a>
            </div>
          </div>

          {/* Scroll to top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 glass w-12 h-12 rounded-lg flex items-center justify-center text-phantom-cyan hover:ring-2 hover:ring-phantom-cyan/50 transition-all"
            title="Scroll to top"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
