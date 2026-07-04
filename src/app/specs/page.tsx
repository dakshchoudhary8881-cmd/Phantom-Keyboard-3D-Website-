"use client";

import { motion } from "framer-motion";

const SPECS = [
  { category: "Core Design", items: [
    { label: "Layout", value: "75% (82 Keys) + Rotary Knob" },
    { label: "Mounting Style", value: "Isolated Gasket Mount" },
    { label: "Chassis Material", value: "CNC Machined 6063 Aluminum" },
    { label: "Plate Material", value: "Flex-cut Polycarbonate (PC)" },
    { label: "Typing Angle", value: "6.5 Degrees" },
    { label: "Weight", value: "1.8kg (Fully Assembled)" },
    { label: "Dimensions", value: "328mm x 144mm x 32mm" }
  ]},
  { category: "Acoustics", items: [
    { label: "Dampening", value: "5-Layer Sound Absorption" },
    { label: "PCB Foam", value: "High-Density PORON" },
    { label: "Case Foam", value: "Custom Molded Silicone" },
    { label: "Switch Pads", value: "IXPE Sound Enhancing Pads" },
    { label: "Stabilizers", value: "Screw-in, Pre-lubed Custom Stabs" }
  ]},
  { category: "Electronics", items: [
    { label: "Switches", value: "Hot-Swappable TTC 5-pin" },
    { label: "Lighting", value: "South-Facing Per-Key RGB" },
    { label: "Color Gamut", value: "16.8 Million Colors" },
    { label: "MCU", value: "Ultra-low power 32-bit ARM Cortex-M4" },
    { label: "Polling Rate", value: "1000Hz (Wired / 2.4GHz) | 125Hz (BT)" },
    { label: "NKRO", value: "N-Key Rollover Support" }
  ]},
  { category: "Connectivity", items: [
    { label: "Modes", value: "USB-C, Bluetooth 5.1, 2.4GHz" },
    { label: "Battery Capacity", value: "8000mAh Dual-Cell Li-ion" },
    { label: "Battery Life (RGB Off)", value: "Up to 300 Hours" },
    { label: "Battery Life (RGB On)", value: "Up to 72 Hours" },
    { label: "Charging", value: "5V/2A Fast Charging via USB-C" },
    { label: "OS Compatibility", value: "Windows, macOS, iOS, Android, Linux" }
  ]},
  { category: "Software", items: [
    { label: "Customization", value: "QMK / VIA Fully Compatible" },
    { label: "On-board Memory", value: "Up to 5 Custom Profiles" },
    { label: "Macro Support", value: "Yes, Hardware Level" }
  ]},
  { category: "In The Box", items: [
    { label: "Keyboard", value: "Phantom X75 Base" },
    { label: "Cable", value: "Premium Coiled Aviator Cable" },
    { label: "Tools", value: "Switch / Keycap Puller Combo" },
    { label: "Extras", value: "4x Spare Switches, Dust Cover" }
  ]}
];

export default function SpecsPage() {
  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-cyan-500/30 pt-32">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-6 block">Specifications</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            Raw<br />Data.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
            The computational and physical metrics behind the machine.
          </p>
        </motion.div>
      </div>

      {/* Specs List */}
      <div className="max-w-7xl mx-auto px-6 pb-40">
        <div className="space-y-24">
          {SPECS.map((section, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-4xl md:text-5xl font-bold tracking-widest uppercase text-white/20 mb-16"
              >
                {section.category}
              </motion.h2>
              <div className="flex flex-col gap-12">
                {section.items.map((spec, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="group flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 hover:border-cyan-500 transition-colors duration-500"
                  >
                    <span className="text-3xl md:text-5xl font-light text-white group-hover:text-cyan-400 transition-colors duration-500 mb-4 md:mb-0">
                      {spec.label}
                    </span>
                    <span className="text-xl md:text-2xl text-white/50 font-mono tracking-wider text-right">
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
