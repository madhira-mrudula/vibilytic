import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Partners} from './Partners';
import { InfluencerProfile } from './InfluencerProfile';
import { Campagins } from './Campagins';
import {Navbar} from './Navbar';
import { Upis } from './Upis';
import { ChatSec } from './ChatSec';
import {Workflow} from './Workflow';
import { TestimonialScroll } from './Testmonials';
import { Pricing } from './Pricing';
import { FAQSection } from './Faq';
import {Footer} from './Footer';
import './Style.css';
const HeroSec = () => {
  // const navigate=useNavigate();
  // navigate("/Homepage",{replace:true});
  return (
    <>
      
        <div className='bg-gray-100'>
        <Navbar />
        <div className='mx-16 mt-16 md:h-fit lg:h-screen md:pb-17 '>
          <div className='flex flex-col md:flex-row lg:flex-row justify-around'>
            {/* leftSec */}
            <div className='flex flex-col justify-center mt-4 lg:mt-10 text-center lg:text-left'>
              <h2 className="text-5xl sm:text-4xl md:text-5xl pb-6 small-screen-text"> Drive Powerful<br /> <span className="block mt-3">Creator Marketing</span></h2>
              <p className='text-gray-500 sm:text-lg'>Build, manage and measure your creator community with TRIBE’s <br /> platform and expert support team</p>
              <div className='flex flex-col sm:flex-row sm:justify-center gap-4 pt-10 ps-6'>
                <Link to="/login/influencer">
                <button
                  className="text-white bg-purple-500 hover:bg-purple-600 font-semibold py-2 px-4 rounded-md transition duration-300 me-6"
                >
                  Join as influencer
                </button>
                </Link>
                <Link to='/login/brand'>
                <button
                  className="text-white bg-purple-500 hover:bg-purple-600 font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Join as Brand
                </button>
                </Link>
              </div>

            </div>
            <div className='w-[500px] h-96 sm:hidden md:block lg:block small-screen'>
              <video
                className="rounded-lg "
                
                autoPlay 
                muted
                playsInline
                loop
                src="https://influencer-videos.b-cdn.net/Influencer_HeaderAnimation_2807.mp4" // Replace with your video URL
              >
              </video>
            </div>
          
        
        </div>
      </div>
      <InfluencerProfile />
      <Campagins />
      <Upis />
      <ChatSec />
      <Workflow />
      <TestimonialScroll />
      <Pricing />
      <FAQSection />
      <Footer />
      </div>
    </>
  );
}

export default HeroSec;
