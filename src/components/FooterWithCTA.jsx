import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const FooterWithCTA = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E676]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
           
          <div className="h-16 md:h-20 w-auto overflow-hidden">
  <img
    src="/logowm.png"
    alt="WhiteMarble Production"
    className="h-full w-48 md:w-56 object-contain"
  />
</div>

            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              A fearless creative team of thinkers, writers, and doers. We craft
              cinematic stories for brands and screens worldwide.
            </p>

       
            <div className="flex gap-4">
             <a
  href="https://www.instagram.com/whitemarbleproduction_?utm_source=qr&igsh=MWc3azI1dmdhZ3Y2Nw=="
  target="_blank" 
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#00E676] hover:border-[#00E676] transition-all duration-300"
>
  <Instagram size={18} />
</a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#00E676] hover:border-[#00E676] transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#00E676] hover:border-[#00E676] transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="font-serif text-white text-lg font-bold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="font-sans text-gray-400 text-sm hover:text-[#00E676] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="font-sans text-gray-400 text-sm hover:text-[#00E676] transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="font-sans text-gray-400 text-sm hover:text-[#00E676] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  className="font-sans text-gray-400 text-sm hover:text-[#00E676] transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-sans text-gray-400 text-sm hover:text-[#00E676] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

   
          <div>
            <h3 className="font-serif text-white text-lg font-bold mb-6">
              Capabilities
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="font-sans text-gray-400 text-sm">
                  Advertising Films
                </span>
              </li>
              <li>
                <span className="font-sans text-gray-400 text-sm">
                  Branded Stories
                </span>
              </li>
              <li>
                <span className="font-sans text-gray-400 text-sm">
                  Original Content
                </span>
              </li>
              <li>
                <span className="font-sans text-gray-400 text-sm">
                  Production Services
                </span>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-serif text-white text-lg font-bold mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#00E676] shrink-0 mt-1" size={18} />
                <span className="font-sans text-gray-400 text-sm leading-relaxed">
                 129, Kartik building, next to Kuber building, <br />
                  Opposite to Lakshmi Industry, Andheri West, <br />
                  Mumbai, Maharashtra 400065
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#00E676] shrink-0" size={18} />
                <a
                  href="mailto:hello@whitemarble.com"
                  className="font-sans text-gray-400 text-sm hover:text-white transition-colors"
                >
                 whitemarbleproduction@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#00E676] shrink-0" size={18} />
                <a
                  href="tel:+919876543210"
                  className="font-sans text-gray-400 text-sm hover:text-white transition-colors"
                >
                  +917903606342
                </a>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-gray-500 text-xs text-center md:text-left">
            © 2026 White Marble Production. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-gray-500 text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-gray-500 text-xs hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithCTA;

