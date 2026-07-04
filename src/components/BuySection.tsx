"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SWITCHES = [
  {
    id: "red",
    name: "Linear Red",
    type: "Linear & Quiet",
    force: "45g",
    travel: "2.0mm",
    color: "from-red-500/20 to-red-500/0",
    glow: "rgba(239, 68, 68, 0.15)",
    border: "group-hover:border-red-500/50",
    image: "/images/red-switch-mechanical-keyboard.jpeg",
    description: "Optimized for fast-paced gaming with smooth, linear keystrokes and minimal resistance."
  },
  {
    id: "brown",
    name: "Tactile Brown",
    type: "Tactile & Quiet",
    force: "55g",
    travel: "2.0mm",
    color: "from-amber-700/20 to-amber-700/0",
    glow: "rgba(180, 83, 9, 0.15)",
    border: "group-hover:border-amber-700/50",
    image: "/images/brown-switches-mechanical-keyboard.jpeg",
    description: "The perfect balance for typing and gaming, offering tactile feedback without the loud click."
  },
  {
    id: "blue",
    name: "Clicky Blue",
    type: "Clicky & Loud",
    force: "60g",
    travel: "2.2mm",
    color: "from-blue-500/20 to-blue-500/0",
    glow: "rgba(59, 130, 246, 0.15)",
    border: "group-hover:border-blue-500/50",
    image: "/images/blue-switches-mechanical-keyboard.jpeg",
    description: "Engineered for typists who crave a satisfying audible click and a sharp tactile bump."
  },
];

export default function BuySection() {
  const [selected, setSelected] = useState(SWITCHES[0]);

  return (
    <section id="buy" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Dynamic Ambient Glow based on selected switch */}
      <motion.div
        animate={{ backgroundColor: selected.glow }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] blur-[150px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 sm:gap-16">

        {/* Left Side: Interactive Switch Selection */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Customization</h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-white">Select Your Feel.</h3>
            <p className="text-xl text-white/60 font-light">Choose the mechanical switch that perfectly matches your typing or gaming style.</p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {SWITCHES.map((sw) => {
              const isSelected = selected.id === sw.id;
              return (
                <button
                  key={sw.id}
                  onClick={() => setSelected(sw)}
                  className={cn(
                    "relative overflow-hidden p-6 rounded-2xl text-left transition-all duration-300 group border",
                    isSelected
                      ? "border-white/20 glass-card scale-[1.02]"
                      : "border-transparent bg-white/[0.02] hover:bg-white/[0.05]"
                  )}
                >
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300",
                    sw.color,
                    isSelected && "opacity-100"
                  )} />

                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-white mb-1 tracking-tight">{sw.name}</div>
                      <div className="text-white/50 font-medium">{sw.type}</div>
                    </div>

                    {isSelected && (
                      <motion.div layoutId="active-indicator" className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Product Configuration & Buy Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 relative overflow-hidden flex flex-col h-full">

            {/* Visualizer for the switch Image */}
            <div className="relative w-full h-48 md:h-64 mb-8 rounded-xl overflow-hidden border border-white/10 bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.id}
                  src={selected.image}
                  alt={selected.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="text-sm tracking-widest text-white/50 uppercase mb-2">Phantom Series</div>
              <h4 className="text-3xl font-bold text-white mb-2">Phantom X75 - {selected.name}</h4>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${selected.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/60 font-light mb-8 h-12"
                >
                  {selected.description}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-6 mb-8 border-y border-white/10 py-6"
                >
                  <div>
                    <div className="text-white/40 text-sm mb-1 uppercase tracking-wider">Actuation</div>
                    <div className="text-xl font-bold text-white">{selected.force}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-sm mb-1 uppercase tracking-wider">Pre-Travel</div>
                    <div className="text-xl font-bold text-white">{selected.travel}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-auto flex flex-col gap-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-white/50 text-sm mb-1 uppercase tracking-wider">Total</div>
                    <div className="text-4xl sm:text-5xl font-light text-white tracking-tighter">₹6,999</div>
                  </div>
                </div>

                <button className="w-full py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
