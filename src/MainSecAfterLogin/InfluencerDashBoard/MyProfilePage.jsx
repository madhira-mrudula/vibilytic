import React, { useState } from 'react';
import img from '../../assets/logo.png';
import { MapPin, Globe, Star, Edit, X, Instagram, Youtube } from 'lucide-react';
import toast from 'react-hot-toast';

const MyProfilePage = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Priya Reddy',
    username: '@priyareddy',
    location: 'Pune, India',
    category: 'Fashion & Travel',
    about:
      'I am a fashion and travel influencer who loves sharing moments from my day-to-day adventures, product reviews, and collaboration stories. I believe in storytelling that feels real and relatable.',
    bio: 'Fashion enthusiast and lifestyle influencer sharing daily outfits, beauty tips, and travel adventures. Passionate about sustainable fashion and empowering women to feel confident in their own skin.',
  });

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={img}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 shadow-md"
          />
          <div className="flex-1">
            {isEditingProfile ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  className="text-2xl font-bold text-gray-900 w-full border-b border-gray-300 pb-1"
                />
                <input
                  type="text"
                  value={profileData.username}
                  onChange={(e) =>
                    setProfileData({ ...profileData, username: e.target.value })
                  }
                  className="text-gray-600 w-full border-b border-gray-300 pb-1"
                />
                <div className="flex space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          location: e.target.value,
                        })
                      }
                      className="w-full border-b border-gray-300 pb-1"
                    />
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    <input
                      type="text"
                      value={profileData.category}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          category: e.target.value,
                        })
                      }
                      className="w-full border-b border-gray-300 pb-1"
                    />
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>4.7 / 5.0</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900">
                  {profileData.name}
                </h2>
                <p className="text-gray-600">{profileData.username}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> {profileData.location}
                  </span>
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" /> {profileData.category}
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" /> 4.7 / 5.0
                  </span>
                </div>
              </>
            )}
          </div>
          {isEditingProfile ? (
            <div className="flex space-x-2">
              <button
                onClick={handleSaveProfile}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditingProfile(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center"
              >
                <X className="w-4 h-4 mr-1" />
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingProfile(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">127.5K</p>
            <p className="text-gray-600">Total Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">8.4%</p>
            <p className="text-gray-600">Avg. Engagement</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">45</p>
            <p className="text-gray-600">Completed Campaigns</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">
            Social Media Accounts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Instagram className="text-pink-500 w-6 h-6" />
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-sm text-gray-600">85.2K followers</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Youtube className="text-red-500 w-6 h-6" />
              <div>
                <p className="font-medium">YouTube</p>
                <p className="text-sm text-gray-600">42.1K subscribers</p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          {isEditingProfile ? (
            <textarea
              value={profileData.about}
              onChange={(e) =>
                setProfileData({ ...profileData, about: e.target.value })
              }
              className="w-full text-gray-700 leading-relaxed border border-gray-300 rounded-lg p-3 min-h-[100px]"
            />
          ) : (
            <p className="text-gray-700 leading-relaxed">
              {profileData.about}
            </p>
          )}
        </div>

        {/* Bio */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Bio</h3>
          {isEditingProfile ? (
            <textarea
              value={profileData.bio}
              onChange={(e) =>
                setProfileData({ ...profileData, bio: e.target.value })
              }
              className="w-full text-gray-700 leading-relaxed border border-gray-300 rounded-lg p-3 min-h-[100px]"
            />
          ) : (
            <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
          )}
        </div>

        {/* Past Collaborations */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Past Collaborations</h3>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://skillfloor.com/blog/uploads/images/202405/image_870x_6645b2b6b4670.jpg"
              alt="Brand 1"
              className="h-40 rounded-lg shadow-md object-cover"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpzIMq1zFoWzdPAhJUPUkGwF-HCpgOIV2kA&s"
              alt="Brand 2"
              className="h-40 rounded-lg shadow-md object-cover"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwI_5gKhL2lM4dBXoKBgWdXD284iQJ1eK_-w&s"
              alt="Brand 3"
              className="h-40 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Testimonials</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <p className="text-gray-700 italic">
                "Priya was amazing to work with. Her content was creative and exceeded expectations!"
              </p>
              <p className="text-sm text-gray-500 mt-2">
                – Brand Manager, Nykaa
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <p className="text-gray-700 italic">
                "Highly professional and brought great visibility to our campaign."
              </p>
              <p className="text-sm text-gray-500 mt-2">
                – Marketing Lead, Mamaearth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
