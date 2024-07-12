"use client"

import { useState, useEffect } from "react";
import withAuth from "@/components/withAuth";


type Video = {
  url: string;
  title: string;
  date: string;
};

const handleNavigation = (page: string) => {
  window.location.href = `/${page}`;
};

const Page = () => {
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Class Recording</h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleNavigation("dsavideo")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Class Recording for DSA
        </button>
        <button
          onClick={() => handleNavigation("cloudvideo")}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Class Recording for Cloud
        </button>
        <button
          onClick={() => handleNavigation("appvideo")}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          Class Recording for App
        </button>
        <button
          onClick={() => handleNavigation("webvideo")}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Class Recording for Web
        </button>
      </div>
    
    </div>
  );
};

export default withAuth(Page);
