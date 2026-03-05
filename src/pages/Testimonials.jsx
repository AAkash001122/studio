import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      company: "IFP",
      logo: "/logos/ifp.png", // R
      quote:
        "Incredible production quality and seamless coordination. They truly understand the art of filmmaking and deliver excellence every single time.",
    },
    {
      id: 2,
      company: "Perfectly Insane",
      logo: "/logos/perfectly-insane.png", // Replace with actual image path
      quote:
        "They took our wildest ideas and executed them perfectly. A team that loves creative challenges and brings sanity to the chaos of production.",
    },
    {
      id: 3,
      company: "Backbenchers Production",
      logo: "/logos/backbenchers.png", // Replace with actual image path
      quote:
        "Grounded, authentic, and professional. White Marble brings a unique narrative style to every project, making storytelling look effortless.",
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            TESTIMONIALS
            <span className="block w-16 h-1.5 bg-[#00E676] mt-4 mx-auto"></span>
          </h2>
        </div>

        {/* Grid Layout for 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-[#141414] p-8 md:p-10 rounded-2xl border border-white/10 hover:border-[#00E676] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full"
            >
              {/* Top: Quote Icon */}
              <div>
                <div className="text-[#00E676] mb-6">
                  <Quote size={32} fill="rgba(0, 230, 118, 0.2)" />
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg md:text-xl text-gray-300 italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom: Logo / Company Name */}
              <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                {/* Logo Image */}
                <div className="h-10 md:h-12 bg-white/5 rounded px-2 flex items-center justify-center overflow-hidden">
                  {/* NOTE: Uncomment the line below and replace src with your image */}
                  {/* <img src={item.logo} alt={item.company} className="h-full w-auto object-contain" /> */}

                  {/* Fallback Text if no image */}
                  <span className="font-sans font-bold text-white uppercase tracking-wider text-lg">
                    {item.company}
                  </span>
                </div>

                {/* Decorative Green Star/Rating hint */}
                <div className="flex gap-1 text-[#00E676]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
