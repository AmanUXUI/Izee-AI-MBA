import { motion } from "motion/react";
import { BookOpen, User, Briefcase, IndianRupee, Clock, XCircle, X } from "lucide-react";

const failPoints = [
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    text: "No Real Skills"
  },
  {
    icon: <User className="w-8 h-8 text-white" />,
    text: "No Industry Exposure"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-white" />,
    text: "No Placement Guarantee"
  },
  {
    icon: <IndianRupee className="w-8 h-8 text-white" />,
    text: "₹10 Lakh+ Investment"
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    text: "2 Years Lost, Still Confused"
  }
];

export default function MbaFailSection() {
  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-heading font-bold text-center text-white mb-12 tracking-tight"
        >
          Why Most MBAs <span className="text-[#e41e26]">Fail</span> Students
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-4">
          {failPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-6">
                {/* Main Icon Container with Glow */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-black border-2 border-red-500/30 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(228,30,38,0.3)] group-hover:shadow-[0_0_30px_rgba(228,30,38,0.6)] transition-all duration-500">
                  {point.icon}
                </div>

                {/* Overlapping Red X Badge */}
                <div className="absolute -bottom-1 -right-1 z-20 w-8 h-8 rounded-full bg-[#e41e26] border-2 border-black flex items-center justify-center">
                  <X className="w-5 h-5 text-white stroke-[3px]" />
                </div>
                
                {/* Decorative Red Ring */}
                <div className="absolute inset-0 w-full h-full rounded-2xl border border-red-600/50 scale-125 opacity-20 group-hover:animate-ping" />
              </div>

              <p className="text-white text-center font-bold text-sm md:text-lg leading-tight max-w-[150px]">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
