import React, { useState } from "react";
import logo from '../assets/logo.png';
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate
   const Logoutbtn=()=>{
     navigate("/login");
   }

  return (
    <nav className=" bg-gray-100 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
        <img src={logo} alt='logo' style={{ height: "80px", width: "80px" }} />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><FaUserCircle className="w-7 h-7 text-purple-600" /></li>
          <li>
             <Link to="/login">
            <button onClick={Logoutbtn} className="border border-gray-200 rounded px-3 py-1.5 bg-red-500 text-white">Logout </button>
            </Link>
            </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-row space-x-8 text-gray-700 font-medium">
            <li><FaUserCircle className="w-7 h-7 text-purple-600" /></li>
           <li>
          
            <button onClick={Logoutbtn} className="border border-gray-200 rounded px-3 py-1.5 bg-red-500 text-white">Logout </button>
            
            </li>
         
          </ul>
        </div>
      )}
    </nav>
  );
}
