// src/components/ChangePassword.jsx
import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password changed successfully!");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg  max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label htmlFor="old-password" className="block text-sm font-semibold text-gray-700 mb-2">
            Old Password
          </label>
          <input
            id="old-password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="new-password" className="block text-sm font-semibold text-gray-700 mb-2">
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-700 mb-2">
            Confirm New Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
