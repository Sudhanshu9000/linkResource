import React, { useState } from "react";
import profileImg from "./assets/myphoto1.png";
import { FaLinkedin, FaYoutube, FaXTwitter, FaSitemap, } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";

const links = [
  { label: "DEV RoadMap", url: "https://wistful-sound-b56.notion.site/DEV-Tracker-1e1483c38cdf800aae85de4573bd5136?pvs=4", icon: <FaSitemap /> },
  { label: "DSA RoadMap", url: "https://wistful-sound-b56.notion.site/DSA-Tracker-1e1483c38cdf804488b1d17cd1238f9f?pvs=4", icon: <FaSitemap /> },
  {label: "Join codeCULT", url: "https://docs.google.com/forms/d/e/1FAIpQLSefYTV6JR-QzbWT4263rIQkB8AeJlxeX7snPFx6foaLZ-0TwQ/viewform", icon: <FiUserPlus />},
];

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 rounded-3xl p-6 w-full max-w-sm shadow-lg">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-700 rounded-full animate-pulse" />
            )}
            <img
              src={profileImg}
              alt="Profile"
              className={`w-24 h-24 rounded-full border-4 border-white shadow-lg transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              width={96}
              height={96}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-white">Resources</h1>
          <div className="flex gap-4 mt-3 text-2xl text-white">
            <a href="https://www.linkedin.com/in/sudhanshu-mishra-b88298243/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@Challenge-Mindset" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://x.com/Sudhanshu90062" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow hover:bg-gray-100 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl text-gray-700">{link.icon}</span>
              <span className="font-semibold text-gray-800">{link.label}</span>
              <span className="ml-auto text-gray-400">⋮</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
