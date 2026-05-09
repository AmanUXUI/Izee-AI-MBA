import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vismaya S Ranjith",
    role: "Analyst operations",
    quote: "In hindsight, now that I look at it, choosing IZee Business School defined my career. When talking about most colleges, there are some particular things that students mention about the college. But it is not the case with IZBS. Everything from academics and events to technical support, IZee helped me with everything. The practical exposure and industry networking has helped me a lot. Made a lot of friends as well. Thanks to IZee for everything that I've got.",
    image: "https://i.postimg.cc/cLjwQjGy/Image.png"
  },
  {
    name: "Guna Deepak",
    role: "Management Trainee-HR",
    quote: "It has been a great journey since day one. The people here have been very supportive —be it my fellow mates or the faculty. IZee's event participation has built two skills instrumental to everyone's life: confidence and communication. It's always been more than classroom. IZee is not just a business school, it's a place I can proudly call my second home.",
    image: "https://i.postimg.cc/zGMKnMZQ/Image3.png"
  },
  {
    name: "Sanu Subba",
    role: "Management Trainee-HR",
    quote: "The uniqueness of IZee Business School among the other top MBA colleges in Bangalore has been the main pointer. I have been really loving my time here. My mates, the faculty, the events, the support, and the technical expertise have all been of a great help. A big thanks to IZee for all that it has provided to me. I recommend to anyone looking to pursue undergraduate programs. You'll grow here, trust me.",
    image: "https://i.postimg.cc/QdP1pPZL/Image2.png"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50/50 py-20 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative flex flex-col h-full hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-md ring-2 ring-slate-50">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight">{t.name}</h4>
                    <p className="text-[#e41e26] font-medium text-sm mt-1">{t.role}</p>
                  </div>
                </div>
                <div className="text-[#e41e26] opacity-90">
                  <Quote size={48} fill="currentColor" strokeWidth={0} />
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-[15px] font-medium">
                {t.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
