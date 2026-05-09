import { Facebook, Twitter, Instagram, Linkedin, GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">IZEE <span className="font-light">INSTITUTE</span></span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Leading the way in global education and career-focused learning since 2004. Empowering the next generation of global leaders.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {["About Us", "Our Institutions", "Admissions", "Placements", "Contact Us"].map(item => (
                <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Academic Programs</h4>
            <ul className="space-y-4 text-slate-400">
              {["Business Management", "Nursing & Healthcare", "Aviation Management", "Computer Applications", "Global MBA"].map(item => (
                <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-sm">IZEE Group of Institutions, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-sm">+91 000 000 0000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-sm">admissions@izeeedu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2024 IZEE Group of Institutions. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
