
import React from "react";
import { Globe, MapPin, CheckCircle } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const Client = () => {
  
  // Client Data
  const clients = [
    { name: "Hyundai", desc: "National Campaigns" },
    { name: "Samsung", desc: "Product Launches" },
    { name: "Vivo", desc: "Pan-India Execution" },
    { name: "HDFC", desc: "Brand Films" },
    { name: "HDFC Life", desc: "Emotional Stories" },
    { name: "Fast Relief", desc: "Digital Ads" },
    { name: "Zovo", desc: "Commercial Production" },
    { name: "Little", desc: "Creative Direction" },
  ];

  return (
    <>
    <div className="w-full bg-[#0a0a0a] text-white">
      
      {/* --- CLIENTS SECTION --- */}
      <section className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden">
        
        {/* Subtle Background Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              CLIENTS <span className="text-[#00E676]">& PARTNERS</span>
            </h2>
            <p className="font-sans text-gray-400 max-w-xl">
              Trusted by India's leading brands to deliver cinematic excellence and disciplined execution.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group relative h-32 md:h-40 bg-[#141414] border border-white/5 rounded-2xl flex flex-col items-center justify-center p-6 overflow-hidden transition-all duration-500 hover:border-[#00E676]/50 hover:shadow-[0_0_20px_rgba(0,230,118,0.15)]"
              >
                {/* Background Pattern (Visible on Hover) */}
                <div className="absolute inset-0 bg-[#00E676]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                {/* Logo Area (Placeholder Text) */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-[#00E676]">
                  {client.name}
                </h3>

                {/* HOVER CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                  <p className="font-sans text-xs text-center font-semibold text-white uppercase tracking-wider">
                    {client.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- ACHIEVEMENTS SECTION --- */}
      <section className="bg-[#050505] border-y border-white/5 py-16 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-between">
            
            {/* Stat 1 */}
            <div className="text-center md:text-left group">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676]">
                  <CheckCircle size={20} />
                </div>
                <h3 className="font-serif text-4xl md:text-6xl text-white font-bold leading-none group-hover:text-[#00E676] transition-colors">
                  100+
                </h3>
              </div>
              <p className="font-sans text-gray-400 text-sm md:text-base uppercase tracking-widest pl-14">
                Ads Executed
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:text-left group">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676]">
                  <MapPin size={20} />
                </div>
                <h3 className="font-serif text-4xl md:text-6xl text-white font-bold leading-none group-hover:text-[#00E676] transition-colors">
                  17+
                </h3>
              </div>
              <p className="font-sans text-gray-400 text-sm md:text-base uppercase tracking-widest pl-14">
                States Covered
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center md:text-left group">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676]">
                  <Globe size={20} />
                </div>
                <h3 className="font-serif text-2xl md:text-4xl text-white font-bold leading-none group-hover:text-[#00E676] transition-colors">
                  Multi-Location
                </h3>
              </div>
              <p className="font-sans text-gray-400 text-sm md:text-base uppercase tracking-widest pl-14">
                Production Capability
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
    <FooterWithCTA />
    </>
  );
};

export default Client;
