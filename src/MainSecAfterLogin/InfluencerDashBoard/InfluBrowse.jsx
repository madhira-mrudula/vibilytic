import React, { useState } from 'react';
import { Star, Heart, TrendingUp, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

const BrowseCampaignsPage = ({ setActiveTab }) => {
  const [campaignFilter, setCampaignFilter] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedCampaigns, setAppliedCampaigns] = useState([]);

  const campaigns = [
    { id: 1, brand: "Adidas", title: "Summer Sports Collection", category: "Fashion", budget: "$2000-5000", deadline: "Jan 15, 2025", requirements: "Instagram + TikTok" },
    { id: 2, brand: "Samsung", title: "Galaxy S24 Launch", category: "Tech", budget: "$5000-10000", deadline: "Jan 20, 2025", requirements: "YouTube Video" },
    { id: 3, brand: "Starbucks", title: "Holiday Drinks Campaign", category: "Food", budget: "$1000-3000", deadline: "Dec 30, 2024", requirements: "Instagram Stories" }
  ];

  // Apply search and filter
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesCategory =
      campaignFilter === "All Categories" || campaign.category === campaignFilter;
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApplyCampaign = (campaignId) => {
    if (!appliedCampaigns.includes(campaignId)) {
      setAppliedCampaigns([...appliedCampaigns, campaignId]);
      toast.success("✅ Campaign application submitted successfully!");
    } else {
      toast.error("⚠ You have already applied to this campaign.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions for Campaigns */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
            <Star className="w-4 h-4 mr-2" />
            Featured Campaigns
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
            <Heart className="w-4 h-4 mr-2" />
            My Category
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
            <TrendingUp className="w-4 h-4 mr-2" />
            High Paying
          </button>
          <button 
            onClick={() => setActiveTab('collabs')}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
          >
            <Eye className="w-4 h-4 mr-2" />
            My Applications
          </button>
        </div>
      </div>
      
      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Browse Campaigns</h2>
        <div className="flex space-x-4">
          <select 
            value={campaignFilter}
            onChange={(e) => setCampaignFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option>All Categories</option>
            <option>Fashion</option>
            <option>Tech</option>
            <option>Food</option>
            <option>Beauty</option>
          </select>
          <input 
            type="text" 
            placeholder="Search campaigns..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-64"
          />
        </div>
      </div>
      
      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map(campaign => (
            <div key={campaign.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {campaign.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">by {campaign.brand}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Budget:</span>
                      <span className="font-medium ml-2">{campaign.budget}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Deadline:</span>
                      <span className="font-medium ml-2">{campaign.deadline}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Requirements:</span>
                      <span className="font-medium ml-2">{campaign.requirements}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => handleApplyCampaign(campaign.id)}
                  disabled={appliedCampaigns.includes(campaign.id)}
                  className={`px-6 py-2 rounded-lg ${
                    appliedCampaigns.includes(campaign.id) 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                  }`}
                >
                  {appliedCampaigns.includes(campaign.id) ? 'Applied' : 'Apply Now'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseCampaignsPage;
