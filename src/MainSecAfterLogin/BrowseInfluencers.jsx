import React, { useState, useEffect, useMemo } from 'react';
import Aos from 'aos';
// Toast component
const Toast = ({ type, message, onClose }) => (
  <div
    className={`fixed top-4 right-4 px-4 py-2 rounded shadow-lg flex items-center space-x-2 z-50 transition-opacity ${
      type === 'success' ? 'bg-green-600' : 'bg-red-600'
    } text-white`}
  >
    <span>{message}</span>
    <button onClick={onClose} className="font-bold ml-2 text-xl">×</button>
  </div>
);

// Custom Modal component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md relative">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        <div className="text-gray-600 mb-4">{children}</div>
      </div>
    </div>
  );
};

export const BrowserInfluencers = () => {
  const sampleInfluencers = [
    { id: 1, name: "Alex Beauty", platform: "Instagram", category: "Fashion", followers: 15000, avatar: "https://i.pravatar.cc/150?img=1", bio: "Fashion influencer sharing beauty tips." },
    { id: 2, name: "TechGuru", platform: "YouTube", category: "Technology", followers: 32000, avatar: "https://i.pravatar.cc/150?img=2", bio: "Latest tech reviews and gadget talk." },
    { id: 3, name: "FitKing", platform: "TikTok", category: "Fitness", followers: 22000, avatar: "https://i.pravatar.cc/150?img=3", bio: "Daily workouts and healthy living." },
    { id: 4, name: "GlitzQueen", platform: "Instagram", category: "Fashion", followers: 45000, avatar: "https://i.pravatar.cc/150?img=4", bio: "Glamour, style, and confidence." },
    { id: 5, name: "DevBytes", platform: "YouTube", category: "Technology", followers: 51000, avatar: "https://i.pravatar.cc/150?img=5", bio: "Coding tips and dev tutorials." },
    { id: 6, name: "YogaWithLena", platform: "TikTok", category: "Fitness", followers: 17000, avatar: "https://i.pravatar.cc/150?img=6", bio: "Balance your mind and body." }
  ];

  const [filters, setFilters] = useState({ search: '', platform: '', category: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState(null);
  const itemsPerPage = 3;

  const filtered = useMemo(() => {
    return sampleInfluencers.filter(inf =>
      inf.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.platform === '' || inf.platform === filters.platform) &&
      (filters.category === '' || inf.category === filters.category)
    );
  }, [filters]);

  const totalPages = useMemo(() => Math.ceil(filtered.length / itemsPerPage), [filtered]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const handleSendInvite = () => {
    const success = Math.random() > 0.3;
    if (success) {
      setToast({ type: 'success', message: `Invite sent to ${selectedInfluencer.name}!` });
      setSelectedInfluencer(null);
      setMessage('');
    } else {
      setToast({ type: 'error', message: 'Failed to send invite. Please try again.' });
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(()=>{
    Aos.init({
      duration:1000,
      easing:"ease-in-out",
      once:false
    })

  },[]);
  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Browse Influencers</h1>

      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={filters.search}
          onChange={e => setFilters({ ...filters, search: e.target.value })}
          className="border border-gray-300 p-2 rounded-lg shadow-sm w-48 focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={filters.platform}
          onChange={e => setFilters({ ...filters, platform: e.target.value })}
          className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Platforms</option>
          <option>Instagram</option>
          <option>YouTube</option>
          <option>TikTok</option>
        </select>
        <select
          value={filters.category}
          onChange={e => setFilters({ ...filters, category: e.target.value })}
          className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Categories</option>
          <option>Fashion</option>
          <option>Technology</option>
          <option>Fitness</option>
        </select>
      </div>

      {/* Influencer Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" data-aos="fade-up">
        {paginated.length ? paginated.map(inf => (
          <div key={inf.id} className="border rounded-2xl shadow-md p-6 text-center transform hover:scale-105 transition duration-300">
            <img src={inf.avatar} alt={inf.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{inf.name}</h2>
            <p className="text-gray-500 text-sm mb-2">{inf.bio}</p>
            <div className="text-sm text-gray-600 mb-4">
              <p>Platform: {inf.platform}</p>
              <p>Category: {inf.category}</p>
              <p>Followers: {inf.followers.toLocaleString()}</p>
            </div>

            {/* Invite Button and Modal */}
            <>
              <button
                onClick={() => setSelectedInfluencer(inf)}
                className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Invite
              </button>

              <Modal
                isOpen={selectedInfluencer?.id === inf.id}
                onClose={() => {
                  setSelectedInfluencer(null);
                  setMessage('');
                }}
                title={`Invite ${inf.name}`}
              >
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setSelectedInfluencer(null);
                      setMessage('');
                    }}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSendInvite}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                  >
                    Send Invite
                  </button>
                </div>
              </Modal>
            </>
          </div>
        )) : (
          <p className="col-span-3 text-center text-gray-500">No influencers found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === i + 1
                ? 'bg-purple-600 text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
