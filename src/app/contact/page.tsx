"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-cyan-500/30 pt-32">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-40">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-6 block">Contact</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            Let's<br />Talk.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
            Whether you need support, want to discuss a custom order, or just want to say hello — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <div className="space-y-12 mb-16">
              <div>
                <span className="text-white/30 uppercase tracking-widest text-xs mb-3 font-semibold block">Customer Support</span>
                <a href="mailto:support@phantom.io" className="text-2xl md:text-3xl font-light text-white hover:text-cyan-400 transition-colors">
                  support@phantom.io
                </a>
              </div>
              <div>
                <span className="text-white/30 uppercase tracking-widest text-xs mb-3 font-semibold block">Business & Press</span>
                <a href="mailto:business@phantom.io" className="text-2xl md:text-3xl font-light text-white hover:text-cyan-400 transition-colors">
                  business@phantom.io
                </a>
              </div>
              <div>
                <span className="text-white/30 uppercase tracking-widest text-xs mb-3 font-semibold block">Headquarters</span>
                <p className="text-lg text-white/50 font-light">
                  Phantom Keyboards Pvt. Ltd.<br />
                  Bengaluru, Karnataka 560001<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              {["Twitter", "Instagram", "YouTube", "Discord"].map((social) => (
                <a key={social} href="#" className="text-sm text-white/40 hover:text-white transition-colors font-medium">
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-3/5"
          >
            <form className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex-1">
                  <label className="text-white/30 uppercase tracking-widest text-xs mb-3 font-semibold block">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/15 py-4 text-lg text-white placeholder-white/20 outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-white/30 uppercase tracking-widest text-xs mb-3 font-semibold block">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/15 py-4 text-lg text-white placeholder-white/20 outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/30 uppercase tracking-widest text-xs mb-3 font-semibold block">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-transparent border-b border-white/15 py-4 text-lg text-white placeholder-white/20 outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-white/30 uppercase tracking-widest text-xs mb-3 font-semibold block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more..."
                  className="w-full bg-transparent border-b border-white/15 py-4 text-lg text-white placeholder-white/20 outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
