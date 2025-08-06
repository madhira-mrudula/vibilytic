import {FaCheckCircle,FaMapMarkerAlt,FaEnvelope,FaLocationArrow,FaStar} from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {Navbar} from './Navbar'
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay,Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import "swiper/css";
export const InfluencerProfileView = () => {
  const testimonials = [
  {
    stars: 5,
    text: "Delivered high-quality content on time. Engaging and creative!"
  },
  {
    stars: 4,
    text: "Very professional to work with. Loved the results!"
  },
  {
    stars: 5,
    text: "Exceeded expectations! Will definitely collaborate again."
  },
  {
    stars: 4,
    text: "Great communication and timely delivery. Highly recommended."
  },
  {
    stars: 5,
    text: "Creative and detail-oriented. Perfect experience overall."
  }
];

const socialIcons = [FaInstagram, FaTwitter, FaYoutube];
    return ( 
        <>
        <Navbar />
        <div className="flex flex-col  lg:flex-row lg:justify-evenly items-center mt-52">
        {/* <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-54'> */}
        <div className="relative">
    <img
      src="https://randomuser.me/api/portraits/women/68.jpg"
      className="w-[200px] h-[200px] rounded-full border-3 border-purple-500 object-cover"
    />
    {/* Elite Badge */}
    <span className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-purple-500 px-3 py-1 text-[14px] rounded-2xl text-white shadow">
      Elite <FaCheckCircle className="text-white text-xs" />
    </span>
    </div>
    <div className='lg:text-start' >
     <p className="text-[24px] font-bold text-center">Thomas Evidan</p>
      <p className="text-gray-600 max-w-[570px] mt-4 mx-2">Lifestyle content creator with a passion for wellness and fashion. Worked with top brands like Nike, Sephora, and Airbnb</p>
       {/* <p className="text-purple-500 w-full max-w-[570px] mt-2">120K Followers</p> */}
      <p className=" text-black font-semibold mt-3 mx-2">Niche:<span className="text-gray-600">Fashion Designer</span></p>
       <p className="text-gray-600  flex items-center mt-1 mx-2"><FaMapMarkerAlt className='text-red-500 h-5 w-5' />Chennai,India</p>
      <div className='flex flex-col md:flex-row items-center gap-9'>
      <button className='border border-gray-200 flex items-center rounded-md px-3 py-2 mt-3 bg-blue-500 text-white'><FaEnvelope className='mx-2 ' />Message</button>
       <button className='border border-gray-200 flex items-center rounded-md px-3 py-2 lg:mt-3 bg-green-500 text-white'><FaLocationArrow className='mx-2 ' />Request Collabrations</button>
      </div>
     </div>
     </div>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mt-6'>
      <div className='flex flex-col'>
      <p className='text-center text-purple-500'>Followers</p>
      <p className='text-center font-semibold'>125k Followers</p>
      </div>
      <div className='flex flex-col'>
      <p className='text-center text-purple-500'>Average Engagement Rate</p>
      <p className='text-center font-semibold'>7.5%</p>
      </div>
      <div className='flex flex-col'>
      <p className='text-center text-purple-500'>Total Collabrations</p>
      <p className='text-center font-semibold'>4</p>
      </div>
      <div className='flex flex-col'>
      <p className='text-center text-purple-500'>Experience</p>
      <p className='text-center font-semibold'>1 Years</p>
      </div>
     </div>
   <h2 className='text-[23px] font-medium mt-15 text-center'>Past Collabrations</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-28 w-full max-w-4xl mx-auto mb-10 mt-5">
  {/* Card 1 */}
  <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl font-bold text-purple-600">GlamUp x Jane</h3>
    <p className="text-sm text-gray-500 mb-2">Brand: <span className="text-black font-medium">GlamUp Cosmetics</span></p>
    <p className="text-gray-700">
      Promoted GlamUp's new vegan lipstick collection across Instagram and TikTok. Reached over 150K users and boosted brand awareness.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl font-bold text-green-600">Nike Fit Collab</h3>
    <p className="text-sm text-gray-500 mb-2">Brand: <span className="text-black font-medium">Nike</span></p>
    <p className="text-gray-700">
      Collaborated with Nike on a fitness influencer campaign. Featured workout reels and wellness tips, generating high engagement and 20% CTR.
    </p>
  </div>
  </div>
  <h2 className='text-[23px] font-medium mt-10 text-center'>Testimonails</h2>
 
  <div className='text-center'>
    <Swiper 
    modules ={[Autoplay,Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{clickable:true}}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    className = "rounded-xl pb-10">
      {testimonials.map((item,index)=>(
        <SwiperSlide key={index}>
          <div className='bg-white shadow-xl rounded-2xl p-6  hover:scale-105 transition-transform duration-300'>
            <div className="flex gap-1 mb-2 justify-center">
              {Array(item.stars).fill().map((_,i)=>(
                <FaStar key={i} className='text-yellow-400 w-5 h-5 text-center' />
              ))}
            </div>
            <p className='text-gray-700 italic px-3 py-2'>``{item.text}``</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
<div>
<p className='text-[20px] font-medium mt-10 text-center mb-4'>Follow US</p> 
 <div className='flex flex-row justify-center items-center mb-4'>
    {socialIcons.map((Icon, index) => (
      <Icon key={index} className="text-xl text-purple-600 hover:text-purple-800 mr-4 h-8 w-10" />
    ))}
 </div>
</div>
 </>
     );
}

