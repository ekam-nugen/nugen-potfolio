"use client";

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
    href: "/services/java",
    icon: <FaJava color="#ff6b3d" />,
  },
  {
    name: ".NET",
    href: "/services/dotnet",
    icon: <FaCube color="#ff6b3d" />,
  },
  {
    name: "Python",
    href: "/services/python",
    icon: <FaPython color="#ff6b3d" />,
  },
  {
    name: "UI/UX",
    href: "/services/ui-ux",
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
  { name: "AWS", href: "/services/aws", icon: <FaAws color="#ff6b3d" /> },
  {
    name: "Magento",
    href: "/services/magento",
    icon: <FaMagento color="#ff6b3d" />,
  },
  {
    name: "Flutter",
    href: "/services/flutter",
    icon: <FaCube color="#ff6b3d" />,
  },
  {
    name: "PHP",
    href: "/services/php",
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
          whileHover="hover"
          variants={buttonVariants}
          className="cursor-pointer bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md"
        >
          <Link href="/contact-us">Get A Quote →</Link>
        </motion.div>
        <motion.div
          whileHover="hover"
          variants={buttonVariants}
          className="cursor-pointer border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md"
        >
          <Link href="/technologies">See All Technologies →</Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
