import React from 'react';
import { steps } from '../components/Data';
import { FaArrowRight } from "react-icons/fa";





export const Workflow = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 font-sans">
      <h2
        className="text-3xl font-bold text-black mb-13"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Workflow Process
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="w-40 h-40 rounded-full bg-[#FFD9CF] flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-red-600 font-bold text-xl mb-2">{step.number}</div>
              <p className="text-sm font-semibold text-black px-2">{step.title}</p>
            </div>

            {index !== steps.length - 1 && (
              <div
                className="text-gray-500 text-3xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
              >
                <FaArrowRight />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


