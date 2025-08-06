import { useEffect } from 'react';
import {testimonials} from './Data'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const TestimonialScroll = () => {
  useEffect(() => {
     AOS.init({
       duration: 800,
       easing: 'ease-in-out',
       once: false,
     });
   }, []);
  return (
    <section className="p-19">
      <h2 className="text-center text-4xl font-semibold mb-19">
         What People Say
      </h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 px-6 md:px-20 w-max pb-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-down-left"
              className="bg-white min-w-[300px] max-w-sm rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-purple-500 mb-2">{item.role}</p>
              <p className="text-gray-600 text-sm italic">"{item.review}"</p>
            </div>
          ))}
        </div>
        <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      </div>
    </section>
  );
};

