import React, { useState } from 'react';
import { Home, User, Search, MessageCircle, DollarSign, Users, Settings, Camera } from 'lucide-react';
import DashboardPage from '../InfluencerDashBoard/InfluencerSideBar';   // <-- Make sure this file exists
import MyProfile from '../InfluencerDashBoard/MyProfilePage';
import BrowseCampaign from '../InfluencerDashBoard/InfluBrowse';
import MessagePage from '../InfluencerDashBoard/InfluMessages';
import EarningPage from '../InfluencerDashBoard/InfluEarnings';
import CollabsPagge from '../InfluencerDashBoard/InfluCollabs';
import SettingPage from '../InfluencerDashBoard/InfluSettings';

const MainArea = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
    { id: 'myprofile', label: 'My Profile', icon: User, path: '/dashboard/myprofile' },
    { id: 'browsecampaigns', label: 'Browse Campaigns', icon: Search, path: '/dashboard/browsecampaigns' },
    { id: 'messages', label: 'Messages', icon: MessageCircle, path: '/dashboard/messages' },
    { id: 'earnings', label: 'Earnings', icon: DollarSign, path: '/dashboard/earnings' },
    { id: 'collabs', label: 'Collaborations', icon: Users, path: '/dashboard/collabs' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardPage setActiveTab={setActiveTab} />;
      case 'myprofile': return <MyProfile />;
      case 'browsecampaigns': return <BrowseCampaign setActiveTab={setActiveTab} />;
      case 'messages': return <MessagePage />;
      case 'earnings': return <EarningPage setActiveTab={setActiveTab} />;
      case 'collabs': return <CollabsPagge setActiveTab={setActiveTab} />;
      case 'settings': return <SettingPage />;
      default: return <DashboardPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Camera className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Vibilytic</h1>
              <p className="text-sm text-gray-500">Influencer Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-r-2 border-purple-500 text-purple-700'
                    : 'text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MainArea;