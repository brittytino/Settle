import React, { useState } from "react";

const Rental = () => {
  const [location, setLocation] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setBookingConfirmed(false);
  };

  const handleBookingClick = () => {
    if (location) {
      setBookingConfirmed(true);
    }
  };

  const mapSrc = {
    chennai:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310575468!2d79.87932933916929!3d13.047985947243212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1723189955967!5m2!1sen!2sin",
    thiruvananthapuram:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.56612492466!2d76.75934849945963!3d8.500037895366011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1723189971358!5m2!1sen!2sin",
    pondicherry:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.79931274539!2d79.77232788995312!3d11.936376280297651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1723189989213!5m2!1sen!2sin",
  };

  return (
    <div className="container mx-auto p-6 md:px-20">
      <h1 className="text-3xl font-bold mb-4">Rental Accommodation</h1>
      <p className="mb-6 text-gray-700">
        Welcome to our rental accommodation platform designed for refugees and
        immigrants to book or check accommodations in selected locations. Please
        select your desired location from the dropdown below to view it on the
        map and proceed with your booking.
      </p>

      <div className="mb-6">
        <label htmlFor="location" className="block text-lg font-medium mb-2">
          Select Location
        </label>
        <select
          id="location"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">--Select a Location--</option>
          <option value="chennai">Chennai, Tamil Nadu</option>
          <option value="thiruvananthapuram">Thiruvananthapuram, Kerala</option>
          <option value="pondicherry">Pondicherry</option>
        </select>
      </div>

      {location && (
        <div className="mb-6">
          <iframe
            src={mapSrc[location]}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-md shadow-lg"
          ></iframe>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={handleBookingClick}
          >
            Book Accommodation
          </button>
        </div>
      )}

      {bookingConfirmed && (
        <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
          <p>Okay, now you're going to book your respective accommodation!</p>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your phone number"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Rental;
