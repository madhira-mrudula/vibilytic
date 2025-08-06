import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

const sampleReports = [
  { id: 1, influencer: "AlexBeauty", platform: "Instagram", reach: 10000, engagement: 2300, budget: 500 },
  { id: 2, influencer: "TechGuru", platform: "YouTube", reach: 20000, engagement: 4800, budget: 1200 },
  { id: 3, influencer: "FitKing", platform: "TikTok", reach: 15000, engagement: 3000, budget: 700 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const BrandReports = () => {
  const [platform, setPlatform] = useState('');

  const filteredReports = sampleReports.filter(report =>
    platform === '' || report.platform === platform
  );

  const handleDownload = () => {
    alert("🔽 Download triggered! (To be implemented with export library)");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Campaign Reports</h1>

      {/* Filter */}
      <div className="mb-4">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">All Platforms</option>
          <option value="Instagram">Instagram</option>
          <option value="YouTube">YouTube</option>
          <option value="TikTok">TikTok</option>
        </select>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Bar Chart: Reach */}
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Reach by Influencer</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={filteredReports}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="influencer" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reach" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart: Budget Distribution */}
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Budget Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={filteredReports}
                dataKey="budget"
                nameKey="influencer"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#82ca9d"
                label
              >
                {filteredReports.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Influencer</th>
              <th className="p-3 border">Platform</th>
              <th className="p-3 border">Reach</th>
              <th className="p-3 border">Engagement</th>
              <th className="p-3 border">Budget ($)</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id} className="text-center">
                <td className="p-3 border">{report.influencer}</td>
                <td className="p-3 border">{report.platform}</td>
                <td className="p-3 border">{report.reach.toLocaleString()}</td>
                <td className="p-3 border">{report.engagement.toLocaleString()}</td>
                <td className="p-3 border">${report.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download */}
      <div className="mt-6 text-right">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Download Report
        </button>
      </div>
    </div>
  );
};

export default BrandReports;