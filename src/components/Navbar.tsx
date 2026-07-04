"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/design", label: "Design" },
  { href: "/features", label: "Features" },
  { href: "/specs", label: "Tech Specs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12",
          scrolled || pathname !== "/" || mobileOpen
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 md:py-5"
            : "bg-transparent py-5 md:py-7"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl md:text-3xl font-bold tracking-[0.3em] text-white uppercase">
            Phantom
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors relative py-2",
                  pathname === link.href
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side: Buy + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="hidden sm:inline-block px-8 py-3 rounded-full bg-white text-black font-bold text-[15px] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Buy Now
            </Link>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] z-50"
              aria-label="Toggle menu"
            >
              <span className={cn(
                "block w-6 h-[2px] bg-white transition-all duration-300 origin-center",
                mobileOpen && "rotate-45 translate-y-[8px]"
              )} />
              <span className={cn(
                "block w-6 h-[2px] bg-white transition-all duration-300",
                mobileOpen && "opacity-0 scale-0"
              )} />
              <span className={cn(
                "block w-6 h-[2px] bg-white transition-all duration-300 origin-center",
                mobileOpen && "-rotate-45 -translate-y-[8px]"
              )} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-3xl font-bold tracking-tight transition-colors",
                      pathname === link.href ? "text-cyan-400" : "text-white/70"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg"
              >
                Buy Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
