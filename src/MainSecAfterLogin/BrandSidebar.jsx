import React, { useState } from "react";
import { BrandDashboardBarGraph } from "./BrandDashboardBarGraph";
import { BrowserInfluencers } from "./BrowseInfluencers";
import ManageCampaigns from "./ManageCampagins";
import Messages from './BrandMessages'
import { FiSettings,FiLogOut } from 'react-icons/fi';
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
import MetricsView from "./Metrics";
import BrandReports from "./BrandReports";
import Billing from "./BrandBilling";
import { PostCampaign } from "./BrandPostCampagins";
import {useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path:"/brand-dashboard", value: "dashboard", icon: <LayoutDashboard size={20} /> },
  { name: "Post Campaign",path:"/postCampagins", value: "post", icon: <Megaphone size={20} /> },
  { name: "Manage Campaigns", path:"/managePosts", value: "manage", icon: <ClipboardList size={20} /> },
  { name: "Browse Influencers", path:"/BrowserInfluencers", value: "browse", icon: <Users size={20} /> },
  { name: "Messages", path:"./messages", value: "messages", icon: <MessageSquare size={20} /> },
  { name: "Reports", value: "reports", icon: <BarChart2 size={20} /> },
  { name: "Billing", path:"/billing", value: "billing", icon: <CreditCard size={20} /> },
  // { name: "Settings", value: "settings", icon: <FiSettings size={20} /> },
  { name: "Logout", value: "logout", icon: <FiLogOut size={20} />},
];


export const BrandSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
   const nav=useNavigate()
 
  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <div className="flex flex-col gap-6">
            <div className="">
            <BrandDashboardBarGraph />
            </div>
            <div>
            <MetricsView />
            </div>
          </div>
        );
      case "post":
        return (
        <div>
          <PostCampaign />
          </div>
        );
      case "manage":
        return <ManageCampaigns />;
        case "browse":
          return <BrowserInfluencers />
      case "reports":
        return <BrandReports/>
        case "billing":
          return <Billing/>
          case "messages":
            return <Messages />
            case "logout":
              return nav("/login",{replace:true})
      default:
        return <div className="p-4 text-gray-500">Page not implemented yet.</div>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-white w-64 p-4 shadow-md border-r flex flex-col h-screen fixed top-0 left-0 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <h1 className="text-2xl font-semibold text-purple-600 mb-6 mt-6 md:mt-0">
          Vibilytic
        </h1>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li
              key={item.value}
              onClick={() => {
                setActivePage(item.value);
                setIsOpen(false);
                nav(item.path); // Close menu on mobile
              }}
              className={`flex items-center gap-3 text-gray-700 p-2 rounded-lg cursor-pointer transition-all ${
                activePage === item.value
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto ml-0 md:ml-64 lg:ml-0 p-4">
        {renderContent()}
      </div>
    </div>
  );
};
