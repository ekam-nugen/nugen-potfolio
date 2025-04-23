"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import homeimg from "../../public/home.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4c689] via-[#f4b0ed] to-[#f7a65b]  flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            INNOVATIVE SOLUTIONS <br />
            <span className="bg-clip-text text-black ">
              FOR A DIGITAL WORLD
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Your one-stop-shop for all your web services needs.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition flex items-center gap-2">
              Get Started
            </button>
            <button className="bg-white hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-semibold text-sm transition flex items-center gap-2">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <Image
            src={homeimg}
            alt="Digital Dashboard"
            className="w-full rounded-2xl shadow-xl"
            width={800}
            height={600}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
