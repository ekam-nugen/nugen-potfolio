import { JSX } from "react";
import {
  FaRobot,
  FaGlobe,
  FaServer,
  FaBolt,
  FaCode,
  FaBalanceScale,
  FaBox,
  FaCloud,
  FaCodeBranch,
  FaCogs,
  FaExpandArrowsAlt,
  FaHubspot,
  FaLock,
  FaNetworkWired,
  FaRocket,
  FaShieldAlt,
  FaSync,
  FaTools,
  FaAws,
  FaBook,
  FaBoxOpen,
  FaEye,
  FaGitAlt,
  FaGithub,
  FaHistory,
  FaLayerGroup,
  FaMobile,
  FaPlug,
  FaProjectDiagram,
  FaRecycle,
  FaTerminal,
  FaAward,
  FaChartLine,
  FaCube,
  FaDatabase,
  FaLeaf,
  FaPython,
  FaTachometerAlt,
  FaTree,
  FaLanguage,
  FaChess,
  FaShapes,
  FaToriiGate,
  FaUniversity,
  FaUserAlt,
  FaChartBar,
  FaChessBoard,
  FaClock,
  FaFileCsv,
  FaFilter,
  FaMagic,
  FaPaintBrush,
  FaPalette,
  FaPuzzlePiece,
  FaRandom,
  FaSave,
  FaSeedling,
  FaSubscript,
  FaTable,
  FaThermometerHalf,
  FaChessKnight,
  FaGoogle,
  FaMapMarkedAlt,
  FaSyncAlt,
  FaUsersCog,
  FaUserShield,
  FaStream,
  FaCalendarAlt,
  FaReact,
  FaFileAlt,
  FaTheaterMasks,
  FaApple,
  FaFilm,
  FaHandshake,
  FaMicrophoneAlt,
  FaMobileAlt,
  FaPenFancy,
  FaRulerCombined,
  FaUserCheck,
  FaUserFriends,
  FaVectorSquare,
  FaBug,
  FaLaptopCode,
  FaBoxes,
  FaCubes,
  FaFlask,
  FaJava,
  FaJsSquare,
  FaRoute,
  FaTasks,
  FaToolbox,
  FaChartPie,
  FaClipboardCheck,
  FaFileCode,
  FaPaperPlane,
  FaSoap,
} from "react-icons/fa";

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
  {
    name: "React",
    features: [
      {
        icon: <FaCode />,
        title: "Component-Based",
        desc: "Build user interfaces using reusable, isolated components for better maintainability and scalability.",
      },
      {
        icon: <FaGlobe />,
        title: "Virtual DOM",
        desc: "React optimizes rendering by using a virtual DOM to efficiently update the user interface.",
      },
      {
        icon: <FaBolt />,
        title: "Fast Performance",
        desc: "React uses a virtual DOM to minimize direct manipulation of the actual DOM, boosting performance.",
      },
      {
        icon: <FaServer />,
        title: "Declarative Syntax",
        desc: "React lets you describe how the UI should look, and it will automatically handle updates when the state changes.",
      },
      {
        icon: <FaRobot />,
        title: "Extensive Ecosystem",
        desc: "A rich ecosystem of libraries and tools, including React Router, Redux, and Next.js, to help build robust applications.",
      },
    ],
    useCases: [
      {
        name: "Single Page Applications (SPA)",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Interactive User Interfaces",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Progressive Web Apps (PWA)",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Mobile Apps with React Native",
        image: "/clients/illustration4.svg",
      },
      { name: "Component Libraries", image: "/clients/illustration5.svg" },
      {
        name: "Server-Side Rendering (Next.js)",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces, especially for dynamic and interactive web applications.",
    imageSrc: "/clients/technologies/react.png",
  },
  {
    name: "Vue.js",
    features: [
      {
        icon: <FaCode />,
        title: "Reactive Data Binding",
        desc: "Vue provides a reactive and declarative approach to data binding, ensuring automatic UI updates.",
      },
      {
        icon: <FaGlobe />,
        title: "Component-Based Architecture",
        desc: "Build applications with reusable components for better organization and maintainability.",
      },
      {
        icon: <FaBolt />,
        title: "Performance Optimized",
        desc: "Vue.js is designed for high performance with a lightweight core and efficient reactivity system.",
      },
      {
        icon: <FaServer />,
        title: "Flexible & Progressive",
        desc: "Vue can scale from simple, small applications to complex, large-scale ones, and is easy to integrate into existing projects.",
      },
      {
        icon: <FaRobot />,
        title: "Strong Ecosystem",
        desc: "A rich ecosystem of libraries and tools, such as Vue Router, Vuex, and Vue CLI, for full-stack development.",
      },
    ],
    useCases: [
      {
        name: "Single Page Applications (SPA)",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Interactive User Interfaces",
        image: "/clients/illustration2.svg",
      },
      { name: "Real-time Web Apps", image: "/clients/illustration3.svg" },
      {
        name: "Progressive Web Apps (PWA)",
        image: "/clients/illustration4.svg",
      },
      { name: "Component Libraries", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A progressive JavaScript framework for building user interfaces and single-page applications, focusing on simplicity and ease of integration.",
    imageSrc: "/clients/technologies/vue.png",
  },
  {
    name: "Angular",
    features: [
      {
        icon: <FaCode />,
        title: "Two-Way Data Binding",
        desc: "Angular offers two-way data binding, automatically synchronizing the model and view.",
      },
      {
        icon: <FaGlobe />,
        title: "Component-Based Architecture",
        desc: "Angular allows you to build complex applications using reusable components, leading to better maintainability.",
      },
      {
        icon: <FaBolt />,
        title: "RxJS Integration",
        desc: "Angular has deep integration with RxJS for reactive programming, making it easy to handle asynchronous operations.",
      },
      {
        icon: <FaServer />,
        title: "Powerful CLI",
        desc: "Angular CLI offers a powerful development environment with automated tools for building, testing, and deploying applications.",
      },
      {
        icon: <FaRobot />,
        title: "Comprehensive Framework",
        desc: "Angular provides a complete solution with built-in tools for routing, form handling, HTTP requests, and more.",
      },
    ],
    useCases: [
      {
        name: "Enterprise Web Applications",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Single Page Applications (SPA)",
        image: "/clients/illustration2.svg",
      },
      { name: "Mobile Web Apps", image: "/clients/illustration3.svg" },
      { name: "Real-time Applications", image: "/clients/illustration4.svg" },
      { name: "Complex Data-Driven Apps", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A powerful, full-featured framework for building dynamic, enterprise-level web applications with a focus on scalability and performance.",
    imageSrc: "/clients/technologies/angular.png",
  },
  {
    name: "Django",
    features: [
      {
        icon: <FaCode />,
        title: "Batteries Included",
        desc: "Django provides an extensive set of built-in tools and libraries to help with common web development tasks.",
      },
      {
        icon: <FaServer />,
        title: "Rapid Development",
        desc: "Django emphasizes fast development and clean, pragmatic design to help developers get applications up quickly.",
      },
      {
        icon: <FaGlobe />,
        title: "Secure",
        desc: "Django comes with built-in protection against many security threats, such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
      },
      {
        icon: <FaRobot />,
        title: "Scalable",
        desc: "Django is highly scalable, allowing you to build complex, data-driven websites and applications.",
      },
      {
        icon: <FaBolt />,
        title: "Robust ORM",
        desc: "Django’s Object-Relational Mapping (ORM) system simplifies database management and interactions with the database.",
      },
    ],
    useCases: [
      {
        name: "Content Management Systems",
        image: "/clients/illustration1.svg",
      },
      { name: "Data-Driven Websites", image: "/clients/illustration2.svg" },
      { name: "E-commerce Platforms", image: "/clients/illustration3.svg" },
      { name: "APIs & Backend Systems", image: "/clients/illustration4.svg" },
      { name: "Social Networks", image: "/clients/illustration5.svg" },
      {
        name: "Scientific Computing Platforms",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "A high-level Python web framework that encourages rapid development and clean, pragmatic design, focused on scalability and security.",
    imageSrc: "/clients/technologies/django.svg",
  },
  {
    name: "Laravel",
    features: [
      {
        icon: <FaCode />,
        title: "Elegant Syntax",
        desc: "Laravel’s syntax is designed to be expressive and simple to use, making it easy to build robust applications.",
      },
      {
        icon: <FaServer />,
        title: "MVC Architecture",
        desc: "Laravel follows the Model-View-Controller (MVC) architectural pattern for better organization and maintainability.",
      },
      {
        icon: <FaGlobe />,
        title: "Routing & Middleware",
        desc: "Laravel’s routing system is intuitive and supports middleware for controlling the flow of HTTP requests.",
      },
      {
        icon: <FaRobot />,
        title: "Eloquent ORM",
        desc: "Laravel’s built-in Eloquent ORM makes database management and interactions more intuitive and less error-prone.",
      },
      {
        icon: <FaBolt />,
        title: "Task Scheduling",
        desc: "Laravel provides a clean, fluent interface for defining scheduled tasks and automating repetitive tasks.",
      },
    ],
    useCases: [
      {
        name: "Content Management Systems",
        image: "/clients/illustration1.svg",
      },
      { name: "E-commerce Platforms", image: "/clients/illustration2.svg" },
      { name: "APIs & Backend Systems", image: "/clients/illustration3.svg" },
      { name: "Real-time Web Apps", image: "/clients/illustration4.svg" },
      { name: "Social Networks", image: "/clients/illustration5.svg" },
      { name: "Enterprise Software", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A PHP web framework that simplifies common tasks, such as routing, authentication, and caching, while offering elegant and expressive syntax for building modern web applications.",
    imageSrc: "/clients/technologies/laravel.png",
  },
  {
    name: "MaterialUI",
    features: [
      {
        icon: <FaCode />,
        title: "Component Library",
        desc: "Material-UI offers a comprehensive set of pre-built React components following Material Design principles.",
      },
      {
        icon: <FaServer />,
        title: "Customizable Themes",
        desc: "MUI allows for deep customization of components and themes, enabling developers to align with brand guidelines.",
      },
      {
        icon: <FaGlobe />,
        title: "Responsive Design",
        desc: "Material-UI components are designed to work seamlessly across devices, offering responsive layouts and controls.",
      },
      {
        icon: <FaRobot />,
        title: "Accessibility",
        desc: "MUI prioritizes accessibility, making it easier to build applications that are usable by people with disabilities.",
      },
      {
        icon: <FaBolt />,
        title: "Built-in Animations",
        desc: "MUI supports built-in animations and transitions, enhancing the visual experience of your web applications.",
      },
    ],
    useCases: [
      { name: "Admin Dashboards", image: "/clients/illustration1.svg" },
      { name: "E-commerce Platforms", image: "/clients/illustration2.svg" },
      { name: "Mobile Web Applications", image: "/clients/illustration3.svg" },
      {
        name: "User Interface Components",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Content Management Systems",
        image: "/clients/illustration5.svg",
      },
      { name: "Data Visualization", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A popular React UI framework that implements Material Design principles, providing a set of customizable and accessible components for modern web development.",
    imageSrc: "/clients/technologies/material-ui.svg",
  },
  {
    name: "Bootstrap",
    features: [
      {
        icon: <FaCode />,
        title: "Responsive Grid System",
        desc: "Bootstrap includes a flexible grid system to create responsive layouts for any device or screen size.",
      },
      {
        icon: <FaServer />,
        title: "Pre-styled Components",
        desc: "Provides a rich set of pre-designed components like buttons, modals, forms, and navbars, speeding up development.",
      },
      {
        icon: <FaGlobe />,
        title: "Mobile-first Design",
        desc: "Bootstrap’s mobile-first approach ensures your websites are optimized for mobile devices first, with scalability for larger screens.",
      },
      {
        icon: <FaRobot />,
        title: "Customizable Themes",
        desc: "Bootstrap allows developers to easily customize its design and components with built-in Sass variables or themes.",
      },
      {
        icon: <FaBolt />,
        title: "Cross-browser Compatibility",
        desc: "Ensures that your site looks great on all major browsers with minimal effort, reducing the need for browser-specific fixes.",
      },
    ],
    useCases: [
      { name: "Landing Pages", image: "/clients/illustration1.svg" },
      { name: "Corporate Websites", image: "/clients/illustration2.svg" },
      { name: "Admin Dashboards", image: "/clients/illustration3.svg" },
      { name: "E-commerce Sites", image: "/clients/illustration4.svg" },
      { name: "Blog Websites", image: "/clients/illustration5.svg" },
      { name: "Portfolio Sites", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "The most popular front-end framework for building responsive, mobile-first websites with ease. Comes with a collection of pre-built components and utilities.",
    imageSrc: "/clients/technologies/bootstrap.svg",
  },
  {
    name: "AntDesign",
    features: [
      {
        icon: <FaCode />,
        title: "Rich UI Components",
        desc: "Ant Design provides a comprehensive set of high-quality components to build rich and interactive UIs.",
      },
      {
        icon: <FaServer />,
        title: "Customizable Themes",
        desc: "Easily customize themes and styles using Ant Design’s powerful theming system.",
      },
      {
        icon: <FaGlobe />,
        title: "Enterprise-level Solutions",
        desc: "Built for enterprise applications, offering robust features like forms, tables, modals, and more.",
      },
      {
        icon: <FaRobot />,
        title: "Internationalization Support",
        desc: "Provides built-in support for multiple languages, making it easy to build apps for different regions.",
      },
      {
        icon: <FaBolt />,
        title: "High-Quality Design",
        desc: "Ant Design follows the principles of good design, providing clean, modern UI elements with a consistent look.",
      },
    ],
    useCases: [
      { name: "Admin Dashboards", image: "/clients/illustration1.svg" },
      { name: "Enterprise Applications", image: "/clients/illustration2.svg" },
      { name: "E-commerce Platforms", image: "/clients/illustration3.svg" },
      { name: "CRM Software", image: "/clients/illustration4.svg" },
      { name: "SaaS Products", image: "/clients/illustration5.svg" },
      { name: "Data Visualization Apps", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A design system with a set of high-quality React components, following Ant Design principles. Ideal for building enterprise-level applications.",
    imageSrc: "/clients/technologies/ant-design.svg",
  },
  {
    name: "TailwindCSS",
    features: [
      {
        icon: <FaCode />,
        title: "Utility-first Approach",
        desc: "Tailwind CSS enables rapid UI design by using utility classes, offering full control over styling without writing custom CSS.",
      },
      {
        icon: <FaServer />,
        title: "Highly Customizable",
        desc: "With its configuration file, Tailwind CSS allows you to customize colors, spacing, breakpoints, and more to suit your needs.",
      },
      {
        icon: <FaGlobe />,
        title: "Responsive Design",
        desc: "Tailwind’s mobile-first approach includes responsive utilities, making it easy to design for multiple screen sizes.",
      },
      {
        icon: <FaRobot />,
        title: "Component-based Design",
        desc: "Tailwind CSS enables component-based development, allowing you to build reusable UI elements easily.",
      },
      {
        icon: <FaBolt />,
        title: "Built for Performance",
        desc: "Tailwind CSS promotes minimal CSS output, helping improve load times and overall performance by only including the classes you use.",
      },
    ],
    useCases: [
      { name: "Landing Pages", image: "/clients/illustration1.svg" },
      { name: "Web Applications", image: "/clients/illustration2.svg" },
      { name: "E-commerce Sites", image: "/clients/illustration3.svg" },
      { name: "Dashboards", image: "/clients/illustration4.svg" },
      { name: "Blogs & Portfolios", image: "/clients/illustration5.svg" },
      { name: "Admin Panels", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A utility-first CSS framework for rapidly building custom designs without ever having to leave your HTML. Tailwind CSS is all about control, flexibility, and productivity.",
    imageSrc: "/clients/technologies/tailwind-css.svg",
  },
  {
    name: "Blazor",
    features: [
      {
        icon: <FaCode />,
        title: "WebAssembly Powered",
        desc: "Blazor allows you to build interactive web applications using C# and WebAssembly, without needing JavaScript.",
      },
      {
        icon: <FaServer />,
        title: "Component-based Architecture",
        desc: "Blazor uses a component-based architecture, enabling you to build reusable UI components for your applications.",
      },
      {
        icon: <FaGlobe />,
        title: "Full-stack .NET Development",
        desc: "Build both client-side and server-side applications with C# and .NET, leveraging the same codebase for both front-end and back-end.",
      },
      {
        icon: <FaRobot />,
        title: "Real-time Web Applications",
        desc: "Blazor supports real-time web features using SignalR, making it easy to build interactive web applications.",
      },
      {
        icon: <FaBolt />,
        title: "Rich Ecosystem",
        desc: "With .NET's extensive ecosystem, you have access to a wide range of libraries, tools, and resources for building powerful applications.",
      },
    ],
    useCases: [
      {
        name: "Single-page Applications (SPA)",
        image: "/clients/illustration1.svg",
      },
      { name: "Real-time Web Apps", image: "/clients/illustration2.svg" },
      { name: "Enterprise Applications", image: "/clients/illustration3.svg" },
      { name: "Data Dashboards", image: "/clients/illustration4.svg" },
      { name: "Interactive Forms", image: "/clients/illustration5.svg" },
      { name: "Internal Tools", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "A .NET-based framework for building client-side web applications using C#, allowing developers to write full-stack web applications in a single language.",
    imageSrc: "/clients/technologies/blazor.png",
  },
  {
    name: "HTML",
    features: [
      {
        icon: <FaCode />,
        title: "Structured Content",
        desc: "HTML provides the basic structure for web content, allowing you to define text, images, links, and other elements.",
      },
      {
        icon: <FaGlobe />,
        title: "Web Foundation",
        desc: "HTML is the backbone of the web, and all websites rely on it to display content on browsers.",
      },
      {
        icon: <FaServer />,
        title: "SEO Friendly",
        desc: "HTML allows you to organize content in a structured way, which is essential for search engine optimization (SEO).",
      },
      {
        icon: <FaBolt />,
        title: "Responsive Design",
        desc: "With HTML5, you can use responsive design techniques to ensure your content works across devices and screen sizes.",
      },
      {
        icon: <FaRobot />,
        title: "Integration with Other Technologies",
        desc: "HTML integrates seamlessly with CSS, JavaScript, and other web technologies to enhance your web pages and applications.",
      },
    ],
    useCases: [
      { name: "Web Page Structure", image: "/clients/illustration1.svg" },
      { name: "Forms and Inputs", image: "/clients/illustration2.svg" },
      { name: "Media Embedding", image: "/clients/illustration3.svg" },
      { name: "Navigation Menus", image: "/clients/illustration4.svg" },
      { name: "SEO Optimization", image: "/clients/illustration5.svg" },
      { name: "Web Accessibility", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "HTML (HyperText Markup Language) is the foundation of web content, providing the structure and layout for all web pages.",
    imageSrc: "/clients/technologies/html.png",
  },
  {
    name: "CSS",
    features: [
      {
        icon: <FaCode />,
        title: "Styling & Layout",
        desc: "CSS controls the appearance of elements on a page, including layout, colors, fonts, and spacing.",
      },
      {
        icon: <FaBolt />,
        title: "Responsive Design",
        desc: "CSS enables responsive design techniques, ensuring your site works on all screen sizes using media queries and flexible layouts.",
      },
      {
        icon: <FaGlobe />,
        title: "Animations & Transitions",
        desc: "CSS allows you to create smooth animations and transitions to enhance user interactions.",
      },
      {
        icon: <FaServer />,
        title: "Cross-browser Compatibility",
        desc: "CSS ensures that your styles are rendered consistently across different browsers, giving your site a consistent look.",
      },
      {
        icon: <FaRobot />,
        title: "Flexbox & Grid Layouts",
        desc: "CSS offers advanced layout systems like Flexbox and Grid for building complex, responsive layouts easily.",
      },
    ],
    useCases: [
      { name: "Page Styling", image: "/clients/illustration1.svg" },
      { name: "Responsive Layouts", image: "/clients/illustration2.svg" },
      { name: "Typography & Fonts", image: "/clients/illustration3.svg" },
      { name: "Animations & Effects", image: "/clients/illustration4.svg" },
      { name: "Forms Styling", image: "/clients/illustration5.svg" },
      { name: "Accessibility Styling", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "CSS (Cascading Style Sheets) is the style language used to define the presentation and layout of web content.",
    imageSrc: "/clients/technologies/css.png",
  },
  {
    name: "MongoDB",
    features: [
      {
        icon: <FaServer />,
        title: "NoSQL Database",
        desc: "MongoDB is a NoSQL, document-oriented database designed to store unstructured or semi-structured data in JSON-like format.",
      },
      {
        icon: <FaGlobe />,
        title: "Scalable",
        desc: "MongoDB offers built-in scalability with horizontal scaling, enabling distributed data architecture across multiple machines.",
      },
      {
        icon: <FaBolt />,
        title: "Flexible Schema",
        desc: "MongoDB allows schema flexibility, which makes it ideal for handling evolving and dynamic data structures.",
      },
      {
        icon: <FaRobot />,
        title: "High Availability",
        desc: "With automatic failover and replication, MongoDB ensures high availability of your data and services.",
      },
      {
        icon: <FaCode />,
        title: "Aggregation Framework",
        desc: "MongoDB offers powerful aggregation capabilities, enabling complex data processing and transformation directly within the database.",
      },
    ],
    useCases: [
      {
        name: "Content Management Systems",
        image: "/clients/illustration1.svg",
      },
      { name: "Real-time Analytics", image: "/clients/illustration2.svg" },
      { name: "Big Data & IoT", image: "/clients/illustration3.svg" },
      { name: "Mobile Applications", image: "/clients/illustration4.svg" },
      {
        name: "Catalogs & Product Databases",
        image: "/clients/illustration5.svg",
      },
      { name: "Social Networks", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "MongoDB is a flexible, scalable NoSQL database ideal for managing large volumes of unstructured or semi-structured data.",
    imageSrc: "/clients/technologies/mongoDB.png",
  },
  {
    name: "PostgreSQL",
    features: [
      {
        icon: <FaServer />,
        title: "Relational Database",
        desc: "PostgreSQL is an advanced open-source relational database system known for its extensibility and standards compliance.",
      },
      {
        icon: <FaGlobe />,
        title: "ACID Compliant",
        desc: "PostgreSQL provides full compliance with ACID principles, ensuring data integrity and reliable transactions.",
      },
      {
        icon: <FaBolt />,
        title: "Extensibility",
        desc: "PostgreSQL supports custom data types, functions, and indexes, offering high flexibility for complex applications.",
      },
      {
        icon: <FaRobot />,
        title: "Advanced Features",
        desc: "It supports advanced features like full-text search, JSONB, and geospatial data with PostGIS.",
      },
      {
        icon: <FaCode />,
        title: "Concurrency",
        desc: "PostgreSQL uses Multi-Version Concurrency Control (MVCC) for high concurrency, ensuring smooth transactions under heavy load.",
      },
    ],
    useCases: [
      { name: "Web Applications", image: "/clients/illustration1.svg" },
      { name: "Geospatial Applications", image: "/clients/illustration2.svg" },
      { name: "Data Warehousing", image: "/clients/illustration3.svg" },
      { name: "Analytics & Reporting", image: "/clients/illustration4.svg" },
      { name: "Enterprise Applications", image: "/clients/illustration5.svg" },
      { name: "Financial Systems", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "PostgreSQL is a powerful, open-source relational database system designed for reliability, extensibility, and complex applications.",
    imageSrc: "/clients/technologies/postgre-sql.png",
  },
  {
    name: "MySQL",
    features: [
      {
        icon: <FaServer />,
        title: "Relational Database",
        desc: "MySQL is a popular relational database management system that uses structured query language (SQL) for managing and querying data.",
      },
      {
        icon: <FaGlobe />,
        title: "Open Source",
        desc: "MySQL is open-source and widely used for web applications, with a large community and extensive documentation.",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "MySQL is optimized for performance, providing fast data access, indexing, and query execution.",
      },
      {
        icon: <FaRobot />,
        title: "ACID Compliant",
        desc: "MySQL supports ACID (Atomicity, Consistency, Isolation, Durability) transactions to ensure data integrity.",
      },
      {
        icon: <FaCode />,
        title: "Scalability",
        desc: "MySQL supports scalability and high availability through replication and clustering, ideal for large-scale applications.",
      },
    ],
    useCases: [
      { name: "Web Applications", image: "/clients/illustration1.svg" },
      { name: "E-commerce Platforms", image: "/clients/illustration2.svg" },
      {
        name: "Content Management Systems",
        image: "/clients/illustration3.svg",
      },
      { name: "Data Warehousing", image: "/clients/illustration4.svg" },
      {
        name: "Customer Relationship Management",
        image: "/clients/illustration5.svg",
      },
      { name: "Financial Systems", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "MySQL is a fast, reliable, and open-source relational database management system, ideal for high-performance web applications.",
    imageSrc: "/clients/technologies/my-sql.png",
  },
  {
    name: "Redis",
    features: [
      {
        icon: <FaServer />,
        title: "In-memory Data Store",
        desc: "Redis is an in-memory key-value store, often used as a cache to speed up data retrieval in high-performance applications.",
      },
      {
        icon: <FaGlobe />,
        title: "Persistence Options",
        desc: "Redis supports persistence by saving data to disk, making it durable while maintaining the speed of an in-memory store.",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        desc: "Redis provides sub-millisecond response times for read and write operations, making it suitable for high-throughput workloads.",
      },
      {
        icon: <FaRobot />,
        title: "Pub/Sub Messaging",
        desc: "Redis supports publish/subscribe messaging patterns, enabling real-time communication between services.",
      },
      {
        icon: <FaCode />,
        title: "Data Structures",
        desc: "Redis offers a wide range of advanced data structures like strings, lists, sets, sorted sets, hashes, bitmaps, and hyperloglogs.",
      },
    ],
    useCases: [
      { name: "Caching", image: "/clients/illustration1.svg" },
      { name: "Session Management", image: "/clients/illustration2.svg" },
      { name: "Real-time Analytics", image: "/clients/illustration3.svg" },
      { name: "Queue Management", image: "/clients/illustration4.svg" },
      { name: "Message Brokering", image: "/clients/illustration5.svg" },
      {
        name: "Leaderboard & Counting Systems",
        image: "/clients/illustration6.svg",
      },
    ],
    tagline:
      "Redis is an in-memory data store that provides high-speed, low-latency performance for caching, message brokering, and real-time applications.",
    imageSrc: "/clients/technologies/redis.png",
  },
  {
    name: "SQLite",
    features: [
      {
        icon: <FaServer />,
        title: "Serverless Database",
        desc: "SQLite is a serverless, self-contained, zero-configuration database engine designed for embedded applications.",
      },
      {
        icon: <FaGlobe />,
        title: "Lightweight",
        desc: "SQLite is compact and has minimal overhead, making it ideal for mobile apps, IoT devices, and lightweight applications.",
      },
      {
        icon: <FaBolt />,
        title: "Fast Performance",
        desc: "SQLite provides fast read and write operations, making it suitable for local data storage and small-to-medium scale applications.",
      },
      {
        icon: <FaRobot />,
        title: "Cross-Platform",
        desc: "SQLite runs on all major operating systems and is commonly used in embedded systems and mobile apps.",
      },
      {
        icon: <FaCode />,
        title: "SQL Support",
        desc: "SQLite supports full SQL queries, providing developers with the power of relational databases in a lightweight format.",
      },
    ],
    useCases: [
      { name: "Mobile Applications", image: "/clients/illustration1.svg" },
      { name: "Embedded Systems", image: "/clients/illustration2.svg" },
      { name: "Web Browser Storage", image: "/clients/illustration3.svg" },
      { name: "Desktop Applications", image: "/clients/illustration4.svg" },
      { name: "Prototyping", image: "/clients/illustration5.svg" },
      { name: "Local Data Storage", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "SQLite is a lightweight, serverless, self-contained database that is perfect for local data storage in embedded systems and mobile apps.",
    imageSrc: "/clients/technologies/sqlite.png",
  },
  {
    name: "Oracle",
    features: [
      {
        icon: <FaServer />,
        title: "Enterprise-Grade",
        desc: "Oracle Database is designed for enterprise-level applications, offering scalability, reliability, and high performance.",
      },
      {
        icon: <FaGlobe />,
        title: "Advanced Security",
        desc: "Oracle Database provides comprehensive security features like encryption, data masking, and auditing to protect sensitive information.",
      },
      {
        icon: <FaBolt />,
        title: "High Availability",
        desc: "Oracle offers advanced features like Real Application Clusters (RAC) for high availability and disaster recovery.",
      },
      {
        icon: <FaRobot />,
        title: "Automated Management",
        desc: "Oracle provides automated database management with features like self-tuning, automatic indexing, and AI-powered optimizations.",
      },
      {
        icon: <FaCode />,
        title: "Support for Big Data",
        desc: "Oracle supports big data workloads, allowing businesses to store, analyze, and retrieve data at scale.",
      },
    ],
    useCases: [
      { name: "Enterprise Applications", image: "/clients/illustration1.svg" },
      { name: "Data Warehousing", image: "/clients/illustration2.svg" },
      { name: "CRM & ERP Systems", image: "/clients/illustration3.svg" },
      { name: "E-commerce Platforms", image: "/clients/illustration4.svg" },
      { name: "Financial Systems", image: "/clients/illustration5.svg" },
      { name: "Healthcare Applications", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "Oracle Database is a powerful, enterprise-grade relational database offering unmatched scalability, security, and availability.",
    imageSrc: "/clients/technologies/oracle.svg",
  },
  {
    name: "MariaDB",
    features: [
      {
        icon: <FaServer />,
        title: "Open-Source Database",
        desc: "MariaDB is an open-source, community-driven relational database that is fully compatible with MySQL.",
      },
      {
        icon: <FaGlobe />,
        title: "High Performance",
        desc: "MariaDB offers high performance with features like query optimization, advanced indexing, and parallel replication.",
      },
      {
        icon: <FaBolt />,
        title: "Scalability",
        desc: "MariaDB scales well from small applications to large-scale enterprise environments, supporting sharding and clustering.",
      },
      {
        icon: <FaRobot />,
        title: "Full Compatibility",
        desc: "MariaDB is designed to be a drop-in replacement for MySQL, ensuring compatibility with MySQL-based applications.",
      },
      {
        icon: <FaCode />,
        title: "Security Features",
        desc: "MariaDB provides robust security features, including encryption, authentication, and user roles.",
      },
    ],
    useCases: [
      { name: "Web Applications", image: "/clients/illustration1.svg" },
      { name: "E-commerce Platforms", image: "/clients/illustration2.svg" },
      {
        name: "Content Management Systems",
        image: "/clients/illustration3.svg",
      },
      { name: "Data Warehousing", image: "/clients/illustration4.svg" },
      { name: "Business Intelligence", image: "/clients/illustration5.svg" },
      { name: "Financial Systems", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "MariaDB is a powerful, open-source relational database designed for high performance, scalability, and full MySQL compatibility.",
    imageSrc: "/clients/technologies/mariadb.svg",
  },
  {
    name: "GraphQL",
    features: [
      {
        icon: <FaServer />,
        title: "Flexible Queries",
        desc: "With GraphQL, clients can request only the data they need, reducing over-fetching and under-fetching.",
      },
      {
        icon: <FaCode />,
        title: "Strongly Typed Schema",
        desc: "GraphQL is strongly typed, ensuring that both clients and servers know exactly what data is available and how to interact with it.",
      },
      {
        icon: <FaGlobe />,
        title: "Single Endpoint",
        desc: "GraphQL allows clients to interact with the API through a single endpoint, streamlining data fetching and improving performance.",
      },
      {
        icon: <FaRobot />,
        title: "Real-time Updates",
        desc: "GraphQL supports real-time data fetching via subscriptions, allowing clients to get updates as soon as data changes.",
      },
      {
        icon: <FaBolt />,
        title: "Introspective",
        desc: "GraphQL APIs are introspective, meaning they allow clients to query the API schema itself for available operations and data.",
      },
    ],
    useCases: [
      { name: "Frontend Development", image: "/clients/illustration1.svg" },
      { name: "Real-time Applications", image: "/clients/illustration2.svg" },
      { name: "Mobile Apps", image: "/clients/illustration3.svg" },
      {
        name: "Single Page Applications (SPA)",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Microservices Communication",
        image: "/clients/illustration5.svg",
      },
      { name: "Data Aggregation", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "GraphQL is a query language and runtime for APIs, providing a flexible and efficient way to interact with data, supporting real-time updates and reducing data over-fetching.",
    imageSrc: "/clients/technologies/graphQL.png",
  },
  {
    name: "Salesforce",
    features: [
      {
        icon: <FaCode />,
        title: "CRM Platform",
        desc: "A cloud-based CRM for managing customer relationships, sales, and marketing.",
      },
      {
        icon: <FaServer />,
        title: "Sales Cloud",
        desc: "Manage sales processes, leads, and opportunities in a unified platform.",
      },
      {
        icon: <FaGlobe />,
        title: "Marketing Cloud",
        desc: "Automate marketing campaigns and engage customers across various channels.",
      },
      {
        icon: <FaRobot />,
        title: "Service Cloud",
        desc: "Provide customer service and support with integrated case management and automation.",
      },
      {
        icon: <FaBolt />,
        title: "AppExchange",
        desc: "Access a marketplace of third-party apps and integrations to extend Salesforce functionality.",
      },
    ],
    useCases: [
      {
        name: "Customer Relationship Management (CRM)",
        image: "/clients/illustration1.svg",
      },
      { name: "Sales & Lead Management", image: "/clients/illustration2.svg" },
      {
        name: "Customer Support Automation",
        image: "/clients/illustration3.svg",
      },
      { name: "Marketing Automation", image: "/clients/illustration4.svg" },
      {
        name: "Enterprise App Integration",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A cloud-based CRM platform for managing customer relationships and driving business growth.",
    imageSrc: "/clients/technologies/salesforce.png",
  },
  {
    name: "ServiceNow",
    features: [
      {
        icon: <FaCode />,
        title: "IT Service Management (ITSM)",
        desc: "Automates IT service workflows, from incident management to change management.",
      },
      {
        icon: <FaServer />,
        title: "Knowledge Management",
        desc: "Centralized repository for IT knowledge and information sharing.",
      },
      {
        icon: <FaGlobe />,
        title: "Service Catalog",
        desc: "Provides a self-service portal for employees and customers to request services.",
      },
      {
        icon: <FaRobot />,
        title: "Automation",
        desc: "Automates routine tasks and business processes for improved efficiency.",
      },
      {
        icon: <FaBolt />,
        title: "Performance Analytics",
        desc: "Real-time insights into service performance and operations.",
      },
    ],
    useCases: [
      { name: "IT Service Management", image: "/clients/illustration1.svg" },
      { name: "Workflow Automation", image: "/clients/illustration2.svg" },
      {
        name: "Incident & Change Management",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Service Catalog Management",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Knowledge Base Management",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A platform for automating and streamlining IT service management and business workflows.",
    imageSrc: "/clients/technologies/service-now.png",
  },
  {
    name: "Apigee",
    features: [
      {
        icon: <FaCode />,
        title: "API Design & Development",
        desc: "Tools for designing, testing, and deploying APIs.",
      },
      {
        icon: <FaServer />,
        title: "API Security",
        desc: "Secure APIs using OAuth, API keys, and JWT (JSON Web Tokens).",
      },
      {
        icon: <FaGlobe />,
        title: "Traffic Management",
        desc: "Manage API traffic and set up rate limits and quotas.",
      },
      {
        icon: <FaRobot />,
        title: "API Analytics",
        desc: "Monitor API performance and gather insights on usage and issues.",
      },
      {
        icon: <FaBolt />,
        title: "Developer Portal",
        desc: "A portal for developers to access API documentation, test APIs, and get API keys.",
      },
    ],
    useCases: [
      { name: "API Management", image: "/clients/illustration1.svg" },
      { name: "API Security", image: "/clients/illustration2.svg" },
      {
        name: "API Monitoring & Analytics",
        image: "/clients/illustration3.svg",
      },
      { name: "API Traffic Management", image: "/clients/illustration4.svg" },
      { name: "API Gateway", image: "/clients/illustration5.svg" },
    ],
    tagline: "A platform for building, securing, managing, and scaling APIs.",
    imageSrc: "/clients/technologies/apigee.svg",
  },
  {
    name: "AdobeCommerce",
    features: [
      {
        icon: <FaCode />,
        title: "Customizable E-commerce",
        desc: "Build scalable, customizable e-commerce websites with rich features.",
      },
      {
        icon: <FaServer />,
        title: "Product & Inventory Management",
        desc: "Manage product catalogs, inventory, pricing, and promotions.",
      },
      {
        icon: <FaGlobe />,
        title: "Omni-channel Selling",
        desc: "Sell across multiple channels, including web, mobile, and in-store.",
      },
      {
        icon: <FaRobot />,
        title: "Personalization",
        desc: "Deliver personalized shopping experiences to your customers.",
      },
      {
        icon: <FaBolt />,
        title: "Built-in Analytics",
        desc: "Use real-time analytics to optimize sales and improve customer experiences.",
      },
    ],
    useCases: [
      { name: "E-commerce Websites", image: "/clients/illustration1.svg" },
      { name: "B2B & B2C Online Stores", image: "/clients/illustration2.svg" },
      {
        name: "Inventory & Order Management",
        image: "/clients/illustration3.svg",
      },
      { name: "Multi-channel Commerce", image: "/clients/illustration4.svg" },
      { name: "Custom Storefronts", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A leading e-commerce platform for building and managing online stores and digital experiences.",
    imageSrc: "/clients/technologies/adobe-commerce.png",
  },
  {
    name: "PowerBI",
    features: [
      {
        icon: <FaCode />,
        title: "Interactive Dashboards",
        desc: "Create visually interactive reports and dashboards with easy-to-use drag-and-drop tools.",
      },
      {
        icon: <FaServer />,
        title: "Data Connectivity",
        desc: "Connect to a wide range of data sources like Excel, SQL, and cloud services.",
      },
      {
        icon: <FaGlobe />,
        title: "Real-Time Data",
        desc: "Visualize and analyze real-time data for timely decision-making.",
      },
      {
        icon: <FaRobot />,
        title: "AI-Powered Insights",
        desc: "Use machine learning and AI-driven insights to detect trends and anomalies.",
      },
      {
        icon: <FaBolt />,
        title: "Customizable Visuals",
        desc: "Create custom visualizations to meet specific business needs.",
      },
    ],
    useCases: [
      {
        name: "Business Intelligence & Analytics",
        image: "/clients/illustration1.svg",
      },
      { name: "Financial Reporting", image: "/clients/illustration2.svg" },
      {
        name: "Sales & Marketing Analytics",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Real-Time Data Visualization",
        image: "/clients/illustration4.svg",
      },
      {
        name: "AI & Machine Learning Insights",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A powerful business analytics tool to help organizations visualize and analyze their data.",
    imageSrc: "/clients/technologies/powerbi.png",
  },
  {
    name: "MuleSoft",
    features: [
      {
        icon: <FaCode />,
        title: "API Management",
        desc: "Manage the entire API lifecycle from creation to deployment.",
      },
      {
        icon: <FaServer />,
        title: "Integration Platform",
        desc: "Connect and integrate applications, data, and devices with ease.",
      },
      {
        icon: <FaGlobe />,
        title: "Cloud & On-prem Integration",
        desc: "Seamlessly integrate on-premises and cloud-based systems.",
      },
      {
        icon: <FaRobot />,
        title: "Pre-built Connectors",
        desc: "Leverage pre-built connectors to integrate with various platforms like Salesforce, SAP, and more.",
      },
      {
        icon: <FaBolt />,
        title: "Data Transformation",
        desc: "Transform data formats for smooth interoperability between systems.",
      },
    ],
    useCases: [
      { name: "API Integration", image: "/clients/illustration1.svg" },
      { name: "Cloud Integration", image: "/clients/illustration2.svg" },
      {
        name: "Data & System Integration",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Automation & Orchestration",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Microservices Architecture",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "An integration platform for connecting apps, data, and devices with APIs.",
    imageSrc: "/clients/technologies/mulesoft.png",
  },
  {
    name: "Dynamic365",
    features: [
      {
        icon: <FaCode />,
        title: "CRM & ERP",
        desc: "Combine CRM and ERP functionalities to manage sales, finance, customer service, and operations.",
      },
      {
        icon: <FaServer />,
        title: "Cloud-Based",
        desc: "Cloud-based solution with flexibility to scale as needed.",
      },
      {
        icon: <FaGlobe />,
        title: "AI & Insights",
        desc: "Incorporate artificial intelligence to drive better customer insights and decisions.",
      },
      {
        icon: <FaRobot />,
        title: "Customizable Workflows",
        desc: "Create customizable workflows for various business processes.",
      },
      {
        icon: <FaBolt />,
        title: "Integrated Applications",
        desc: "Out-of-the-box integration with Office 365, Power BI, and other Microsoft products.",
      },
    ],
    useCases: [
      {
        name: "Customer Relationship Management",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Enterprise Resource Planning",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Sales & Marketing Automation",
        image: "/clients/illustration3.svg",
      },
      { name: "AI-Driven Insights", image: "/clients/illustration4.svg" },
      { name: "Financial Management", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A suite of business applications to streamline operations, sales, and customer service.",
    imageSrc: "/clients/technologies/dynamic365.png",
  },
  {
    name: "Workday",
    features: [
      {
        icon: <FaCode />,
        title: "Human Capital Management (HCM)",
        desc: "Manage your organization's workforce, from recruitment to retirement.",
      },
      {
        icon: <FaServer />,
        title: "Financial Management",
        desc: "Integrate and manage your finance operations with real-time insights.",
      },
      {
        icon: <FaGlobe />,
        title: "Cloud-Based",
        desc: "All-in-one cloud solution with mobile access for a connected workforce.",
      },
      {
        icon: <FaRobot />,
        title: "Analytics & Reporting",
        desc: "Advanced analytics and reporting for HR and finance insights.",
      },
      {
        icon: <FaBolt />,
        title: "Payroll & Talent Management",
        desc: "Manage payroll, compensation, and talent development seamlessly.",
      },
    ],
    useCases: [
      {
        name: "Human Resources Management",
        image: "/clients/illustration1.svg",
      },
      { name: "Payroll Management", image: "/clients/illustration2.svg" },
      {
        name: "Financial & Operational Insights",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Talent & Workforce Planning",
        image: "/clients/illustration4.svg",
      },
      { name: "Performance Management", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A cloud-based solution for human resources, finance, and analytics.",
    imageSrc: "/clients/technologies/workday.png",
  },
  {
    name: "WordPress",
    features: [
      {
        icon: <FaCode />,
        title: "Open Source CMS",
        desc: "Free and open-source content management system with a massive community and plugin ecosystem.",
      },
      {
        icon: <FaGlobe />,
        title: "Themes & Plugins",
        desc: "Thousands of themes and plugins allow for easy customization and feature expansion.",
      },
      {
        icon: <FaBolt />,
        title: "Quick Deployment",
        desc: "Launch blogs, websites, or even e-commerce stores in minutes.",
      },
      {
        icon: <FaRobot />,
        title: "SEO Friendly",
        desc: "Built-in tools and plugins help optimize your site for search engines.",
      },
      {
        icon: <FaServer />,
        title: "Flexible Content Types",
        desc: "Supports custom post types, media, user roles, and more for any kind of website.",
      },
    ],
    useCases: [
      { name: "Blogging Platforms", image: "/clients/illustration1.svg" },
      { name: "Business Websites", image: "/clients/illustration2.svg" },
      {
        name: "E-commerce Stores (WooCommerce)",
        image: "/clients/illustration3.svg",
      },
      { name: "Landing Pages", image: "/clients/illustration4.svg" },
      { name: "Membership Sites", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The world’s most popular CMS—powerful, flexible, and easy to use for websites of all sizes.",
    imageSrc: "/clients/technologies/wordpress.png",
  },
  {
    name: "Drupal",
    features: [
      {
        icon: <FaCode />,
        title: "Enterprise-grade CMS",
        desc: "Robust content management framework trusted by government, education, and enterprise organizations.",
      },
      {
        icon: <FaServer />,
        title: "Custom Content Structures",
        desc: "Highly flexible with content types, taxonomies, views, and user permissions.",
      },
      {
        icon: <FaGlobe />,
        title: "Multilingual Support",
        desc: "Native support for multilingual content and translation workflows.",
      },
      {
        icon: <FaRobot />,
        title: "API-First Architecture",
        desc: "Ideal for decoupled/headless applications using REST, JSON:API, or GraphQL.",
      },
      {
        icon: <FaBolt />,
        title: "Security & Performance",
        desc: "Strong focus on security, caching, and performance optimization.",
      },
    ],
    useCases: [
      { name: "Enterprise Websites", image: "/clients/illustration1.svg" },
      { name: "Government & NGO Portals", image: "/clients/illustration2.svg" },
      { name: "Educational Platforms", image: "/clients/illustration3.svg" },
      { name: "Publishing & Media Sites", image: "/clients/illustration4.svg" },
      {
        name: "Headless CMS Applications",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A powerful, secure, and flexible CMS framework built for ambitious digital experiences.",
    imageSrc: "/clients/technologies/drupal.png",
  },
  {
    name: "Contentful",
    features: [
      {
        icon: <FaCode />,
        title: "Headless CMS",
        desc: "Decouples content from presentation, enabling flexible frontend frameworks.",
      },
      {
        icon: <FaServer />,
        title: "Content Modeling",
        desc: "Define content structures with custom fields, references, and relationships.",
      },
      {
        icon: <FaGlobe />,
        title: "Omnichannel Delivery",
        desc: "Distribute content to websites, apps, devices, and digital platforms.",
      },
      {
        icon: <FaRobot />,
        title: "Powerful API",
        desc: "Access and manage content via RESTful and GraphQL APIs.",
      },
      {
        icon: <FaBolt />,
        title: "Scalable & Cloud-Native",
        desc: "Designed for speed, uptime, and enterprise-level scalability.",
      },
    ],
    useCases: [
      {
        name: "Headless Web Applications",
        image: "/clients/illustration1.svg",
      },
      { name: "Mobile App Content", image: "/clients/illustration2.svg" },
      { name: "Multilingual Platforms", image: "/clients/illustration3.svg" },
      { name: "E-commerce Catalogs", image: "/clients/illustration4.svg" },
      { name: "Digital Experiences", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A headless CMS built for structured content and seamless multichannel publishing.",
    imageSrc: "/clients/technologies/contentful.png",
  },
  {
    name: "Joomla",
    features: [
      {
        icon: <FaCode />,
        title: "Open Source CMS",
        desc: "Flexible and community-driven CMS for a wide range of website types.",
      },
      {
        icon: <FaGlobe />,
        title: "Multilingual Capabilities",
        desc: "Built-in language support for creating multilingual websites out of the box.",
      },
      {
        icon: <FaServer />,
        title: "Extensibility",
        desc: "Thousands of extensions and templates for customization and functionality.",
      },
      {
        icon: <FaBolt />,
        title: "Advanced User Management",
        desc: "Granular control over user roles, permissions, and access levels.",
      },
      {
        icon: <FaRobot />,
        title: "Content & Media Management",
        desc: "Robust tools to manage content, images, and documents easily.",
      },
    ],
    useCases: [
      { name: "Corporate Websites", image: "/clients/illustration1.svg" },
      { name: "Government Portals", image: "/clients/illustration2.svg" },
      { name: "Online Communities", image: "/clients/illustration3.svg" },
      { name: "E-commerce Sites", image: "/clients/illustration4.svg" },
      { name: "Multilingual Platforms", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A powerful open-source CMS with built-in multilingual support and extensive customization.",
    imageSrc: "/clients/technologies/joomla.png",
  },
  {
    name: "Sitecore",
    features: [
      {
        icon: <FaCode />,
        title: "Enterprise CMS",
        desc: "Enterprise-level digital experience platform for content management and personalization.",
      },
      {
        icon: <FaServer />,
        title: "Digital Experience Platform",
        desc: "Combine CMS, personalization, analytics, and marketing automation in one suite.",
      },
      {
        icon: <FaGlobe />,
        title: "Omnichannel Delivery",
        desc: "Deliver consistent experiences across web, mobile, email, and IoT.",
      },
      {
        icon: <FaRobot />,
        title: "Personalization Engine",
        desc: "Deliver personalized content to users based on behavior and segmentation.",
      },
      {
        icon: <FaBolt />,
        title: "Marketing Automation",
        desc: "Integrated tools to design and execute automated customer journeys.",
      },
    ],
    useCases: [
      { name: "Enterprise Portals", image: "/clients/illustration1.svg" },
      {
        name: "Personalized Marketing Platforms",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Multi-brand Web Management",
        image: "/clients/illustration3.svg",
      },
      {
        name: "E-commerce with Experience",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Global Digital Experiences",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A leading digital experience platform to deliver personalized, scalable, and integrated customer experiences.",
    imageSrc: "/clients/technologies/sitecore.png",
  },
  {
    name: "Shopify",
    features: [
      {
        icon: <FaCode />,
        title: "Hosted Platform",
        desc: "All-in-one e-commerce platform with hosting, payments, and security built-in.",
      },
      {
        icon: <FaServer />,
        title: "Storefront Customization",
        desc: "Themes, templates, and Liquid templating language for design flexibility.",
      },
      {
        icon: <FaBolt />,
        title: "App Ecosystem",
        desc: "Thousands of apps available to extend functionality for shipping, analytics, and more.",
      },
      {
        icon: <FaGlobe />,
        title: "Multichannel Selling",
        desc: "Sell across web, mobile, social media, and marketplaces like Amazon.",
      },
      {
        icon: <FaRobot />,
        title: "Secure & Scalable",
        desc: "Handles scaling, PCI compliance, and global infrastructure for your online store.",
      },
    ],
    useCases: [
      { name: "Online Stores", image: "/clients/illustration1.svg" },
      { name: "Dropshipping Businesses", image: "/clients/illustration2.svg" },
      { name: "Mobile Shopping Apps", image: "/clients/illustration3.svg" },
      { name: "Subscription Services", image: "/clients/illustration4.svg" },
      { name: "Social Media Commerce", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A complete e-commerce platform that makes it easy to start, grow, and manage a business online.",
    imageSrc: "/clients/technologies/shopify.png",
  },
  {
    name: "Magento",
    features: [
      {
        icon: <FaCode />,
        title: "Highly Customizable",
        desc: "Open-source platform with deep customization and integration flexibility.",
      },
      {
        icon: <FaServer />,
        title: "Scalable Architecture",
        desc: "Supports large inventories, multi-store management, and international selling.",
      },
      {
        icon: <FaBolt />,
        title: "Advanced Features",
        desc: "Built-in support for B2B, product recommendations, and customer segmentation.",
      },
      {
        icon: <FaGlobe />,
        title: "Global Commerce",
        desc: "Multi-language, multi-currency, and regional tax support for global operations.",
      },
      {
        icon: <FaRobot />,
        title: "Robust Community",
        desc: "Extensive ecosystem of developers, plugins, and resources.",
      },
    ],
    useCases: [
      { name: "Large E-commerce Stores", image: "/clients/illustration1.svg" },
      { name: "Multi-store Retailers", image: "/clients/illustration2.svg" },
      { name: "Global Brands", image: "/clients/illustration3.svg" },
      { name: "B2B Marketplaces", image: "/clients/illustration4.svg" },
      {
        name: "Custom Commerce Solutions",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "An open-source e-commerce platform that powers complex, customizable online stores at scale.",
    imageSrc: "/clients/technologies/magento.png",
  },
  {
    name: "WooCommerce",
    features: [
      {
        icon: <FaCode />,
        title: "WordPress Integration",
        desc: "Built on top of WordPress, making it ideal for content-driven online stores.",
      },
      {
        icon: <FaServer />,
        title: "Open-source Flexibility",
        desc: "Fully customizable with themes, extensions, and developer hooks.",
      },
      {
        icon: <FaBolt />,
        title: "Plugin Ecosystem",
        desc: "Leverage a wide range of plugins for payment gateways, marketing, shipping, and more.",
      },
      {
        icon: <FaGlobe />,
        title: "Scalable & Modular",
        desc: "Ideal for small to medium stores, with options to scale as needed.",
      },
      {
        icon: <FaRobot />,
        title: "Community Support",
        desc: "Extensive documentation and active global community.",
      },
    ],
    useCases: [
      {
        name: "Small Business E-commerce",
        image: "/clients/illustration1.svg",
      },
      { name: "Content & Product Sites", image: "/clients/illustration2.svg" },
      { name: "Subscription Products", image: "/clients/illustration3.svg" },
      { name: "Local & Regional Sellers", image: "/clients/illustration4.svg" },
      { name: "Digital Downloads", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A flexible WordPress-based e-commerce solution that puts you in complete control of your store.",
    imageSrc: "/clients/technologies/woo.png",
  },
  {
    name: "BigCommerce",
    features: [
      {
        icon: <FaCode />,
        title: "Open SaaS Platform",
        desc: "Combines the flexibility of open architecture with the convenience of SaaS.",
      },
      {
        icon: <FaServer />,
        title: "Headless Commerce Support",
        desc: "Use BigCommerce as a backend for modern frontend frameworks like Next.js or Gatsby.",
      },
      {
        icon: <FaBolt />,
        title: "Enterprise-Level Features",
        desc: "Advanced SEO, faceted search, and performance for high-growth brands.",
      },
      {
        icon: <FaGlobe />,
        title: "Cross-Channel Commerce",
        desc: "Sell across marketplaces, social platforms, and in-person—all from one platform.",
      },
      {
        icon: <FaRobot />,
        title: "Integrated Ecosystem",
        desc: "Connect seamlessly with apps, payment providers, and shipping solutions.",
      },
    ],
    useCases: [
      { name: "Enterprise E-commerce", image: "/clients/illustration1.svg" },
      { name: "B2B & B2C Commerce", image: "/clients/illustration2.svg" },
      { name: "Multi-channel Selling", image: "/clients/illustration3.svg" },
      { name: "Headless Storefronts", image: "/clients/illustration4.svg" },
      { name: "Omnichannel Retail", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A powerful e-commerce platform for growing businesses and enterprises with modern, flexible solutions.",
    imageSrc: "/clients/technologies/bigcommerce.png",
  },
  {
    name: "PrestaShop",
    features: [
      {
        icon: <FaCode />,
        title: "Open-source Flexibility",
        desc: "Customize and extend every part of your online store with open-source freedom.",
      },
      {
        icon: <FaServer />,
        title: "Modular Architecture",
        desc: "Over 6,000 modules and themes to adapt your store to any business need.",
      },
      {
        icon: <FaBolt />,
        title: "Lightweight & Performant",
        desc: "Efficient performance even on budget-friendly hosting environments.",
      },
      {
        icon: <FaGlobe />,
        title: "Internationalization",
        desc: "Multi-language, multi-currency, and tax rule support for global selling.",
      },
      {
        icon: <FaRobot />,
        title: "Active Community",
        desc: "Large global user base with extensive documentation and support forums.",
      },
    ],
    useCases: [
      { name: "SMB Online Stores", image: "/clients/illustration1.svg" },
      {
        name: "Custom E-commerce Projects",
        image: "/clients/illustration2.svg",
      },
      { name: "Multilingual Sites", image: "/clients/illustration3.svg" },
      { name: "Local Retail Businesses", image: "/clients/illustration4.svg" },
      { name: "Freelancer-built Stores", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "An open-source e-commerce solution built for flexibility, global reach, and community-driven innovation.",
    imageSrc: "/clients/technologies/prestashop.png",
  },
  {
    name: "AWS",
    features: [
      {
        icon: <FaServer />,
        title: "Scalable Infrastructure",
        desc: "On-demand compute, storage, and networking services for any workload size.",
      },
      {
        icon: <FaGlobe />,
        title: "Global Reach",
        desc: "Deploy applications across 30+ regions with low latency and high availability.",
      },
      {
        icon: <FaBolt />,
        title: "Wide Service Portfolio",
        desc: "Over 200 services including AI, databases, analytics, DevOps, and security.",
      },
      {
        icon: <FaCode />,
        title: "Developer Friendly",
        desc: "Full SDKs, APIs, and Infrastructure as Code support (CDK, CloudFormation).",
      },
      {
        icon: <FaRobot />,
        title: "AI & ML Capabilities",
        desc: "Advanced machine learning tools like SageMaker, Rekognition, and Comprehend.",
      },
    ],
    useCases: [
      { name: "Enterprise Applications", image: "/clients/illustration1.svg" },
      { name: "Cloud-native Apps", image: "/clients/illustration2.svg" },
      { name: "Big Data & Analytics", image: "/clients/illustration3.svg" },
      {
        name: "Machine Learning Workflows",
        image: "/clients/illustration4.svg",
      },
      { name: "Hybrid Cloud", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The world's most comprehensive and widely adopted cloud platform for building secure, scalable applications.",
    imageSrc: "/clients/technologies/aws.png",
  },
  {
    name: "Azure",
    features: [
      {
        icon: <FaServer />,
        title: "Hybrid Cloud Capabilities",
        desc: "Seamless on-premises and cloud integration with tools like Azure Arc and Stack.",
      },
      {
        icon: <FaGlobe />,
        title: "Enterprise Ready",
        desc: "Trusted by 95% of Fortune 500 companies with strong security and compliance.",
      },
      {
        icon: <FaBolt />,
        title: "Integrated Services",
        desc: "Deep integration with Microsoft services like Office 365, Dynamics, and Power Platform.",
      },
      {
        icon: <FaCode />,
        title: "Flexible Development",
        desc: "Supports multiple languages and frameworks with rich DevOps tooling.",
      },
      {
        icon: <FaRobot />,
        title: "AI & Analytics",
        desc: "Powerful cognitive services, ML models, and advanced data analytics tools.",
      },
    ],
    useCases: [
      { name: "Enterprise Workloads", image: "/clients/illustration1.svg" },
      { name: "Cloud Migrations", image: "/clients/illustration2.svg" },
      { name: "AI & Analytics", image: "/clients/illustration3.svg" },
      { name: "DevOps & CI/CD", image: "/clients/illustration4.svg" },
      { name: "IoT Applications", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A flexible and enterprise-focused cloud platform with global scale and deep Microsoft integration.",
    imageSrc: "/clients/technologies/azure.png",
  },
  {
    name: "GoogleCloud",
    features: [
      {
        icon: <FaServer />,
        title: "Cloud-Native Infrastructure",
        desc: "Built for containers and microservices with Kubernetes at its core.",
      },
      {
        icon: <FaGlobe />,
        title: "Global Network",
        desc: "Fast, secure, and reliable global network infrastructure.",
      },
      {
        icon: <FaBolt />,
        title: "Big Data & Analytics",
        desc: "Powerful tools like BigQuery and Dataflow for real-time insights and analytics.",
      },
      {
        icon: <FaCode />,
        title: "Developer Tools",
        desc: "Cloud Functions, Firebase, and serverless platforms for faster app delivery.",
      },
      {
        icon: <FaRobot />,
        title: "AI & ML Innovation",
        desc: "World-class models and APIs for vision, speech, NLP, and AutoML.",
      },
    ],
    useCases: [
      { name: "Modern App Development", image: "/clients/illustration1.svg" },
      { name: "Data Lakes & Analytics", image: "/clients/illustration2.svg" },
      { name: "Machine Learning Models", image: "/clients/illustration3.svg" },
      { name: "Serverless Apps", image: "/clients/illustration4.svg" },
      { name: "Multi-cloud Deployments", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A developer-centric cloud platform focused on speed, AI innovation, and powerful data analytics.",
    imageSrc: "/clients/technologies/google-cloud.svg",
  },
  {
    name: "Docker",
    features: [
      {
        icon: <FaBox />,
        title: "Containerization",
        desc: "Package applications and dependencies into lightweight, portable containers for consistency across environments.",
      },
      {
        icon: <FaCogs />,
        title: "Isolated Environments",
        desc: "Run apps in isolated user spaces with controlled resource allocation for better security and efficiency.",
      },
      {
        icon: <FaRocket />,
        title: "Fast Deployment",
        desc: "Spin up containers in seconds, reducing development and testing overhead.",
      },
      {
        icon: <FaCodeBranch />,
        title: "DevOps Integration",
        desc: "Works seamlessly with CI/CD pipelines (e.g., GitHub Actions, Jenkins) for automated workflows.",
      },
      {
        icon: <FaHubspot />,
        title: "Docker Hub Ecosystem",
        desc: "Access pre-built images and share containers via Docker Hub for faster development.",
      },
    ],
    useCases: [
      {
        name: "Microservices Architecture",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Local Development Environments",
        image: "/clients/illustration2.svg",
      },
      {
        name: "CI/CD Pipeline Automation",
        image: "/clients/illustration3.svg",
      },
      { name: "Legacy App Modernization", image: "/clients/illustration4.svg" },
      { name: "Cloud-Native Deployments", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The industry-standard platform for building, shipping, and running distributed applications in containers.",
    imageSrc: "/clients/technologies/docker.png",
  },
  {
    name: "Kubernetes",
    features: [
      {
        icon: <FaNetworkWired />,
        title: "Container Orchestration",
        desc: "Automate deployment, scaling, and management of containerized applications across clusters.",
      },
      {
        icon: <FaExpandArrowsAlt />,
        title: "Horizontal Scaling",
        desc: "Dynamically scale workloads up or down based on demand with self-healing capabilities.",
      },
      {
        icon: <FaBalanceScale />,
        title: "Load Balancing",
        desc: "Distribute traffic efficiently across containers to ensure high availability.",
      },
      {
        icon: <FaCode />,
        title: "Declarative Configuration",
        desc: "Define desired states using YAML/JSON manifests for infrastructure-as-code (IaC).",
      },
      {
        icon: <FaCloud />,
        title: "Multi-Cloud & Hybrid Support",
        desc: "Run consistently on-premises, AWS, GCP, Azure, or any cloud provider.",
      },
    ],
    useCases: [
      {
        name: "Large-Scale Microservices",
        image: "/clients/illustration1.svg",
      },
      {
        name: "High-Availability Deployments",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Batch Processing (Jobs/CronJobs)",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Service Mesh (Istio, Linkerd)",
        image: "/clients/illustration4.svg",
      },
      { name: "Edge Computing", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The leading open-source platform for automating container operations at scale.",
    imageSrc: "/clients/technologies/kubernetes.png",
  },
  {
    name: "OpenShift",
    features: [
      {
        icon: <FaShieldAlt />,
        title: "Enterprise Kubernetes",
        desc: "Red Hat’s hardened Kubernetes distribution with added security, compliance, and support.",
      },
      {
        icon: <FaTools />,
        title: "Developer-Friendly Tooling",
        desc: "Built-in IDE (ODO), Source-to-Image (S2I), and Helm for streamlined app deployment.",
      },
      {
        icon: <FaLock />,
        title: "Enhanced Security",
        desc: "Role-based access control (RBAC), SELinux, and automated certificate management.",
      },
      {
        icon: <FaSync />,
        title: "Integrated CI/CD",
        desc: "Native pipelines with Tekton, Jenkins, and GitOps (ArgoCD) for DevOps automation.",
      },
      {
        icon: <FaServer />,
        title: "Hybrid Cloud Flexibility",
        desc: "Deploy on-premises, public clouds, or edge with consistent management.",
      },
    ],
    useCases: [
      {
        name: "Enterprise-Grade Container Platforms",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Regulated Industries (Finance, Healthcare)",
        image: "/clients/illustration2.svg",
      },
      {
        name: "AI/ML Workloads with GPUs",
        image: "/clients/illustration3.svg",
      },
      { name: "Multi-Tenant Kubernetes", image: "/clients/illustration4.svg" },
      {
        name: "Disaster Recovery Solutions",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A full-stack Kubernetes platform for mission-critical applications with developer and operational tools.",
    imageSrc: "/clients/technologies/openshift.svg",
  },
  {
    name: "Jenkins",
    features: [
      {
        icon: <FaPlug />,
        title: "Extensible Automation",
        desc: "Open-source automation server with 1,800+ plugins for CI/CD, testing, and deployment.",
      },
      {
        icon: <FaCodeBranch />,
        title: "Pipeline-as-Code",
        desc: "Define build/test/deploy workflows using Groovy-based Jenkinsfiles for reproducibility.",
      },
      {
        icon: <FaServer />,
        title: "Distributed Builds",
        desc: "Scale workloads across agent nodes (Linux, Windows, Kubernetes) for parallel execution.",
      },
      {
        icon: <FaGithub />,
        title: "Git Integration",
        desc: "Seamlessly trigger builds from GitHub, GitLab, Bitbucket, or other SCM tools.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Access Control",
        desc: "Role-based permissions and audit logs for enterprise security compliance.",
      },
    ],
    useCases: [
      { name: "Legacy CI/CD Pipelines", image: "/clients/illustration1.svg" },
      {
        name: "Multi-language Builds (Java, Python, etc.)",
        image: "/clients/illustration2.svg",
      },
      { name: "On-Premises Automation", image: "/clients/illustration3.svg" },
      {
        name: "Custom Workflow Orchestration",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Plugin-Based Integrations",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "The most flexible open-source automation server for building, testing, and deploying at scale.",
    imageSrc: "/clients/technologies/jenkins.png",
  },
  {
    name: "GitLabCI/CD",
    features: [
      {
        icon: <FaGitAlt />,
        title: "Built-in DevOps",
        desc: "End-to-end CI/CD pipelines integrated into GitLab’s single application (no plugins needed).",
      },
      {
        icon: <FaLayerGroup />,
        title: "Multi-Stage Pipelines",
        desc: "Define build, test, security scan, and deploy stages in a single `.gitlab-ci.yml` file.",
      },
      {
        icon: <FaCloud />,
        title: "Auto-Scaling Runners",
        desc: "Run jobs on ephemeral cloud or Kubernetes runners for cost efficiency.",
      },
      {
        icon: <FaEye />,
        title: "Security Scanning",
        desc: "Built-in SAST, DAST, dependency scanning, and license compliance checks.",
      },
      {
        icon: <FaMobile />,
        title: "GitOps Ready",
        desc: "Native support for Kubernetes deployments with Auto DevOps and Helm.",
      },
    ],
    useCases: [
      { name: "Cloud-Native CI/CD", image: "/clients/illustration1.svg" },
      { name: "DevSecOps Pipelines", image: "/clients/illustration2.svg" },
      { name: "Monorepo Management", image: "/clients/illustration3.svg" },
      { name: "Kubernetes Deployments", image: "/clients/illustration4.svg" },
      {
        name: "Collaborative Development",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A unified platform for code collaboration, CI/CD, and security—all in one place.",
    imageSrc: "/clients/technologies/gitlab.png",
  },
  {
    name: "Terraform",
    features: [
      {
        icon: <FaCloud />,
        title: "Infrastructure-as-Code (IaC)",
        desc: "Define and provision cloud resources (AWS, GCP, Azure) using declarative HCL or JSON.",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Multi-Cloud Orchestration",
        desc: "Manage hybrid or multi-cloud environments with a single workflow.",
      },
      {
        icon: <FaHistory />,
        title: "State Management",
        desc: "Track resource dependencies and changes with Terraform state files.",
      },
      {
        icon: <FaLock />,
        title: "Policy as Code",
        desc: "Enforce security/compliance rules using Sentinel or OPA (Open Policy Agent).",
      },
      {
        icon: <FaRecycle />,
        title: "Immutable Infrastructure",
        desc: "Replace outdated resources instead of modifying them for consistency.",
      },
    ],
    useCases: [
      { name: "Cloud Provisioning", image: "/clients/illustration1.svg" },
      {
        name: "Kubernetes Infrastructure",
        image: "/clients/illustration2.svg",
      },
      { name: "Disaster Recovery Setup", image: "/clients/illustration3.svg" },
      { name: "Edge Computing", image: "/clients/illustration4.svg" },
      { name: "Database as a Service", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Write, plan, and provision infrastructure across clouds with codified best practices.",
    imageSrc: "/clients/technologies/terraform.svg",
  },
  {
    name: "Ansible",
    features: [
      {
        icon: <FaTerminal />,
        title: "Agentless Automation",
        desc: "Configure systems using SSH/WinRM—no need to install client software.",
      },
      {
        icon: <FaBook />,
        title: "YAML Playbooks",
        desc: "Simple, human-readable automation scripts for configuration management.",
      },
      {
        icon: <FaNetworkWired />,
        title: "Multi-Node Orchestration",
        desc: "Execute tasks across thousands of servers in parallel.",
      },
      {
        icon: <FaBoxOpen />,
        title: "Idempotent Operations",
        desc: "Ensure desired state without duplicate changes or side effects.",
      },
      {
        icon: <FaAws />,
        title: "Cloud Module Library",
        desc: "Pre-built modules for AWS, Azure, GCP, and on-premises systems.",
      },
    ],
    useCases: [
      { name: "Configuration Management", image: "/clients/illustration1.svg" },
      { name: "Patch Management", image: "/clients/illustration2.svg" },
      { name: "Network Automation", image: "/clients/illustration3.svg" },
      { name: "Application Deployment", image: "/clients/illustration4.svg" },
      { name: "Security Compliance", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Radically simple IT automation for repetitive tasks, app deployment, and cloud provisioning.",
    imageSrc: "/clients/technologies/ansible.png",
  },
  {
    name: "Scikit-learn",
    features: [
      {
        icon: <FaRobot />,
        title: "Comprehensive ML Toolkit",
        desc: "Simple and efficient tools for predictive data analysis, covering classification, regression, clustering, and more.",
      },
      {
        icon: <FaPython />,
        title: "Python Ecosystem",
        desc: "Seamlessly integrates with NumPy, SciPy, Pandas, and Matplotlib for end-to-end data workflows.",
      },
      {
        icon: <FaBalanceScale />,
        title: "Model Evaluation",
        desc: "Built-in metrics (accuracy, F1, ROC-AUC) and cross-validation tools for robust model validation.",
      },
      {
        icon: <FaCube />,
        title: "Preprocessing Pipelines",
        desc: "StandardScaler, OneHotEncoder, and Pipeline APIs for reproducible data transformations.",
      },
      {
        icon: <FaBook />,
        title: "Beginner-Friendly",
        desc: "Well-documented with beginner-friendly APIs and extensive community tutorials.",
      },
    ],
    useCases: [
      { name: "Prototyping ML Models", image: "/clients/illustration1.svg" },
      { name: "Academic Research", image: "/clients/illustration2.svg" },
      { name: "Feature Engineering", image: "/clients/illustration3.svg" },
      { name: "Small-to-Medium Datasets", image: "/clients/illustration4.svg" },
      {
        name: "Explainable AI (Linear Models)",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "The go-to Python library for classical machine learning with a unified API for all algorithms.",
    imageSrc: "/clients/technologies/scikitLearn.png",
  },
  {
    name: "XGBoost",
    features: [
      {
        icon: <FaTree />,
        title: "Gradient Boosting",
        desc: "Optimized implementation of gradient-boosted decision trees with regularization (L1/L2) to prevent overfitting.",
      },
      {
        icon: <FaTachometerAlt />,
        title: "Blazing Fast Performance",
        desc: "Parallel processing, out-of-core computation, and hardware optimization for large datasets.",
      },
      {
        icon: <FaAward />,
        title: "Competition Proven",
        desc: "Dominates Kaggle and ML competitions due to its predictive accuracy and flexibility.",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Cross-Platform",
        desc: "Supports Python, R, Java, Scala, and deployment in production environments.",
      },
      {
        icon: <FaChartLine />,
        title: "Feature Importance",
        desc: "Built-in tools (SHAP, gain-based) to interpret model decisions.",
      },
    ],
    useCases: [
      { name: "Structured/Tabular Data", image: "/clients/illustration1.svg" },
      { name: "Kaggle Competitions", image: "/clients/illustration2.svg" },
      { name: "Financial Risk Modeling", image: "/clients/illustration3.svg" },
      {
        name: "High-Performance Inference",
        image: "/clients/illustration4.svg",
      },
      { name: "Ranking Algorithms", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The gold-standard library for winning machine learning competitions and enterprise-grade tabular data modeling.",
    imageSrc: "/clients/technologies/xgboost.png",
  },
  {
    name: "LightGBM",
    features: [
      {
        icon: <FaLeaf />,
        title: "Lightweight & Efficient",
        desc: "Uses histogram-based algorithms and leaf-wise growth for faster training with lower memory usage.",
      },
      {
        icon: <FaBolt />,
        title: "GPU Acceleration",
        desc: "Supports GPU training for 10x speedups compared to CPU-only libraries.",
      },
      {
        icon: <FaDatabase />,
        title: "Big Data Ready",
        desc: "Handles large-scale datasets (millions of rows) with distributed learning.",
      },
      {
        icon: <FaCode />,
        title: "Minimal Hyperparameter Tuning",
        desc: "Works well with default settings, reducing configuration overhead.",
      },
      {
        icon: <FaNetworkWired />,
        title: "Microsoft Ecosystem",
        desc: "Integrates with Azure ML, .NET, and other Microsoft tools.",
      },
    ],
    useCases: [
      { name: "Real-Time Predictions", image: "/clients/illustration1.svg" },
      { name: "Recommendation Systems", image: "/clients/illustration2.svg" },
      { name: "Anomaly Detection", image: "/clients/illustration3.svg" },
      { name: "IoT Data Processing", image: "/clients/illustration4.svg" },
      { name: "Embedded ML", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A high-performance gradient boosting framework designed for speed and scalability with minimal resources.",
    imageSrc: "/clients/technologies/lightGBM.png",
  },
  {
    name: "TensorFlow",
    features: [
      {
        icon: <FaNetworkWired />,
        title: "Production-Grade ML",
        desc: "End-to-end platform for building, training, and deploying models at scale with TensorFlow Extended (TFX).",
      },
      {
        icon: <FaMobile />,
        title: "Cross-Platform Deployment",
        desc: "Run models on CPUs, GPUs, TPUs, mobile (TFLite), and web (TensorFlow.js).",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Flexible Architecture",
        desc: "High-level (Keras) and low-level APIs for custom model building and control.",
      },
      {
        icon: <FaRobot />,
        title: "Pre-Trained Models",
        desc: "Access TF Hub for models like BERT, ResNet, and EfficientNet for transfer learning.",
      },
      {
        icon: <FaCloud />,
        title: "Google Cloud Integration",
        desc: "Optimized for Google TPUs and AI Platform for distributed training.",
      },
    ],
    useCases: [
      { name: "Enterprise ML Pipelines", image: "/clients/illustration1.svg" },
      { name: "Computer Vision (CV)", image: "/clients/illustration2.svg" },
      {
        name: "Natural Language Processing (NLP)",
        image: "/clients/illustration3.svg",
      },
      { name: "Edge AI (TFLite)", image: "/clients/illustration4.svg" },
      { name: "Recommender Systems", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Google’s battle-tested framework for scalable machine learning from research to production.",
    imageSrc: "/clients/technologies/tensorflow.png",
  },
  {
    name: "PyTorch",
    features: [
      {
        icon: <FaCode />,
        title: "Pythonic & Dynamic",
        desc: "Imperative programming with eager execution for intuitive debugging and prototyping.",
      },
      {
        icon: <FaUniversity />,
        title: "Academic Dominance",
        desc: "Preferred by researchers for its flexibility and rich ecosystem (e.g., Hugging Face, Detectron2).",
      },
      {
        icon: <FaBolt />,
        title: "GPU Acceleration",
        desc: "Seamless CUDA integration for fast tensor computations on NVIDIA GPUs.",
      },
      {
        icon: <FaToriiGate />,
        title: "TorchScript",
        desc: "Export models to production with JIT compilation for C++/mobile deployment.",
      },
      {
        icon: <FaShapes />,
        title: "Autograd",
        desc: "Automatic differentiation for gradient-based optimization (e.g., custom loss functions).",
      },
    ],
    useCases: [
      {
        name: "Research & Experimentation",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Deep Learning (DL) Papers",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Generative AI (GANs, Diffusion)",
        image: "/clients/illustration3.svg",
      },
      { name: "Reinforcement Learning", image: "/clients/illustration4.svg" },
      {
        name: "Quantized Models (Torch.quantize)",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "Facebook’s research-first framework that balances flexibility and performance for cutting-edge AI.",
    imageSrc: "/clients/technologies/PyTorch.png`",
  },
  {
    name: "Keras",
    features: [
      {
        icon: <FaUserAlt />,
        title: "Beginner-Friendly",
        desc: "High-level API with intuitive abstractions for rapid model building (now part of TensorFlow).",
      },
      {
        icon: <FaPlug />,
        title: "Backend Agnostic",
        desc: "Runs on TensorFlow, Theano, or CNTK (though TF is now the primary backend).",
      },
      {
        icon: <FaChess />,
        title: "Modular Design",
        desc: "Layer-centric API for stacking Dense, Conv2D, LSTM, etc., with minimal code.",
      },
      {
        icon: <FaRocket />,
        title: "Fast Prototyping",
        desc: "Build and train models in minutes with built-in optimizers and callbacks.",
      },
      {
        icon: <FaMobile />,
        title: "Deployment Ready",
        desc: "Export models to TFLite, ONNX, or web formats for edge/cloud deployment.",
      },
    ],
    useCases: [
      { name: "Educational Projects", image: "/clients/illustration1.svg" },
      { name: "Quick Proof-of-Concepts", image: "/clients/illustration2.svg" },
      { name: "Startup MVPs", image: "/clients/illustration3.svg" },
      {
        name: "Standard DL Models (CNNs/RNNs)",
        image: "/clients/illustration4.svg",
      },
      { name: "Transfer Learning", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The Python deep learning API for humans, emphasizing simplicity and speed over low-level control.",
    imageSrc: "/clients/technologies/Keras.png",
  },
  {
    name: "MXNet",
    features: [
      {
        icon: <FaLanguage />,
        title: "Multi-Language Support",
        desc: "APIs for Python, R, Julia, Scala, and C++ for diverse developer needs.",
      },
      {
        icon: <FaExpandArrowsAlt />,
        title: "Scalability",
        desc: "Optimized for distributed training across multiple GPUs/CPUs with Gluon API.",
      },
      {
        icon: <FaServer />,
        title: "Cloud Native",
        desc: "AWS’s preferred framework (SageMaker) with optimized EC2/GPU instances.",
      },
      {
        icon: <FaLeaf />,
        title: "Hybrid Programming",
        desc: "Mix imperative and symbolic execution for flexibility and performance.",
      },
      {
        icon: <FaRobot />,
        title: "Computer Vision Focus",
        desc: "Strong toolkit for CV (GluonCV) and NLP (GluonNLP) with pre-trained models.",
      },
    ],
    useCases: [
      { name: "AWS-Based ML Workloads", image: "/clients/illustration1.svg" },
      { name: "Multi-Language Teams", image: "/clients/illustration2.svg" },
      {
        name: "High-Performance Inference",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Embedded Devices (AWS IoT)",
        image: "/clients/illustration4.svg",
      },
      { name: "Symbolic-Neural Hybrids", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Apache’s scalable and portable framework favored for cloud-native and multi-language AI solutions.",
    imageSrc: "/clients/technologies/mxnet.png",
  },
  {
    name: "Pandas",
    features: [
      {
        icon: <FaTable />,
        title: "DataFrames & Series",
        desc: "Powerful tabular data structures for efficient manipulation of structured data.",
      },
      {
        icon: <FaFilter />,
        title: "Data Cleaning",
        desc: "Handle missing data, filter rows/columns, and merge datasets with intuitive methods.",
      },
      {
        icon: <FaChartBar />,
        title: "Aggregation & Pivoting",
        desc: "GroupBy, pivot tables, and cross-tabulations for quick data summarization.",
      },
      {
        icon: <FaClock />,
        title: "Time Series Support",
        desc: "Built-in tools for date ranges, resampling, and time-zone handling.",
      },
      {
        icon: <FaFileCsv />,
        title: "I/O Versatility",
        desc: "Read/write CSV, Excel, SQL, JSON, and Parquet files with minimal code.",
      },
    ],
    useCases: [
      { name: "Data Wrangling", image: "/clients/illustration1.svg" },
      {
        name: "Exploratory Data Analysis (EDA)",
        image: "/clients/illustration2.svg",
      },
      { name: "Feature Engineering", image: "/clients/illustration3.svg" },
      { name: "Financial Data Analysis", image: "/clients/illustration4.svg" },
      { name: "Preprocessing for ML", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The essential Python library for structured data manipulation and analysis.",
    imageSrc: "/clients/technologies/pandas.svg",
  },
  {
    name: "NumPy",
    features: [
      {
        icon: <FaCube />,
        title: "Multidimensional Arrays",
        desc: "Efficient ndarrays for numerical computations with fixed-size elements.",
      },
      {
        icon: <FaRocket />,
        title: "Vectorized Operations",
        desc: "Fast element-wise calculations without Python loops, enabled by C-based backend.",
      },
      {
        icon: <FaShapes />,
        title: "Linear Algebra",
        desc: "Built-in functions for matrix multiplication, SVD, eigenvalues, and more.",
      },
      {
        icon: <FaRandom />,
        title: "Random Sampling",
        desc: "Generate distributions (normal, uniform, etc.) for simulations and modeling.",
      },
      {
        icon: <FaPuzzlePiece />,
        title: "Foundation for ML",
        desc: "Core dependency for Pandas, SciPy, and deep learning frameworks.",
      },
    ],
    useCases: [
      { name: "Scientific Computing", image: "/clients/illustration1.svg" },
      { name: "Image Processing", image: "/clients/illustration2.svg" },
      { name: "Simulations & Modeling", image: "/clients/illustration3.svg" },
      { name: "Signal Processing", image: "/clients/illustration4.svg" },
      { name: "Neural Network Math", image: "/clients/illustration5.svg" },
    ],
    tagline: "The fundamental package for numerical computing in Python.",
    imageSrc: "/clients/technologies/numpy.png",
  },
  {
    name: "Matplotlib",
    features: [
      {
        icon: <FaChartLine />,
        title: "Publication-Quality Plots",
        desc: "Customizable line plots, histograms, scatter plots, and more for any use case.",
      },
      {
        icon: <FaPaintBrush />,
        title: "Fine-Grained Control",
        desc: "Adjust every element (axes, ticks, legends) with object-oriented or MATLAB-style syntax.",
      },
      {
        icon: <FaSubscript />,
        title: "LaTeX Integration",
        desc: "Render mathematical symbols and equations in labels/titles.",
      },
      {
        icon: <FaSave />,
        title: "Export Flexibility",
        desc: "Save visuals as PNG, PDF, SVG, or interactive web formats.",
      },
      {
        icon: <FaSeedling />,
        title: "Ecosystem Foundation",
        desc: "Base library for Seaborn, Pandas plotting, and other visualization tools.",
      },
    ],
    useCases: [
      { name: "Academic Papers", image: "/clients/illustration1.svg" },
      {
        name: "Exploratory Data Analysis",
        image: "/clients/illustration2.svg",
      },
      { name: "Dashboard Visualizations", image: "/clients/illustration3.svg" },
      { name: "Time Series Trends", image: "/clients/illustration4.svg" },
      { name: "Custom Infographics", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The foundational plotting library for static, interactive, and animated visualizations in Python.",
    imageSrc: "/clients/technologies/matplotlib.png",
  },
  {
    name: "Seaborn",
    features: [
      {
        icon: <FaPalette />,
        title: "Statistical Visualizations",
        desc: "High-level API for violin plots, regression lines, and distribution comparisons.",
      },
      {
        icon: <FaMagic />,
        title: "Aesthetic Defaults",
        desc: "Attractive themes and color palettes for polished visuals with minimal code.",
      },
      {
        icon: <FaTable />,
        title: "Pandas Integration",
        desc: "Directly plot DataFrames with automatic axis labeling and grouping.",
      },
      {
        icon: <FaChessBoard />,
        title: "Multivariate Analysis",
        desc: "Facet grids and pair plots to explore relationships across many variables.",
      },
      {
        icon: <FaThermometerHalf />,
        title: "Categorical Data",
        desc: "Specialized tools for bar plots, box plots, and swarm plots by category.",
      },
    ],
    useCases: [
      { name: "Statistical EDA", image: "/clients/illustration1.svg" },
      { name: "Correlation Analysis", image: "/clients/illustration2.svg" },
      {
        name: "Machine Learning Insights",
        image: "/clients/illustration3.svg",
      },
      { name: "Quick Prototyping", image: "/clients/illustration4.svg" },
      { name: "Publication-Ready Plots", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A high-level interface for drawing statistical graphics with elegance and simplicity.",
    imageSrc: "/clients/technologies/seaborn.png",
  },
  {
    name: "Tableau",
    features: [
      {
        icon: <FaEye />,
        title: "Visual Discovery",
        desc: "Intuitive drag-and-drop interface for ad-hoc exploration and advanced visual analytics.",
      },
      {
        icon: <FaServer />,
        title: "Big Data Ready",
        desc: "Optimized connectors for Hadoop, Snowflake, AWS, and live querying without extracts.",
      },
      {
        icon: <FaMapMarkedAlt />,
        title: "Geospatial Analytics",
        desc: "Built-in mapping tools with auto-geocoding and custom territory layers.",
      },
      {
        icon: <FaUsersCog />,
        title: "Collaboration",
        desc: "Tableau Server/Cloud for sharing, subscriptions, and data-driven storytelling.",
      },
      {
        icon: <FaMagic />,
        title: "Tableau Prep",
        desc: "Clean and transform data visually before analysis (ETL without code).",
      },
    ],
    useCases: [
      {
        name: "Exploratory Data Analysis",
        image: "/clients/illustration1.svg",
      },
      { name: "Executive Dashboards", image: "/clients/illustration2.svg" },
      { name: "Real-Time Monitoring", image: "/clients/illustration3.svg" },
      { name: "Supply Chain Analytics", image: "/clients/illustration4.svg" },
      { name: "Public Data Storytelling", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The gold-standard in self-service analytics for turning raw data into interactive, actionable insights.",
    imageSrc: "/clients/technologies/Tableau.png",
  },
  {
    name: "Excel",
    features: [
      {
        icon: <FaTable />,
        title: "Universal Spreadsheets",
        desc: "Grid-based calculations, pivot tables, and formulas (VLOOKUP, XLOOKUP, Power Pivot).",
      },
      {
        icon: <FaChartBar />,
        title: "Basic Visualizations",
        desc: "Bar/line charts, sparklines, and conditional formatting for quick analysis.",
      },
      {
        icon: <FaCode />,
        title: "Automation (VBA)",
        desc: "Custom macros and scripting with Visual Basic for Applications.",
      },
      {
        icon: <FaCloud />,
        title: "Collaboration",
        desc: "Co-authoring in real-time via Excel Online and Microsoft 365.",
      },
      {
        icon: <FaChessKnight />,
        title: "Solver & What-If Analysis",
        desc: "Optimization and scenario modeling for business decisions.",
      },
    ],
    useCases: [
      { name: "Financial Modeling", image: "/clients/illustration1.svg" },
      { name: "Ad-Hoc Data Analysis", image: "/clients/illustration2.svg" },
      { name: "Budgeting & Forecasting", image: "/clients/illustration3.svg" },
      { name: "Small Datasets", image: "/clients/illustration4.svg" },
      { name: "Quick Prototyping", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The ubiquitous spreadsheet tool for everyday data organization, analysis, and lightweight automation.",
    imageSrc: "/clients/technologies/excel.png",
  },
  {
    name: "Looker",
    features: [
      {
        icon: <FaCodeBranch />,
        title: "Model-Centric (LookML)",
        desc: "Define metrics and relationships in SQL-based LookML for consistent reporting.",
      },
      {
        icon: <FaGoogle />,
        title: "Google Cloud Native",
        desc: "Built for BigQuery, integrated with Google Sheets, and part of Google Cloud Platform.",
      },
      {
        icon: <FaNetworkWired />,
        title: "Embedded Analytics",
        desc: "White-label dashboards and APIs to embed analytics into customer-facing apps.",
      },
      {
        icon: <FaUserShield />,
        title: "Enterprise Governance",
        desc: "Row-level security, centralized modeling, and version control (Git).",
      },
      {
        icon: <FaSyncAlt />,
        title: "Real-Time Data",
        desc: "Direct querying of databases without pre-aggregation or extracts.",
      },
    ],
    useCases: [
      {
        name: "Centralized Data Modeling",
        image: "/clients/illustration1.svg",
      },
      {
        name: "Embedded Business Intelligence",
        image: "/clients/illustration2.svg",
      },
      { name: "Data Product Development", image: "/clients/illustration3.svg" },
      { name: "Scalable SaaS Analytics", image: "/clients/illustration4.svg" },
      { name: "Governed Self-Service BI", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A modern BI platform that combines SQL-powered analytics with embedded data experiences.",
    imageSrc: "/clients/technologies/Looker.png",
  },
  {
    name: "ApacheSpark",
    features: [
      {
        icon: <FaBolt />,
        title: "In-Memory Processing",
        desc: "100x faster than Hadoop by caching data in RAM for iterative algorithms.",
      },
      {
        icon: <FaNetworkWired />,
        title: "Unified Engine",
        desc: "Batch (Spark SQL), streaming (Structured Streaming), ML (MLlib), and graph processing (GraphX).",
      },
      {
        icon: <FaLanguage />,
        title: "Multi-Language Support",
        desc: "APIs for Python (PySpark), Scala, Java, R, and SQL.",
      },
      {
        icon: <FaExpandArrowsAlt />,
        title: "Distributed Computing",
        desc: "Horizontal scaling across thousands of nodes with fault tolerance.",
      },
      {
        icon: <FaDatabase />,
        title: "Data Source Integration",
        desc: "Connect to HDFS, S3, Cassandra, Kafka, and more.",
      },
    ],
    useCases: [
      { name: "Large-Scale ETL", image: "/clients/illustration1.svg" },
      {
        name: "Real-Time Stream Processing",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Machine Learning Pipelines",
        image: "/clients/illustration3.svg",
      },
      { name: "Data Lake Analytics", image: "/clients/illustration4.svg" },
      { name: "Interactive Queries", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The lightning-fast unified analytics engine for big data and machine learning.",
    imageSrc: "/clients/technologies/spark.png",
  },
  {
    name: "ApacheAirflow",
    features: [
      {
        icon: <FaProjectDiagram />,
        title: "Workflow Orchestration",
        desc: "Define, schedule, and monitor complex pipelines as directed acyclic graphs (DAGs).",
      },
      {
        icon: <FaCode />,
        title: "Python Native",
        desc: "Programmatically author workflows with dynamic pipeline generation.",
      },
      {
        icon: <FaEye />,
        title: "UI & Monitoring",
        desc: "Built-in web UI for visualizing pipelines, logs, and task dependencies.",
      },
      {
        icon: <FaPlug />,
        title: "Extensible Operators",
        desc: "1,000+ pre-built connectors (Kubernetes, Snowflake, AWS, etc.).",
      },
      {
        icon: <FaCalendarAlt />,
        title: "Scheduling",
        desc: "Cron-like syntax for time-based or event-triggered executions.",
      },
    ],
    useCases: [
      { name: "Data Pipeline Automation", image: "/clients/illustration1.svg" },
      { name: "ETL/ELT Workflows", image: "/clients/illustration2.svg" },
      { name: "MLOps Orchestration", image: "/clients/illustration3.svg" },
      {
        name: "Cloud Infrastructure Mgmt",
        image: "/clients/illustration4.svg",
      },
      {
        name: "Business Process Automation",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "The platform to programmatically author, schedule, and monitor workflows.",
    imageSrc: "/clients/technologies/airflow.png",
  },
  {
    name: "Kafka",
    features: [
      {
        icon: <FaStream />,
        title: "Distributed Streaming",
        desc: "Publish-subscribe messaging with fault-tolerant, partitioned logs.",
      },
      {
        icon: <FaTachometerAlt />,
        title: "High Throughput",
        desc: "Handle millions of messages per second with low latency.",
      },
      {
        icon: <FaDatabase />,
        title: "Durable Storage",
        desc: "Retain streams with configurable retention policies (time/size-based).",
      },
      {
        icon: <FaNetworkWired />,
        title: "Event-Driven Architecture",
        desc: "Backbone for microservices, CDC, and real-time analytics.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Enterprise Security",
        desc: "SSL, SASL, ACLs, and role-based access control (RBAC).",
      },
    ],
    useCases: [
      {
        name: "Real-Time Event Processing",
        image: "/clients/illustration1.svg",
      },
      { name: "Log Aggregation", image: "/clients/illustration2.svg" },
      { name: "IoT Data Pipelines", image: "/clients/illustration3.svg" },
      { name: "Financial Transactions", image: "/clients/illustration4.svg" },
      { name: "Activity Tracking", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The distributed event streaming platform for building real-time data pipelines.",
    imageSrc: "/clients/technologies/kafka.png",
  },
  {
    name: "Next.js",
    features: [
      {
        icon: <FaReact />,
        title: "React Framework",
        desc: "Production-ready React framework with server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR).",
      },
      {
        icon: <FaServer />,
        title: "Hybrid Rendering",
        desc: "Choose between static generation, server-side rendering, or client-side rendering on a per-page basis.",
      },
      {
        icon: <FaBolt />,
        title: "Performance Optimized",
        desc: "Automatic code splitting, image optimization, and prefetching for blazing-fast page loads.",
      },
      {
        icon: <FaGlobe />,
        title: "API Routes",
        desc: "Build serverless API endpoints directly within your Next.js project with Node.js.",
      },
      {
        icon: <FaMobile />,
        title: "Built-in CSS & Sass",
        desc: "Support for CSS Modules, Sass, and styled-jsx out of the box for seamless styling.",
      },
    ],
    useCases: [
      { name: "SEO-Friendly Web Apps", image: "/clients/illustration1.svg" },
      { name: "E-Commerce Sites", image: "/clients/illustration2.svg" },
      { name: "Marketing Websites", image: "/clients/illustration3.svg" },
      { name: "Jamstack Architecture", image: "/clients/illustration4.svg" },
      { name: "Full-Stack Applications", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The React framework for production—combining the best of static and dynamic web development.",
    imageSrc: "/clients/technologies/nextjs.svg",
  },
  {
    name: "Gatsby",
    features: [
      {
        icon: <FaReact />,
        title: "React-Based Static Site Generator",
        desc: "Build blazing-fast websites and apps using React, GraphQL, and modern JavaScript.",
      },
      {
        icon: <FaPlug />,
        title: "Rich Plugin Ecosystem",
        desc: "1,000+ plugins for CMSs (Contentful, WordPress), analytics, and image optimization.",
      },
      {
        icon: <FaDatabase />,
        title: "Headless CMS Integration",
        desc: "Pull data from any CMS or API with GraphQL and pre-render it at build time.",
      },
      {
        icon: <FaBolt />,
        title: "Performance Optimized",
        desc: "Automatic code splitting, lazy loading, and pre-fetching for near-instant page loads.",
      },
      {
        icon: <FaMobile />,
        title: "Progressive Web App (PWA) Ready",
        desc: "Offline support, service workers, and web app manifests built-in.",
      },
    ],
    useCases: [
      { name: "Content-Rich Websites", image: "/clients/illustration1.svg" },
      {
        name: "Marketing & Landing Pages",
        image: "/clients/illustration2.svg",
      },
      {
        name: "E-Commerce (with Shopify)",
        image: "/clients/illustration3.svg",
      },
      { name: "Documentation Sites", image: "/clients/illustration4.svg" },
      { name: "Portfolio & Blog Sites", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The React-powered static site generator for content-driven websites with unmatched performance.",
    imageSrc: "/clients/technologies/gatsby.svg",
  },
  {
    name: "Hugo",
    features: [
      {
        icon: <FaTachometerAlt />,
        title: "Blazing Fast Builds",
        desc: "World’s fastest static site generator (millisecond builds) thanks to Go’s efficiency.",
      },
      {
        icon: <FaFileAlt />,
        title: "Markdown-Centric",
        desc: "Content authored in Markdown with front matter for metadata and templates.",
      },
      {
        icon: <FaTheaterMasks />,
        title: "Flexible Templating",
        desc: "Go’s templating language for dynamic layouts and shortcodes.",
      },
      {
        icon: <FaServer />,
        title: "No Dependencies",
        desc: "Single binary—no Node.js, databases, or complex toolchains required.",
      },
      {
        icon: <FaCloud />,
        title: "Host Anywhere",
        desc: "Deploy to Netlify, GitHub Pages, or any web server with minimal configuration.",
      },
    ],
    useCases: [
      { name: "Blogs & Personal Sites", image: "/clients/illustration1.svg" },
      { name: "Documentation Portals", image: "/clients/illustration2.svg" },
      {
        name: "High-Traffic Brochure Sites",
        image: "/clients/illustration3.svg",
      },
      { name: "Multi-Language Content", image: "/clients/illustration4.svg" },
      { name: "Minimalist Web Projects", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The lightning-fast static site generator for developers who value simplicity and speed.",
    imageSrc: "/clients/technologies/hugo.svg",
  },
  {
    name: "Figma",
    features: [
      {
        icon: <FaGlobe />,
        title: "Cloud-Based Collaboration",
        desc: "Real-time multi-user editing with comments and version history, accessible from any OS.",
      },
      {
        icon: <FaPenFancy />,
        title: "Vector Networks",
        desc: "Advanced pen tool and flexible vector editing for precise design control.",
      },
      {
        icon: <FaCode />,
        title: "Dev Handoff",
        desc: "Auto-generated CSS, iOS, and Android code snippets for seamless developer collaboration.",
      },
      {
        icon: <FaMobile />,
        title: "Interactive Prototyping",
        desc: "Create clickable prototypes with animations, transitions, and dynamic overlays.",
      },
      {
        icon: <FaPuzzlePiece />,
        title: "Plugin Ecosystem",
        desc: "1,000+ plugins for icons, charts, accessibility checks, and more.",
      },
    ],
    useCases: [
      { name: "Team-Based UI/UX Design", image: "/clients/illustration1.svg" },
      { name: "Design Systems", image: "/clients/illustration2.svg" },
      { name: "Remote Collaboration", image: "/clients/illustration3.svg" },
      {
        name: "Wireframing & Prototyping",
        image: "/clients/illustration4.svg",
      },
      { name: "Design-Dev Workflow", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The collaborative interface design tool that works in your browser and unites teams.",
    imageSrc: "/clients/technologies/figma.svg",
  },
  {
    name: "AdobeXD",
    features: [
      {
        icon: <FaMagic />,
        title: "Adobe Ecosystem",
        desc: "Integrates with Photoshop, Illustrator, and Creative Cloud Libraries for asset reuse.",
      },
      {
        icon: <FaMicrophoneAlt />,
        title: "Voice Prototyping",
        desc: "Design voice interactions and audio playback for conversational UI.",
      },
      {
        icon: <FaMagic />,
        title: "Auto-Animate",
        desc: "Create micro-interactions and animations between artboards with one click.",
      },
      {
        icon: <FaUserFriends />,
        title: "Coediting (Beta)",
        desc: "Real-time collaboration similar to Figma, but with Adobe’s security backbone.",
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile Preview",
        desc: "Test prototypes live on iOS/Android devices via the Adobe XD app.",
      },
    ],
    useCases: [
      { name: "High-Fidelity Prototypes", image: "/clients/illustration1.svg" },
      { name: "Adobe-Centric Workflows", image: "/clients/illustration2.svg" },
      { name: "Voice & Game Design", image: "/clients/illustration3.svg" },
      { name: "Design Sprints", image: "/clients/illustration4.svg" },
      { name: "Responsive Resizing", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Adobe’s all-in-one UX/UI solution for designing, prototyping, and sharing interactive experiences.",
    imageSrc: "/clients/technologies/adobeXd.png",
  },
  {
    name: "Sketch",
    features: [
      {
        icon: <FaApple />,
        title: "Mac-First Design",
        desc: "Native macOS app with optimized performance for Apple hardware.",
      },
      {
        icon: <FaVectorSquare />,
        title: "Symbols & Libraries",
        desc: "Reusable components and shared libraries for consistent design systems.",
      },
      {
        icon: <FaRulerCombined />,
        title: "Pixel Precision",
        desc: "Pixel-perfect vector editing with grid snapping and export presets.",
      },
      {
        icon: <FaCloud />,
        title: "Cloud Collaboration",
        desc: "Share documents and libraries via Sketch Cloud (limited real-time features).",
      },
      {
        icon: <FaTerminal />,
        title: "Developer Plugins",
        desc: "Extend functionality with plugins for data merging, accessibility, and more.",
      },
    ],
    useCases: [
      { name: "Mac-Based UI Design", image: "/clients/illustration1.svg" },
      { name: "Design System Creation", image: "/clients/illustration2.svg" },
      { name: "High-Fidelity Mockups", image: "/clients/illustration3.svg" },
      { name: "Icon & Asset Design", image: "/clients/illustration4.svg" },
      { name: "Plugin-Powered Workflows", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The digital design toolkit for macOS that revolutionized interface design with simplicity and power.",
    imageSrc: "/clients/technologies/sketch.svg",
  },
  {
    name: "InVision",
    features: [
      {
        icon: <FaHandshake />,
        title: "Design Collaboration",
        desc: "Cloud platform for feedback, user testing, and stakeholder reviews.",
      },
      {
        icon: <FaFilm />,
        title: "Advanced Prototyping",
        desc: "Create interactive animations and transitions with timeline-based editing.",
      },
      {
        icon: <FaBook />,
        title: "Design System Manager",
        desc: "Centralize UI components, docs, and guidelines for teams (DSM).",
      },
      {
        icon: <FaUserCheck />,
        title: "User Testing",
        desc: "Record feedback and heatmaps from real users via InVision Inspect.",
      },
      {
        icon: <FaSync />,
        title: "Sketch/Figma Sync",
        desc: "Import designs from other tools for prototyping and collaboration.",
      },
    ],
    useCases: [
      { name: "Enterprise Design Ops", image: "/clients/illustration1.svg" },
      { name: "Client Presentations", image: "/clients/illustration2.svg" },
      { name: "User Testing & Feedback", image: "/clients/illustration3.svg" },
      { name: "Design System Governance", image: "/clients/illustration4.svg" },
      { name: "Animation Prototyping", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The collaborative platform for design-driven teams to prototype, manage, and test digital products.",
    imageSrc: "/clients/technologies/invision.png",
  },
  {
    name: "Selenium",
    features: [
      {
        icon: <FaGlobe />,
        title: "Cross-Browser Support",
        desc: "Automates browsers like Chrome, Firefox, Safari, and Edge for broad compatibility.",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Language Agnostic",
        desc: "Supports Java, Python, C#, Ruby, JavaScript, and Kotlin for flexible integrations.",
      },
      {
        icon: <FaNetworkWired />,
        title: "Grid & Parallel Testing",
        desc: "Selenium Grid enables distributed and parallel test execution across machines.",
      },
      {
        icon: <FaPuzzlePiece />,
        title: "Extensible Architecture",
        desc: "Supports third-party integrations, plugins, and custom frameworks.",
      },
      {
        icon: <FaCogs />,
        title: "Mature Ecosystem",
        desc: "Backed by a large community, extensive documentation, and wide industry adoption.",
      },
    ],
    useCases: [
      { name: "Enterprise UI Testing", image: "/clients/illustration1.svg" },
      { name: "Cross-Browser Validation", image: "/clients/illustration2.svg" },
      { name: "CI/CD Integrations", image: "/clients/illustration3.svg" },
      {
        name: "Legacy Web App Automation",
        image: "/clients/illustration4.svg",
      },
      { name: "Custom Test Frameworks", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The de facto standard for browser automation with deep language and browser support.",
    imageSrc: "/clients/technologies/Selenium.png",
  },
  {
    name: "Cypress",
    features: [
      {
        icon: <FaBolt />,
        title: "Fast & Reliable",
        desc: "Runs directly in the browser for faster and more consistent end-to-end tests.",
      },
      {
        icon: <FaBug />,
        title: "Debuggable",
        desc: "Real-time reloading, time-travel debugging, and readable errors enhance developer productivity.",
      },
      {
        icon: <FaCodeBranch />,
        title: "All-in-One Testing",
        desc: "Supports unit, integration, and E2E testing out of the box.",
      },
      {
        icon: <FaSyncAlt />,
        title: "Automatic Waiting",
        desc: "No need for manual `waits` — Cypress waits for commands and assertions to complete.",
      },
      {
        icon: <FaPlug />,
        title: "Rich Plugin Ecosystem",
        desc: "Custom commands, reporting, code coverage, and visual testing via plugins.",
      },
    ],
    useCases: [
      { name: "Modern Web App Testing", image: "/clients/illustration1.svg" },
      { name: "CI-Friendly Automation", image: "/clients/illustration2.svg" },
      {
        name: "Developer-Centric Testing",
        image: "/clients/illustration3.svg",
      },
      { name: "Component Testing", image: "/clients/illustration4.svg" },
      { name: "Agile Teams & QA", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Modern testing for modern web applications — fast, debuggable, and developer-first.",
    imageSrc: "/clients/technologies/cypress.svg",
  },
  {
    name: "Playwright",
    features: [
      {
        icon: <FaLaptopCode />,
        title: "Cross-Browser Automation",
        desc: "Automates Chromium, Firefox, and WebKit with a single API.",
      },
      {
        icon: <FaSync />,
        title: "Auto-Wait & Retries",
        desc: "Smart waiting and retries for actions ensure reliable tests by default.",
      },
      {
        icon: <FaLock />,
        title: "Secure Context Isolation",
        desc: "Runs tests in isolated browser contexts for cleaner, parallel execution.",
      },
      {
        icon: <FaTools />,
        title: "Powerful CLI & Debugging",
        desc: "Code generation, screenshot tracing, and step-by-step debugging tools built-in.",
      },
      {
        icon: <FaRobot />,
        title: "Full Stack Support",
        desc: "Supports testing modern web apps including SPAs, PWAs, and server-rendered apps.",
      },
    ],
    useCases: [
      { name: "Headless Automation", image: "/clients/illustration1.svg" },
      { name: "CI/CD Test Pipelines", image: "/clients/illustration2.svg" },
      { name: "Multi-Browser Coverage", image: "/clients/illustration3.svg" },
      { name: "High-Fidelity Test Runs", image: "/clients/illustration4.svg" },
      { name: "JavaScript-First Testing", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "End-to-end testing across modern browsers with speed, power, and precision.",
    imageSrc: "/clients/technologies/Playwright.svg",
  },
  {
    name: "JUnit",
    features: [
      {
        icon: <FaJava />,
        title: "Java Native",
        desc: "The default unit testing framework for Java with deep JVM integration.",
      },
      {
        icon: <FaFlask />,
        title: "Annotation-Driven",
        desc: "Simplifies test lifecycle control with rich annotations like @Test, @BeforeEach, etc.",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Framework Integration",
        desc: "Works seamlessly with Maven, Gradle, Spring, and other Java ecosystems.",
      },
      {
        icon: <FaTasks />,
        title: "Parameterized Tests",
        desc: "Run the same test logic against different inputs with minimal boilerplate.",
      },
      {
        icon: <FaCogs />,
        title: "Mature Ecosystem",
        desc: "Long-standing support, tooling, IDE integration, and community resources.",
      },
    ],
    useCases: [
      { name: "Java Backend Testing", image: "/clients/illustration1.svg" },
      {
        name: "Spring Application Testing",
        image: "/clients/illustration2.svg",
      },
      { name: "CI with Gradle/Maven", image: "/clients/illustration3.svg" },
      { name: "Test-Driven Development", image: "/clients/illustration4.svg" },
      { name: "Legacy Code Refactoring", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "A staple of Java testing — simple, extensible, and battle-tested.",
    imageSrc: "/clients/technologies/Junit.png",
  },
  {
    name: "TestNG",
    features: [
      {
        icon: <FaToolbox />,
        title: "Advanced Testing Features",
        desc: "Supports data-driven, parallel, and group-based testing out of the box.",
      },
      {
        icon: <FaBoxes />,
        title: "Flexible Configuration",
        desc: "XML-based configurations for suites, dependencies, and parameters.",
      },
      {
        icon: <FaLayerGroup />,
        title: "Multiple Test Types",
        desc: "Built for unit, integration, functional, and end-to-end tests.",
      },
      {
        icon: <FaRoute />,
        title: "Method Dependency Control",
        desc: "Execute test methods based on configurable dependencies.",
      },
      {
        icon: <FaChartBar />,
        title: "Rich Reporting",
        desc: "Generates detailed HTML reports and integrates with CI tools.",
      },
    ],
    useCases: [
      { name: "Complex Test Suites", image: "/clients/illustration1.svg" },
      { name: "Parallel Test Execution", image: "/clients/illustration2.svg" },
      { name: "Enterprise Java Projects", image: "/clients/illustration3.svg" },
      { name: "Parameterized Tests", image: "/clients/illustration4.svg" },
      { name: "Custom Test Workflows", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Powerful Java testing with enhanced control, configuration, and reporting.",
    imageSrc: "/clients/technologies/test-ng.png",
  },
  {
    name: "Mocha",
    features: [
      {
        icon: <FaJsSquare />,
        title: "JavaScript Simplicity",
        desc: "A flexible, lightweight test runner for Node.js and browser environments.",
      },
      {
        icon: <FaPuzzlePiece />,
        title: "Customizable Framework",
        desc: "Choose your own assertion library, reporter, and mocking tools.",
      },
      {
        icon: <FaClock />,
        title: "Asynchronous Support",
        desc: "Natively handles async tests with `done()` and promises.",
      },
      {
        icon: <FaCode />,
        title: "Readable Test Syntax",
        desc: "Describes test cases with natural `describe` and `it` blocks.",
      },
      {
        icon: <FaCubes />,
        title: "Plugin Friendly",
        desc: "Supports integrations like Chai, Sinon, Istanbul, and more.",
      },
    ],
    useCases: [
      { name: "Node.js API Testing", image: "/clients/illustration1.svg" },
      { name: "Modular Microservices", image: "/clients/illustration2.svg" },
      { name: "Custom Assertion Logic", image: "/clients/illustration3.svg" },
      { name: "TDD for JavaScript", image: "/clients/illustration4.svg" },
      {
        name: "Integration with Chai/Sinon",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A minimalist JavaScript test runner with complete flexibility and ecosystem support.",
    imageSrc: "/clients/technologies/mocha.svg",
  },
  {
    name: "Jest",
    features: [
      {
        icon: <FaReact />,
        title: "Zero Config",
        desc: "Works out of the box with Babel, TypeScript, and most frontend frameworks.",
      },
      {
        icon: <FaMagic />,
        title: "Snapshot Testing",
        desc: "Capture component output and detect unintended changes with snapshots.",
      },
      {
        icon: <FaTools />,
        title: "Built-in Mocking",
        desc: "Mock modules, timers, and functions without external dependencies.",
      },
      {
        icon: <FaChartLine />,
        title: "Code Coverage",
        desc: "Integrated Istanbul support for detailed coverage reports.",
      },
      {
        icon: <FaLayerGroup />,
        title: "Multi-Project Runner",
        desc: "Easily manage tests for monorepos or large-scale apps with multiple configs.",
      },
    ],
    useCases: [
      { name: "React App Testing", image: "/clients/illustration1.svg" },
      {
        name: "Snapshot Regression Checks",
        image: "/clients/illustration2.svg",
      },
      { name: "Mock-Heavy Testing", image: "/clients/illustration3.svg" },
      { name: "CI/CD Friendly", image: "/clients/illustration4.svg" },
      { name: "TypeScript Projects", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "Delightful JavaScript testing with speed, coverage, and simplicity built-in.",
    imageSrc: "/clients/technologies/jest.svg",
  },
  {
    name: "Postman",
    features: [
      {
        icon: <FaPaperPlane />,
        title: "API Request Builder",
        desc: "Easily create, send, and test REST, GraphQL, and WebSocket requests.",
      },
      {
        icon: <FaFileCode />,
        title: "Automated Testing",
        desc: "Write test scripts using JavaScript to validate API responses with ease.",
      },
      {
        icon: <FaProjectDiagram />,
        title: "Collections & Workspaces",
        desc: "Organize APIs, tests, environments, and documentation in shareable collections.",
      },
      {
        icon: <FaUsersCog />,
        title: "Team Collaboration",
        desc: "Enable API-first workflows with versioning, comments, and role-based access.",
      },
      {
        icon: <FaSyncAlt />,
        title: "CI/CD Integrations",
        desc: "Integrate with pipelines using Newman CLI or API monitoring tools.",
      },
    ],
    useCases: [
      { name: "Manual API Testing", image: "/clients/illustration1.svg" },
      {
        name: "Automated Regression Testing",
        image: "/clients/illustration2.svg",
      },
      { name: "Mock Server Creation", image: "/clients/illustration3.svg" },
      { name: "API Documentation", image: "/clients/illustration4.svg" },
      {
        name: "Team-Based API Development",
        image: "/clients/illustration5.svg",
      },
    ],
    tagline:
      "A complete API development platform for testing, documentation, and collaboration.",
    imageSrc: "/clients/technologies/postman.svg",
  },
  {
    name: "SoapUI",
    features: [
      {
        icon: <FaSoap />,
        title: "SOAP & REST Testing",
        desc: "Robust support for testing both SOAP-based and RESTful web services.",
      },
      {
        icon: <FaChartPie />,
        title: "Data-Driven Testing",
        desc: "Run test cases with multiple inputs using external data sources like Excel or databases.",
      },
      {
        icon: <FaRobot />,
        title: "Automated Test Execution",
        desc: "Schedule and run test suites automatically or through CI/CD tools.",
      },
      {
        icon: <FaClipboardCheck />,
        title: "Advanced Assertions",
        desc: "Use XPath, JSONPath, and scripting for powerful response validations.",
      },
      {
        icon: <FaTools />,
        title: "Extensibility",
        desc: "Supports Groovy scripting for advanced test logic and custom workflows.",
      },
    ],
    useCases: [
      { name: "Enterprise SOAP APIs", image: "/clients/illustration1.svg" },
      {
        name: "Legacy System Integration",
        image: "/clients/illustration2.svg",
      },
      {
        name: "Data-Driven Test Scenarios",
        image: "/clients/illustration3.svg",
      },
      {
        name: "Regression Testing for APIs",
        image: "/clients/illustration4.svg",
      },
      { name: "Secure Service Testing", image: "/clients/illustration5.svg" },
    ],
    tagline:
      "The industry standard for functional and security testing of SOAP and REST APIs.",
    imageSrc: "/clients/technologies/soapui.png",
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
