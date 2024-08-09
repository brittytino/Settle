import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-14">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Settle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;