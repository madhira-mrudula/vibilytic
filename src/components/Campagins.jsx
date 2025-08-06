import React from "react";
import { campaigns } from '../components/Data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export const Campagins = () => {
  useEffect(()=>
  {
    AOS.init(
      {
        duration: 800,
       easing: 'ease-in-out',
      once: false,
      }
    )

  },[])
  return (
    <>
      <div className="p-18">
        <h2 className="text-4xl  font-semibold mb-16 text-center text-gray-800">
          Campaigns MarketPlace
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {campaigns.map((item, id) => (
            <div
              key={id}
              data-aos="fade-up-right"
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all hover:scale-105 duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[19/9] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white  text-sm font-semibold">{item.title}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center mb-2 align-middle">
                  <h3 className="text-2xl text-center font-medium text-gray-800">
                    {item.title}
                  </h3>
                  {/* <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                  {item.assets} assets
                </span> */}
                </div>

                <p className="text-sm text-center text-gray-600 line-clamp-2 mb-2">{item.bio}</p>

                <div className="text-sm text-center text-gray-700 mb-1">
                  <strong>Budget:</strong> {item.budget}
                </div>



                <div className="text-sm text-center text-gray-700 mb-1">
                  <strong>Platforms:</strong> {item.platforms.join(', ')}
                </div>

                {/* <div className="text-sm text-gray-700 mb-4">
                <strong>Followers:</strong> {item.followers}
              </div> */}
                {/* Button */}
                <div className="text-center pt-2">
                  <button className=" bg-purple-500 hover:bg-purple-800 text-white font-semibold py-2 px-3 rounded-lg transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>

  );
}

