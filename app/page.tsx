import OverMij from "@/components/sections/OverMij";
import Hero from "@/components/sections/Hero";
import Projecten from "@/components/sections/Projecten";
import EvenOffline from "@/components/sections/EvenOffline";
import Marquee from "@/components/ui/Marquee";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <OverMij />
      <Projecten />
      <EvenOffline />
      <Marquee />
      <Contact />
    </main>
  );
}
