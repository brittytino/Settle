import React from 'react';
import homeImg from '../img/refuge1.jpeg';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#183D24] text-[#C0FF00] p-6 md:py-20 md:px-20">
      {/* Left Side Content */}
      <div className="flex-1 text-center md:text-left md:pr-8 ">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Empowering Refugees and Immigrants to Build a New Life
        </h1>
        <p className="text-lg md:text-xl mb-10 md:mb-20 text-gray-300">
          Access essential services, community support, and employment opportunities—all in one place.
        </p>
        <a 
          href="#services" 
          className="bg-[#C0FF00] text-[#183D24] py-3 px-6 rounded-lg font-semibold text-xl hover:bg-transparent border hover:text-[#C0FF00] border-[#C0FF00] transition duration-300"
        >
          Start Your New Beginning !
        </a>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-center">
        <img
          src={homeImg}
          alt="Empowering Refugees and Immigrants"
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-[#C0FF00]"
        />
      </div>
    </div>
  );
};

export default Hero;