import HeroScrollytelling from "@/components/HeroScrollytelling";
import HomeTeaser from "@/components/HomeTeaser";
import HomeBento from "@/components/HomeBento";
import BuySection from "@/components/BuySection";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-cyan-500/30">
      <HeroScrollytelling />
      <HomeTeaser />
      <HomeBento />
      <BuySection />
    </main>
  );
}
