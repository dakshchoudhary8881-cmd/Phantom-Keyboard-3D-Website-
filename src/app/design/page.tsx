"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DESIGN_PILLARS = [
  {
    title: "CNC Machined Aluminum",
    desc: "Every chassis requires 4 hours of precision CNC milling from a single 6063 aluminum billet. The anodic oxidation process creates a surface that absorbs light, leaving a stealthy, reflection-free finish.",
    metric: "4hrs",
    metricLabel: "Milling Time"
  },
  {
    title: "Flex-Cut Polycarbonate Plate",
    desc: "The plate features precision laser-cut flex slots that allow controlled deflection under pressure, creating a typing feel that is softer and more forgiving than any rigid aluminum plate.",
    metric: "0.8mm",
    metricLabel: "Flex Travel"
  },
  {
    title: "5-Layer Sound Architecture",
    desc: "From top to bottom: PC plate → IXPE switch pads → PCB → PORON dampening foam → silicone case fill. Each layer targets a different frequency band for total acoustic control.",
    metric: "5",
    metricLabel: "Layers"
  }
];

export default function DesignPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-cyan-500/30">

      {/* Hero — Full Viewport Image */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src="/images/black-layout-keyboard.jpeg"
            alt="Design Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-black/40 to-black/20" />
        </motion.div>
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 text-center"
        >
          <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-6 block">Design Philosophy</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
            Obsessive<br />Detail.
          </h1>
          <p className="text-xl text-white/50 font-light max-w-xl">
            Every surface, every tolerance, every material — chosen with intent.
          </p>
        </motion.div>
      </section>

      {/* Statement */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] tracking-tight max-w-5xl"
          >
            We tore down the concept of a keyboard to its molecular level.{" "}
            <span className="text-white/30">
              Then we rebuilt it specifically for acoustic and tactile perfection.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Design Pillars */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {DESIGN_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-start gap-12 md:gap-24 py-20 border-t border-white/5"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <div className="text-6xl md:text-7xl font-bold tracking-tighter text-white">{pillar.metric}</div>
                <div className="text-sm text-white/40 uppercase tracking-widest font-medium mt-2">{pillar.metricLabel}</div>
              </div>
              <div className="md:flex-1">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{pillar.title}.</h3>
                <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Edge-to-Edge Detail Image */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
        <img
          src="/images/gasket-mounting.jpeg"
          alt="Detail"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-[#020202]/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 p-12 md:p-24"
        >
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-3">The Core.</h3>
          <p className="text-lg text-white/60 font-light max-w-lg">
            Suspended in dense silicone dampeners, the PCB floats independent of the chassis. Pure isolation.
          </p>
        </motion.div>
      </section>

      {/* Technical Detail */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              Machined to<br />tolerances you<br />can't see.
            </h3>
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-lg">
              The anodic oxidation process guarantees a surface that absorbs light, leaving a stealthy, reflection-free finish that resists fingerprints and wear.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img src="/images/phantom/ezgif-frame-035.jpg" alt="Detail" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
