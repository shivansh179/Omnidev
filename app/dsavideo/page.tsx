"use client";

import React, { useState, useEffect } from "react";

type Video = {
  url: string;
  title: string;
  date: string;
};

const Page = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/dsa.json");
        const data = await response.json();
        setVideos(data);
        setCurrentVideo(data[0]?.url || ""); // Ensure data[0]?.url is not undefined
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideos();
  }, []);

  const isYouTubeVideo = (url: string) => url.includes("youtube.com/embed");
  const isGoogleDriveVideo = (url: string) => url.includes("drive.google.com/file");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Course Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          {isYouTubeVideo(currentVideo) ? (
            <iframe
              width="100%"
              height="400"
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mb-8"
            ></iframe>
          ) : isGoogleDriveVideo(currentVideo) ? (
            <iframe
              width="100%"
              height="400"
              src={currentVideo}
              title="Google Drive video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              className="mb-8"
              allowFullScreen
            ></iframe>
          ) : (
            <video controls src={currentVideo} className="w-full h-auto mb-8">
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Video Playlist</h2>
          <ul className="space-y-4">
            {videos.map((video) => (
              <li key={video.url}>
                <button
                  onClick={() => setCurrentVideo(video.url)}
                  className={`block w-full text-left p-4 rounded-lg ${
                    video.url === currentVideo
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-400 hover:text-black"
                  }`}
                >
                  <span className="font-semibold">{video.title}</span>
                  <br />
                  <span className="text-sm text-gray-500">{video.date}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
