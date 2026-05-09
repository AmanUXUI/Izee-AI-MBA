import { motion } from "motion/react";
import { BookOpen, Plane, Briefcase, HeartPulse, GraduationCap, Laptop } from "lucide-react";

const programs = [
  {
    title: "Global MBA",
    description: "International business perspectives with industry-integrated learning.",
    icon: <Briefcase className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    color: "bg-blue-600"
  },
  {
    title: "Aviation Management",
    description: "Specialized training for the dynamic aerospace and airline industry.",
    icon: <Plane className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=800&auto=format&fit=crop",
    color: "bg-cyan-600"
  },
  {
    title: "Nursing & Health",
    description: "Hands-on clinical training in world-class medical environments.",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    color: "bg-rose-600"
  },
  {
    title: "Computer Applications",
    description: "Mastering modern technologies and software development.",
    icon: <Laptop className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    color: "bg-indigo-600"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-600 font-bold tracking-wide text-sm mb-4"
            >
              Academic Excellence
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            >
              Programs Designed for <span className="text-blue-900 italic font-normal serif">Global Careers.</span>
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 border-2 border-slate-900 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap"
          >
            View All Programs
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={program.image} 
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className={`${program.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <span>Learn More</span>
                  <div className="w-6 h-px bg-white/50 group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
