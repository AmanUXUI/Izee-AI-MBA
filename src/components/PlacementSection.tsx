import { motion } from "motion/react";

const companies = [
  { name: "Partner Logo 1", logo: "https://i.postimg.cc/Y2fKGBBt/Logo-Png.png" },
  { name: "Partner Logo 2", logo: "https://i.postimg.cc/NjKzxWVV/Logo-Png-1.png" },
  { name: "Partner Logo 3", logo: "https://i.postimg.cc/85N4x3Kp/Logo-Png-2.png" },
  { name: "Partner Logo 4", logo: "https://i.postimg.cc/bNsgX1TH/Logo-Png-3.png" },
  { name: "Partner Logo 5", logo: "https://i.postimg.cc/4xc1yZjB/Logo-Png-4.png" },
  { name: "Partner Logo 6", logo: "https://i.postimg.cc/qRJc1Kq6/Logo-Png-5.png" },
  { name: "Partner Logo 7", logo: "https://i.postimg.cc/260QM5BY/Logo-Png-6.png" },
  { name: "Partner Logo 8", logo: "https://i.postimg.cc/WzKMpfnr/Logo-Png-7.png" },
  { name: "Partner Logo 9", logo: "https://i.postimg.cc/y6rhTkHh/Logo-Png-8.png" },
  { name: "Partner Logo 10", logo: "https://i.postimg.cc/8PJRXNpZ/Logo-Png-9.png" },
  { name: "Partner Logo 11", logo: "https://i.postimg.cc/K8tnFfgk/Logo-Png-10.png" },
  { name: "Partner Logo 12", logo: "https://i.postimg.cc/ZR538hs3/Logo-Png-11.png" },
  { name: "Partner Logo 13", logo: "https://i.postimg.cc/85Xvwnx0/Logo-Png-12.png" },
  { name: "Partner Logo 14", logo: "https://i.postimg.cc/gjwZ7HWz/Logo-Png-13.png" },
  { name: "Partner Logo 15", logo: "https://i.postimg.cc/c1jYn2RB/Logo-Png-14.png" },
];

export default function PlacementSection() {
  return (
    <section className="bg-white py-12 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight"
          >
            Where our students <span className="text-[#e41e26]">get placed</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative w-full space-y-4 md:space-y-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden relative">
          <div className="flex gap-12 md:gap-16 animate-scroll-left whitespace-nowrap px-8 py-4 items-center">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[180px] md:min-w-[240px] transition-all duration-300 transform hover:scale-110"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-20 md:h-28 w-auto max-w-[200px] md:max-w-[300px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden relative">
          <div className="flex gap-12 md:gap-16 animate-scroll-right whitespace-nowrap px-8 py-4 items-center">
            {[...companies, ...companies].reverse().map((company, i) => (
              <div
                key={i+100}
                className="flex items-center justify-center min-w-[180px] md:min-w-[240px] transition-all duration-300 transform hover:scale-110"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-20 md:h-28 w-auto max-w-[200px] md:max-w-[300px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
      `}} />
    </section>
  );
}
