import React, { useState } from "react";
import FooterWithCTA from "../components/FooterWithCTA";

const faqsData = [
  {
    question: "Who is White Marble Production?",
    answer: `White Marble Production is a film and advertising production house focused on cinematic storytelling and disciplined execution.
With experience across 100+ advertising films, the company delivers emotionally driven and visually precise campaigns.`
  },
  {
    question: "What kind of projects does White Marble Production handle?",
    answer: `We produce:
- Advertising Films (TV & Digital)
- Branded Stories
- Original Content (Short Films, Series Pilots, Features)`
  },
  {
    question: "What makes White Marble Production different?",
    answer: `We believe stories are not made to fill screens — they are made to be felt.
Every project is built on clarity, preparation, and visual intent.`
  },
  {
    question: "How much experience does the company have?",
    answer: `100+ advertising films executed
Production experience across 17+ states in India
Multi-location large-scale campaign execution`
  },
  {
    question: "Has White Marble worked with major brands?",
    answer: `Yes. Campaigns have been executed for brands like:
- Hyundai (Father’s Day Campaign)
- ZOVO
- Little
- Samsung
- Vivo (All-India campaign)`
  },
  {
    question: "What was the Hyundai Father’s Day campaign about?",
    answer: `It focused on emotional storytelling through intimate father-child moments, highlighting warmth, trust, and everyday connection.`
  },
  {
    question: "Does White Marble handle large-scale nationwide productions?",
    answer: `Yes. The Vivo campaign featuring Harshvardhan Rane and Fatima Sana Shaikh was executed at a national level with large-scale coordination.`
  },
  {
    question: "How does the production process begin?",
    answer: `Every project begins with understanding the brief:
- Brand message
- Audience behaviour
- Deliverables
- Platform requirements`
  },
  {
    question: "Does the company maintain budget discipline?",
    answer: `Yes. White Marble Production has:
- Zero budget overruns across delivered projects
- Consistent adherence to committed timelines`
  },
  {
    question: "What do clients say about White Marble Production?",
    answer: `Clients describe the team as:
- Professional
- Efficient
- Solution-driven
- Reliable under demanding timelines`
  },
  {
    question: "Where is White Marble Production located?",
    answer: `123, Kartik Complex, Veera Desai Road,
Andheri West, Mumbai – 400053`
  },
  {
    question: "How can we contact White Marble Production?",
    answer: `📞 +91 7903606342
🌐 www.whitemarbleproduction.com
📧 whitemarbleproduction@gmail.com`
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white min-h-screen py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-bold text-red-600">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 pb-6 text-gray-700 text-sm md:text-base transition-all duration-500 ${
                    openIndex === index ? "max-h-96 mt-2" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer.split("\n").map((line, idx) => (
                    <p key={idx} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterWithCTA />
    </>
  );
}