"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const TOTAL_FRAMES = 91;

const OVERLAYS = [
  {
    start: 0.15,
    end: 0.3,
    title: "Mechanical Precision",
    subtitle: "Every keystroke engineered for speed and consistency.",
  },
  {
    start: 0.35,
    end: 0.5,
    title: "Premium Aluminum Build",
    subtitle: "Crafted from aerospace-grade aluminum.",
  },
  {
    start: 0.55,
    end: 0.7,
    title: "RGB Illumination",
    subtitle: "Dynamic lighting designed to match your workflow.",
  },
  {
    start: 0.75,
    end: 0.95,
    title: "Hot-Swappable Freedom",
    subtitle: "Customize switches without soldering.",
  },
];

export default function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    // Preload the 70 frames
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === TOTAL_FRAMES) {
        setImages(loadedImages);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/images/phantom/ezgif-frame-${frameNumber}.jpg`;
      img.onload = handleLoad;
      img.onerror = handleLoad;
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let currentFrame = 0;
    let targetFrame = 0;
    let lastDrawnFrame = -1;

    const render = () => {
      currentFrame += (targetFrame - currentFrame) * 0.1;
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrame))
      );

      if (frameIndex !== lastDrawnFrame) {
        const img = images[frameIndex];
        if (img && img.complete) {
          ctx.fillStyle = "#050505";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          const w = canvas.clientWidth;
          const h = canvas.clientHeight;
          const scale = Math.max(w / img.width, h / img.height);
          const x = (w / 2) - (img.width / 2) * scale;
          const y = (h / 2) - (img.height / 2) * scale;

          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
          lastDrawnFrame = frameIndex;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      targetFrame = latest * (TOTAL_FRAMES - 1);
    });

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;

      ctx.scale(dpr, dpr);
      lastDrawnFrame = -1;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(animationFrameId);
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, scrollYProgress]);

  return (
    <section id="scroll-story" ref={containerRef} className="relative h-[200vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Loading State or Canvas */}
        {images.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center z-0 bg-[#050505]">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}

        <canvas
          ref={canvasRef}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            images.length > 0 ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Cinematic Hero Overlay */}
        <motion.div
          initial={false}
          animate={{
            opacity: (images.length > 0 && !isScrolled) ? 1 : 0,
            y: isScrolled ? -50 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ pointerEvents: isScrolled ? "none" : "auto" }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-20"
        >
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 tracking-[0.3em] text-sm md:text-base font-semibold text-white/50 uppercase"
            >
              The Phantom Series
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter mb-6 leading-none"
            >
              <span className="text-white drop-shadow-2xl">Precision. </span>
              <br />
              <span className="text-gradient-primary drop-shadow-2xl">Perfected.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="text-base sm:text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto mb-8 sm:mb-12 text-balance leading-relaxed"
            >
              Premium Mechanical Keyboard Engineered for Creators and Gamers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto"
            >
              <button
                onClick={() => document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] w-full sm:w-auto"
              >
                Buy Now
              </button>

              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                className="px-8 sm:px-10 py-4 sm:py-5 rounded-full glass hover:bg-white/10 text-white font-medium text-base sm:text-lg transition-all w-full sm:w-auto"
              >
                Explore Features
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Product Overlays */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {OVERLAYS.map((overlay, index) => (
            <OverlayText
              key={index}
              overlay={overlay}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OverlayText({ overlay, progress }: { overlay: typeof OVERLAYS[0], progress: any }) {
  const opacity = useTransform(
    progress,
    [
      overlay.start - 0.05,
      overlay.start + 0.02,
      overlay.end - 0.02,
      overlay.end + 0.05
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [
      overlay.start - 0.05,
      overlay.start + 0.02,
      overlay.end - 0.02,
      overlay.end + 0.05
    ],
    [50, 0, 0, -50]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute top-1/3 right-8 md:right-24 max-w-lg p-10 glass-card rounded-3xl"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
        {overlay.title}
      </h2>
      <p className="text-xl text-white/70 font-light leading-relaxed">
        {overlay.subtitle}
      </p>
    </motion.div>
  );
}
