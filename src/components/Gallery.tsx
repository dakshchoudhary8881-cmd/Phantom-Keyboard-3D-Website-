"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/red-switch-mechanical-keyboard.jpeg",
    alt: "Linear Red Switch Mechanical Keyboard",
    span: "col-span-1 md:col-span-2 row-span-2",
    title: "Linear Precision"
  },
  {
    src: "/images/blue-switches-mechanical-keyboard.jpeg",
    alt: "Clicky Blue Switch Mechanical Keyboard",
    span: "col-span-1 md:col-span-1 row-span-1",
    title: "Tactile Feedback"
  },
  {
    src: "/images/brown-switches-mechanical-keyboard.jpeg",
    alt: "Tactile Brown Switch Mechanical Keyboard",
    span: "col-span-1 md:col-span-1 row-span-1",
    title: "Silent Typing"
  },
  {
    src: "/images/phantom/ezgif-frame-020.jpg",
    alt: "Phantom X75 Side Profile",
    span: "col-span-1 md:col-span-2 row-span-1",
    title: "Sleek Profile"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-[#020202] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white"
          >
            Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 font-light max-w-2xl mx-auto"
          >
            Explore the phantom series in stunning detail. Designed to look as good as it feels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] glass border border-white/10",
                img.span
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white tracking-tight">{img.title}</h3>
                <p className="text-white/60 font-medium text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase tracking-widest">
                  View Detail
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
