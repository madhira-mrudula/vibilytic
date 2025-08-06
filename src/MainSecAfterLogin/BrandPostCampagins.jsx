import React, { useState } from "react";
import { Calendar, UploadCloud } from "lucide-react";

const steps = ["Setup", "Targeting", "Budget & Schedule", "Creative", "Review"];

export const PostCampaign = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    companyName: "",
    companyLogo: null,
    name: "",
    tagline: "",
    category: "",
    description: "",
    productLink: "",
    audience: { location: "", ageMin: "", ageMax: "" },
    budget: "",
    startDate: "",
    endDate: "",
    assets: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.audience) {
      setForm((prev) => ({
        ...prev,
        audience: { ...prev.audience, [name]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e) => {
    setForm((prev) => ({
      ...prev,
      assets: [...prev.assets, ...Array.from(e.target.files)],
    }));
  };

  const handleLogoUpload = (e) => {
    setForm((prev) => ({
      ...prev,
      companyLogo: e.target.files[0],
    }));
  };

  const StepNav = () => (
    <div className="flex justify-between mb-6">
      {steps.map((s, i) => (
        <div
          key={i}
          className={`flex-1 text-center py-2 cursor-pointer rounded ${
            i === currentStep
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setCurrentStep(i)}
        >
          {s}
        </div>
      ))}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <label className="block font-medium">Company Name</label>
            <input name="companyName" value={form.companyName} onChange={handleChange} className="w-full border p-2 rounded" />

            <label className="block font-medium">Upload Company Logo</label>
            <input type="file" accept="image/*" onChange={handleLogoUpload} className="w-full border p-2 rounded" />

            <label className="block font-medium">Campaign Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />

            <label className="block font-medium">Tagline</label>
            <input name="tagline" value={form.tagline} onChange={handleChange} className="w-full border p-2 rounded" />

            <label className="block font-medium">Category (Product or Service)</label>
            <input name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded" />

            <label className="block font-medium">Objective</label>
            <select name="objective" value={form.objective} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="">Select objective</option>
              <option value="Awareness">Awareness</option>
              <option value="Engagement">Engagement</option>
              <option value="Traffic">Traffic</option>
            </select>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <label className="block font-medium">Target Locations</label>
            <input name="location" value={form.audience.location} onChange={handleChange} className="w-full border p-2 rounded" />

            <label className="block font-medium">Short Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />

            <label className="block font-medium">Product Link</label>
            <input name="productLink" value={form.productLink} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <label className="block font-medium">Daily Budget</label>
            <input
              name="budget"
              type="number"
              value={form.budget}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["startDate", "endDate"].map((f) => (
                <div key={f}>
                  <label className="block font-medium">
                    {f === "startDate" ? "Start Date" : "End Date"}
                  </label>
                  <div className="flex items-center border rounded overflow-hidden">
                    <Calendar className="ml-2 text-gray-500" />
                    <input name={f} type="date" value={form[f]} onChange={handleChange} className="w-full p-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
  return (
    <div className="space-y-4">
      <label className="block font-medium">Upload Creative</label>
      <label className="flex items-center gap-2 border border-dashed rounded-lg p-4 cursor-pointer hover:bg-gray-50">
        <UploadCloud className="text-gray-500" />
        <span>Click to upload assets (images/videos)</span>
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            setForm((prev) => ({
              ...prev,
              assets: [...prev.assets, ...files],
            }));
          }}
          className="hidden"
        />
      </label>

      {form.assets.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {form.assets.map((file, index) => {
            const url = URL.createObjectURL(file);
            const isVideo = file.type.startsWith("video/");
            return (
              <div key={index} className="relative group">
                {isVideo ? (
                  <video
                    src={url}
                    controls
                    className="w-full h-48 object-cover rounded"
                  />
                ) : (
                  <img
                    src={url}
                    alt={`preview-${index}`}
                    className="w-full h-48 object-cover rounded"
                  />
                )}

                {/* Inline delete button */}
                <button
                  type="button"
                  onClick={() => {
                    const updatedAssets = form.assets.filter(
                      (_, i) => i !== index
                    );
                    setForm((prev) => ({
                      ...prev,
                      assets: updatedAssets,
                    }));
                  }}
                  className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      )}

      <label className="block font-medium">Message/Caption</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      ></textarea>
    </div>
  );

      default:
        return (
          <div className="space-y-3">
            <p><strong>Company:</strong> {form.companyName}</p>
            <p><strong>Campaign:</strong> {form.name} - {form.tagline}</p>
            <p><strong>Category:</strong> {form.category}</p>
            <p><strong>Objective:</strong> {form.objective}</p>
            <p><strong>Description:</strong> {form.description}</p>
            <p><strong>Location:</strong> {form.audience.location}</p>
            <p><strong>Budget:</strong> ${form.budget}</p>
            <p><strong>Dates:</strong> {form.startDate} to {form.endDate}</p>
            <p><strong>Assets Uploaded:</strong> {form.assets.length}</p>
            <p><strong>Product Link:</strong> {form.productLink}</p>
            <p><strong>Message:</strong> {form.message}</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 flex gap-8">
      <div className="flex-1">
        <StepNav />
        <div className="bg-white p-6 rounded-lg shadow-md">{renderStep()}</div>
        <div className="flex justify-between mt-4">
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep((s) => s - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Back
          </button>
          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((s) => s + 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => console.log("Submit", form)}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Submit Campaign
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
