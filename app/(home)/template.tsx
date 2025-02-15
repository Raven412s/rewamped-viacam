"use client";

import { useEffect, useState } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const [isVideoPlayed, setIsVideoPlayed] = useState<null | boolean>(null);

  useEffect(() => {
    const checkVideoPlayed = async () => {
      const hasPlayed = sessionStorage.getItem("videoPlayed"); // Check session storage
      setIsVideoPlayed(!!hasPlayed); // Convert to boolean
    };

    checkVideoPlayed();
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("videoPlayed", "true"); // Store flag in session storage
    setIsVideoPlayed(true);
  };

  if (isVideoPlayed === null) return null; // Prevent flicker on load

  return (
    <div className="relative w-screen h-screen ">
      {!isVideoPlayed ? (
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Background Video */}
            <video
            id="intro-video"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto" // Ensures the video starts loading as soon as possible
            onEnded={handleVideoEnd}
            >
            <source src="/media/intro.webm" type="video/webm" />
            <source src="/media/intro.mp4" type="video/mp4" />
            </video>
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50">
            <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
            <p className="mt-2 text-lg">Bringing you the best experience</p>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Template;
