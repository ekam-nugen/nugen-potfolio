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
      { name: "Content Management Systems", image: "/clients/illustration3.svg" },
      { name: "Data Warehousing", image: "/clients/illustration4.svg" },
      { name: "Business Intelligence", image: "/clients/illustration5.svg" },
      { name: "Financial Systems", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "MariaDB is a powerful, open-source relational database designed for high performance, scalability, and full MySQL compatibility.",
    imageSrc: "/clients/technologies/mariadb.svg",
  },{
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
      { name: "Single Page Applications (SPA)", image: "/clients/illustration4.svg" },
      { name: "Microservices Communication", image: "/clients/illustration5.svg" },
      { name: "Data Aggregation", image: "/clients/illustration6.svg" },
    ],
    tagline:
      "GraphQL is a query language and runtime for APIs, providing a flexible and efficient way to interact with data, supporting real-time updates and reducing data over-fetching.",
    imageSrc: "/clients/technologies/graphQL.png",
  }  
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
