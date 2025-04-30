"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FC, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { slides } from "../json/homePage";
import ComputerIcon from "../../public/computer-icon.png";
import ToolIcon from "../../public/mobile.png";
import hash from "../../public/hash-icon.png";
import settings from "../../public/setting-icon.webp";
import Link from "next/link";

const HomePage: FC = () => {
  const iconRef = useRef(null);
  const computerRef = useRef(null);
  const hashRef = useRef(null);
  const toolRef = useRef(null);

  // Animation variants for floating effect
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        x: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      },
    },
  };

  return (
    <div className="min-h-[600px] w-full relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="w-full h-[600px] sm:h-[700px] md:h-[700px] lg:h-[790px] relative"
      >
        {/* Corner Icons - Visible only in hero section on large screens */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
          <motion.div
            className="absolute top-8 left-8"
            variants={floatAnimation}
            animate="animate"
          >
            <Image
              src={ComputerIcon}
              alt="computer"
              height={128}
              width={128}
              ref={computerRef}
              className="h-32 w-32 object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-8"
            variants={floatAnimation}
            animate="animate"
          >
            <Image
              src={hash}
              alt="hash"
              height={128}
              width={128}
              ref={hashRef}
              className="h-32 w-32 object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute top-8 right-8"
            variants={floatAnimation}
            animate="animate"
          >
            <Image
              src={ToolIcon}
              alt="mobile"
              height={128}
              width={128}
              ref={toolRef}
              className="h-32 w-32 object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8"
            variants={floatAnimation}
            animate="animate"
          >
            <Image
              src={settings}
              alt="tool"
              height={128}
              width={128}
              ref={iconRef}
              className="h-32 w-32 object-contain"
            />
          </motion.div>
        </div>

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center justify-center h-full ${slide.background}`}
            >
              <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* LEFT: Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
                >
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <h2 className="text-base sm:text-lg md:text-xl text-gray-800 flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                    {slide.subheading}
                    {slide.subheadingIcon && (
                      <Image
                        src={slide.subheadingIcon.src}
                        alt={slide.subheadingIcon.alt}
                        width={slide.subheadingIcon.width}
                        height={slide.subheadingIcon.height}
                        className="object-contain w-12 sm:w-16 md:w-20 lg:w-24"
                      />
                    )}
                  </h2>
                  {slide.ratings && (
                    <div className="space-y-2">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                        Top-Rated Company
                      </h3>
                      <ul className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                        {slide.ratings.map((rating, idx) => (
                          <li key={idx}>
                            <Image
                              src={rating.src}
                              alt={rating.alt}
                              width={rating.width}
                              height={rating.height}
                              className="object-contain w-16 sm:w-20 md:w-24"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  >
                    <a
                      href={slide.button1.href}
                      className={`${slide.button1.color} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition flex items-center gap-2 w-fit`}
                    >
                      {slide.button1.text}
                      <ArrowRight size={16} />
                    </a>
                    {slide.button2 && (
                      <a
                        href={slide.button2.href}
                        className={`${slide.button2.color} px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition flex items-center gap-2 w-fit`}
                      >
                        {slide.button2.text}
                        <ArrowRight size={16} />
                      </a>
                    )}
                  </motion.div>
                </motion.div>

                {/* RIGHT: Dynamic Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center items-center"
                >
                  {slide.rightContent.type === "image" &&
                    slide.rightContent.image && (
                      <div className="relative flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto transition-transform duration-300 hover:scale-105">
                        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl">
                          <Image
                            width={100}
                            height={100}
                            src={slide.rightContent.image.src}
                            alt={slide.rightContent.image.alt}
                            className="w-full h-auto max-h-[200px] xs:max-h-[220px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 xs:py-2 sm:py-3">
                            <h2 className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold">
                              {"Innovate Today"}
                            </h2>
                          </div>
                        </div>
                        <h1 className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
                          Transform Your Business With Cutting Edge Solutions
                        </h1>
                          <Link href={"/case-studys"}>
                        <button className="mt-3 flex cursor-pointer xs:mt-4 sm:mt-5 md:mt-6 px-3 xs:px-4 sm:px-5 md:px-6 py-1 xs:py-1.5 sm:py-2 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md transition-colors duration-300 text-xs xs:text-sm sm:text-base">
                          Learn More
                          <ArrowRight className="ml-2"/>
                        </button>
                          </Link>
                      </div>
                    )}
                  {slide.rightContent.type === "services" &&
                    slide.rightContent.services && (
                      <div className="p-4 sm:p-6 rounded-xl">
                        <h3 className="text-md sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                          {slide.rightContent.services.header}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                          {slide.rightContent.services.items.map(
                            (service, idx) => (
                              <a
                                key={idx}
                                href={service.href}
                                className={`px-4 sm:px-6 py-2 sm:py-3 border-l-4 ${service.borderColor} text-gray-800 font-medium hover:bg-gray-100 rounded-lg transition-colors duration-200 text-sm sm:text-base`}
                              >
                                {service.text}
                              </a>
                            )
                          )}
                        </div>
                        <div className="flex justify-center mt-6 sm:mt-8">
                          <a
                            href={slide.rightContent.services.button.href}
                            className={`${slide.rightContent.services.button.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition flex items-center gap-2`}
                          >
                            {slide.rightContent.services.button.text}
                            <ArrowRight size={16} />
                          </a>
                        </div>
                      </div>
                    )}
                  {slide.rightContent.type === "iconText" &&
                    slide.rightContent.iconText && (
                      <div className="flex flex-col p-4 sm:p-6 bg-gradient-to-r from-white to-[#fef3c7] rounded-xl shadow-md max-w-md mx-auto">
                        <div className="flex flex-col items-center space-y-4 sm:space-y-5">
                          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-800 font-semibold text-center">
                            Get&nbsp; 


                            <a href="/case-study">
                              <span className="text-orange-500">
                                Project-based&nbsp;
                              </span>
                            </a>
                            and&nbsp;
                            <a href="/dedicated-team">
                              <span className="text-green-500">
                                Dedicated Teams&nbsp;
                              </span>
                            </a>
                            from India&apos;s Highest-rated Company.
                          </h2>
                          <a
                            // href={slide.rightContent.iconText.button.href}
                            href="/contact-us"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-semibold text-sm sm:text-base transition flex items-center gap-2"
                          >
                            Discuss Your Requirements
                            <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                        <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200">
                          <h3 className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold text-center">
                            Ready to bring your project to life?
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
                            Share your vision, and we&apos;ll provide a free
                            expert consultation within 24 hours, outlining a
                            clear path to success tailored to your project and
                            budget.
                          </p>
                        </div>
                      </div>
                    )}
                  {slide.rightContent.type === "events" &&
                    slide.rightContent.events && (
                      <div className="space-y-4 bg-gradient-to-r from-white to-[#fff1eb] p-3 sm:p-4 md:p-6 rounded-xl">
                        {slide.rightContent.events.items.map((event, idx) => (
                          <div
                            key={idx}
                            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                          >
                            <Image
                              src={event.logoSrc}
                              alt={event.logoAlt}
                              width={800}
                              height={400}
                              className="object-cover w-full h-48 sm:h-56 md:h-64 brightness-90"
                              priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3 sm:p-4 md:p-5">
                              <div className="bg-orange-500 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md mb-1.5 w-fit">
                                <span className="text-xs sm:text-sm font-semibold text-white">
                                  {event.hall},{" "}
                                  <small>Stand - {event.stand}</small>
                                </span>
                              </div>
                              <span className="bg-white text-xs sm:text-sm font-semibold text-black px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md w-fit mb-1.5">
                                {event.date}
                              </span>
                              <p className="text-xs sm:text-sm md:text-base text-white font-medium">
                                {event.location}
                              </p>
                            </div>
                          </div>
                        ))}
                        {slide.rightContent.events.button && (
                          <a
                            href={slide.rightContent.events.button.href}
                            className="inline-block mt-3 px-4 py-2 sm:px-6 sm:py-2.5 text-white font-semibold rounded-md bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-sm sm:text-base"
                          >
                            {slide.rightContent.events.button.text}
                          </a>
                        )}
                      </div>
                    )}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;