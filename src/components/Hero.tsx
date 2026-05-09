import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Desktop Background Banner */}
      <img 
        src="https://i.postimg.cc/j2shdh2h/BG4.png"
        alt="Hero Desktop"
        className="hidden md:block w-full h-auto"
        referrerPolicy="no-referrer"
      />
      {/* Mobile Background Banner */}
      <img 
        src="https://i.postimg.cc/Mptqv3vN/Mobile-Hero.png"
        alt="Hero Mobile"
        className="block md:hidden w-full h-auto"
        referrerPolicy="no-referrer"
      />
    </section>
  );
}
