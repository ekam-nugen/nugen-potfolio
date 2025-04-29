import {
  reviewPlatforms,
  TechDescriptionProps,
} from "@/src/json/technologyDescription";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TechDescription: React.FC<TechDescriptionProps> = ({
  value,
  label,
  tagline,
  imageSrc,
  features,
  highlights,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timeout);
  }, [activeIndex]);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[radial-gradient(circle,_#ffffff,_#f1dcd3)] py-16 px-6">
        <div className="absolute inset-0 opacity-20 bg-[url('/background-grid.svg')] bg-repeat pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side: Title and Description */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-md mb-4">
              {label}
            </h1>
            <p className="text-lg md:text-xl text-[#ef8961] font-bold max-w-2xl mx-auto lg:mx-0">
              {tagline}
            </p>
            {/* Review Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                300+ Glowing 5-Star Reviews
              </h4>
              <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                {reviewPlatforms.map((logo, idx) => (
                  <div key={idx} className="w-40">
                    <Image
                      src={logo.imageSrc}
                      alt={logo.alt}
                      width={150}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Call to Action Box */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
              <div className="text-center">
                <div className="mx-auto mb-4 w-24 h-24 relative">
                  <Image
                    src={imageSrc}
                    alt={`${value} Logo`}
                    layout="fill"
                    objectFit="contain"
                    className="animate-bounce"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Get{" "}
                  <a
                    href="#how-we-help-you"
                    className="text-[#f4a180] hover:underline"
                  >
                    Project-based
                  </a>{" "}
                  and{" "}
                  <a
                    href="#how-we-help-you"
                    className="text-[#ff5f6d] hover:underline"
                  >
                    Dedicated Teams
                  </a>{" "}
                  from India’s Highest-rated Company.
                </h2>
                <button className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] cursor-pointer text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-gradient-to-l transition">
                  Discuss Your Requirements
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M22.7071 8.7071C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928931C15.9526 0.538406 15.3195 0.538406 14.9289 0.928931C14.5384 1.31946 14.5384 1.95262 14.9289 2.34314L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.7071ZM8.74228e-08 9L22 9L22 7L-8.74228e-08 7L8.74228e-08 9Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Ready to bring your project to life?
                </h3>
                <p className="text-gray-600 text-sm">
                  Share your vision, and we’ll provide a free expert
                  consultation within 24 hours, outlining a clear path to
                  success tailored to your project and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why {label}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#fff7f2] rounded-2xl p-6 shadow-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-[1.1] group overflow-hidden"
              >
                <div className="text-3xl text-[#f4a180] mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>

                {/* This pseudo-border is animated via CSS below */}
                <span className="animated-border-hover"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#fdf4ee] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Where {label} Shines
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - List */}
            <div className="space-y-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(idx)}
                  className={`relative cursor-pointer p-4  rounded-md transition-all duration-300 ease-in-out 
               ${
                 activeIndex === idx
                   ? "bg-white shadow-md scale-[1.02]"
                   : "bg-white/60"
               } 
               text-lg font-medium text-gray-800`}
                >
                  {activeIndex === idx && (
                    <span className="card-border-animation" />
                  )}
                  {item.name}
                </div>
              ))}
            </div>

            {/* Right - Single Image with fade */}
            <div className="relative h-80 md:h-[28rem] w-full">
              <Image
                key={activeIndex}
                src={highlights[activeIndex]?.image}
                src={useCases[activeIndex]?.image}
                height={100}
                width={100}
                alt={`Use case ${activeIndex + 1}`}
                className={`w-full h-full object-contain rounded-xl transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] py-16 px-6 text-white text-center shadow-inner">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build something with {label}?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Let’s help you create robust, scalable, and intelligent solutions.
          </p>
          <a
            href="/contact-us"
            className="bg-white text-[#ff5f6d] font-bold py-3 px-8 rounded-full hover:bg-gray-100 cursor-pointer transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default TechDescription;
