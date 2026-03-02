import React from "react";

import FooterWithCTA from "../components/FooterWithCTA";

const help = [
  {
    question: "What does White Marble Production specialize in?",
    answer:
      "We specialize in cinematic storytelling and high-end advertising films built with clarity, preparation, and visual precision.",
  },
  {
    question: "What types of projects do you handle?",
    answer:
      "We produce advertising films, branded stories, and original content including short films, pilots, and feature projects.",
  },
  {
    question: "How experienced is your production team?",
    answer:
      "We have executed 100+ advertising films across 17+ states in India with zero budget overruns.",
  },
  {
    question: "Do you manage nationwide campaigns?",
    answer:
      "Yes, we handle multi-location and large-scale campaign executions across India with structured coordination.",
  },
  {
    question: "What makes your production process unique?",
    answer:
      "Every project begins with understanding the brand objective, audience behavior, deliverables, and platform requirements.",
  },
  {
    question: "Do you collaborate with agencies?",
    answer:
      "Yes, we work closely with brands and agencies to align creative intent with disciplined execution.",
  },
  {
    question: "How do you ensure on-time delivery?",
    answer:
      "Through structured planning, accountability, and strong on-ground execution management.",
  },
  {
    question: "Do you handle emotional storytelling campaigns?",
    answer:
      "Yes. Our work focuses on emotionally driven narratives designed to be felt, not just watched.",
  },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 flex flex-col">
      {/* HEADER */}

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="text-center px-6 py-28 bg-gradient-to-r from-[#FFF7E6] to-[#FFF1F0]">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide text-gray-900">
            Help Center
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Learn more about our production process, campaign execution,
            storytelling philosophy, and how we collaborate with brands to
            deliver emotionally resonant films.
          </p>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-20 px-6 md:px-20 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <h2 className="text-4xl font-bold text-yellow-500">100+</h2>
              <p className="mt-3 text-gray-700 font-medium">
                Advertising Films Executed
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <h2 className="text-4xl font-bold text-yellow-500">17+</h2>
              <p className="mt-3 text-gray-700 font-medium">
                States Production Experience
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <h2 className="text-4xl font-bold text-yellow-500">0%</h2>
              <p className="mt-3 text-gray-700 font-medium">Budget Overruns</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-6 md:px-20 container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {help.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-28 text-center px-6 bg-gradient-to-r from-[#FFF7E6] to-[#FFF1F0]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
            Let’s Collaborate
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Ready to create emotionally driven campaigns with disciplined
            execution? Let’s connect and tell meaningful stories together.
          </p>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-bold px-10 py-6 rounded-full text-lg md:text-xl hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </a>
        </section>
      </main>

      <FooterWithCTA />
    </div>
  );
};

export default Help;
