import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Cta from "./components/cta";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-neutral-200 ">
      <div className="">
        <Navbar />
        <HeroSection />
        <Cta />
      </div>
    </div>
  );
}
