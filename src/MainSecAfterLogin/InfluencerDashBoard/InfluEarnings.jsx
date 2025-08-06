import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { DollarSign, Settings, TrendingUp, Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

const EarningsPage = ({ setActiveTab }) => {
  const [timePeriod, setTimePeriod] = useState('Last 6 months');
  const [payoutRequested, setPayoutRequested] = useState(false);

  const analyticsData = [
    { month: 'Jan', followers: 4000, engagement: 2400, earnings: 1200 },
    { month: 'Feb', followers: 3000, engagement: 1398, earnings: 2100 },
    { month: 'Mar', followers: 2000, engagement: 9800, earnings: 1800 },
    { month: 'Apr', followers: 2780, engagement: 3908, earnings: 2500 },
    { month: 'May', followers: 1890, engagement: 4800, earnings: 3200 },
    { month: 'Jun', followers: 2390, engagement: 3800, earnings: 2800 }
  ];

  const handleRequestPayout = () => {
    setPayoutRequested(true);
    toast.success("✅ Payout request submitted! You'll receive payment in 5–7 business days.");
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={handleRequestPayout}
            disabled={payoutRequested}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              payoutRequested 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
            }`}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            {payoutRequested ? 'Payout Requested' : 'Request Payout'}
          </button>

          <button 
            onClick={() => setActiveTab('settings')}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
          >
            <Settings className="w-4 h-4 mr-2" />
            Payment Settings
          </button>

          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
            <TrendingUp className="w-4 h-4 mr-2" />
            Earnings Report
          </button>

          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
            <Calendar className="w-4 h-4 mr-2" />
            Tax Documents
          </button>
        </div>
      </div>
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Earnings</h2>
        <select 
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>All time</option>
        </select>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">Total Earnings</h3>
          <p className="text-3xl font-bold text-green-600">$45,230</p>
          <p className="text-sm text-gray-500 mt-1">+18.5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">This Month</h3>
          <p className="text-3xl font-bold text-blue-600">$8,450</p>
          <p className="text-sm text-gray-500 mt-1">From 5 campaigns</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-2">Pending Payments</h3>
          <p className="text-3xl font-bold text-orange-600">$3,200</p>
          <p className="text-sm text-gray-500 mt-1">2 payments pending</p>
        </div>
      </div>
      
      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Earnings Over Time</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsPage;
