// components/CaseStudyHero.tsx

"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import caseStudies from "../json/caseStudy";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function CaseStudyHero() {
  return (
    <section className="relative  text-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#feddd0] via-[#f9e4da] to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          loop={true}
          className="w-full"
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-10">
                
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/2"
                >
                  <div className="mb-4 inline-block px-4 py-1 bg-white text-[#ff6b3d] text-sm rounded-full border-2 border-[#fad6c7] font-semibold shadow-md">
                    {study.badge}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {study.title}
                  </h1>
                  <p className="mb-6 text-lg text-black">{study.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 bg-white/10 border border-[#f9c0a7] rounded-full text-sm backdrop-blur-md hover:bg-white/20 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={study.link}
                    className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 transition"
                  >
                    {study.buttonText} <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>

                {/* Right Image */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/2"
                >
                  <img
                    src={study?.image ?? ""}
                    alt={study.title}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
