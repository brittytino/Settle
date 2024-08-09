import React from 'react';
import { FaGlobe, FaHome, FaBriefcase, FaHeartbeat, FaLanguage, FaHandsHelping, FaUserCog, FaGavel } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
    <div className="text-4xl text-blue-500 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);
const Services = () => {
  return (
    <div id='services' className="container mx-auto px-6  py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <ServiceCard
          icon={<FaGlobe />}
          title="Service Directory"
          description="A comprehensive list of available services tailored for refugees and immigrants, including legal aid, housing, job matching, and medical support."
        />
        <ServiceCard
          icon={<FaHandsHelping />}
          title="Contact Provider"
          description="Reach out directly to service providers for assistance or inquiries."
        />
        <ServiceCard
          icon={<FaHome />}
          title="Rental Accommodations"
          description="Find and book rental properties that suit your needs and budget."
        />
        <ServiceCard
          icon={<FaBriefcase />}
          title="Job Matching"
          description="Browse job listings that match your skills and apply directly through the app."
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <ServiceCard
          icon={<FaLanguage />}
          title="Language Support"
          description="Access translation services or language learning resources to communicate effectively."
        />
        <ServiceCard
          icon={<FaHeartbeat />}
          title="Medical Emergency Support"
          description="Quick access to emergency medical services, including nearby hospitals and urgent care."
        />
        <ServiceCard
          icon={<FaHandsHelping />}
          title="Community Forum"
          description="Connect with others, share experiences, ask questions, and offer support."
        />
        <ServiceCard
          icon={<FaUserCog />}
          title="Chat with Legal Support"
          description="Direct communication with legal advisors for immigration issues, asylum applications, or other legal concerns."
        />
      </section>

      
    </div>
  );
};

export default Services;
