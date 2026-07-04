"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    label: "Hot-Swap",
    title: "Swap Without Solder",
    desc: "TTC 5-pin sockets rated for 10,000+ cycles. Change your switches in seconds — from linear to tactile to clicky — without ever picking up a soldering iron.",
    detail: "Compatible with Cherry MX, Gateron, Kailh, and all major 3-pin / 5-pin switches.",
    img: "/images/red-switch-mechanical-keyboard.jpeg",
    stat: { value: "10K+", label: "Swap Cycles" }
  },
  {
    label: "Wireless",
    title: "Tri-Mode Freedom",
    desc: "Seamlessly switch between USB-C, Bluetooth 5.1, and 2.4GHz wireless. The 2.4GHz dongle delivers 1ms latency — indistinguishable from wired.",
    detail: "Connect up to 3 Bluetooth devices and toggle instantly with Fn shortcuts.",
    img: "/images/phantom/ezgif-frame-060.jpg",
    stat: { value: "1ms", label: "Latency" }
  },
  {
    label: "Power",
    title: "300 Hours. One Charge.",
    desc: "A dual-cell 8000mAh lithium-ion battery powers weeks of wireless productivity. Even with full RGB lighting, you'll get 72 hours of uninterrupted use.",
    detail: "Fast-charges to 50% in just 45 minutes via USB-C.",
    img: "/images/brown-switches-mechanical-keyboard.jpeg",
    stat: { value: "8000", label: "mAh Battery" }
  },
  {
    label: "Lighting",
    title: "South-Facing RGB",
    desc: "Per-key south-facing LEDs eliminate interference with Cherry-profile keycaps while delivering 16.8 million colors and ultra-uniform diffusion through translucent housings.",
    detail: "Fully customizable via QMK/VIA software with 20+ preset effects.",
    img: "/images/blue-switches-mechanical-keyboard.jpeg",
    stat: { value: "16.8M", label: "Colors" }
  }
];

export default function FeaturesPage() {
  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-cyan-500/30 pt-32">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-6 block">Features</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            Built to<br />Disappear.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
            Technology should get out of your way. Every feature in the Phantom exists to remove friction — never to add complexity.
          </p>
        </motion.div>
      </div>

      {/* Feature Sections */}
      <div className="flex flex-col">
        {FEATURES.map((feature, idx) => (
          <section key={idx} className="border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
              <div className={`flex flex-col lg:flex-row items-start gap-16 lg:gap-32 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 lg:sticky lg:top-40"
                >
                  <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-4 block">{feature.label}</span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                    {feature.title}.
                  </h2>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <p className="text-base text-white/30 font-light leading-relaxed mb-10">
                    {feature.detail}
                  </p>

                  {/* Inline Stat */}
                  <div className="inline-flex items-end gap-3 border-t border-white/10 pt-6">
                    <span className="text-5xl font-bold tracking-tighter text-white">{feature.stat.value}</span>
                    <span className="text-sm text-white/40 uppercase tracking-widest font-medium pb-2">{feature.stat.label}</span>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="flex-1 w-full"
                >
                  <div className="aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden relative group">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-32 md:py-48 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Ready to feel the difference?
            </h2>
            <p className="text-xl text-white/40 font-light mb-12 max-w-xl mx-auto">
              Every detail matters. Every keystroke counts.
            </p>
            <a
              href="/products"
              className="inline-block px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform"
            >
              Configure & Buy
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
