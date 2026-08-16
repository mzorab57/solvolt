import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaTiktok, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-500"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 lg:gap-8 items-center">
          
          {/* 1. Company Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              {/* Removed scale-150 and used proper width/height for better control */}
              <img src="/logon.png" alt="Solvolt" className="h-28 w-28 scale-150 object-contain drop-shadow-lg" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Solvolt is an international brand founded in Vietnam. We deal with UPS, solar panels, 
              inverters, batteries, and other related power solutions with a focus on sustainability 
              and reliability.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/share/1BcMu21egr/" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/solvolt_energy?igsh=MXBmb3V4c3FmOHBmMQ==" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all duration-300" aria-label="Instagram">
               <FaInstagram size={18} />
              </a>
              {/* Note: Update the link below to your actual LinkedIn link */}
              <a href="https://www.instagram.com/solvolt_energy?igsh=MXBmb3V4c3FmOHBmMQ==" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all duration-300" aria-label="LinkedIn">
               <FaLinkedin size={18} />
              </a>
              <a href="https://www.tiktok.com/@solvolt_energy?_r=1&_t=ZS-92s5YqDycKr" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-700 hover:border-slate-700 hover:text-white transition-all duration-300" aria-label="TikTok">
               <FaTiktok size={18} />
              </a>
            </div>
          </div>

        

          {/* 3. Contact Info */}
          <div className="flex flex-col lg:items-end w-full">
            <div className="w-full max-w-xs space-y-6">
              <h3 className="text-xl font-bold text-white mb-2 relative inline-block">
                Contact Info
              
              </h3>
              
              <ul className="space-y-5 mt-6">
                {/* Location */}
                <li className="flex items-start space-x-4">
                  <div className="mt-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-blue-400">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <p className="text-slate-400 text-sm leading-tight pt-1">
                    Erbil, Azadi<br/>Street Kani
                  </p>
                </li>

                {/* Phones */}
                <li className="flex items-start space-x-4">
                  <div className="mt-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-blue-400">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div className="text-slate-400 text-sm space-y-1.5 pt-1">
                    <p className="hover:text-white transition-colors cursor-pointer">+964 750 960 5400</p>
                    <p className="hover:text-white transition-colors cursor-pointer">+964 770 447 6500</p>
                    <p className="hover:text-white transition-colors cursor-pointer">+964 750 088 5400</p>
                    <p className="hover:text-white transition-colors cursor-pointer">+964 750 099 5400</p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-center space-x-4">
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-blue-400">
                    <FaEnvelope size={16} />
                  </div>
                  <a href="mailto:info@solvoltenergy.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                    info@solvoltenergy.com
                  </a>
                </li>

                {/* WhatsApp Button */}
                <li className="pt-2">
                  <a
                    href="https://wa.me/9647509605400"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-3 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/20 px-4 py-2.5 rounded-xl transition-all duration-300 w-full"
                  >
                    <FaWhatsapp size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium tracking-wide">Message on WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} <span className="text-white font-semibold">Solvolt</span>. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Powered by{" "}
            <a 
              href="https://wa.me/96407701411893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-bold hover:opacity-80 transition-opacity"
            >
              Al-Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;