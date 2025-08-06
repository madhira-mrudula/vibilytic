import React from "react";

const MetricsView = () => {
  const metricsData = [
    {
      campaign: "Summer Glow",
      status: "Active",
      reach: 120000,
      engagement: 4500,
      ctr: "3.8%",
      conversions: 320,
      roi: "125%",
      description: "Anand"
    },
    {
      campaign: "Fitness Challenge",
      status: "Pending",
      reach: 85000,
      engagement: 2300,
      ctr: "2.1%",
      conversions: 180,
      roi: "N/A"
    },
    {
      campaign: "Winter Sale",
      status: "Completed",
      reach: 150000,
      engagement: 8200,
      ctr: "5.4%",
      conversions: 670,
      roi: "165%"
    },
    {
      campaign: "Fashion Week",
      status: "Active",
      reach: 92000,
      engagement: 3900,
      ctr: "4.2%",
      conversions: 240,
      roi: "137%"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg mt-8 max-w-full overflow-x-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-12 text-purple-500">
        📈 Metrics View
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 leading-8">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                Campaign
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                Status
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                Reach
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                Engagement
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                CTR
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                Conversions
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                ROI
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 leading-8">
            {metricsData.map((metric, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-4 py-3 text-gray-800 font-medium whitespace-nowrap">
                  {metric.campaign}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      metric.status
                    )}`}
                  >
                    {metric.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {metric.reach.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {metric.engagement.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {metric.ctr}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {metric.conversions}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {metric.roi}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {metric.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetricsView;
