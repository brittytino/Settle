// Homepage.js

import React, { useState } from 'react';
import Services from './Services';
import Hero from './Hero';
import Rental from './Rental';
import WelcomeModal from '../components/WelcomeModal';
import { auth } from '../firebase-config';

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Open modal on load
  const [user, setUser] = useState(auth.currentUser); // Assuming user is authenticated

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Hero />
      <Services />
      <Rental />

      {isModalOpen && user && (
        <WelcomeModal user={user} onClose={closeModal} />
      )}
    </div>
  );
};

export default Homepage;
