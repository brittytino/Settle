import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Adjust the import based on the version installed

const jobsData = [
  {
    id: 1,
    title: "Drivers",
    location: "Palani, Thirunelveli",
    requirements: ["drive", "car driver", "call taxi driver"],
    description: "Assist in driving vehicles for various purposes.",
  },
  {
    id: 2,
    title: "Labor",
    location: "Dindigul, Erode, Madurai",
    requirements: ["work", "12hrs+", "hardwork"],
    description: "Perform physical work involving manual labor.",
  },
  {
    id: 3,
    title: "Maids and Housekeepers",
    location: "Erode, Chennai, Coimbatore",
    requirements: ["Maid", "Housekeepers"],
    description: "Maintain cleanliness and order in homes and offices.",
  },
  {
    id: 4,
    title: "Cooks",
    location: "Coimbatore, Erode",
    requirements: ["Know to cook", "average"],
    description: "Prepare meals according to recipes and standards.",
  },
  {
    id: 5,
    title: "Construction Worker",
    location: "Chennai, Pondicherry",
    requirements: ["Physical Stamina", "Teamwork"],
    description: "Assist in building and maintaining structures.",
  },
];

function Job() {
  const [inputData, setInputData] = useState({ name: "", skills: "", location: "" });
  const [matchedJob, setMatchedJob] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = jobsData.find((job) =>
      inputData.skills.split(", ").every((skill) => job.requirements.includes(skill)) &&
      job.location.toLowerCase().includes(inputData.location.toLowerCase())
    );

    if (matched) {
      setMatchedJob(matched);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      setMatchedJob(null);
      alert("No matching job found.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-extrabold text-black mb-10">Find Your Perfect Job</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Age
          </label>
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Age"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Phone Number
          </label>
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Mobile Number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
            Skills (Comma separated)
          </label>
          <input
            type="text"
            name="skills"
            value={inputData.skills}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="E.g., drive, car driver"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
            Preferred Location
          </label>
          <input
            type="text"
            name="location"
            value={inputData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="E.g., Palani, Dindigul"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Find Job
        </button>
      </form>

      <Transition
        show={showPopup}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-10 right-10 p-4 bg-green-500 text-white rounded-lg shadow-lg flex items-center">
          <CheckCircleIcon className="h-6 w-6 mr-2" />
          <span>Job matched successfully!</span>
        </div>
      </Transition>

      {matchedJob && (
        <div className="mt-10 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {matchedJob.title}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> {matchedJob.location}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Requirements:</strong> {matchedJob.requirements.join(", ")}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> {matchedJob.description}
          </p>
          <button
            onClick={() => alert("Job application submitted! We'll Contact you soon")}
            className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105"
          >
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Job;
