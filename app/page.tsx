import Image from "next/image";
import OverMij from "@/components/sections/OverMij";
import Hero from "@/components/sections/Hero";
import Projecten from "@/components/sections/Projecten";
import EvenOffline from "@/components/sections/EvenOffline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <OverMij />
      <Projecten />
      <EvenOffline />
      <Contact />
    </main>
  );
}
