"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const logos = [
  "/clients/ivoyant.png",
  "/clients/quay.png",
  "/clients/blinkPayment.svg",
  "/clients/capitalNumber.png",
  "/clients/simply5.svg",
  "/clients/protaxCanada.png",
  "/clients/Scott.png",
  "/clients/ganpatiLogo.jpeg",
  "/clients/sunriseIntegration.jpg",
  "/clients/indiaCar.png",
  "/clients/madEngine.webp",
  "/clients/insideInjuries.png",
  "/clients/Qudos.png",
  "/clients/luckyR.jpeg",
  "/clients/magicEdt.jpeg",
  "/clients/dapt.png",
  "/clients/cloudways.webp",
  "/clients/optumLogo.png",
  "/clients/skeepLogo.webp",
];

const itemsPerSlide = 5;
const totalSlides = Math.ceil(logos.length / itemsPerSlide);

const ClientSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  const visibleLogos = logos.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  return (
    <div
      className=" bg-gradient-to-r from-white via-[#fff1eb] to-white
 py-12 px-4 overflow-hidden"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Our Valuable Clients
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-2 rounded" />
      </div>

      <div className="relative h-32 sm:h-36 max-w-7xl mx-auto px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex justify-center gap-4 sm:gap-6 absolute w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visibleLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center justify-center w-32 h-20 sm:w-40 sm:h-24 overflow-hidden"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${idx}`}
                  width={120}
                  height={80}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClientSlider;
