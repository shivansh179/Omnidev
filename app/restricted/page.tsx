"use client"

import React from 'react';
import Image from 'next/image';
 
const RestrictedAccess = () => {
 
  const handleGoBack = () => {
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <div className="bg-white text-black p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Access Restricted</h1>
        <p className="text-lg mb-6">You do not have permission to access this page.</p>
        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105"
        >
          Go Back to Home
        </button>
      </div>
      <div className="mt-10">
        <Image
          src="/restricted.jpg"
          alt="Restricted Access"
          width={500}
          height={600}
          className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default RestrictedAccess;
