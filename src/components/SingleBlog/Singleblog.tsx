import Image from "next/image";
import React from "react";

const blogData = {
  title: "Flutter Performance Optimization: Building Fast and Efficient Apps",
  author: "Jane Doe",
  date: "April 23, 2025",
  featuredImage: "/21b1e3a7-abc6-4f97-9929-b85cbe29376b.webp",
  sections: [
    {
      heading: null,
      content: [
        "In today’s fast-paced digital world, optimizing performance is not just a nice-to-have—it’s a necessity. Flutter offers great tools for building fast apps, but without optimization, performance can suffer.",
      ],
    },
    {
      heading: "1. Optimize Widget Builds",
      content: [
        "Reuse widgets where possible and avoid rebuilding widgets that don’t need updates. Use the `const` keyword whenever possible.",
      ],
    },
    {
      heading: "2. Efficient State Management",
      content: [
        "Use state management solutions like Provider or Riverpod to ensure minimal re-renders and improved performance.",
      ],
    },
    {
      heading: null,
      quote: "Performance is a product of mindful design and efficient coding.",
    },
    {
      heading: "3. Monitor and Profile",
      content: [
        "Use the Flutter DevTools to analyze performance bottlenecks and memory leaks.",
      ],
    },
  ],
  authorNote: {
    text: "Written by ",
    author: "Jane Doe",
    description: "Flutter expert at YourCompany.",
  },
  sidebar: {
    categories: ["Flutter", "React", "Performance", "UI/UX"],
    popularPosts: [
      "10 Flutter Tips",
      "Improve React Performance",
      "Building with Tailwind",
    ],
    cta: {
      title: "Need a Dev Team?",
      description: "Get expert developers for your next project.",
      button: {
        label: "Contact Us →",
        url: "/contact-us",
      },
    },
  },
};

export default function BlogPostPage() {
  return (
    <div className="bg-white text-gray-800">
      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Content */}
        <article className="lg:col-span-2 space-y-6">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            {blogData.title}
          </h2>
          <p className="text-sm text-gray-500">
            By {blogData.author} | {blogData.date}
          </p>
          <Image
            src={blogData.featuredImage}
            alt={blogData.title}
            className="rounded-lg shadow-md"
          />

          <div className="space-y-6 text-base leading-relaxed">
            {blogData.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h3 className="text-2xl font-semibold mt-8">
                    {section.heading}
                  </h3>
                )}
                {section.content &&
                  section.content.map((text, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
                  ))}
                {section.quote && (
                  <blockquote className="border-l-4 border-pink-600 pl-4 italic text-gray-600">
                    &quot;{section.quote}&quot;
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 border-t pt-6 text-sm text-gray-500">
            <p>
              {blogData.authorNote.text}
              <strong className="text-gray-800">
                {blogData.authorNote.author}
              </strong>
              , {blogData.authorNote.description}
            </p>
          </div>
        </article>

        {/* Sticky Sidebar */}
        <aside className="lg:sticky top-20 self-start space-y-8 h-fit">
          {/* Categories */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Categories
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {blogData.sidebar.categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-pink-600">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Popular Posts
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {blogData.sidebar.popularPosts.map((post, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-pink-600">
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg p-4 text-white shadow-lg">
            <h5 className="text-lg font-semibold">
              {blogData.sidebar.cta.title}
            </h5>
            <p className="text-sm mt-2">{blogData.sidebar.cta.description}</p>
            <a
              href={blogData.sidebar.cta.button.url}
              className="inline-block mt-3 bg-white text-pink-600 font-semibold text-sm px-4 py-2 rounded hover:bg-gray-100"
            >
              {blogData.sidebar.cta.button.label}
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
}
