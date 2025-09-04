import React, { useState } from "react";
import {
  LayoutDashboard,
  Megaphone,
  ClipboardList,
  Users,
  MessageSquare,
  BarChart2,
  CreditCard,
  Menu,
  X,
} from "lucide-react";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet, useNavigate } from "react-router-dom"; // <-- IMPORTANT!

const menuItems = [
  { name: "Dashboard", path: "/brand-dashboard", icon: <LayoutDashboard size={20} /> },
  { name: "Post Campaign", path: "/postCampagins", icon: <Megaphone size={20} /> },
  { name: "Manage Campaigns", path: "/managePosts", icon: <ClipboardList size={20} /> },
  { name: "Browse Influencers", path: "/BrowserInfluencers", icon: <Users size={20} /> },
  { name: "Messages", path: "/messages", icon: <MessageSquare size={20} /> },
  { name: "Reports", path: "/reports", icon: <BarChart2 size={20} /> },
  { name: "Billing", path: "/billing", icon: <CreditCard size={20} /> },
  { name: "Logout", path: "/login", icon: <FiLogOut size={20} /> },
];

export const BrandSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
 const handleNavigate=(item)=>{
if(item.name==="Dashboard"){
  navigate("/Homepage")
  setTimeout(() => {
    navigate("/brand-dashboard")
  }, 0);
 setIsOpen(false) 
}
else{
  navigate(item.path);
  setIsOpen(false)
}
 }
  return (
    <>
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-white border-r shadow-md z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold text-purple-600 mb-6">Vibilytic</h1>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.path}>
                <button onClick={()=>handleNavigate(item)} className="w-full text-left">
                  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${window.location.pathname===item.path?'bg-purple-100 text-purple-700 font-semibold':'text-gray-700 hover:bg-purple-50 hover:text-purple-600'}`}>
                    {item.icon}
                    <span>{item.name}</span>
                    </div>
                </button>
                {/* <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-purple-100 text-purple-700 font-semibold"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink> */}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MAIN CONTENT AREA – PLACE OUTLET HERE */}
        <div className="flex-1 overflow-y-auto ml-0 md:ml-64 lg:ml-0 p-4 bg-gray-50">
        <Outlet />
      </div>
    </div>
  
     </>
  );
};
