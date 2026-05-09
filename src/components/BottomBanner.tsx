import { motion } from "motion/react";

export default function BottomBanner() {
  return (
    <section className="bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-auto"
      >
        <img 
          src="https://i.postimg.cc/Jn03BhMM/0d0e6116-0cfd-4bcd-9c76-1ab6d891d898-1.png" 
          alt="Final Call to Action Desktop" 
          className="w-full h-auto object-cover hidden md:block"
          referrerPolicy="no-referrer"
        />
        <img 
          src="https://i.postimg.cc/bNNbBJKh/Whats-App-Image-2026-05-08-at-5-14-24-PM.jpg" 
          alt="Final Call to Action Mobile" 
          className="w-full h-auto object-cover block md:hidden"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
