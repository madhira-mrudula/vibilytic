// src/pages/DashboardPage.jsx
import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Bell, TrendingUp, Calendar, Users, Heart, DollarSign, Search, Edit, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const DashboardPage = ({ setActiveTab }) => {
  // Sample analytics data
  const analyticsData = [
    { month: 'Jan', followers: 4000, engagement: 2400, earnings: 1200 },
    { month: 'Feb', followers: 3000, engagement: 1398, earnings: 2100 },
    { month: 'Mar', followers: 2000, engagement: 9800, earnings: 1800 },
    { month: 'Apr', followers: 2780, engagement: 3908, earnings: 2500 },
    { month: 'May', followers: 1890, engagement: 4800, earnings: 3200 },
    { month: 'Jun', followers: 2390, engagement: 3800, earnings: 2800 }
  ];

  // Platform distribution data
  const platformData = [
    { name: 'Instagram', value: 45, color: '#E4405F' },
    { name: 'YouTube', value: 30, color: '#FF0000' },
    { name: 'TikTok', value: 15, color: '#000000' },
    { name: 'Twitter', value: 10, color: '#1DA1F2' }
  ];

  // Notifications list
  const notifications = [
    { id: 1, message: "New collaboration request from Brand X", time: "2 hours ago", type: "collab" },
    { id: 2, message: "Your payment of $2,500 has been processed", time: "5 hours ago", type: "payment" },
    { id: 3, message: "Campaign deadline approaching in 2 days", time: "1 day ago", type: "reminder" },
    { id: 4, message: "You gained 1,200 new followers this week", time: "2 days ago", type: "growth" }
  ];

  // Upcoming collaborations
  const upcomingCollabs = [
    { id: 1, brand: "Fashion Nova", type: "Instagram Post", deadline: "Dec 15, 2024", payment: "$1,500", status: "In Progress" },
    { id: 2, brand: "Nike", type: "Story + Reel", deadline: "Dec 20, 2024", payment: "$3,000", status: "Pending" },
    { id: 3, brand: "Sephora", type: "YouTube Video", deadline: "Dec 25, 2024", payment: "$5,000", status: "Draft" }
  ];

  // Dynamic totals
  const totalFollowers = analyticsData.reduce((acc, cur) => acc + cur.followers, 0).toLocaleString();
  const avgEngagement = ((analyticsData.reduce((acc, cur) => acc + cur.engagement, 0) / analyticsData.length) / 100).toFixed(2);
  const totalEarnings = analyticsData.reduce((acc, cur) => acc + cur.earnings, 0).toLocaleString();

  // Status color mapping
  const statusColors = {
    "In Progress": "bg-yellow-100 text-yellow-800",
    "Pending": "bg-orange-100 text-orange-800",
    "Draft": "bg-gray-100 text-gray-800"
  };

  // Toast handler with type-based styling
  const handleNotificationClick = (notification) => {
    const typeColors = {
      collab: '#4f46e5',
      payment: '#16a34a',
      reminder: '#f59e0b',
      growth: '#3b82f6'
    };
    toast(notification.message, {
      duration: 4000,
      style: { background: typeColors[notification.type] || '#333', color: '#fff' },
    });
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveTab('browsecampaigns')}
            className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            <Search className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Apply to Campaign</span>
          </button>
          <button 
            onClick={() => setActiveTab('myprofile')}
            className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105"
          >
            <Edit className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Update Profile</span>
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className="flex flex-col items-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Check Messages</span>
          </button>
          <button 
            onClick={() => setActiveTab('earnings')}
            className="flex flex-col items-center p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
          >
            <DollarSign className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">View Earnings</span>
          </button>
        </div>
      </div>

      {/* Analytics Snapshots */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Followers</p>
              <p className="text-2xl font-bold text-gray-900">{totalFollowers}</p>
              <p className="text-green-500 text-sm">+12.5% this month</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
              <Users className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Engagement Rate</p>
              <p className="text-2xl font-bold text-gray-900">{avgEngagement}%</p>
              <p className="text-green-500 text-sm">+2.1% this month</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
              <Heart className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Monthly Earnings</p>
              <p className="text-2xl font-bold text-gray-900">${totalEarnings}</p>
              <p className="text-green-500 text-sm">+15.3% this month</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg">
              <DollarSign className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-blue-500 text-sm">3 pending review</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Growth Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="followers" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="engagement" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Platform Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Notifications & Upcoming Collaborations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Notifications</h3>
            <Bell className="text-gray-400 w-5 h-5" />
          </div>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                onClick={() => handleNotificationClick(notification)}
                className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Collaborations */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Upcoming Collaborations</h3>
            <Calendar className="text-gray-400 w-5 h-5" />
          </div>
          <div className="space-y-4">
            {upcomingCollabs.map(collab => (
              <div key={collab.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{collab.brand}</h4>
                    <p className="text-sm text-gray-600">{collab.type}</p>
                    <p className="text-xs text-gray-500">Due: {collab.deadline}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${statusColors[collab.status] || 'bg-gray-200 text-gray-700'}`}>
                    {collab.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
