import { motion } from "motion/react";

const partners = [
  "IndiGo", "Amazon", "Infosys", "Deloitte", "Akasa Air", "SpiceJet", "Wipro", "Accenture", "TCS", "HDFC Bank"
];

export default function Partners() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left md:flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Our Placement Partners</h3>
          <p className="text-slate-500 text-sm mt-1">Connecting students with world's leading organizations.</p>
        </div>
        <div className="hidden md:flex items-center gap-12">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">500+</p>
            <p className="text-[10px] tracking-wide font-bold text-slate-400">Recruiters</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">95%</p>
            <p className="text-[10px] tracking-wide font-bold text-slate-400">Placement Rate</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((partner, i) => (
            <div 
              key={i} 
              className="px-8 py-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center min-w-[150px]"
            >
              <span className="text-slate-400 font-bold tracking-wide opacity-50 text-sm">{partner}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}
