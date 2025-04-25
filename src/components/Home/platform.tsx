"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import salesforce from "../../../public/salesforce.svg";
import microsoft from "../../../public/microsoft-partner.svg";
import adobe from "../../../public/adobe.svg";

const partners = [
  {
    title: "Salesforce Partner",
    icon: salesforce,
  },
  {
    title: "Microsoft Solutions Partner",
    icon: microsoft,
  },
  {
    title: "Adobe Solution Partner",
    icon: adobe,
  },
];

export default function PlatformSolutions() {
  // Animation variants for title and subtitle
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for partner cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Staggered entrance for cards
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for CTA buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fef9f6] via-[#fff5f0] to-[#fef9f6]">
      <div className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            Platform Solutions and Services
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-[#f0845a] mt-4 text-lg font-medium relative"
          >
            We drive your business forward with innovative solutions
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f0845a]/30 rounded-full" />
          </motion.p>

          {/* Partner Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm cursor-pointer rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-4"
              >
                <Image
                  src={partner.icon}
                  alt={partner.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <span className="text-base font-semibold text-gray-900">
                  {partner.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariants}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          >
            <Link
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2"
            >
              Share Your Requirements →
            </Link>
            <Link
              href="#"
              className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Explore More →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
