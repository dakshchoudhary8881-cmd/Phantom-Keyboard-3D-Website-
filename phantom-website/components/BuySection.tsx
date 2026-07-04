'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface SwitchOption {
  name: string;
  color: string;
  type: string;
}

interface BuySectionProps {
  price: string;
  switchOptions: SwitchOption[];
}

export default function BuySection({ price, switchOptions }: BuySectionProps) {
  const [selectedSwitch, setSelectedSwitch] = useState(switchOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="buy" className="relative py-24 px-4 bg-phantom-dark">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent">
            Customize & Buy
          </h2>
          <p className="text-xl text-gray-300">
            Choose your preferred switch and get the Phantom X75 delivered to your door
          </p>
        </motion.div>

        {/* Product Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl"
        >
          {/* Price Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent mb-2">
              {price}
            </div>
            <p className="text-gray-400 text-lg">
              Phantom X75 Mechanical Keyboard
            </p>
          </motion.div>

          {/* Switch Selection */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-phantom-cyan mb-6">Select Switch Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {switchOptions.map((option) => (
                <motion.button
                  key={option.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSwitch(option)}
                  className={`p-6 rounded-lg transition-all duration-300 font-semibold ${
                    selectedSwitch.name === option.name
                      ? 'glass ring-2 ring-phantom-cyan bg-opacity-100'
                      : 'glass hover:ring-2 hover:ring-phantom-cyan/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: option.color }}
                    />
                    <span>{option.name}</span>
                  </div>
                  <p className="text-sm text-gray-400">{option.type}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Selected Switch Info */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-gradient-to-r from-phantom-cyan/10 to-phantom-purple/10 rounded-lg border border-phantom-cyan/30"
          >
            <p className="text-gray-300">
              You selected: <span className="text-phantom-cyan font-bold">{selectedSwitch.name}</span> - {selectedSwitch.type} Switches
            </p>
          </motion.div>

          {/* Quantity Selector */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-lg font-bold text-phantom-cyan mb-4">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="glass w-12 h-12 rounded-lg flex items-center justify-center hover:ring-2 hover:ring-phantom-cyan/50 transition-all"
              >
                −
              </button>
              <span className="text-2xl font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="glass w-12 h-12 rounded-lg flex items-center justify-center hover:ring-2 hover:ring-phantom-cyan/50 transition-all"
              >
                +
              </button>
              <span className="text-gray-400 ml-auto">
                Total: <span className="text-phantom-cyan font-bold">
                  ₹{parseInt(price.replace('₹', '')) * quantity}
                </span>
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-6 bg-gradient-to-r from-phantom-cyan to-phantom-purple rounded-lg font-bold text-phantom-dark text-xl hover:shadow-2xl transition-all duration-300"
          >
            Add To Cart ({quantity}) → ₹{parseInt(price.replace('₹', '')) * quantity}
          </motion.button>

          {/* Features Highlight */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-12 border-t border-phantom-cyan/20"
          >
            <h4 className="text-lg font-bold text-phantom-cyan mb-6">What's Included</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
              <div>✓ Keyboard & Switches</div>
              <div>✓ Premium Keycaps</div>
              <div>✓ Stabilizers</div>
              <div>✓ USB Cable</div>
              <div>✓ Wireless Dongle</div>
              <div>✓ Carrying Case</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            ✓ 30-Day Money-Back Guarantee • ✓ 2-Year Warranty • ✓ Free Shipping
          </p>
        </motion.div>
      </div>
    </section>
  );
}
