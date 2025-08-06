import { useEffect, useState } from "react";
import {faqs} from './Data';
import Aos from 'aos';


export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(()=>{
    Aos.init(
      {
        Duration:800,
        easing:"ease-in-out",
        once:false
      }
    )
  },
  []);
  

  return (
    <section className="max-w-3xl mx-auto px-4 pb-8" data-aos="fade-up">
      <h2 className="text-center text-4xl font-semibold pb-12 pt-4">FAQs for Influencers & Brands</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 shadow transition-all hover:scale-105"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg  focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 px-2 rounded bg-purple-500 text-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
