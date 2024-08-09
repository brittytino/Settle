import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AuthPage from './AuthPage';
import TranslationPage from './components/TranslatePage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={user ? <Homepage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={user ? <Navigate to="/" /> : <AuthPage />} />
        <Route path="/translate" element={<TranslationPage/>} />
      </Routes>
    </>
  );
}

export default App;
