import React from "react";

import FooterWithCTA from "../components/FooterWithCTA";

export default function LookPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <section className="relative w-full h-screen overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/lookhere.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6 md:px-20">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
      WhiteMarble Production
    </h1>
  </div>
</section>

        {/* Main Content Section: Two-Column Text + Video Grid */}
        <section className="py-20 px-6 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text + CTA */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
                Premium Cinematic Storytelling
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                WhiteMarble Production delivers premium cinematic storytelling
                through innovative visuals, refined direction, and technical
                excellence. From concept development to final production, we
                craft compelling visual experiences that elevate brands,
                artists, and creative visions with precision, creativity, and
                professional execution.
              </p>

              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold py-4 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Right Column: Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
                <video controls className="w-full h-72 object-cover rounded-xl">
                  <source src="/look.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
                <video controls className="w-full h-72 object-cover rounded-xl">
                  <source src="/look1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterWithCTA />
    </>
  );
}
