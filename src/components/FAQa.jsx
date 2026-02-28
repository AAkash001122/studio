import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do you measure the success of your social media campaigns?",
      answer:
        "We measure performance using engagement rates, reach, conversions, ROI and platform-specific analytics. Our strategy focuses on measurable growth and real audience impact.",
    },
    {
      question: "What level of involvement do you expect from us as clients?",
      answer:
        "We collaborate closely with our clients. While we manage strategy and execution, your feedback and brand insights help us create more authentic campaigns.",
    },
    {
      question: "What sets your agency apart from others in the market?",
      answer:
        "Our blend of creativity, data-driven decisions, and long-term growth focus ensures sustainable results rather than short-term spikes.",
    },
  ];

  return (
    <>
      {/* FAQ SECTION */}
      <section className="w-full bg-[#e3dfd7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            We’re often asked...
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-black rounded-md"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-black/70 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#e6bfb5] py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready for a free social review?
          </h3>

          <p className="text-black/80 mb-8 leading-relaxed">
            Give us a call today and we’ll review your current social media
            and provide insight in how you can improve your engagement and
            customer interest.
          </p>

          <p className="text-xl font-semibold mb-10">
            +91 7903606342
          </p>

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Consultation"
              className="w-40 md:w-52 object-contain opacity-80"
            />
          </div>
        </div>
      </section>
    </>
  );
}