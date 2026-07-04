"use client";

import { motion } from "framer-motion";

const SPECS = [
  { label: "Layout", value: "75% (82 Keys)" },
  { label: "Mounting Style", value: "Gasket Mount" },
  { label: "Case Material", value: "CNC Machined Aluminum" },
  { label: "Plate Material", value: "Polycarbonate" },
  { label: "Hot-Swappable", value: "Yes (3-pin & 5-pin)" },
  { label: "Lighting", value: "South-Facing RGB" },
  { label: "Connectivity", value: "Wired Type-C, Bluetooth 5.1, 2.4GHz Wireless" },
  { label: "Battery", value: "8000mAh" },
  { label: "Polling Rate", value: "1000Hz (Wired & 2.4GHz)" },
  { label: "Software", value: "QMK/VIA Compatible" },
];

export default function TechSpecs() {
  return (
    <section id="tech" className="py-40 bg-[#050505] relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Technical <br/>Specifications.</h2>
        </motion.div>

        <div className="flex flex-col">
          {SPECS.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 group hover:border-white/30 transition-colors"
            >
              <span className="text-xl text-white/50 font-medium mb-2 md:mb-0 group-hover:text-white/80 transition-colors">{spec.label}</span>
              <span className="text-xl text-white font-light md:text-right">{spec.value}</span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
