import { motion } from "motion/react";
import { Phone, MessageCircle, FileDown, MapPin } from "lucide-react";

export default function ContactFooter() {
  return (
    <section className="bg-black text-white border-t-4 border-[#e41e26] relative">
      <div className="max-w-[1400px] mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-0 items-center lg:divide-x lg:divide-white/10">
          
          {/* Talk to Our Counselors */}
          <motion.a 
            href="tel:8050002929"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-start lg:justify-center xl:justify-start gap-4 p-4 lg:p-0 lg:px-6 group bg-[#111] lg:bg-transparent rounded-2xl lg:rounded-none border border-white/5 lg:border-transparent hover:bg-white/5 lg:hover:bg-transparent transition-all"
          >
            <div className="relative shrink-0">
              <div className="p-3 bg-[#e41e26] rounded-full text-white animate-pulse shadow-lg shadow-red-500/20">
                <Phone size={24} className="md:w-7 md:h-7" fill="currentColor" strokeWidth={0} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full flex items-center justify-center">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#e41e26] rounded-full animate-ping" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Talk to Our Counselors</p>
              <p className="text-xl md:text-2xl xl:text-3xl font-black tracking-tight group-hover:text-[#e41e26] transition-colors uppercase">
                8050002929
              </p>
            </div>
          </motion.a>

          {/* Chat on WhatsApp */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-start lg:justify-center xl:justify-start gap-4 p-4 lg:p-0 lg:px-6 group bg-[#111] lg:bg-transparent rounded-2xl lg:rounded-none border border-white/5 lg:border-transparent hover:bg-white/5 lg:hover:bg-transparent transition-all"
          >
            <div className="p-1.5 md:p-1 bg-[#25D366] rounded-full text-white shrink-0 shadow-lg shadow-[#25D366]/20">
              <MessageCircle size={36} className="md:w-[44px] md:h-[44px]" fill="currentColor" strokeWidth={1} />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Chat on WhatsApp</p>
              <p className="text-xl md:text-2xl xl:text-3xl font-black tracking-tight group-hover:text-[#25D366] transition-colors uppercase">
                Chat Now
              </p>
            </div>
          </motion.a>

          {/* Download Brochure */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-start lg:justify-center xl:justify-start gap-4 p-4 lg:p-0 lg:px-6 group bg-[#111] lg:bg-transparent rounded-2xl lg:rounded-none border border-white/5 lg:border-transparent hover:bg-white/5 lg:hover:bg-transparent transition-all"
          >
            <div className="bg-white p-2 md:p-2.5 rounded-xl relative shrink-0 shadow-lg shadow-white/10">
              <FileDown size={28} className="md:w-[32px] md:h-[32px] text-[#e41e26]" />
              <div className="absolute inset-2 border-b-2 border-slate-100 flex flex-col gap-1 mt-5 md:mt-6">
                <div className="w-full h-0.5 bg-slate-100" />
                <div className="w-2/3 h-0.5 bg-slate-100" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Download Brochure</p>
              <p className="text-xl md:text-2xl xl:text-3xl font-black tracking-tight group-hover:text-[#e41e26] transition-colors uppercase">
                Download
              </p>
            </div>
          </motion.a>

          {/* Visit Campus */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-start lg:justify-center xl:justify-start gap-4 p-4 lg:p-0 lg:px-6 group bg-[#111] lg:bg-transparent rounded-2xl lg:rounded-none border border-white/5 lg:border-transparent hover:bg-white/5 lg:hover:bg-transparent transition-all"
          >
            <div className="text-[#e41e26] shrink-0">
              <MapPin size={40} className="md:w-[48px] md:h-[48px]" fill="currentColor" stroke="white" strokeWidth={1} />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Visit Campus</p>
              <p className="text-xl md:text-2xl xl:text-3xl font-black tracking-tight group-hover:text-[#e41e26] transition-colors uppercase">
                Find Us
              </p>
            </div>
          </motion.a>

        </div>
      </div>

      {/* Floating WhatsApp Button (Matches the reference top right green circle) */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] cursor-pointer"
      >
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center">
          <MessageCircle size={32} fill="currentColor" strokeWidth={1} />
        </div>
      </motion.div>
    </section>
  );
}
