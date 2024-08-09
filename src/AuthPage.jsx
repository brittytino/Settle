import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase-config';

const AuthPage = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User:', user);
      // Handle user information and redirect
      // For example, you might use a hook like useNavigate() for routing
      // navigate('/'); // Uncomment and import useNavigate to redirect to homepage
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
