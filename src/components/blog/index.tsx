"use client";

import Image from "next/image";
import Link from "next/link";
import bg from "../../../public/service-bg.jpg";

const blogs = [
  {
    title: "Enhance Online Presence Drive Digital Success",
    image: bg,
    date: "30, April 2024",
    author: "admin",
  },
  {
    title: "Grow Your Business Digitally Reach New Customers",
    image: bg,
    date: "30, April 2024",
    author: "admin",
  },
  {
    title: "Boost Your Brand Online Reach Your Audience Digitally",
    image: bg,
    date: "30, April 2024",
    author: "admin",
  },
];

export default function BlogSectionPage() {
  return (
    <section className="bg-white py-20 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold">News & Blogs</h2>
          <Link
            href="#"
            className="border border-black text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition"
          >
            VIEW ALL POSTS <span>→</span>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white hover:scale-[1.02]"
            >
              <div className="relative w-full h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              </div>
              <div className="p-6 space-y-3 z-20 relative">
                <div className="text-sm text-gray-500 flex items-center gap-4">
                  <span>By {blog.author}</span>
                  <span className="text-[#ff6b3d]">|</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug text-gray-900">
                  {blog.title}
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-[#ff6b3d] group"
                >
                  READ MORE
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
