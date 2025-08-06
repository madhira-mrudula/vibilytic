// BrandSidebarMenu.js
import React from "react";
import { FiLogOut } from "react-icons/fi";
import {
  LayoutDashboard,
  Megaphone,
  ClipboardList,
  Users,
  MessageSquare,
  BarChart2,
  CreditCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/brand-dashboard", value: "dashboard", icon: <LayoutDashboard size={20} /> },
  { name: "Post Campaign", path: "/postCampagins", value: "post", icon: <Megaphone size={20} /> },
  { name: "Manage Campaigns", path: "/managePosts", value: "manage", icon: <ClipboardList size={20} /> },
  { name: "Browse Influencers", path: "/BrowserInfluencers", value: "browse", icon: <Users size={20} /> },
  { name: "Messages", path: "/messages", value: "messages", icon: <MessageSquare size={20} /> },
  { name: "Reports", value: "reports", icon: <BarChart2 size={20} /> },
  { name: "Billing", path: "/billing", value: "billing", icon: <CreditCard size={20} /> },
  { name: "Logout", value: "logout", icon: <FiLogOut size={20} /> },
];

export const BrandSidebarMenu = ({ isOpen, setIsOpen, activePage, setActivePage }) => {
  const nav = useNavigate();

  const handleClick = (item) => {
    if (item.value === "logout") {
      nav("/login", { replace: true });
    } else {
      setActivePage(item.value);
      if (item.path) nav(item.path);
    }
    setIsOpen(false); // Close menu on mobile
  };

  return (
    <div
      className={`bg-white w-64 p-4 shadow-md border-r flex flex-col h-screen fixed top-0 left-0 z-40 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <h1 className="text-2xl font-semibold text-purple-600 mb-6 mt-6 md:mt-0">Vibilytic</h1>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li
            key={item.value}
            onClick={() => handleClick(item)}
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
  );
};
