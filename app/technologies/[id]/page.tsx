"use client";

import TechDescription from "@/src/components/technologySection/technologyDescription";
import { useParams } from "next/navigation";
import { FaRobot, FaGlobe, FaServer, FaBolt, FaCode } from "react-icons/fa";

const technologyStack = [
  {
    name: "Python",
    features: [
      {
        icon: <FaCode />,
        title: "Readable Syntax",
        desc: "Clean, human-friendly code makes Python ideal for rapid development.",
      },
      {
        icon: <FaRobot />,
        title: "AI & ML Ready",
        desc: "Leading libraries like TensorFlow, Scikit-learn, and PyTorch.",
      },
      {
        icon: <FaGlobe />,
        title: "Web Development",
        desc: "Flask and Django make backend development simple and scalable.",
      },
      {
        icon: <FaServer />,
        title: "Automation",
        desc: "Automate tedious tasks and workflows with ease.",
      },
      {
        icon: <FaBolt />,
        title: "High Productivity",
        desc: "Fewer lines of code, faster results.",
      },
    ],
    useCases: [
      { name: "Data Analysis & Visualization", image: "/clients/web.webp" },
      { name: "Machine Learning & AI", image: "/clients/data.webp" },
      { name: "Web App Development", image: "/clients/web.webp" },
      { name: "APIs & Backend Systems", image: "/usecases/python-4.png" },
      { name: "Automation & Scripting", image: "/clients/web.webp" },
      { name: "Cybersecurity & Penetration Testing", image: "/usecases/python-6.png" },
    ],
    tagline:
      "The Swiss Army knife of programming—powerful, elegant, and built for everything from web apps to AI.",
    imageSrc: "/clients/technologies/python.png",
  },
  {
    name: "JavaScript",
    features: [
      {
        icon: <FaCode />,
        title: "Versatile Language",
        desc: "Runs on both client and server-side, enabling full-stack development.",
      },
      {
        icon: <FaGlobe />,
        title: "Web First",
        desc: "The go-to language for interactive, dynamic websites and SPAs.",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "V8 engine and asynchronous patterns make JS fast and responsive.",
      },
      {
        icon: <FaServer />,
        title: "Backend with Node.js",
        desc: "Build scalable backend services with event-driven architecture.",
      },
      {
        icon: <FaRobot />,
        title: "Expanding Ecosystem",
        desc: "Great support for AI, automation, tooling, and more.",
      },
    ],
    useCases: [
      { name: "Frontend Development (React, Vue, Angular)", image: "/clients/web.webp" },
      { name: "Backend APIs (Node.js, Express)", image: "/clients/web.webp" },
      { name: "Real-time Apps (Chat, Games)", image: "/clients/data.webp" },
      { name: "Serverless Functions", image: "/clients/web.webp" },
      { name: "Browser Extensions", image: "/clients/data.webp" },
      { name: "Cross-platform Mobile Apps", image: "/clients/web.webp" },
    ],
    tagline:
      "The language of the web—everywhere from browsers to servers, powering modern apps.",
    imageSrc: "/clients/technologies/javascript.png",
  },
  {
    name: "Java",
    features: [
      {
        icon: <FaCode />,
        title: "Strong Typing",
        desc: "Statically-typed for better compile-time safety and maintainability.",
      },
      {
        icon: <FaServer />,
        title: "Enterprise Ready",
        desc: "Widely used in enterprise environments for mission-critical applications.",
      },
      {
        icon: <FaGlobe />,
        title: "Cross-platform",
        desc: "Write once, run anywhere — thanks to the Java Virtual Machine (JVM).",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "Optimized bytecode and modern JVMs deliver strong runtime performance.",
      },
      {
        icon: <FaRobot />,
        title: "Robust Ecosystem",
        desc: "Mature libraries and frameworks like Spring, Hibernate, and Jakarta EE.",
      },
    ],
    useCases: [
      { name: "Enterprise Software", image: "/clients/data.webp" },
      { name: "Android App Development", image: "/clients/web.webp" },
      { name: "Web Applications (Spring Boot)", image: "/clients/data.webp" },
      { name: "Microservices Architecture", image: "/clients/web.webp" },
      { name: "Big Data (Hadoop, Spark)", image: "/usecases/java-5.png" },
      { name: "Banking & Financial Systems", image: "/clients/web.webp" },
    ],
    tagline:
      "A battle-tested language for building secure, scalable, and high-performance enterprise applications.",
    imageSrc: "/clients/technologies/java.png",
  },
];

export default function TechnologyPage() {
  const { id } = useParams();
  const tech = technologyStack.find(
    (t) =>
      t.name.toLowerCase() === (typeof id === "string" && id?.trim().toLowerCase())
  );

  if (!tech) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Technology {id} not found 🚫
      </div>
    );
  }

  return (
    <TechDescription
      techName={tech.name}
      tagline={tech.tagline}
      imageSrc={tech.imageSrc}
      features={tech.features}
      useCases={tech.useCases}
    />
  );
}
