import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  PauseCircle,
  PlayCircle,
  ClipboardList,
} from "lucide-react";

const sampleCampaigns = [
  {
    id: 1,
    name: "Summer Launch",
    startDate: "2025-07-01",
    endDate: "2025-08-01",
    budget: "$5,000",
    status: "active",
  },
  {
    id: 2,
    name: "Back to School",
    startDate: "2025-08-15",
    endDate: "2025-09-15",
    budget: "$3,000",
    status: "paused",
  },
  {
    id: 3,
    name: "Winter Sale",
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    budget: "$7,500",
    status: "completed",
  },
  {
    id: 4,
    name: "Spring Collection",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
    budget: "$4,000",
    status: "active",
  },
  {
    id: 5,
    name: "Diwali Promo",
    startDate: "2025-10-15",
    endDate: "2025-11-10",
    budget: "$6,000",
    status: "paused",
  },
  {
    id: 6,
    name: "Holiday Buzz",
    startDate: "2025-12-01",
    endDate: "2025-12-31",
    budget: "$9,000",
    status: "active",
  },
//   {
//     id: 7,
//     name: "New Year Bash",
//     startDate: "2025-12-26",
//     endDate: "2026-01-05",
//     budget: "$10,000",
//     status: "completed",
//   },
//   {
//     id: 8,
//     name: "Valentine's Special",
//     startDate: "2025-02-01",
//     endDate: "2025-02-14",
//     budget: "$2,000",
//     status: "paused",
//   },
//   {
//     id: 9,
//     name: "Monsoon Bonanza",
//     startDate: "2025-06-10",
//     endDate: "2025-07-10",
//     budget: "$4,200",
//     status: "active",
//   },
];

const ManageCampaigns = () => {
  const [campaigns, setCampaigns] = useState(sampleCampaigns);
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    objective: "",
    audience: "",
    ageRange: "",
    budget: "",
    startDate: "",
    endDate: "",
    assets: 0,
    message: "",
  });

  const toggleStatus = (id) => {
    setCampaigns((prev) =>
      prev.map((camp) =>
        camp.id === id
          ? {
              ...camp,
              status: camp.status === "active" ? "paused" : "active",
            }
          : camp
      )
    );
  };

  const deleteCampaign = (id) => {
    setCampaigns((prev) => prev.filter((camp) => camp.id !== id));
  };

  const startEdit = (camp) => {
    setEditId(camp.id);
    setFormData({
      name: camp.name,
      objective: "",
      audience: "",
      ageRange: "",
      budget: camp.budget,
      startDate: camp.startDate,
      endDate: camp.endDate,
      assets: 0,
      message: "",
      status: camp.status,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
  setCampaigns((prev) =>
    prev.map((camp) =>
      camp.id === editId ? { ...camp, ...formData } : camp
    )
  );
  setEditId(null);
};

  const filteredCampaigns =
    filter === "all"
      ? campaigns
      : campaigns.filter((camp) => camp.status === filter);

  const statusColor = {
    active: "bg-green-100 text-green-700",
    paused: "bg-yellow-100 text-yellow-700",
    completed: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="p-6 bg-white rounded-lg  shadow-md">
      <div className="">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <ClipboardList className="w-6 h-6 text-blue-600" />
        Manage Campaigns
      </h2>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-6">
        {["all", "active", "paused", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize border ${
              filter === status
                ? "bg-blue-600 text-white cursor-pointer border-blue-600 "
                : "bg-white text-gray-700 cursor-pointer border-gray-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>
      </div>

      {/* Campaign Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCampaigns.map((camp) => (
          <div
            key={camp.id}
            className="rounded-lg p-4 shadow border-3 hover:shadow-lg border-blue-500 bg-white transition duration ease-in-out"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{camp.name}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${statusColor[camp.status]}`}
              >
                {camp.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Start:</strong> {camp.startDate}
            </p>
            <p className="text-sm text-gray-600">
              <strong>End:</strong> {camp.endDate}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Budget:</strong> {camp.budget}
            </p>
            <div className="flex gap-3">
              <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer "
                onClick={() => startEdit(camp)}
              >
                <Pencil size={18} />
              </button>
              {/* <button
                onClick={() => toggleStatus(camp.id)}
                className="text-yellow-600 hover:text-yellow-800"
              >
                {camp.status === "active" ? (
                  <PauseCircle size={18} />
                ) : (
                  <PlayCircle size={18} />
                )}
              </button> */}
              <button
                onClick={() => deleteCampaign(camp.id)}
                className="text-red-600 hover:text-red-800 cursor-pointer "
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editId && (
        <div className="fixed inset-0 z-50 flex items-center h-screen justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 m-2 rounded-lg h-[600px] shadow-lg w-full max-w-md relative">
            
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setEditId(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">Edit Campaign</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Objective</label>
                <input
                  type="text"
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Audience (with age range)
                </label>
                <input
                  type="text"
                  name="audience"
                  value={formData.audience}
                  onChange={handleChange}
                  placeholder="e.g., Women, ages 18-35"
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border rounded"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border rounded"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Assets Uploaded</label>
                <input
                  type="number"
                  name="assets"
                  value={formData.assets}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border rounded"
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
  onClick={() =>
    setFormData((prev) => ({
      ...prev,
      status: prev.status === "active" ? "paused" : "active",
    }))
  }
  className={`flex items-center gap-1 px-3 py-1 rounded text-sm font-medium ${
    formData.status === "active"
      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
      : "bg-green-100 text-green-700 hover:bg-green-200"
  }`}
>
  {formData.status === "active" ? (
    <>
      <PauseCircle size={16} /> Pause
    </>
  ) : (
    <>
      <PlayCircle size={16} /> Resume
    </>
  )}
</button>
  <button
                  onClick={() => setEditId(null)}
                  className="px-4 py-1 border rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCampaigns;
