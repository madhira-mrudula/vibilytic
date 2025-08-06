import { useEffect, useState } from "react";
import { tools } from "../components/Data";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const ChatSec = () => {
 useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
    return ( 
        <>
    <section className="max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-semibold">
         Chat & Collaboration Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-20">
        {tools.map((tool, index) => (
          <div
            key={index}
            data-aos="fade-right"
            className="flex flex-col  items-center gap-4 px-5 py-12 bg-white shadow rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="">{tool.icon}</div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        </>
     );
}