import React, { useEffect } from "react";
import { useState } from "react";
import { upis } from "./Data";
import Aos from "aos";
import 'aos/dist/aos.css'
export const Upis = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
 useEffect(()=>{
        Aos.init(
            {
                duration:800,
                easing:"ease-in-out",
                once:false
            }
        )
       })
    return (
      
        <>
            <section className="pb-5 pt-6 px-6 sm:px-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-center text-4xl font-semibold">
                        Everything You Can Do With UPI Transfers
                    </h2>
                    <p className="text-gray-600 mt-3 text-base sm:text-lg">
                        Secure, fast, and trusted ways to send or receive money.
                    </p>
                </div>
                {/* Grid */}
                <div className=" p-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {upis.map((upi, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            className="relative bg-white rounded-2xl overflow-hidden text-center p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Logo & Name */}
                            <div
                                className={`transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                                    }`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-2 rounded-full bg-gradient-to-tr from-indigo-100 via-blue-50 to-purple-100 shadow-inner">
                                        <img
                                            src={upi.logo}
                                            alt={upi.name}
                                            className="w-16 h-16 object-contain rounded"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800">{upi.name}</h4>
                            </div>
                            {/* Description on hover */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center px-6 text-gray-800 bg-white rounded-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                <p className="text-sm">{upi.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </section>

        </>
    );
}