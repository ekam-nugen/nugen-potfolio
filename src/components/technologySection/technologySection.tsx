import React from "react";
import Link from "next/link"; // only if you're using Next.js

const techTags = [
  { label: "Programming Languages", color: "border-blue-500" },
  { label: "Front-End", color: "border-pink-500" },
  { label: "Back-End", color: "border-red-500" },
  { label: "Platforms", color: "border-green-500" },
  { label: "CMS & E-Commerce Platforms", color: "border-indigo-500" },
  { label: "Cloud & Containerization", color: "border-purple-500" },
  { label: "AI, ML & GenAI", color: "border-cyan-500" },
  { label: "Data Science & Analytics", color: "border-pink-400" },
  { label: "Web Development", color: "border-lime-500" },
  { label: "UI/UX", color: "border-blue-500" },
  { label: "Quality Assurance", color: "border-orange-500" },
];

export const TechnologySection = () => {
  return (
    <div className="bg-white px-4 py-10 flex flex-col items-center mt-4">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#ffbb9f] font-semibold mb-2">
          Nugen I.T Services
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-extrabold leading-tight">
          Power Your Business with <br />
          Cutting-Edge Solutions
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {techTags.map((tag, index) => (
            <Link
              key={index}
              href="#technologies" // update as needed
              className={`px-6 py-3 border-l-4 ${tag.color} text-gray-800 font-medium hover:bg-slate-100 rounded-lg transition-colors duration-200`}
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
