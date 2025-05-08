"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCloud,
  FaMobileAlt,
  FaWordpress,
  FaJava,
  FaPython,
  FaMagento,
  FaAws,
  FaCube,
  FaFileCode,
  FaSearch,
  FaPencilAlt,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import ContactPopup from "../contactusPopup";

const technologies = [
  {
    name: "Full-stack",
    href: "/services/webdevelopment",
    icon: <FaCube color="#ff6b3d" />,
  },
  {
    name: "Web",
    href: "/services/webdevelopment",
    icon: <FaFileCode color="#ff6b3d" />,
  },
  {
    name: "Cloud",
    href: "/services/cloud-engineering",
    icon: <FaCloud color="#ff6b3d" />,
  },
  {
    name: "Frontend",
    href: "/services/uiux",
    icon: <FaReact color="#ff6b3d" />,
  },
  {
    name: "Mobile",
    href: "/services/appdevelopment",
    icon: <FaMobileAlt color="#ff6b3d" />,
  },
  {
    name: "Shopify",
    href: "/services/cms",
    icon: <FaSearch color="#ff6b3d" />,
  },
  {
    name: "ReactJS",
    href: "/technologies/react",
    icon: <FaReact color="#ff6b3d" />,
  },
  {
    name: "WordPress",
    href: "/services/wordpress",
    icon: <FaWordpress color="#ff6b3d" />,
  },
  {
    name: "Backend",
    href: "/services/backend",
    icon: <FaPencilAlt color="#ff6b3d" />,
  },
  {
    name: "BI",
    href: "/services/bi",
    icon: <FaFileCode color="#ff6b3d" />,
  },
  {
    name: "Java",
    href: "/technologies/java",
    icon: <FaJava color="#ff6b3d" />,
  },
  {
    name: ".NET",
    href: "/technologies/dotnet",
    icon: <FaCube color="#ff6b3d" />,
  },
  {
    name: "Python",
    href: "/technologies/python",
    icon: <FaPython color="#ff6b3d" />,
  },
  {
    name: "UI/UX",
    href: "/services/uiux",
    icon: <FaPencilAlt color="#ff6b3d" />,
  },
  {
    name: "AI/ML",
    href: "services/intelligence",
    icon: <FaBrain color="#ff6b3d" />,
  },
  {
    name: "Open AI",
    href: "/services/intelligence",
    icon: <FaBrain color="#ff6b3d" />,
  },
  {
    name: "Data Engineering",
    href: "/services/data-engineering",
    icon: <FaDatabase color="#ff6b3d" />,
  },
  { name: "AWS", href: "/technologies/aws", icon: <FaAws color="#ff6b3d" /> },
  {
    name: "Magento",
    href: "/technologies/magento",
    icon: <FaMagento color="#ff6b3d" />,
  },
  {
    name: "Flutter",
    href: "/technologies/flutter",
    icon: <FaCube color="#ff6b3d" />,
  },
  {
    name: "PHP",
    href: "/technologies/php",
    icon: <FaFileCode color="#ff6b3d" />,
  },
  {
    name: "AR/VR",
    href: "/services/ar-vr",
    icon: <FaCube color="#ff6b3d" />,
  },
  {
    name: "QA",
    href: "/services/qa",
    icon: <FaFileCode color="#ff6b3d" />,
  },
];

export default function TechnologySection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);
  // Animation variants for title and subtitles
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for technology links
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered entrance for links
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for buttons
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
    <section className="bg-white py-16 px-4 text-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
      >
        Design. Develop. Maintain. Scale.
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6"
      >
        Your Full-Stack Development Partner
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="text-lg text-[#f0845a] font-semibold mb-10 relative"
      >
        <span className="relative">
          500+ Team of Experts Skilled in 40+ Cutting-Edge Technologies
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#f0845a]/30 rounded-full" />
        </span>
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-12">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={linkVariants}
          >
            <Link
              href={tech.href}
              className="flex items-center space-x-2 px-6 py-3 border rounded-lg text-sm text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50 hover:border-[#f0845a]"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={buttonVariants}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={buttonVariants}
          className="inline-flex items-center group cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          onClick={handlePopupOpen}
        >
          <div className="flex items-center">
            Get A Quote
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center group cursor-pointer border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Link href="/technologies" className="flex items-center">
            See All Technologies
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {isPopupOpen && <ContactPopup onClose={handlePopupClose} />}
    </section>
  );
}
