"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Branding from "../../../public/brand-strategy-1.png";
import Marketing from "../../../public/Marketing-cuate.svg";
import Design from "../../../public/Advanced customization-cuate.svg";
import webApp from "../../../public/mobile-app-development.png";

const services = [
  {
    id: 1,
    href: "/services/webdevelopment",
    title: "Web & Mobile Development",
    description:
      "We create, products, brands, apps & websites for companies all around the world class digital products",
    image: webApp,
  },
  {
    id: 2,
    href: "/services/uiux",
    title: "Interaction Design",
    description:
      "Metameet combines the idea of a 3D virtual environment with companies growing need for more personalised",
    image: Design,
  },
  {
    id: 3,
    href: "/services/seo",
    title: "Digital Marketing",
    description:
      "We partnered digital marketing to create an interactive video tool that will change the way businesses.",
    image: Marketing,
  },
  {
    id: 4,
    href: "/about",
    title: "Branding and Strategy",
    description:
      "Funnels that increase response rates is just the first step for them and we can’t wait to see where it takes them!",
    image: Branding,
  },
];

export default function ServicesSection() {
  const [currentImage, setCurrentImage] = useState(services[0].image);

  // Animation variants for title and subtitle
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for service list items
  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Staggered entrance for services
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="bg-[#fef9f6] text-black px-6 md:px-16 py-20">
      {/* Header Section */}
      <div className="w-full max-w-5xl mx-auto mb-16 text-center md:text-left">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
        >
          Solution we provide
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed max-w-3xl relative"
        >
          With every single one of our clients we bring forth a deep passion for{" "}
          <span className="font-semibold text-[#f0845a]">
            creative problem solving innovations
          </span>{" "}
          forward thinking brands boundaries
          <span className="absolute -bottom-1 left-0 w-24 h-1 bg-[#f0845a]/30 rounded-full" />
        </motion.p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image Section with Crossfade */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-[400px] h-[400px]">
            {services.map((service, index) => (
              <Image
                key={index}
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className={`rounded-xl shadow-lg absolute top-0 left-0 w-full h-full transition-opacity duration-700 md:-rotate-12 ${
                  currentImage === service.image
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Services List */}
        <div className="w-full md:w-1/2 space-y-10">
          <ul className="space-y-6">
            {services.map((service, index) => (
              <motion.li
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={serviceVariants}
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
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
