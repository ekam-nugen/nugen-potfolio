"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import serviceBg from "../../../public/service-bg.jpg";
import smm from "../../../public/smm.jpg";

const services = [
  {
    id: 1,
    title: "Web & Mobile Development",
    description:
      "We create, products, brands, apps & websites for companies all around the world class digital products",
    image: smm,
  },
  {
    id: 2,
    title: "Interaction Design",
    description:
      "Metameet combines the idea of a 3D virtual environment with companies growing need for more personalised",
    image: serviceBg,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "We partnered digital marketing to create an interactive video tool that will change the way businesses.",
    image: smm,
  },
  {
    id: 4,
    title: "Branding and Strategy",
    description:
      "Funnels that increase response rates is just the first step for them and we can’t wait to see where it takes them!",
    image: serviceBg,
  },
];

export default function ServicesSection() {
  const [currentImage, setCurrentImage] = useState(services[0].image);

  return (
    <section className="bg-white text-black px-6 md:px-16 py-20">
      {/* Header Section */}
      <div className="w-full max-w-5xl mx-auto mb-16 text-center md:text-left">
        {/* <p className="uppercase text-sm text-gray-500 tracking-wide mb-2">
          Services
        </p> */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Solution we provide
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed max-w-3xl">
          With every single one of our clients we bring forth a deep passion for{" "}
          <span className="font-semibold text-[#f0845a]">
            creative problem solving innovations
          </span>{" "}
          forward thinking brands boundaries
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image Section with Crossfade */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[400px]">
            {services.map((service, index) => (
              <Image
                key={index}
                src={service.image}
                alt="Service"
                layout="fill"
                objectFit="cover"
                className={`rounded-xl shadow-lg absolute top-0 left-0 w-full h-full transition-opacity duration-700 -rotate-12 ${
                  currentImage === service.image
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="w-full md:w-1/2 space-y-10">
          <ul className="space-y-6">
            {services.map((service) => (
              <li
                key={service.id}
                onMouseEnter={() => setCurrentImage(service.image)}
                className="group cursor-pointer flex items-start justify-between border-b border-gray-200 pb-4"
              >
                <div className="flex gap-4">
                  <span className="text-lg font-bold text-[#ff6b3d]">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-[#f0845a] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <ArrowUpRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-black transition duration-300 mt-1" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
