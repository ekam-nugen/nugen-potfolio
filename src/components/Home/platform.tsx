"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import salesforce from "../../../public/salesforce.svg";
import microsoft from "../../../public/microsoft-partner.svg";
import adobe from "../../../public/adobe.svg";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    title: "Salesforce Partner",
    icon: salesforce,
    href: "/platforms",
  },
  {
    title: "Microsoft Solutions Partner",
    icon: microsoft,
    href: "/platforms",
  },
  {
    title: "Adobe Solution Partner",
    icon: adobe,
    href: "/platforms",
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
              <Link key={index} href={partner.href} className="group">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="bg-white/80 backdrop-blur-sm cursor-pointer rounded-2xl p-6 border border-gray-100 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 flex items-center justify-center gap-4"
                >
                  <Image
                    src={partner.icon}
                    alt={partner.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <span className="text-base font-semibold text-gray-900">
                    {partner.title}
                  </span>
                </motion.div>
              </Link>
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
            {/* Gradient Button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center group cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1"
            >
              Share Your Requirements
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Outline Button */}
            <Link
              href="/platforms"
              className="inline-flex items-center group border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-md transform hover:scale-105 hover:-translate-y-1"
            >
              Explore More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
