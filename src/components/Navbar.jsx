import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/settle-high-resolution-logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Translation', href: '/translate' },
];

const Navbar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#183D24] px-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-24 w-auto" />
        </Link>
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-accent">
              {link.name}
            </Link>
          ))}
          {onLogout && (
            <button
              onClick={onLogout}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-accent focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="block py-2 px-4 hover:bg-accent">
              {link.name}
            </Link>
          ))}
          {onLogout && (
            <button
              onClick={onLogout}
              className="block w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
