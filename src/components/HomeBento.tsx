"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeBento() {
  return (
    <section className="bg-[#050505] relative z-10">

      {/* Section 1: Full-Width Statement */}
      <div className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15] tracking-tight max-w-5xl"
          >
            We stripped the keyboard to its molecular core.{" "}
            <span className="text-white/30">
              Then rebuilt it for people who hear the difference between
              good and perfect.
            </span>
          </motion.p>
        </div>
      </div>

      {/* Section 2: Split Feature — Acoustics */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-24 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-4 block">Acoustics</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Pure Sound.<br />Zero Ping.
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-md mb-8">
              Five layers of dampening material — PORON, silicone, IXPE — absorb every
              frequency that isn't the keystroke itself.
            </p>
            <Link href="/features" className="inline-flex items-center gap-3 text-white font-medium border-b border-white/30 pb-1 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
              All Features →
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
              <img
                src="/images/black-layout-keyboard.jpeg"
                alt="Phantom Keyboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Two-Column Stats Band */}
      <div className="px-6 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {[
            { value: "82", unit: "Keys", label: "75% Layout" },
            { value: "1.8", unit: "kg", label: "CNC Aluminum" },
            { value: "1", unit: "ms", label: "2.4GHz Polling" },
            { value: "300", unit: "hrs", label: "Battery Life" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white">
                {stat.value}
                <span className="text-xl sm:text-2xl md:text-3xl text-white/40 ml-1">{stat.unit}</span>
              </div>
              <div className="text-xs sm:text-sm text-white/40 mt-2 sm:mt-3 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 4: Edge-to-Edge Image + Overlay CTA */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden group">
        <img
          src="/images/gasket-mounting.jpeg"
          alt="Engineering"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 md:p-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-3 sm:mb-4">Gasket Mounted. Isolated.</h3>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-lg">
              The PCB floats between silicone gaskets, decoupled from the chassis for a softer, quieter keystroke.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
