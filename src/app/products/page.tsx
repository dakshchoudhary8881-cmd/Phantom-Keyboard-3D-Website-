"use client";

import { motion } from "framer-motion";

const PRODUCTS = [
  {
    title: "Phantom X75",
    subtitle: "Flagship",
    desc: "The ultimate 75% gasket-mounted mechanical keyboard. Designed for enthusiasts who demand acoustic perfection, hot-swappable switches, and uncompromising build quality.",
    img: "/images/black-layout-keyboard.jpeg",
    price: "₹6,999",
    btnText: "Configure & Buy",
    available: true
  },
  {
    title: "Phantom Pro 96",
    subtitle: "Professional",
    desc: "A full-size experience in a compact 96% layout. Featuring a dedicated numpad, precision rotary encoder, and an all-aluminum CNC machined chassis.",
    img: "/images/brown-switches-mechanical-keyboard.jpeg",
    price: "₹9,999",
    btnText: "Coming Soon",
    available: false
  },
  {
    title: "Phantom Lite 60",
    subtitle: "Ultra-Compact",
    desc: "Pure minimalism. The 60% layout gives you maximum mouse space without sacrificing the premium typing feel you expect from the Phantom series.",
    img: "/images/blue-switches-mechanical-keyboard.jpeg",
    price: "₹4,999",
    btnText: "Coming Soon",
    available: false
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-[#020202] min-h-screen text-white selection:bg-cyan-500/30 pt-32">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-6 block">Products</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            The<br />Lineup.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
            The pinnacle of mechanical engineering, crafted for every workflow.
          </p>
        </motion.div>
      </div>

      {/* Product Stack */}
      <div>
        {PRODUCTS.map((prod, idx) => (
          <section key={idx} className="border-t border-white/5 bg-[#020202]">
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full lg:w-[55%] aspect-[4/3] relative rounded-3xl overflow-hidden group">
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase mb-4 block">
                    {prod.subtitle}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
                    {prod.title}.
                  </h2>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-10">
                    {prod.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                    <button
                      className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        prod.available
                          ? "bg-white text-black hover:scale-105"
                          : "bg-white/10 text-white/60 cursor-default"
                      }`}
                    >
                      {prod.btnText}
                    </button>
                    <span className="text-2xl font-light text-white/40 tracking-tight">
                      {prod.available ? prod.price : `From ${prod.price}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
