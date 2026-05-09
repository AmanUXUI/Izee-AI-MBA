import { motion } from "motion/react";

export default function BannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <img 
          src="https://i.postimg.cc/W1THq2kB/BG5.png" 
          alt="Curriculum Banner" 
          className="w-full h-auto object-cover hidden md:block"
          referrerPolicy="no-referrer"
        />
        <img 
          src="https://i.postimg.cc/gjmrCSjV/Whats-App-Image-2026-05-08-at-4-19-56-PM.jpg" 
          alt="Curriculum Banner Mobile" 
          className="w-full h-auto object-cover block md:hidden"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
