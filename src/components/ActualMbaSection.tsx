import { motion } from "motion/react";
import { Cpu, Briefcase, Users, FileBadge, Wallet, Rocket } from "lucide-react";

const courseFeatures = [
  {
    icon: <Cpu className="w-12 h-12 text-white" />,
    title: "AI-Powered Learning",
    description: "Learn AI tools applied to real business problems."
  },
  {
    icon: <Briefcase className="w-12 h-12 text-white" />,
    title: "Real Corporate Projects",
    description: "Work on live projects from leading companies."
  },
  {
    icon: <Users className="w-12 h-12 text-white" />,
    title: "Industry Mentors",
    description: "Learn directly from CXOs, founders & industry experts."
  },
  {
    icon: <FileBadge className="w-12 h-12 text-white" />,
    title: "IBM Global Certifications",
    description: "Industry-recognized certifications to boost your profile."
  },
  {
    icon: <Wallet className="w-12 h-12 text-white" />,
    title: "Earn While You Learn",
    description: "Exclusive opportunities to earn & grow."
  },
  {
    icon: <Rocket className="w-12 h-12 text-white" />,
    title: "Startup & Innovation",
    description: "Launch ideas. Build ventures. Create impact."
  }
];

export default function ActualMbaSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight"
          >
            The MBA You Should <span className="relative inline-block">
              Actually Do
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#e41e26] rounded-full" />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium"
          >
            AI-First. Industry-Integrated. Career-Ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {courseFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#e41e26] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base md:text-lg font-heading font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                {feature.description}
              </p>
              
              <div className="mt-auto pt-6">
                <div className="w-8 h-1 bg-white/30 group-hover:w-16 group-hover:bg-white transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
