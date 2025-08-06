import React, { useState } from 'react';
import { User, Bell, DollarSign, Settings } from 'lucide-react';
import toast from 'react-hot-toast';

const SettingsPage = () => {
  const [notificationPrefs, setNotificationPrefs] = useState({
    email: true,
    campaign: true,
    payment: true,
    messages: false
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'Public',
    showEarnings: false,
    allowMessages: true
  });

  const [paymentInfo, setPaymentInfo] = useState({
    bankAccount: '',
    paypalEmail: ''
  });

  const [errors, setErrors] = useState({});

  const validatePaymentInfo = () => {
    let newErrors = {};

    if (!paymentInfo.bankAccount || paymentInfo.bankAccount.length < 6) {
      newErrors.bankAccount = "Bank account number must be at least 6 digits.";
    }

    if (paymentInfo.paypalEmail && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(paymentInfo.paypalEmail)) {
      newErrors.paypalEmail = "Please enter a valid PayPal email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = (section) => {
    if (section === "Payment" && !validatePaymentInfo()) {
      toast.error("Please fix the errors before saving.");
      return;
    }

    toast.success(`${section} settings saved successfully!`);
  };

  const handleNotificationPrefChange = (pref) => {
    setNotificationPrefs((prev) => ({
      ...prev,
      [pref]: !prev[pref]
    }));
  };

  const handlePrivacySettingChange = (setting, value) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [setting]: value
    }));
  };

  const handlePaymentInfoChange = (field, value) => {
    setPaymentInfo((prev) => ({
      ...prev,
      [field]: value
    }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error when typing
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
            <User className="w-4 h-4 mr-2" />
            Update Account
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
            <Bell className="w-4 h-4 mr-2" />
            Notification Prefs
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
            <DollarSign className="w-4 h-4 mr-2" />
            Payment Methods
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
            <Settings className="w-4 h-4 mr-2" />
            Privacy Controls
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="sarah@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="+1 234 567 8900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>EST (Eastern Standard Time)</option>
                <option>PST (Pacific Standard Time)</option>
                <option>CST (Central Standard Time)</option>
              </select>
            </div>
          </div>
          <button 
            onClick={() => handleSave("Account")}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            {Object.keys(notificationPrefs).map((pref) => (
              <div key={pref} className="flex items-center justify-between">
                <span className="text-sm text-gray-700 capitalize">{pref} notifications</span>
                <input 
                  type="checkbox" 
                  className="w-4 h-4"
                  checked={notificationPrefs[pref]}
                  onChange={() => handleNotificationPrefChange(pref)}
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => handleSave("Notification")}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Save Preferences
          </button>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Profile visibility</span>
              <select 
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={privacySettings.profileVisibility}
                onChange={(e) => handlePrivacySettingChange('profileVisibility', e.target.value)}
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Show earnings</span>
              <input 
                type="checkbox" 
                className="w-4 h-4" 
                checked={privacySettings.showEarnings}
                onChange={() => handlePrivacySettingChange('showEarnings', !privacySettings.showEarnings)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Allow direct messages</span>
              <input 
                type="checkbox" 
                className="w-4 h-4" 
                checked={privacySettings.allowMessages}
                onChange={() => handlePrivacySettingChange('allowMessages', !privacySettings.allowMessages)}
              />
            </div>
          </div>
          <button 
            onClick={() => handleSave("Privacy")}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Update Privacy
          </button>
        </div>

        {/* Payment Information */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bank Account</label>
              <input 
                type="text" 
                className={`w-full border rounded-lg px-3 py-2 ${errors.bankAccount ? 'border-red-500' : 'border-gray-300'}`} 
                placeholder="**** **** **** 1234"
                value={paymentInfo.bankAccount}
                onChange={(e) => handlePaymentInfoChange('bankAccount', e.target.value)}
              />
              {errors.bankAccount && <p className="text-sm text-red-500 mt-1">{errors.bankAccount}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PayPal Email</label>
              <input 
                type="email" 
                className={`w-full border rounded-lg px-3 py-2 ${errors.paypalEmail ? 'border-red-500' : 'border-gray-300'}`} 
                placeholder="paypal@example.com"
                value={paymentInfo.paypalEmail}
                onChange={(e) => handlePaymentInfoChange('paypalEmail', e.target.value)}
              />
              {errors.paypalEmail && <p className="text-sm text-red-500 mt-1">{errors.paypalEmail}</p>}
            </div>
          </div>
          <button 
            onClick={() => handleSave("Payment")}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Update Payment Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
