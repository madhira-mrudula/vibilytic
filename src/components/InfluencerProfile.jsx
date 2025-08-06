import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { influencers } from './Data';
import { FaCheckCircle } from 'react-icons/fa';

export const InfluencerProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <>
      <div className="sm:pt-17">
        <h1 className="text-center text-4xl font-semibold">Verified Influencer Profiles</h1>
        <p className="text-gray-500 text-center pt-5">Boost your SocialMedia Career with us.</p>
      </div>

      {/* Cards Grid */}
      <div className="pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {influencers.map((profile, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-5"
            >
              {/* Profile Image + Badge */}
              <div className="relative w-20 h-20">
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-pink-500"
                />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  {profile.badge}
                  <FaCheckCircle className="text-white text-xs" />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
                <p className="text-sm text-gray-500">{profile.designation}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 my-1">
                  <p className="text-purple-500">{profile.followers} followers</p>
                </div>
                <p className="text-sm text-gray-700 mt-2">{profile.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
