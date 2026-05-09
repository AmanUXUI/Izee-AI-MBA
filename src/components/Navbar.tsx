import { motion } from "motion/react";
import { Menu, X, Mail, Headphones } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = [
    { 
      icon: <Mail className="w-4 h-4 text-white" />, 
      text: "admin@izeeinstitutions.com", 
      href: "mailto:admin@izeeinstitutions.com" 
    },
    { 
      icon: <Headphones className="w-4 h-4 text-white" />, 
      text: "+91 8050002929", 
      href: "tel:+918050002929" 
    },
  ];

  return (
    <nav className="relative w-full bg-black py-3 shadow-xl z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer"
        >
          <img 
            src="https://izeeinstitutions.com/wp-content/uploads/2024/12/Logo-1-1-768x264.png.webp" 
            alt="IZee Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.text}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#e41e26] flex items-center justify-center transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-sm font-bold text-white tracking-wide transition-colors group-hover:text-[#e41e26]">
                {item.text}
              </span>
            </motion.a>
          ))}
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e41e26] text-white px-8 py-4 rounded-xl text-sm font-extrabold tracking-tight transition-all shadow-lg hover:bg-[#c31920] uppercase"
          >
            Admission Open for 2026-27
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="bg-[#e41e26] text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase">
            Apply Now
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg py-8 px-8 lg:hidden flex flex-col gap-6 shadow-2xl"
        >
          {contactInfo.map((item) => (
            <a
              key={item.text}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-white hover:text-[#e41e26] transition-colors pb-4 border-b border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-[#e41e26] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="font-bold">{item.text}</span>
            </a>
          ))}
          <button className="w-full bg-[#e41e26] text-white py-4 rounded-xl font-extrabold uppercase mt-2">
            Admission Open for 2026-27
          </button>
        </motion.div>
      )}
    </nav>
  );
}
