// src/App.js
import React, { useState } from "react";
import { fetchYouTubeVideos } from "./utils/fetchYouTube";

const App = () => {
  const [path, setPath] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleFormSubmit = async (formData) => {
    const generatedPath = [
      "Introduction to Programming",
      "JavaScript Basics",
      "React Fundamentals",
      "Building a Project",
    ];
    setPath(generatedPath);

    // Fetch videos for the first step as an example
    const videoResults = await fetchYouTubeVideos(generatedPath[0]);
    setVideos(videoResults);
  };

  return (
    <div>
      {/* Other components */}
      {videos.length > 0 && (
        <div>
          <h2>Recommended Videos</h2>
          <ul>
            {videos.map((video, index) => (
              <li key={index}>
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};