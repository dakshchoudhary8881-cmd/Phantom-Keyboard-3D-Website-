"use client";

import { motion } from "framer-motion";

const IMAGES = [
  { src: "/images/black-layout-keyboard.jpeg", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/images/phantom/ezgif-frame-015.jpg", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/images/phantom/ezgif-frame-035.jpg", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/images/brown-switches-mechanical-keyboard.jpeg", span: "col-span-1 md:col-span-1 row-span-2" },
  { src: "/images/gasket-mounting.jpeg", span: "col-span-1 md:col-span-2 row-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-[#020202] text-white px-6 py-40 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-40"
      >
        <h1 className="text-[15vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
          VISUALS.
        </h1>
      </motion.div>

      <div className="max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[500px] gap-8">
        {IMAGES.map((img, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "10%" }}
            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-[2rem] bg-white/5 ${img.span}`}
          >
            <img
              src={img.src}
              alt="Gallery Showcase"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
