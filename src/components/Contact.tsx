"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">Connect</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-none">Let's build <br/><span className="text-white/40">together.</span></h3>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-16 max-w-md">
              Whether you need support for your new keyboard or want to discuss a custom corporate order, we're here to help.
            </p>
            
            <div className="space-y-10">
              <div className="flex flex-col">
                <span className="text-white/30 uppercase tracking-widest text-xs mb-2 font-semibold">Support</span>
                <a href="mailto:support@phantom.io" className="text-3xl font-light text-white hover:text-cyan-400 transition-colors">support@phantom.io</a>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 uppercase tracking-widest text-xs mb-2 font-semibold">Business Inquiries</span>
                <a href="mailto:business@phantom.io" className="text-3xl font-light text-white hover:text-cyan-400 transition-colors">business@phantom.io</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full mt-12 lg:mt-0"
          >
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col relative group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/30 outline-none focus:border-white transition-colors peer"
                />
              </div>
              
              <div className="flex flex-col relative group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/30 outline-none focus:border-white transition-colors peer"
                />
              </div>
              
              <div className="flex flex-col relative group">
                <textarea 
                  rows={1}
                  placeholder="Message" 
                  className="bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/30 outline-none focus:border-white transition-colors resize-none overflow-hidden min-h-[60px]"
                />
              </div>

              <div className="pt-8">
                <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
