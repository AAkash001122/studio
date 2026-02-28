import React from "react";

const About = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* 🔥 Studio Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Background Image */}
        <img
          src="https://www.shutterstock.com/image-photo/cinema-camera-on-set-film-260nw-2514745591.jpg" // Add your cinematic studio image here
          alt="WhiteMarble Studio"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-widest">
            WHITEMARBLE
          </h1>
          <div className="w-24 h-1 bg-red-600 my-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            A New Age Film & Entertainment Studio
          </p>
        </div>
      </div>

      {/* 🏢 Company Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-20">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 uppercase tracking-wide">
            The Company
          </h2>
          <div className="w-12 h-1 bg-red-600 mt-3"></div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
            Films. Music. Artists. <br />
            At our core, we’re storytellers.
          </h3>
        </div>

        {/* Description */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            WhiteMarble is a creative-driven entertainment studio dedicated to
            producing high-quality cinematic experiences. We collaborate with
            visionary filmmakers, artists, and creators to bring compelling
            stories to life.
          </p>

          <p>
            As a fully integrated production house, WhiteMarble oversees
            everything from development and production to global distribution,
            music creation, branding, and digital innovation.
          </p>

          <p>
            Our mission is simple — create powerful stories that inspire,
            entertain, and leave a lasting cultural impact worldwide.
          </p>
        </div>
      </div>

      {/* 🎬 Extra Studio Stats Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">
          <div>
            <h3 className="text-4xl font-bold text-red-600">50+</h3>
            <p className="mt-2 text-gray-400">Projects Produced</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600">20+</h3>
            <p className="mt-2 text-gray-400">Global Partnerships</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600">10+</h3>
            <p className="mt-2 text-gray-400">Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
