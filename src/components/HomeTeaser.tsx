"use client";

import { motion } from "framer-motion";

export default function HomeTeaser() {
  return (
    <div className="w-full bg-[#050505] text-white overflow-hidden py-20 md:py-32">

      {/* Slow, Elegant Infinite Text Marquee */}
      <div className="relative w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[20vw] md:text-[9vw] font-black tracking-tighter mx-6 text-white/[0.04] uppercase select-none">
              PHANTOM X75 — PRO 96 — LITE 60 —
            </span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
