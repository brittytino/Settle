

import React from 'react';

const WelcomeModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h2>
        <p className="text-gray-700 mb-4">
          We’re thrilled to have you on board. At Settle, we aim to empower refugees and immigrants to build a new life by providing access to essential services, community support, and employment opportunities—all in one place.
        </p>
        <p className="text-gray-600 mb-6">
          Explore our website to find resources tailored to your needs and connect with a community dedicated to helping you succeed in your new journey.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
