import React from 'react';
import contactImg from '../img/34.png'

const Contact = () => {
  return (
    <div id='contact' className="flex flex-col md:flex-row px-4 md:px-20 py-10">
    

      {/* Contact Form */}
      <div className="md:w-1/2 p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">Community Forum</h1>
        <p className="text-lg mb-6">
          We are here to support refugees and immigrants. Please reach out to us with any inquiries or concerns.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

        {/* Side Image */}
        <div className="md:w-1/2">
        <img
          src={contactImg} // Update this path as needed
          alt="Support for Refugees and Immigrants"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;