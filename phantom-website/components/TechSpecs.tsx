'use client';

import { motion } from 'framer-motion';

interface Stat {
  label: string;
  val: string;
  icon: string;
}

interface TechSpecsProps {
  stats: Stat[];
}

export default function TechSpecs({ stats }: TechSpecsProps) {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="specs" className="relative py-24 px-4 bg-gradient-dark">
      {/* Background elements */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-r from-phantom-cyan/5 to-phantom-purple/5"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent">
            Switch Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Precision engineered switches deliver smooth actuation, reduced wobble, and exceptional durability.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-xl text-center hover:shadow-2xl hover:shadow-phantom-cyan/20 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-phantom-cyan to-phantom-purple bg-clip-text text-transparent mb-2">
                {stat.val}
              </div>
              <div className="text-gray-400 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-phantom-cyan mb-4">Connectivity</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Bluetooth 5.3 Low Energy</li>
              <li>✓ 2.4GHz USB Wireless Dongle</li>
              <li>✓ Wired USB-C Connection</li>
              <li>✓ Multi-device Pairing</li>
            </ul>
          </div>

          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-phantom-cyan mb-4">Keycaps & Switches</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Cherry MX Compatible</li>
              <li>✓ Premium PBT Material</li>
              <li>✓ Double-shot Legends</li>
              <li>✓ Hot-swappable Sockets</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
