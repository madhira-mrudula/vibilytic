import React from "react";
import Aos from 'aos';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const Login = () => { 
  const [isotp, setIsOtp] = useState(false);
  const [isBtn, setIsBtn] = useState(true);
  const [isResend,setIsResend]=useState(false);
  const [timer,setTimer]=useState(59);
  const [phnumb,setPhNumb]=useState("");
  const[otpdef,setOtpDef]=useState("");
  //  const[isverifyotp,setIsVerifyOtp]=useState(true);
  const mobileNumb="9392998674";
  const otp="123456";
 const { role } = useParams();
 const navigate=useNavigate();
 localStorage.setItem('token','false')

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: false
    }

    )
  },[]);
  useEffect(()=>{
    let countdown;
    if(!isResend && timer>0)
    {
      countdown=setInterval(()=>{
        setTimer(prev=>prev-1);
      },1000);
    }
    if(timer===0){
      setIsResend(true);
      clearInterval(countdown);
    }
    return()=>clearInterval(countdown);
   
  },[timer,isResend]);

  const sendOtp = () => {
     
    if(phnumb == mobileNumb)
    {
    alert("OTP sent successfully !!");
    setIsOtp(true);
    setIsBtn(false);
    }
    else if(phnumb =="6281367434"){
    alert("OTP sent successfully !!");
    setIsOtp(true);
    setIsBtn(false);
    }
    else if(phnumb=="7989790503"){
    alert("OTP sent successfully !!");
    setIsOtp(true);
    setIsBtn(false);
    }
   
  else{ 
    alert("Enter Mobile Number Correctly");
  }
  };
  const handleResend=()=>{
    alert('OTP Resent');
    setIsResend(false);
    setTimer(60);
  };
  const verifyOtp=()=>{
    if(mobileNumb===phnumb && otp===otpdef){
    alert("OTP verified Successfully");
    navigate("/HomePage",{replace:true});
    }
    else if(phnumb=="6281367434" && otp==="123456"){
     alert("OTP verified Successfully");
     localStorage.setItem('token','true')
     navigate("/brand-dashboard",{replace:true});
    }
    else if(phnumb=="7989790503" && otp=="123456"){
       alert("OTP verified Successfully");
     navigate("/influencer-dashboard",{replace:true});
    }
    else{
      alert("Entered OTP is unsucessful, Try Again")
      
    }
    
   
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-12">

      {/* 📷 Left Side Image */}
      <div className="flex justify-center items-center mb-10 lg:mb-0 lg:mr-10" data-aos="fade-left">
        <img
          src="https://images.pexels.com/photos/30010318/pexels-photo-30010318.jpeg?cs=srgb&dl=pexels-gabi-brasiliano-515209300-30010318.jpg&fm=jpg"
          alt="Login Visual"
          className="w-72 sm:w-80 lg:w-96 lg:h-[440px] rounded-lg shadow-lg"
        />
      </div>

      {/* 🔐 Right Side Login Form */}
      <div className="text-center flex flex-col items-center justify-center w-full max-w-md" data-aos="fade-right">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full">
          <div className="grid grid-cols-1">
            <h3 className="font-medium text-3xl text-gray-800 mb-6">Login For More</h3>

            {/* 📱 Mobile Input */}
            <div className="w-full mb-4">
              <input
                className="w-full mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow rounded-md px-4 py-2"
                type="tel"
                name="mob"
                placeholder="Enter Mobile Number"
                maxLength={10}
                onChange={(e) => {
                  const numeric = e.target.value.replace(/\D/g, ''); // Remove non-digits
                  e.target.value = numeric;
                  setPhNumb(e.target.value)
                }}
                pattern="[0-9]{10}"
              />
            </div>
            {isBtn &&
              <div>
                <button
                  onClick={sendOtp}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 my-3 rounded-md transition">
                  Send OTP
                </button>
              </div>
            }

            {/* 🔢 OTP Input */}

            {isotp &&
              <>
                <div className="w-full mb-6">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d{6}"
                    maxLength={6}
                    name="otp"
                    onChange={(e) => {
                      const numeric = e.target.value.replace(/\D/g, ''); // Remove non-digits
                      e.target.value = numeric;
                      setOtpDef(e.target.value);
                    }}
                    placeholder="Enter OTP 123456"
                    className="w-full mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow rounded-md px-4 py-2"
                  />
                </div>
            
                <div>
                  
                  <button
                  onClick={verifyOtp}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-8 my-3 rounded-md transition">
                    Verify OTP
                  </button>
               
                </div>
                
                {/* {!isverifyotp &&
                <div>
                  <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-8 my-3 rounded-md transition">
                    Login
                  </button>
                </div>
                } */}
                
                <div>
                  {isResend &&
                  <button className="text-green-600" onClick={handleResend}>Resend OTP</button>
                   }
                   {!isResend &&
                   <p className="text-green-600">Resend otp in {timer}s</p>
                   }
                  </div>
                
              </>
            }
          </div>
          <p className="text-gray-700 pt-3">Do not have an account?
            <Link to={`/registration/${role}`}>
              <span className="text-blue-700 cursor-pointer hover:text-purple-500 underline">Register Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
