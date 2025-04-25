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
      { name: "Data Analysis & Visualization", image: "/clients/web.webp" },
      { name: "Machine Learning & AI", image: "/clients/data.webp" },
      { name: "Web App Development", image: "/clients/web.webp" },
      { name: "APIs & Backend Systems", image: "/clients/data.webp" },
      { name: "Automation & Scripting", image: "/clients/web.webp" },
      { name: "Cybersecurity & Penetration Testing", image: "/clients/data.webp" },
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
      { name: "Frontend Development (React, Vue, Angular)", image: "/clients/data.webp" },
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
      { name: "Big Data (Hadoop, Spark)", image: "/clients/data.webp" },
      { name: "Banking & Financial Systems", image: "/clients/web.webp" },
    ],
    tagline:
      "A battle-tested language for building secure, scalable, and high-performance enterprise applications.",
    imageSrc: "/clients/technologies/java.png",
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