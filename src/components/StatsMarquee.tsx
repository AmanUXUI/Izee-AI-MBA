import { motion } from "motion/react";

const stats = [
  { number: "17+", label: "Years in Industry" },
  { number: "350+", label: "Recruiting Companies" },
  { number: "2000+", label: "Alumni Network" },
  { number: "95%", label: "Placement Success" }
];

export default function StatsMarquee() {
  return (
    <div className="bg-[#e41e26] py-6 relative overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="flex overflow-hidden relative">
          <div className="flex gap-16 md:gap-32 animate-stats-scroll whitespace-nowrap px-8">
            {[...stats, ...stats, ...stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-2xl md:text-4xl font-heading font-bold text-white italic">
                  {stat.number}
                </span>
                <span className="text-[11px] md:text-sm font-bold text-white tracking-wide leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes stats-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-stats-scroll {
          animation: stats-scroll 30s linear infinite;
        }
      `}} />
    </div>
  );
}
