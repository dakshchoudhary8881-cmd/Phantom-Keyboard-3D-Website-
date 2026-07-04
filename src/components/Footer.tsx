import Link from "next/link";

const FOOTER_LINKS = {
  Products: [
    { label: "Phantom X75", href: "/products" },
    { label: "Accessories", href: "#" },
    { label: "Switches", href: "#" },
    { label: "Keycaps", href: "#" },
  ],
  Explore: [
    { label: "Design", href: "/design" },
    { label: "Features", href: "/features" },
    { label: "Tech Specs", href: "/specs" },
    { label: "Gallery", href: "/gallery" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "Downloads", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "FAQ", href: "#" },
  ],
};

const SOCIAL_LINKS = ["Twitter", "Instagram", "YouTube", "Discord"];

export default function Footer() {
  return (
    <footer className="bg-[#020202] pt-24 pb-8 border-t border-white/5 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Brand + Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-12 mb-16 sm:mb-24">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase block mb-4 sm:mb-6">
              Phantom
            </Link>
            <p className="text-white/40 max-w-xs mb-8 font-light leading-relaxed text-sm">
              Precision engineered mechanical keyboards for those who demand the absolute best in sound, feel, and build quality.
            </p>
            <form className="flex gap-2 max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-white/30"
              />
              <button type="submit" className="px-5 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:scale-105 transition-transform">
                Join
              </button>
            </form>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-6 text-white/60 text-sm uppercase tracking-widest">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/35 text-sm font-light hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive Brand Wordmark */}
        <div className="w-full flex justify-center items-center mt-16 mb-8 select-none pointer-events-none">
          <h1 className="text-[15vw] sm:text-[18vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/8 to-transparent">
            PHANTOM
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25 font-light pt-8 border-t border-white/5">
          <p>© 2026 Phantom Keyboards Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((s) => (
              <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
