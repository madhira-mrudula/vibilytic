import { Link,useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';

import AOS from 'aos';
export const InfloReg = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-out",
        once:false
      }
    )
  },[]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    navigate("/login")
    alert("Successully Registered");
    form.reset();

  };
  return (
    <>

      
    <div className="flex sm:flex-col md:flex-row lg:flex-row justify-center-safe"  data-aos="zoom-out-down">
       
        <div className="flex justify-center items-center sticky top-10 mb-10 lg:mb-0 lg:mr-10 h-fit">
          <img
            src="https://images.pexels.com/photos/30010318/pexels-photo-30010318.jpeg?cs=srgb&dl=pexels-gabi-brasiliano-515209300-30010318.jpg&fm=jpg"
            alt="Login Visual"
            className="w-82 sm:w-80 lg:w-96 lg:h-[540px] rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col shadow-lg px-8">
          <div>
            <h3 className="text-3xl font-medium mt-13 mb-12 ms-3">Influencer Registration</h3>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="w-full mb-7">
            <input type="text"
              name="username"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Full Name" required />
          </div>
           
            <div className="w-full mb-7">
            <input type="file"
            accept="image/*"
              name="image"
              required
              className="w-[470px] rounded border border-gray-200 px-3 py-4"
             />
          </div>

          <div className="w-full mb-7">
            <input type="url"
              name="location" required
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Embbed Location" />
          </div>
          <div className="w-full mb-7">
            <input type="url"
              name="url links"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Platform Link1" required />
          </div>
             <div className="w-full mb-7">
            <input type="url"
              name="url links"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Platform Link2" />
          </div>
              <div className="w-full mb-7">
            <input type="url"
              name="url links"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Platform Link3" />
          </div>
          <div className="w-full mb-7">
            <input type="text"
              name="about"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Type bio..." required/>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 my-3 rounded-md transition">
              Register
            </button>
          </div>
          <div className="flex justify-center pb-2">
            <p className="text-gray-500">Already have an account?
              <Link to="/login/influencer">
              <span className="text-blue-500 cursor-pointer underline hover:text-purple-500">Click here</span>
              </Link>
              </p>
          </div>
          <div className="text-center my-3">
           
            <p>Or</p>
          
            
          </div>
          <div className="flex flex-row justify-center-safe gap-5 pb-7">
            <FcGoogle className="text-4xl"/>
            <FaFacebook className="text-4xl text-blue-700"/>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}