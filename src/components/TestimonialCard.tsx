"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import testimonials from "../json/testimonials";
import googleimg from "../../public/award-logo-1.svg";
import trustpilote from "../../public/trustpilot-logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f9f9] via-white to-[#f1f1f1]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 text-gray-900 leading-tight">
            Trusted Clients <br />{" "}
            <span className="text-[#ff6b3d]">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Consumers today rely heavily on digital means to research products.
            We help you build trust that lasts.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-6 mb-8">
            <Image
              src={googleimg}
              alt="Google Reviews"
              width={100}
              height={30}
              className="grayscale-0 hover:grayscale transition"
            />
            <Image
              src={trustpilote}
              alt="Trustpilot"
              width={100}
              height={30}
              className="grayscale-0 hover:grayscale transition"
            />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#ff6b3d] hover:text-white transition duration-300">
            Explore Us More →
          </button>
        </div>

        {/* Testimonial Swiper */}
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="w-full rounded-2xl"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center space-x-1 text-yellow-400 text-lg">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 mt-4 mb-6 italic font-medium line-clamp-5">
                    “{item.testimonial}”
                  </p>
                  <Quote
                    className="absolute bottom-6 right-6 text-gray-200"
                    size={28}
                  />

                  <div className="flex items-center space-x-4 pt-6 border-t">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-white shadow"
                    />
                    <div>
                      <p className="font-semibold text-black">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
