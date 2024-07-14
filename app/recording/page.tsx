"use client";

import withAuth from "@/components/withAuth";

const handleNavigation = (page: string) => {
  window.location.href = `/${page}`;
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Class Recordings</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <button
            onClick={() => handleNavigation("dsavideo")}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105"
          >
            DSA
          </button>
          <button
            onClick={() => handleNavigation("cloudvideo")}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105"
          >
            Cloud
          </button>
          <button
            onClick={() => handleNavigation("appvideo")}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105"
          >
            App
          </button>
          <button
            onClick={() => handleNavigation("webvideo")}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105"
          >
            Web
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
