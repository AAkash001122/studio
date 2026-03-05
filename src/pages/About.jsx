
import React from "react";
import { Target, Users, CheckCircle, Award, Zap, Heart, Quote } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const AboutPage = () => {
  return (
    <>
    <div className="w-full bg-[#0a0a0a] text-white">

      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
    
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] z-0"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            ABOUT US
          </h1>
          <div className="h-1 w-24 bg-[#00E676] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- 2. OUR PHILOSOPHY --- */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <span className="text-[#00E676] font-sans font-bold tracking-[0.2em] text-sm uppercase">Our Philosophy</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-gray-300 leading-tight">
            "Stories are not made to fill screens.
            <br className="hidden md:block" />
            <span className="text-white not-italic mt-4 block">They are made to be felt.</span>
          </h2>
        </div>
      </section>

      {/* --- 3. OUR APPROACH (Grid Layout) --- */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#00E676]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mb-6 group-hover:bg-[#00E676] group-hover:text-black transition-colors">
                <Target size={28} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Clarity</h3>
              <p className="font-sans text-gray-400 leading-relaxed">
                Every project begins with absolute clarity. We dive deep into the brand's core to understand the 'why' before the 'how'.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#00E676]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mb-6 group-hover:bg-[#00E676] group-hover:text-black transition-colors">
                <Users size={28} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Collaboration</h3>
              <p className="font-sans text-gray-400 leading-relaxed">
                We don't just work for you; we work with you. A seamless partnership ensures the vision is translated perfectly onto the screen.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#00E676]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mb-6 group-hover:bg-[#00E676] group-hover:text-black transition-colors">
                <CheckCircle size={28} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Preparation</h3>
              <p className="font-sans text-gray-400 leading-relaxed">
                Meticulous planning and rigorous preparation eliminate chaos on set, ensuring disciplined execution every single time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CREATIVE ADDITION: OUR DNA (Values Strip) --- */}
      <section className="py-16 border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
            <div className="flex items-center gap-3">
              <Zap className="text-[#00E676]" size={24} />
              <span className="font-serif text-xl text-white">Cinematic Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-[#00E676]" size={24} />
              <span className="font-serif text-xl text-white">Passionate Storytelling</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-[#00E676]" size={24} />
              <span className="font-serif text-xl text-white">Award Winning Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FOUNDER SECTION (Visionary) --- */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Founder Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#00E676] translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10">
              {/* Placeholder Image - Replace with real Founder Photo */}
              <img 
                src="https://picsum.photos/seed/prithvi/600/800" 
                alt="Prithvi Singhaniya" 
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Founder Bio */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-[#00E676] rounded-full">
              <span className="text-[#00E676] text-xs font-bold uppercase tracking-widest">The Visionary</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight">
              Prithvi <br /> <span className="text-[#00E676]">Singhaniya</span>
            </h2>

            <h3 className="font-sans text-xl text-gray-300 font-light">
              Producer / Executive Producer
            </h3>

            <div className="w-20 h-1 bg-white/20 rounded-full"></div>

            <p className="font-sans text-gray-400 text-lg leading-relaxed">
              With over <span className="text-white font-semibold">30+ years</span> of experience in the advertising film industry, Prithvi has seen the evolution of Indian storytelling firsthand.
            </p>
            <p className="font-sans text-gray-400 text-lg leading-relaxed">
              His leadership style combines creative freedom with operational discipline. He believes that a good producer is like an invisible conductor—ensuring every note hits perfectly without stealing the spotlight.
            </p>

            {/* Signature / Quote Block */}
            <div className="pt-6 border-t border-white/10 mt-8 flex items-center gap-4">
              <Quote className="text-[#00E676]" size={32} />
              <p className="font-serif text-xl italic text-gray-300">
                "We don't just shoot films; we craft legacies."
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
    <FooterWithCTA/>
    </>

  );
};

export default AboutPage;
