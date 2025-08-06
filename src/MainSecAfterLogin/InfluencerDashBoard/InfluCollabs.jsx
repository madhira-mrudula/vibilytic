import React, { useState } from 'react';
import { Search, Calendar, Send, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const CollabsPage = ({ setActiveTab }) => {
  const [collabFilter, setCollabFilter] = useState('All');
  const [collabStatuses, setCollabStatuses] = useState({});

  const upcomingCollabs = [
    { id: 1, brand: "Fashion Nova", type: "Instagram Post", deadline: "Dec 15, 2024", payment: "$1,500", status: "In Progress" },
    { id: 2, brand: "Nike", type: "Story + Reel", deadline: "Dec 20, 2024", payment: "$3,000", status: "Pending" },
    { id: 3, brand: "Sephora", type: "YouTube Video", deadline: "Dec 25, 2024", payment: "$5,000", status: "Draft" }
  ];

  const handleSubmitCollab = (collabId) => {
    setCollabStatuses({
      ...collabStatuses,
      [collabId]: "Submitted"
    });
    toast.success("✅ Collaboration submitted successfully!");
  };

  // Filtered list based on collabFilter
  const filteredCollabs = upcomingCollabs.filter(collab => {
    if (collabFilter === 'All') return true;
    if (collabFilter === 'Active') 
      return ['In Progress', 'Pending', 'Draft'].includes(collabStatuses[collab.id] || collab.status);
    if (collabFilter === 'Completed') 
      return (collabStatuses[collab.id] || collab.status) === 'Submitted';
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Submitted": return 'bg-green-100 text-green-800';
      case "In Progress": return 'bg-yellow-100 text-yellow-800';
      case "Pending": return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setActiveTab('browsecampaigns')}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <Search className="w-4 h-4 mr-2" />
            Find New Campaigns
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Content
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
            <Send className="w-4 h-4 mr-2" />
            Submit Deliverable
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
            <Star className="w-4 h-4 mr-2" />
            Rate Collaboration
          </button>
        </div>
      </div>
      
      {/* Header with Filters */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Collaborations</h2>
        <div className="flex space-x-2">
          {['All', 'Active', 'Completed'].map(filter => (
            <button 
              key={filter}
              onClick={() => setCollabFilter(filter)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                collabFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Collaboration Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredCollabs.length > 0 ? (
          filteredCollabs.map(collab => {
            const currentStatus = collabStatuses[collab.id] || collab.status;
            return (
              <div key={collab.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{collab.brand}</h3>
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(currentStatus)}`}>
                        {currentStatus}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <span className="font-medium ml-2">{collab.type}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Deadline:</span>
                        <span className="font-medium ml-2">{collab.deadline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Payment:</span>
                        <span className="font-medium ml-2 text-green-600">{collab.payment}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      View Details
                    </button>
                    {collab.status === 'Draft' && (
                      <button 
                        onClick={() => handleSubmitCollab(collab.id)}
                        disabled={currentStatus === "Submitted"}
                        className={`px-4 py-2 rounded-lg ${
                          currentStatus === "Submitted"
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                      >
                        {currentStatus === "Submitted" ? 'Submitted' : 'Submit'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No collaborations found for "{collabFilter}".</p>
        )}
      </div>
    </div>
  );
};

export default CollabsPage;
