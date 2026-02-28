import React, { useEffect, useState } from "react";
import FAQSection from "./FAQa";
import { CheckCircle } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-[#fdf9f0] py-16 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Logos */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 mb-12 max-w-5xl mx-auto">
        <img
          src="data:image/jpeg;base64,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"
          alt="DeterTech"
          className="h-22 md:h-24 object-contain"
          loading="lazy"
        />
        <img
          src="data:image/jpeg;base64,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"
          alt="Gemba"
          className="h-20 md:h-18 object-contain"
          loading="lazy"
        />
        <img
          src="https://routenote.com/blog/wp-content/uploads/2021/04/Triller-Saregama.jpg"
          alt="NCP"
          className="h-22 md:h-23 object-contain"
          loading="lazy"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLskYiMxATIDsqLQyTdy5i4XwaOtlobMaAdw&s"
          alt="TrueTraveller"
          className="h-22 md:h-24 object-contain"
          loading="lazy"
        />
        <img
          src="data:image/png;base64,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"
          alt="The Ambulance Staff Charity"
          className="h-28 md:h-30 object-contain"
          loading="lazy"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6sSj_jCnTcjfEP0qJNQTIg1hzW63NVrHcg&s"
          alt="Good Garage Scheme"
          className="h-34 md:h-32 object-contain"
          loading="lazy"
        />
      </div>

      {/* Testimonial and Google rating */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl mx-auto gap-12">
        {/* Testimonial text */}
        <p className="text-black max-w-xl text-base md:text-lg font-normal leading-relaxed">
          WhiteMarble have been incredibly helpful and supportive on all the
          projects we have worked on together. The team are all very friendly
          and professional, I would highly recommend them for anyone looking for
          a creative agency.
        </p>

        {/* Google logo and stars */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="w-28 md:w-36 object-contain"
            loading="lazy"
          />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.401 8.17L12 18.897l-7.335 3.864 1.401-8.17-5.934-5.781 8.2-1.192z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="border-t border-black mt-12"></div>
    </section>
  );
};

const HeroSection = () => {
  const videos = ["/movies.mp4", "/movies2.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Change video every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Video Background Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="max-w-5xl">
            <h1
              className="text-white font-extrabold leading-[1.1]
               text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-4xl"
            >
              Looking for a India creative agency that can drive better
              <br />
              brand awareness to your business?
            </h1>

            <p className="text-gray-300 mt-6 text-sm sm:text-base md:text-lg max-w-3xl">
              Look no further, we’re WhiteMarble, a fearless creative team of
              thinkers, writers, designers, technologists and doers. We work
              with businesses and in-house teams to do better.
            </p>

            <button
              className="mt-8 px-8 py-4 rounded-full 
                             bg-black text-white 
                             hover:bg-white hover:text-black 
                             transition duration-300"
            >
              Change me
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section below hero */}
      <TestimonialSection />

      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 bg-[#fdf9f0]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12 max-w-4xl">
          Why choose us for social media support?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-3 text-black">
              Data driven
            </h3>
            <p className="text-base md:text-lg max-w-sm text-black/90 leading-relaxed">
              We get you the results from machine learning and great creative.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-3 text-black">
              Keeping it fresh
            </h3>
            <p className="text-base md:text-lg max-w-sm text-black/90 leading-relaxed">
              Our social team will ensure content is fresh and on-trend.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-3 text-black">
              On the same team
            </h3>
            <p className="text-base md:text-lg max-w-sm text-black/90 leading-relaxed">
              See our creative agency as an extension of your team, with the
              expertise and know-how.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="data:image/jpeg;base64,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"
            alt="Data driven"
            className="w-full h-48 md:h-56 object-cover rounded-md shadow-md"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Keeping it fresh"
            className="w-full h-48 md:h-56 object-cover rounded-md shadow-md"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            alt="On the same team"
            className="w-full h-48 md:h-56 object-cover rounded-md shadow-md"
            loading="lazy"
          />
        </div>
      </section>

      <section className="w-full bg-[#d9d6cf]">
        <div className="max-w-7xl mx-auto border-t border-black">
          {/* Heading */}
          <div className="py-6 px-6">
            <h2 className="text-sm font-semibold tracking-wide">
              Social services we offer
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 border-t border-black">
            {/* Card 1 */}
            <div className="border-r border-b border-black p-16">
              <div className="mb-6 text-3xl">☰</div>
              <h3 className="font-semibold mb-3">Social Strategy</h3>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                As expert social creators, we’ll use our knowledge to develop
                insight-driven social strategies that not only leave a lasting
                impression, but effectively tell your unique brand story.
              </p>
              <button className="bg-black text-white text-xs px-5 py-2 rounded-full">
                Contact us
              </button>
            </div>

            {/* Card 2 */}
            <div className="border-b border-black p-16">
              <div className="mb-6 text-3xl">▣</div>
              <h3 className="font-semibold mb-3">Content creation</h3>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                When it comes to our India social media agency, we know what
                sticks. Our weekly approach to content creation ensures you get
                the best ideas, content and visual execution at all times.
              </p>
              <button className="bg-black text-white text-xs px-5 py-2 rounded-full">
                Contact us
              </button>
            </div>

            {/* Card 3 */}
            <div className="border-r border-b border-black p-16">
              <div className="mb-6 text-3xl">☷</div>
              <h3 className="font-semibold mb-3">Social Management</h3>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                Take away the burden of having to handle weekly posting by
                outsourcing it to our content team. We’ll use our tools to make
                the process seamless, supported by monthly reporting and
                recommendations.
              </p>
              <button className="bg-black text-white text-xs px-5 py-2 rounded-full">
                Contact us
              </button>
            </div>

            {/* Card 4 */}
            <div className="border-b border-black p-16">
              <div className="mb-6 text-3xl">▤</div>
              <h3 className="font-semibold mb-3">Paid Social Advertising</h3>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                Our paid search experience comes from ongoing learning and deep
                analysis of what works and what doesn’t. Paired with great
                creative, we’ll ensure you get the conversions you’re looking
                for.
              </p>
              <button className="bg-black text-white text-xs px-5 py-2 rounded-full">
                Contact us
              </button>
            </div>

            {/* Card 5 */}
            <div className="border-r border-black p-16">
              <div className="mb-6 text-3xl">◎</div>
              <h3 className="font-semibold mb-3">Influencer Marketing</h3>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                There are so many influencers out there that choosing the right
                one can feel overwhelming. Our India creative agency will guide
                and liaise with influencers on who we feel are right for your
                brand, content design and style.
              </p>
              <button className="bg-black text-white text-xs px-5 py-2 rounded-full">
                Contact us
              </button>
            </div>

            {/* Card 6 */}
            <div className="p-16">
              <div className="mb-6 text-3xl">◉</div>
              <h3 className="font-semibold mb-3">Video & Photography</h3>
              <p className="text-sm leading-relaxed max-w-xs mb-6">
                As a India creative agency, we have in-house photography
                capabilities and also access to specialist lifestyle and video
                photographers too, you’ve come to the right place.
              </p>
              <button className="bg-black text-white text-xs px-5 py-2 rounded-full">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e3dfd7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-16 text-[#111]">
            See the results
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE COLLAGE */}
            <div className="bg-[#3e5a5c] p-6">
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                  className="w-full h-48 object-cover"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
                  className="w-full h-48 object-cover"
                  alt=""
                />

                <img
                  src="data:image/jpeg;base64,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"
                  className="w-full h-48 object-cover"
                  alt=""
                />

                <img
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc"
                  className="w-full h-48 object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-lg mb-4 text-[#333]">Good Garage Scheme</p>

              <h3 className="text-4xl font-semibold leading-tight mb-6 text-[#111]">
                Super money savings with <br />a vehicle service digital
                campaign
              </h3>

              <p className="text-lg text-[#444] leading-relaxed mb-12 max-w-xl">
                Showcasing The Good Garage Scheme’s mission to save customers
                money on their vehicle services, by connecting them to trusted,
                local garages with a powerful marketing campaign.
              </p>

              {/* STATS */}
              <div className="flex gap-24">
                <div>
                  <h4 className="text-6xl font-semibold text-[#111]">12</h4>
                  <p className="mt-3 text-[#444]">million reach</p>
                </div>

                <div>
                  <h4 className="text-6xl font-semibold text-[#111]">23k</h4>
                  <p className="mt-3 text-[#444]">website conversions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e3dfd7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE COLLAGE */}
            <div className="bg-[#3e5a5c] p-6">
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                  className="w-full h-48 object-cover"
                  alt="Music production"
                />

                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                  className="w-full h-48 object-cover"
                  alt="Live concert"
                />

                <img
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76"
                  className="w-full h-48 object-cover"
                  alt="Studio recording"
                />

                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                  className="w-full h-48 object-cover"
                  alt="Headphones music"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-lg mb-4 text-[#333]">
                Music Marketing Campaign
              </p>

              <h3 className="text-4xl font-semibold leading-tight mb-6 text-[#111]">
                Amplifying streams & engagement <br />
                with a powerful digital music campaign
              </h3>

              <p className="text-lg text-[#444] leading-relaxed mb-12 max-w-xl">
                Showcasing emerging artists and music brands through strategic
                content, paid promotions, and platform optimisation — connecting
                tracks with the right audience and driving real engagement
                across streaming platforms.
              </p>

              {/* STATS */}
              <div className="flex gap-24">
                <div>
                  <h4 className="text-6xl font-semibold text-[#111]">8.5M</h4>
                  <p className="mt-3 text-[#444]">total streams reached</p>
                </div>

                <div>
                  <h4 className="text-6xl font-semibold text-[#111]">120k</h4>
                  <p className="mt-3 text-[#444]">new followers gained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e6c1b8]">
        <div className="grid lg:grid-cols-2 items-center min-h-screen">
          {/* LEFT CONTENT */}
          <div className="px-10 lg:px-20 py-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              We focus on you <br /> and your audience
            </h2>

            <p className="text-base md:text-lg text-black/80 leading-relaxed max-w-xl mb-8">
              At <span className="font-semibold">WhiteMarble</span>, we blend
              creativity with strategy to produce impactful music campaigns.
              From studio production to digital promotion, our team helps
              artists and music brands grow their audience, increase streams,
              and build lasting fan engagement.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/80 transition-all duration-300">
              Our Culture
            </button>
          </div>

          {/* RIGHT IMAGE – MUSIC STUDIO */}
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
              alt="Music Studio Production"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <FAQSection />

      {/* TOP LOCATION SECTION */}
      <section className="w-full bg-[#7e7a70]">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center px-10 md:px-20 py-16 text-white">
            <h2 className="text-4xl font-semibold mb-8">India</h2>

            <div className="space-y-2 text-lg leading-relaxed mb-10">
              <p>129, Kartik building, next to Kuber building, x</p>
              <p>Opposite to Lakshmi Industry, Andheri West, Mumbai,</p>

              <p className="mt-6">+91 7903606342</p>
            </div>

            <div className="space-y-6 mt-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-white" size={24} />
                <span className="text-lg">Meet us in Battersea</span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle className="text-white" size={24} />
                <span className="text-lg">Face to face meetings</span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle className="text-white" size={24} />
                <span className="text-lg">Great place for lunch</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="w-full h-[400px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30154.85832863687!2d72.81186593476565!3d19.13583140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1772195079315!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="bg-[#e7e3db] py-16 text-center text-sm text-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-6">
            <div className="inline-block bg-black text-white px-6 py-3 rounded-md font-bold tracking-widest">
              WhiteMarble
            </div>
          </div>

          <p className="mb-6">WhiteMarble</p>
          <p>129, Kartik building, next to Kuber building, x</p>
          <p>Opposite to Lakshmi Industry, Andheri West, Mumbai,</p>

          <p className="text-xs text-black/70">
            © WhiteMarble Ltd | Privacy and Cookies Policy | Terms & Conditions
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
