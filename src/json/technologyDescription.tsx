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
      "JavaScript runtime built on Chrome's V8 engine—designed for building fast, scalable, and modern server-side applications.",
    imageSrc: "/clients/technologies/node-js.svg",
  },
  {
    name: "TypeScript",
    features: [
      {
        icon: <FaCode />,
        title: "Static Typing",
        desc: "Catch errors early and improve code quality with optional static types.",
      },
      {
        icon: <FaRobot />,
        title: "Powerful Tooling",
        desc: "Get better editor support, autocompletion, and refactoring tools.",
      },
      {
        icon: <FaBolt />,
        title: "Modern JavaScript",
        desc: "Use the latest JS features today, even before they’re supported in all browsers.",
      },
      {
        icon: <FaServer />,
        title: "Scalable Codebases",
        desc: "Great for large applications and teams—enables better maintainability and collaboration.",
      },
      {
        icon: <FaGlobe />,
        title: "Ecosystem Friendly",
        desc: "Works seamlessly with React, Node.js, Vue, and all major libraries.",
      },
    ],
    useCases: [
      {
        name: "Large-scale Web Applications",
        image: "/clients/illustration1.svg",
      },
      { name: "Enterprise-grade APIs", image: "/clients/illustration2.svg" },
      { name: "Team-based Development", image: "/clients/illustration3.svg" },
      {
        name: "React + TypeScript Frontends",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Full-stack Apps with Next.js",
        image: "/clients/illustration5.svg",
      },
      { name: "Developer Tooling & SDKs", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A statically typed superset of JavaScript that scales with your code, your team, and your future.",
    imageSrc: "/clients/technologies/typescript.svg",
  },
  {
    name: "Go",
    features: [
      {
        icon: <FaBolt />,
        title: "Blazing Fast Performance",
        desc: "Compiled to machine code, Go delivers exceptional speed and efficiency.",
      },
      {
        icon: <FaCode />,
        title: "Simple & Clean Syntax",
        desc: "Minimalistic design makes Go easy to read, write, and maintain.",
      },
      {
        icon: <FaServer />,
        title: "Built for Concurrency",
        desc: "Goroutines and channels make concurrent programming easy and performant.",
      },
      {
        icon: <FaGlobe />,
        title: "Scalable Web Servers",
        desc: "Perfect for building RESTful APIs, microservices, and backend systems.",
      },
      {
        icon: <FaRobot />,
        title: "Strong Standard Library",
        desc: "Robust tools for networking, testing, and more—right out of the box.",
      },
    ],
    useCases: [
      { name: "Backend Systems & APIs", image: "/clients/illustration1.svg" },
      {
        name: "Cloud-Native Microservices",
        image: "/clients/illustration2.svg",
      },
      { name: "Command-line Tools", image: "/clients/illustration3.svg" },
      { name: "DevOps & Infrastructure", image: "/clients/illustration4.svg" },
      { name: "Distributed Systems", image: "/clients/illustration5.svg" },
      {
        name: "High-Performance Networking",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "Designed at Google, Go is a statically typed, compiled language that makes it easy to build reliable and efficient software.",
    imageSrc: "/clients/technologies/Go-Logo.png",
  },
  {
    name: "PHP",
    features: [
      {
        icon: <FaGlobe />,
        title: "Web-Focused",
        desc: "PHP was built for the web—ideal for server-side scripting and dynamic websites.",
      },
      {
        icon: <FaCode />,
        title: "Easy to Learn",
        desc: "Simple syntax and widespread usage make PHP beginner-friendly and quick to pick up.",
      },
      {
        icon: <FaServer />,
        title: "Wide Hosting Support",
        desc: "Supported by nearly every hosting provider out-of-the-box.",
      },
      {
        icon: <FaBolt />,
        title: "Rapid Development",
        desc: "Frameworks like Laravel and Symfony accelerate backend development.",
      },
      {
        icon: <FaRobot />,
        title: "Large Ecosystem",
        desc: "Tons of libraries, frameworks, and CMSs like WordPress and Drupal.",
      },
    ],
    useCases: [
      {
        name: "CMS Development (WordPress, Joomla)",
        image: "/clients/illustration1.svg",
      },
      {
        name: "E-commerce Platforms (Magento, WooCommerce)",
        image: "/clients/illustration2.svg",
      },
      { name: "Web Applications", image: "/clients/illustration3.svg" },
      {
        name: "RESTful APIs (Laravel, Slim)",
        image: "/clients/illustration4.svg",
      },
      { name: "Blogging Platforms", image: "/clients/illustration5.svg" },
      { name: "CRM & ERP Systems", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A tried-and-true server-side language that powers millions of websites, from simple blogs to complex enterprise platforms.",
    imageSrc: "/clients/technologies/php.png",
  },
  {
    name: "Kotlin",
    features: [
      {
        icon: <FaCode />,
        title: "Modern Syntax",
        desc: "Concise, expressive, and safe syntax with null-safety built-in.",
      },
      {
        icon: <FaGlobe />,
        title: "Cross-platform Support",
        desc: "Supports Android, server-side, web, and even native app development with Kotlin Multiplatform.",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "Compiled to JVM bytecode or native binaries for optimal performance.",
      },
      {
        icon: <FaServer />,
        title: "Interoperable with Java",
        desc: "Seamlessly integrates with existing Java codebases and libraries.",
      },
      {
        icon: <FaRobot />,
        title: "JetBrains Ecosystem",
        desc: "First-class support in IntelliJ IDEA and a growing set of official tools.",
      },
    ],
    useCases: [
      { name: "Android App Development", image: "/clients/illustration1.svg" },
      {
        name: "Backend Development (Ktor, Spring)",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Multiplatform Mobile Apps",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Web Applications (Kotlin/JS)",
        image: "/clients/illustration4.svg",
      },
      { name: "Scripting & CLI Tools", image: "/clients/illustration5.svg" },
      {
        name: "Native Desktop & Embedded Apps",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "A modern, expressive language from JetBrains that’s fully interoperable with Java—ideal for Android, backend, and cross-platform development.",
    imageSrc: "/clients/technologies/kotlin.png",
  },
  {
    name: "Swift",
    features: [
      {
        icon: <FaCode />,
        title: "Modern & Safe",
        desc: "Combines performance with safety features like optionals and strong typing.",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "Compiled language optimized for speed using LLVM.",
      },
      {
        icon: <FaGlobe />,
        title: "Cross-platform Potential",
        desc: "Runs on iOS, macOS, and expanding to Linux and server-side development.",
      },
      {
        icon: <FaServer />,
        title: "Server-side Ready",
        desc: "Frameworks like Vapor and Kitura enable backend development in Swift.",
      },
      {
        icon: <FaRobot />,
        title: "Tooling from Apple",
        desc: "Tight integration with Xcode, SwiftUI, and Apple’s developer ecosystem.",
      },
    ],
    useCases: [
      { name: "iOS & macOS Development", image: "/clients/illustration1.svg" },
      {
        name: "Cross-platform UI (SwiftUI)",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Server-side Development (Vapor)",
        image: "/clients/illustration3.svg",
      },
      { name: "CLI Tools", image: "/clients/illustration4.svg" },
      { name: "Embedded Systems", image: "/clients/illustration5.svg" },
      {
        name: "Machine Learning (CoreML)",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "A modern language from Apple—fast, safe, and perfect for building powerful iOS, macOS, and cross-platform applications.",
    imageSrc: "/clients/technologies/swift.svg",
  },
  {
    name: "Ruby",
    features: [
      {
        icon: <FaCode />,
        title: "Elegant Syntax",
        desc: "Readable and expressive syntax prioritizing developer happiness.",
      },
      {
        icon: <FaServer />,
        title: "Web-first with Rails",
        desc: "Ruby on Rails makes building full-featured web apps fast and easy.",
      },
      {
        icon: <FaBolt />,
        title: "Rapid Development",
        desc: "Convention over configuration leads to faster prototyping.",
      },
      {
        icon: <FaGlobe />,
        title: "Strong Community",
        desc: "Thousands of gems and a mature ecosystem with excellent documentation.",
      },
      {
        icon: <FaRobot />,
        title: "Automation & Scripting",
        desc: "Popular for scripting tasks and DevOps tooling.",
      },
    ],
    useCases: [
      { name: "Web Applications (Rails)", image: "/clients/illustration1.svg" },
      { name: "Scripting & Automation", image: "/clients/illustration2.svg" },
      { name: "MVP Prototyping", image: "/clients/illustration3.svg" },
      { name: "API Development", image: "/clients/illustration4.svg" },
      {
        name: "Static Site Generation (Jekyll)",
        image: "/clients/illustration5.svg",
      },
      { name: "Backend Services", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A dynamic, expressive language focused on simplicity—famous for Ruby on Rails and rapid web development.",
    imageSrc: "/clients/technologies/ruby.png",
  },
  {
    name: "VB",
    features: [
      {
        icon: <FaCode />,
        title: "Beginner Friendly",
        desc: "Simple, English-like syntax makes it accessible for beginners and rapid prototyping.",
      },
      {
        icon: <FaServer />,
        title: "Windows Integration",
        desc: "Deep integration with Windows APIs and .NET framework.",
      },
      {
        icon: <FaBolt />,
        title: "Rapid Application Development",
        desc: "Ideal for quickly building Windows desktop applications with GUIs.",
      },
      {
        icon: <FaGlobe />,
        title: ".NET Compatibility",
        desc: "Works seamlessly with other .NET languages like C# and F#.",
      },
      {
        icon: <FaRobot />,
        title: "Automation & Scripting",
        desc: "Used in Office automation and legacy enterprise systems.",
      },
    ],
    useCases: [
      {
        name: "Windows Desktop Applications",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Legacy Enterprise Systems",
        image: "/clients/illustration2.svg",
      },
      { name: "Office Automation (VBA)", image: "/clients/illustration3.svg" },
      { name: "GUI Tools & Utilities", image: "/clients/illustration4.svg" },
      {
        name: ".NET Framework Applications",
        image: "/clients/illustration5.svg",
      },
      { name: "Educational Programming", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A classic language designed for simplicity and productivity—perfect for Windows apps, automation, and legacy enterprise solutions.",
    imageSrc: "/clients/technologies/vb.svg",
  },
  {
    name: "R",
    features: [
      {
        icon: <FaCode />,
        title: "Statistical Computing",
        desc: "Built specifically for statistics, data analysis, and scientific research.",
      },
      {
        icon: <FaGlobe />,
        title: "Data Visualization",
        desc: "Powerful libraries like ggplot2 and plotly for beautiful and insightful visualizations.",
      },
      {
        icon: <FaBolt />,
        title: "Rich Package Ecosystem",
        desc: "Thousands of packages available through CRAN for specialized tasks.",
      },
      {
        icon: <FaServer />,
        title: "Data Manipulation",
        desc: "Tidyverse tools like dplyr and tidyr make data wrangling efficient.",
      },
      {
        icon: <FaRobot />,
        title: "Machine Learning Ready",
        desc: "Supports a variety of machine learning techniques and statistical modeling tools.",
      },
    ],
    useCases: [
      {
        name: "Data Analysis & Reporting",
        image: "/clients/illustration1.svg",
      },
      { name: "Statistical Modeling", image: "/clients/illustration2.svg" },
      { name: "Data Visualization", image: "/clients/illustration3.svg" },
      { name: "Machine Learning", image: "/clients/illustration4.svg" },
      { name: "Bioinformatics", image: "/clients/illustration5.svg" },
      { name: "Academic Research", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A language built for statistics and data science—empowering analysts and researchers with precision and powerful visualizations.",
    imageSrc: "/clients/technologies/R.png",
  },
  {
    name: "Julia",
    features: [
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "Designed for speed with performance close to C thanks to LLVM-based JIT compilation.",
      },
      {
        icon: <FaCode />,
        title: "Simple Syntax",
        desc: "Clean, expressive syntax that's easy to write and read—perfect for rapid prototyping.",
      },
      {
        icon: <FaRobot />,
        title: "Scientific & Numerical Computing",
        desc: "Built-in support for linear algebra, statistics, and distributed computing.",
      },
      {
        icon: <FaServer />,
        title: "Parallelism & Multithreading",
        desc: "Write concurrent and distributed programs easily with native features.",
      },
      {
        icon: <FaGlobe />,
        title: "Growing Ecosystem",
        desc: "An expanding ecosystem of packages in machine learning, data science, and optimization.",
      },
    ],
    useCases: [
      { name: "Scientific Computing", image: "/clients/illustration1.svg" },
      { name: "Numerical Analysis", image: "/clients/illustration2.svg" },
      { name: "Machine Learning", image: "/clients/illustration3.svg" },
      { name: "Optimization Problems", image: "/clients/illustration4.svg" },
      { name: "Data Science", image: "/clients/illustration5.svg" },
      {
        name: "High-performance Simulations",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "A fast, dynamic language for technical computing—combining the speed of C with the simplicity of Python.",
    imageSrc: "/clients/technologies/julia.png",
  },
  {
    name: "Dart",
    features: [
      {
        icon: <FaCode />,
        title: "Optimized for UI",
        desc: "Dart is designed to build expressive and high-performance user interfaces, especially with Flutter.",
      },
      {
        icon: <FaBolt />,
        title: "Fast Execution",
        desc: "Compiled to ARM and x64 machine code or JavaScript for fast mobile, desktop, and web performance.",
      },
      {
        icon: <FaServer />,
        title: "Backend Support",
        desc: "Can also be used to write server-side applications and APIs.",
      },
      {
        icon: <FaGlobe />,
        title: "Cross-platform Development",
        desc: "Single codebase can target mobile, web, and desktop platforms.",
      },
      {
        icon: <FaRobot />,
        title: "Growing Ecosystem",
        desc: "Backed by Google and growing rapidly with packages for almost every need.",
      },
    ],
    useCases: [
      {
        name: "Mobile App Development (Flutter)",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Cross-platform Applications",
        image: "/clients/illustration2.svg",
      },
      { name: "Web Applications", image: "/clients/illustration3.svg" },
      { name: "Desktop Applications", image: "/clients/illustration4.svg" },
      { name: "Server-side APIs", image: "/clients/illustration5.svg" },
      { name: "IoT and Embedded Systems", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A modern, object-oriented language optimized for building fast, multi-platform applications with Flutter.",
    imageSrc: "/clients/technologies/dart.svg",
  },
  {
    name: "Objective-C",
    features: [
      {
        icon: <FaCode />,
        title: "Object-Oriented",
        desc: "Combines the power of C with the flexibility of Smalltalk, providing object-oriented programming features.",
      },
      {
        icon: <FaServer />,
        title: "Native iOS/macOS Development",
        desc: "Primarily used for iOS and macOS applications before Swift's emergence.",
      },
      {
        icon: <FaBolt />,
        title: "Dynamic Runtime",
        desc: "Supports dynamic method resolution and message forwarding, allowing for more flexibility.",
      },
      {
        icon: <FaGlobe />,
        title: "Interoperability with C/C++",
        desc: "Easily integrates with C and C++ code, allowing the reuse of legacy code.",
      },
      {
        icon: <FaRobot />,
        title: "Mature Ecosystem",
        desc: "Part of Apple's ecosystem with robust frameworks like Cocoa and Cocoa Touch.",
      },
    ],
    useCases: [
      {
        name: "iOS Application Development",
        image: "/clients/illustration1.svg",
      },
      {
        name: "macOS Software Development",
        image: "/clients/illustration2.svg",
      },
      { name: "Objective-C Frameworks", image: "/clients/illustration3.svg" },
      {
        name: "Legacy Codebase Maintenance",
        image: "/clients/illustration4.svg",
      },
      { name: "System-Level Programming", image: "/clients/illustration5.svg" },
      {
        name: "Embedded Software Development",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "A powerful, object-oriented programming language used for building native iOS and macOS applications.",
    imageSrc: "/clients/technologies/objective-c.svg",
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
