"use client";

import { motion } from "framer-motion";

const IMAGES = [
  { src: "/images/black-layout-keyboard.jpeg", alt: "Phantom X75 Layout" },
  { src: "/images/phantom/ezgif-frame-015.jpg", alt: "Profile View" },
  { src: "/images/red-switch-mechanical-keyboard.jpeg", alt: "Red Switches" },
  { src: "/images/phantom/ezgif-frame-035.jpg", alt: "Angle View" },
  { src: "/images/gasket-mounting.jpeg", alt: "Gasket Assembly" },
  { src: "/images/brown-switches-mechanical-keyboard.jpeg", alt: "Brown Switches" },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-cyan-500/30 pt-32">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-6 block">Gallery</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            Every<br />Angle.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
            A keyboard designed to look as good as it feels. No angle is an afterthought.
          </p>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="px-6 pb-40">
        <div className="max-w-[90rem] mx-auto columns-1 md:columns-2 gap-6 space-y-6">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 1, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium text-white/80">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
