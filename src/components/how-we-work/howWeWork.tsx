"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#FFF3F0] text-black py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            How We Work
          </h2>
          <p className="text-lg text-[#FF6B00] font-semibold mb-4">
            A Seamless Partnership for Your Development Needs
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-5">
            Want a Development Team That Feels Like an Extension of Your Own?
          </h3>
          <p className="text-gray-700 mb-8 text-base md:text-lg">
            Look no further than Capital Numbers. We make working with us feel
            as easy and effective as working with an in-house team, with over{" "}
            <span className="text-[#FF6B00] font-bold">
              300+ 5-star reviews
            </span>{" "}
            to prove it.
          </p>

          {/* Ratings Box */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
            <p className="text-lg font-bold mb-3 text-black">
              India’s Highest-Rated Development Company
            </p>
            <div className="flex flex-wrap gap-6 items-center text-sm text-gray-800">
              {[
                { name: "Clutch", rating: 4.8 },
                { name: "Trustpilot", rating: 4.8 },
                { name: "Google", rating: 4.6 },
                { name: "Goodfirms", rating: 4.8 },
              ].map(({ name, rating }) => (
                <div key={name} className="flex items-center space-x-2">
                  <span className="font-medium">{name}</span>
                  <span className="flex items-center gap-1">
                    {rating}
                    <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#FF6B00] to-[#FF2FB6] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300">
            Get A Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Parallax Animated Illustration */}
        <div className="w-full flex justify-center">
          {/* <Parallax speed={-10}> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-md transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/Digital presentation-amico.svg"
              alt="Teamwork Illustration"
              width={500}
              height={500}
            />
          </motion.div>
          {/* </Parallax> */}
        </div>
      </div>
    </section>
  );
}
