// src/components/DeleteAccount.jsx
import React from 'react';

const DeleteAccount = () => {
  const handleDelete = () => {
    // Handle account deletion logic here
    alert('Account deleted!');
  };

  return (
    <div className="bg-white p-8 rounded-lg max-w-md mx-auto mt-8">
      <h3 className="text-2xl font-semibold text-red-500 text-center mb-4">Delete Account</h3>
      <p className="text-gray-700 text-center mb-6">
        If you wish to permanently delete your account, this action cannot be undone.
      </p>
      <div className="mt-6 flex justify-center">
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
