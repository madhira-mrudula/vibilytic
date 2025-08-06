import { Link, useNavigate, useParams } from "react-router-dom"
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
export const BrandReg = () => {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    alert("Successful registration");
    navigate("/login");
    form.reset();
  }
  
    return ( 
        <>
       
          <div className="flex sm:flex-col md:flex-row lg:flex-row justify-center-safe">
       
        <div className="flex justify-center items-center lg-sticky top-10 mb-10 lg:mb-0 lg:mr-10 h-fit ">
        
          <img
            src="https://images.pexels.com/photos/30010318/pexels-photo-30010318.jpeg?cs=srgb&dl=pexels-gabi-brasiliano-515209300-30010318.jpg&fm=jpg"
            alt="Login Visual"
            className="w-82 sm:w-80 lg:w-96 lg:h-[540px] rounded-lg shadow-lg sticky top-10"
          />
          
        </div>
        <div className="flex flex-col shadow-lg px-8">
          <div>
            <h3 className="text-3xl font-medium mt-13 mb-12 ms-3">Brand Registration</h3>
          </div>

          <form onSubmit={handleSubmit}>
          <div className="w-full mb-7">
            <input type="text"
              name="username"
              required
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Full Name" />
          </div>
           <div className="w-full mb-7">
            <input type="email"
            required
              name="email"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Email" />
          </div>
           <div className="w-full mb-7">
            <input type="text"
              name="brand name"
              required
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Your Brand name" />
          </div>
           <div className="w-full mb-7">
            <input type="url"
            required
              name="website"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your brand Link" />
          </div>
          <div className="w-full mb-7">
            <input type="text"
            required
              name="industry"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Niche" />
          </div>
          <div className="w-full mb-7">
            <input type="tel"
            required
              name="mobile"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter contact number" />
          </div>
        {/* { <div className="w-full max-w-md mx-auto mb-7">
            <label className="block text-lg font-medium text-gray-700 mb-2">
    Upload Images
  </label>

            <div className="border-2 border-dashed border-purple-400 rounded-lg p-6 bg-white hover:shadow-lg transition duration-300 ease-in-out">
              <input
                type="file"
                multiple
                accept="image/*"
                id="imageUpload"
                
              />
              <label
                htmlFor="imageUpload"
                className="flex flex-col items-center justify-center cursor-pointer text-gray-500 hover:text-purple-600 transition"
              >
                <svg
        className="w-12 h-12 mb-3 text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12"
        />
      </svg>
                <p className="text-center">
                  <span className="font-semibold">Click to upload profile photo</span> or drag and drop
                </p>
                <p className="text-sm text-gray-400 mt-1">PNG, JPG, JPEG only</p>
              </label>
            </div>
          </div>} */}
          <label className="text-gray-500">Upload Brand logo</label>
            <div className="w-full mb-7">
            <input type="file"
            required
            accept="image/*"
              name="image"
              className="w-[470px] rounded border border-gray-200 px-3 py-4"
             />
          </div>
        <div className="w-full mb-7">
            <textarea  rows="4"
                    cols="20"
              name="brand desp"
              required
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Type Brand description" />
          </div>
         
          <div className="w-full mb-7">
            <input type="url"
            required
              name="url links"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Social Media Link1" />
          </div>
             <div className="w-full mb-7">
            <input type="url"
              name="url links"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Social Media Link2" />
          </div>
              <div className="w-full mb-7">
            <input type="url"
              name="url links"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Social Media Link3" />
          </div>
              <div className="w-full mb-7">
            <input type="number"
            required
              name="audience"
              className="w-[470px] rounded border border-gray-200 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter target Audience" />
          </div>
          
          <div className="text-center">
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 my-3 rounded-md transition">
              Register
            </button>
          </div>
          <div className="flex justify-center pb-2">
            <p className="text-gray-500">Already have an account?
             <Link to="/login/brand">
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