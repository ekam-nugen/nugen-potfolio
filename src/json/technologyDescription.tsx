import { JSX } from "react";
import { FaRobot, FaGlobe, FaServer, FaBolt, FaCode } from "react-icons/fa";

interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface TechDescriptionProps {
  techName: string;
  tagline: string;
  imageSrc: string;
  features: Feature[];
  useCases: { name: string; image: string }[];
}

export const technologyStack = [
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
      {
        name: "Data Analysis & Visualization",
        image: "/clients/illustration1.svg",
      },
      { name: "Machine Learning & AI", image: "/clients/illustration3.svg" },
      { name: "Web App Development", image: "/clients/illustration2.svg" },
      { name: "APIs & Backend Systems", image: "/clients/illustration4.svg" },
      { name: "Automation & Scripting", image: "/clients/illustration5.svg" },
      {
        name: "Cybersecurity & Penetration Testing",
        image: "/clients/illustration6.svg",
      },
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
      {
        name: "Frontend Development (React, Vue, Angular)",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Backend APIs (Node.js, Express)",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Real-time Apps (Chat, Games)",
        image: "/clients/illustration3.svg",
      },
      { name: "Serverless Functions", image: "/clients/illustration4.svg" },
      { name: "Browser Extensions", image: "/clients/illustration5.svg" },
      {
        name: "Cross-platform Mobile Apps",
        image: "/clients/illustration6.svg",
      },
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
      { name: "Enterprise Software", image: "/clients/illustration1.svg" },
      { name: "Android App Development", image: "/clients/illustration2.svg" },
      {
        name: "Web Applications (Spring Boot)",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Microservices Architecture",
        image: "/clients/illustration4.svg",
      },
      { name: "Big Data (Hadoop, Spark)", image: "/clients/illustration5.svg" },
      {
        name: "Banking & Financial Systems",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "A battle-tested language for building secure, scalable, and high-performance enterprise applications.",
    imageSrc: "/clients/technologies/java.png",
  },
  {
    name: "Node.js",
    features: [
      {
        icon: <FaCode />,
        title: "Non-blocking I/O",
        desc: "Node.js uses asynchronous event-driven architecture for scalable applications.",
      },
      {
        icon: <FaServer />,
        title: "Full-stack JavaScript",
        desc: "Build both the frontend and backend using JavaScript.",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "Node.js provides fast, scalable network applications due to its non-blocking I/O.",
      },
      {
        icon: <FaGlobe />,
        title: "Real-time Apps",
        desc: "Easily handle real-time features like chat, notifications, and data updates.",
      },
      {
        icon: <FaRobot />,
        title: "Expanding Ecosystem",
        desc: "Large collection of packages available via npm for almost any task.",
      },
    ],
    useCases: [
      {
        name: "Backend APIs (Express, Koa)",
        image: "/clients/illustration1.svg",
      },
      { name: "Real-time Applications", image: "/clients/illustration2.svg" },
      {
        name: "Microservices Architecture",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Web Scraping & Automation",
        image: "/clients/illustration4.svg",
      },
      { name: "Serverless Functions", image: "/clients/illustration5.svg" },
      { name: "IoT Applications", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "JavaScript runtime built on Chrome's V8 engine, designed for building fast and scalable applications.",
    imageSrc: "/clients/technologies/node-js.svg",
  },
];

export const reviewPlatforms = [
  {
    name: "clutch",
    imageSrc:
      "https://megasite.ua/cache/cache_image/d/d60aaf99feb42195ced60bde22d590fc.webp",
    alt: "Clutch Reviews",
  },
  {
    name: "goodfirm",
    imageSrc:
      "https://www.g2.com/products/g2-seller-solutions/widgets/stars?color=white&type=read",
    alt: "GoodFirms Reviews",
  },
  {
    name: "g2",
    imageSrc: "https://i.ytimg.com/vi/f8vrTlBe0sc/maxresdefault.jpg",
    alt: "G2 Reviews",
  },
  {
    name: "google",
    imageSrc:
      "https://studio.made2grow.de/hs-fs/hubfs/made2GROW%20Studio/Tools%20and%20Certification%20Logos/Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png?width=1456&height=500&name=Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png",
    alt: "Google Reviews",
  },
];
