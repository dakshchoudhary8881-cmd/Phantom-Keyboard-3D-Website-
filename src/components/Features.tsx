"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Acoustically Perfected.",
    description: "Multi-layered silicone dampening combined with a premium polycarbonate plate eliminates ping, leaving only the deep, satisfying thock of every keystroke.",
    label: "Acoustics",
    image: "/images/phantom/ezgif-frame-015.jpg"
  },
  {
    title: "Gasket Mounted.",
    description: "Engineered with an advanced gasket mount design that isolates the PCB from the case. The result is a flex-heavy, incredibly soft typing experience that reduces fatigue.",
    label: "Architecture",
    image: "/images/gasket-mounting.jpeg"
  },
  {
    title: "Hot-Swappable.",
    description: "Your keyboard, your rules. Featuring 5-pin hot-swap sockets, allowing you to instantly change mechanical switches without soldering. Infinite customization at your fingertips.",
    label: "Modularity",
    image: "/images/phantom/ezgif-frame-060.jpg"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-40 bg-[#050505] relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            Built For <span className="text-gradient-primary">Enthusiasts.</span>
          </motion.h2>
        </div>

        <div className="space-y-32">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1"
              >
                <p className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">{feature.label}</p>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">{feature.title}</h3>
                <p className="text-xl text-white/60 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="flex-1 w-full aspect-square md:aspect-[4/3] bg-white/[0.02] rounded-3xl border border-white/5 relative overflow-hidden group"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
