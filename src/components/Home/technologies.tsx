"use client";

import Link from "next/link";
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
  { name: "Full-stack", href: "/technologies/full-stack", icon: <FaCube color="#ff6b3d"/> },
  { name: "Web", href: "/technologies/web", icon: <FaFileCode color="#ff6b3d"/> },
  { name: "Cloud", href: "/technologies/cloud", icon: <FaCloud color="#ff6b3d" /> },
  { name: "Frontend", href: "/technologies/frontend", icon: <FaReact color="#ff6b3d" /> },
  { name: "Mobile", href: "/technologies/mobile", icon: <FaMobileAlt color="#ff6b3d" /> },
  { name: "Shopify", href: "/technologies/shopify", icon: <FaSearch color="#ff6b3d" /> },
  { name: "ReactJS", href: "/technologies/reactjs", icon: <FaReact color="#ff6b3d" /> },
  { name: "WordPress", href: "/technologies/wordpress", icon: <FaWordpress color="#ff6b3d" /> },
  { name: "Backend", href: "/technologies/backend", icon: <FaPencilAlt color="#ff6b3d" /> },
  { name: "BI", href: "/technologies/bi", icon: <FaFileCode color="#ff6b3d" /> },
  { name: "Java", href: "/technologies/java", icon: <FaJava color="#ff6b3d" /> },
  { name: ".NET", href: "/technologies/dotnet", icon: <FaCube color="#ff6b3d" /> },
  { name: "Python", href: "/technologies/python", icon: <FaPython color="#ff6b3d" /> },
  { name: "UI/UX", href: "/technologies/ui-ux", icon: <FaPencilAlt color="#ff6b3d" /> },
  { name: "AI/ML", href: "/technologies/ai-ml", icon: <FaBrain color="#ff6b3d" /> },
  { name: "Open AI", href: "/technologies/openai", icon: <FaBrain color="#ff6b3d" /> },
  {
    name: "Data Engineering",
    href: "/technologies/data-engineering",
    icon: <FaDatabase  color="#ff6b3d" />,
  },
  { name: "AWS", href: "/technologies/aws", icon: <FaAws  color="#ff6b3d" /> },
  { name: "Magento", href: "/technologies/magento", icon: <FaMagento  color="#ff6b3d" /> },
  { name: "Flutter", href: "/technologies/flutter", icon: <FaCube  color="#ff6b3d" /> },
  { name: "PHP", href: "/technologies/php", icon: <FaFileCode  color="#ff6b3d" /> },
  { name: "AR/VR", href: "/technologies/ar-vr", icon: <FaCube  color="#ff6b3d" /> },
  //   { name: 'Blockchain', href: '/technologies/blockchain', icon: <FaBlockchain  color="#ff6b3d" /> },
  { name: "QA", href: "/technologies/qa", icon: <FaFileCode  color="#ff6b3d" /> },
];

export default function TechnologySection() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Design. Develop. Maintain. Scale.
      </h2>
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
        Your Full-Stack Development Partner
      </p>
      <p className="text-lg text-[#f0845a] font-semibold mb-10">
        <span className="underline">
          500+ Team of Experts Skilled in 40+ Cutting-Edge Technologies
        </span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-12">
        {technologies.map((tech, index) => (
          <Link
            key={index}
            href={tech.href}
            className="flex items-center space-x-2 px-6 py-3 border rounded-lg text-sm text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50 hover:border-[#f0845a] hover:scale-105"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="cursor-pointer bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300">
          Get A Quote →
        </button>
        <button className="cursor-pointer border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-md transition-all duration-300">
          See All Technologies →
        </button>
      </div>
    </section>
  );
}
