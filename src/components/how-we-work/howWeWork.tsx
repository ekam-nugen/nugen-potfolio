"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HowWeWorkSection() {
  // Animation variants for staggered text content
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for ratings box
  const ratingsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, y: 50, rotate: 2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    hover: { scale: 1.05, rotate: -1 },
  };

  // Animation variants for CTA button
  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0 4px 14px rgba(0,0,0,0.1)" },
    hover: {
      scale: 1.1,
      boxShadow: "0 6px 20px rgba(255, 107, 0, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-[#FFF3F0] text-black py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg text-[#FF6B00] font-semibold mb-4"
          >
            A Seamless Partnership for Your Development Needs
          </motion.p>
          <motion.h3
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-2xl md:text-3xl font-bold mb-5"
          >
            Want a Development Team That Feels Like an Extension of Your Own?
          </motion.h3>
          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-gray-700 mb-8 text-base md:text-lg"
          >
            Look no further than Capital Numbers. We make working with us feel
            as easy and effective as working with an in-house team, with over{" "}
            <span className="text-[#FF6B00] font-bold">
              300+ 5-star reviews
            </span>{" "}
            to prove it.
          </motion.p>

          {/* Ratings Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ratingsVariants}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8"
          >
            <p className="text-lg font-bold mb-3 text-black">
              India’s Highest-Rated Development Company
            </p>
            <div className="flex flex-wrap gap-6 items-center text-sm text-gray-800">
              {[
                { name: "Clutch", rating: 4.8 },
                { name: "Trustpilot", rating: 4.8 },
                { name: "Google", rating: 4.6 },
                { name: "Goodfirms", rating: 4.8 },
              ].map(({ name, rating }, index) => (
                <motion.div
                  key={name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                  className="flex items-center space-x-2"
                >
                  <span className="font-medium">{name}</span>
                  <span className="flex items-center gap-1">
                    {rating}
                    <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="/contact-us"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF6B00] to-[#FF2FB6] text-white w-fit px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
          >
            Get A Quote <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Animated Illustration */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Image
            src="/Digital presentation-amico.svg"
            alt="Teamwork Illustration"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
