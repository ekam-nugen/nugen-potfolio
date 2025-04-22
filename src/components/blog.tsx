"use client";
import Image from "next/image";

import { useState } from "react";

const blogData = [
  {
    title: "Next.js and React: A Combination for Superior Performance",
    author: "Subhajit Das",
    role: "Project Manager",
    image: "/image.webp",
    description:
      "Based on a recent project for a logistics tech firm, Nugen IT Services used Next.js and React to drastically improve page speed and SEO, enhancing user retention and lead conversion.",
    highlight: false,
  },
  {
    title: "Mastering Server-Side Rendering with Next.js",
    author: "Pushpal Mazumder",
    role: "CTO",
    image: "/image.webp",
    description:
      "In modern web development, performance and user experience are key components of building a successful application. One of the best ways to achieve these goals is by implementing Server-Side Rendering (SSR). Next.js, a popular React framework, makes SSR incredibly easy and efficient. In this blog, we’ll dive into the fundamentals of Server-Side Rendering with Next.js and explore how you can leverage it to optimize your applications.",
    highlight: false,
  },
  {
    title: "Introduction to Functional Programming Concepts in JavaScript",
    author: "Saumendu Pathak",
    role: "Senior Business Analyst",
    image: "/image.webp",
    description:
      "Functional Programming (FP) is a paradigm in programming that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In JavaScript, functional programming techniques are increasingly popular because they help write cleaner, more maintainable, and scalable code. This blog will introduce you to key concepts of functional programming and how you can use them in JavaScript.",
    highlight: false,
  },
  {
    title: "7 Game-Changing Tips to 10x Your API Performance",
    author: "Sanjay Singhania",
    role: "Project Manager",
    image: "/insight-banner.png",
    description:
      "Drawing from a fintech project handled by Nugen, this blog shares 7 actionable tips that helped reduce API latency by 70%, ensuring secure and lightning-fast transactions.",
    highlight: false,
  },
];

export default function BlogSection() {
  const [hoveredPost, setHoveredPost] = useState<
    null | (typeof blogData)[number]
  >(null);

  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-white via-[#fff1eb] to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Software Development Insights
        </h2>
        <p className="text-[#f0845a] mt-2 text-lg font-semibold">
          Expert Analyses and Top Trends
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Featured Blog Card */}
        <div className="col-span-1 lg:col-span-1 relative">
          <div className="shadow-xl rounded-xl overflow-hidden">
            <Image
              src={hoveredPost ? hoveredPost.image : blogData[0].image}
              alt="Next.js and React Article"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                {hoveredPost ? hoveredPost.title : blogData[0].title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                By{" "}
                <span className="font-medium">
                  {hoveredPost ? hoveredPost.author : blogData[0].author}
                </span>
                , {hoveredPost ? hoveredPost.role : blogData[0].role}
              </p>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 text-white opacity-0 transition-opacity duration-300 p-6 flex flex-col justify-center">
              <h4 className="text-2xl font-semibold">
                {hoveredPost ? hoveredPost.title : blogData[0].title}
              </h4>
              <p className="mt-2">
                {hoveredPost
                  ? hoveredPost.description
                  : blogData[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Side Articles */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-8 justify-center">
          {blogData.map((post, idx) => (
            <div
              key={idx}
              className="border-b pb-4 last:border-b-0 cursor-pointer"
              onMouseEnter={() => setHoveredPost(post)} // Set hovered post
              onMouseLeave={() => setHoveredPost(null)} // Reset when mouse leaves
            >
              <h4
                className={`text-lg font-semibold ${
                  post.highlight || hoveredPost === post
                    ? "text-[#f0845a]"
                    : "text-gray-900"
                }`}
              >
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                By <span className="font-medium">{post.author}</span>,{" "}
                {post.role}
              </p>
            </div>
          ))}

          {/* Button */}
          <div className="pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white px-6 py-3 rounded-lg font-semibold">
              Read More Blog Post →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
