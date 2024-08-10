import React, { useState } from 'react';
import rentalImg from '../img/rental img.jpg'

const Rental = () => {
  const [location, setLocation] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAccommodationTypeChange = (e) => {
    setAccommodationType(e.target.value);
  };

  const handleBookingClick = () => {
    setBookingConfirmed(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      accommodationType: accommodationType,
      location: location,
      additionalInfo: accommodationType === "homeRental"
        ? `Duration of Stay: ${e.target.duration.value} months`
        : `Meal Plan: ${e.target.mealPlan.value}`,
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwCFSIFY6r5gTVp67Im53BnXO-d22e961CtxJKuF1HLarRXJddvOand6qAawNN3gDw8qg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setSubmissionStatus(result.status === 'success' ? 'success' : 'error');
      alert(result.message);

    } catch (error) {
      setSubmissionStatus('error');
      alert('There was an error with your booking. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4 md:py-20 md:px-20 bg-blue-100 flex flex-col lg:flex-row gap-10">
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold mb-4">Rental Accommodation</h1>
        <p>This rental accommodation service is for refugees and immigrants to book or check accommodation.</p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select Location</label>
          <select
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Select a location</option>
            <option value="chennai">Chennai, Tamil Nadu</option>
            <option value="thiruvananthapuram">Thiruvananthapuram, Kerala</option>
            <option value="pondicherry">Pondicherry</option>
          </select>
        </div>

        <div className="mt-4">
          {location === "chennai" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310575468!2d79.87932933916929!3d13.047985947243212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1723189955967!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
          {location === "thiruvananthapuram" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.56612492466!2d76.75934849945963!3d8.500037895366011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1723189971358!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
          {location === "pondicherry" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.79931274539!2d79.77232788995312!3d11.936376280297651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1723189989213!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>

        {location && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Accommodation Type</label>
            <select
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={accommodationType}
              onChange={handleAccommodationTypeChange}
            >
              <option value="">Select accommodation type</option>
              <option value="homeRental">Home Rental</option>
              <option value="paidGuest">Paid Guest</option>
            </select>
          </div>
        )}

        {accommodationType && (
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full md:w-auto"
              onClick={handleBookingClick}
            >
              Book Accommodation
            </button>
          </div>
        )}

        {bookingConfirmed && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
            <p>Okay, now you're going to book your respective accommodation!</p>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              {accommodationType === 'homeRental' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Duration of Stay (in months)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              )}
              {accommodationType === 'paidGuest' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Meal Plan
                  </label>
                  <select
                    name="mealPlan"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">Select a meal plan</option>
                    <option value="veg">Vegetarian</option>
                    <option value="nonVeg">Non-Vegetarian</option>
                  </select>
                </div>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full md:w-auto"
              >
                Submit Booking
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="lg:w-1/3 flex justify-center items-center">
        <img src={rentalImg} alt="Rental" className="w-full lg:w-96 rounded-md" />
      </div>
    </div>
  );
};

export default Rental;
