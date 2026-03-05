
import React from "react";
import { ArrowRight } from "lucide-react"; 

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 md:py-40 overflow-hidden border-t border-white/5">
      

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E676]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        
        <h2 className="font-serif text-white text-4xl md:text-7xl font-bold leading-tight mb-12 tracking-tight">
          Let’s create something <br className="hidden md:block" />
          <span className="text-[#00E676] italic">cinematic.</span>
        </h2>

      
        <button className="group relative px-10 py-4 bg-[#00E676] text-black text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,230,118,0.5)]">
          
        
          <span className="relative z-10 flex items-center gap-3">
            Contact Us
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>

          {/* Shine Effect on Hover (White slide) */}
          <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12"></div>
        </button>

      </div>
    </section>
  );
};

export default CTASection;
