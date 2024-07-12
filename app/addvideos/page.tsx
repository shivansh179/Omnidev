"use client";

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withAuth from '../../components/withAuth';  
const Page = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [course, setCourse] = useState('');  

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newVideo = { title, url, date, course };

    try {
      const response = await fetch('/api/addVideos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
      });
      if (response.ok) {
        toast.success("Form submitted successfully");
        setTitle('');
        setUrl('');
        setDate('');
        setCourse('');
      } else {
        toast.error('Failed to submit video');
      }
    } catch (error) {
      console.error('Error submitting video:', error);
      toast.error('Error submitting video');
    }
  };

  return (
    <div className="min-h-screen flex  flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500">
      <h1 className='text-5xl font-bold'>Add Videos</h1>
      {/* Video Submission Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Submit New Video</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Title</label>
          <input
          placeholder="text"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">URL</label>
          <input
          placeholder="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Date</label>
          <input
            placeholder="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Course</label>
          <select
            title="course"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select Course</option>
            <option value="dsa">DSA</option>
            <option value="web">Web</option>
            <option value="app">App</option>
            <option value="cloud">Cloud</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default withAuth(Page);
