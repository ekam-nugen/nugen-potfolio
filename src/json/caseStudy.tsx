import blinlPayment from "../../public/projects/image-2.webp";
import optum from "../../public/projects/image-13.webp";
import CloudWays from "../../public/projects/image-15.webp";
import InsideInjuries from "../../public/projects/image-38.webp";
import Qudos from "../../public/projects/image-36.webp";
import LuckyRhino from "../../public/projects/image-33.webp";
// import magicEdtech from "../../public/projects/image-31.webp";
// import dapt from "../../public/projects/image-28.webp";
// import skeep from "../../public/projects/image-25.webp";
// import Omnumi from "../../public/projects/image-22.webp";
// import Rize from "../../public/projects/image-17.webp";
// import madEngine from "../../public/projects/image-9.webp";
// import ganpatis from "../../public/projects/image.webp";
// import FarahSanjana from "../../public/projects/image-7.webp";
// import Scottdunn from "../../public/projects/image-4.webp";
// import Simply5 from "../../public/projects/Simply5-1024x1024-1.webp";
// import ick from "../../public/projects/ick-1024x1024-1.webp";
// import protax from "../../public/projects/protax-canada-1-1024x1024-1.webp";
// import quay from "../../public/projects/image-11.webp";

const caseStudies = [
  {
    id: 1,
    badge: "Case Studies",
    title: "Cloud Ways",
    description:
      "Cloudways is a managed cloud hosting platform offering flexible solutions for developers, businesses, and agencies. It supports major cloud providers like AWS, Google Cloud, and DigitalOcean, enabling users to deploy and scale web applications with ease. Features include one-click application installations, automated backups, robust security, and optimized performance. Cloudways focuses on simplifying hosting while maintaining reliability and performance.",
    tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
    buttonText: "Read More",
    image: CloudWays,
    link: "/case-study-single?id=1&title=cloud-ways",
  },
  {
    id: 2,
    badge: "Case Studies",
    title: "Optum",
    description:
      "Optum is a healthcare services company offering a broad range of services including healthcare management, pharmacy services, and financial health tools. It helps individuals manage medical expenses through accounts like HSAs and FSAs, provides home delivery for prescriptions, and offers telehealth services. The platform aims to simplify healthcare with integrated solutions, serving individuals, employers, and healthcare providers.",
    tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
    buttonText: "Read More",
    image: optum,
    link: "/case-study-single?id=2&title=optum",
  },
  {
    id: 3,
    badge: "Case Studies",
    title: "Blink Payment",
    description:
      "Blink Payment is a UK-based payment platform offering various solutions for businesses. These include card payments, open banking, direct debits, payment links, virtual terminals, and digital wallets like Apple Pay and Google Pay. Their platform enables seamless transactions, with features like detailed reporting, reconciliation, and integrations with accounting software (QuickBooks, Xero). Blink Payment aims to simplify payment processes, improve cash flow, and enhance customer experience with secure and efficient payment management.",
    tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
    buttonText: "Read More",
    image: blinlPayment,
    link: "/case-study-single?id=3&title=blink-payment",
  },
  {
    id: 4,
    badge: "Case Studies",
    title: "Inside Injuries",
    description:
      "Inside Injuries is a digital platform that provides in-depth analysis of injuries sustained by professional athletes. It combines data, analysis, and expert opinions to help individuals better understand injury recovery, rehabilitation, and prevention. It offers detailed breakdowns of injuries and provides valuable insights for both athletes and healthcare professionals.",
    tags: ["React", "Web App", "Web Admin", "Node.js", "MongoDB"],
    buttonText: "Read More",
    image: InsideInjuries,
    link: "/case-study-single?id=4&title=inside-injuries",
  },
  {
    id: 5,
    badge: "Case Studies",
    title: "Qudos",
    description:
      "Qudos is a performance management platform that helps organizations track, analyze, and improve employee performance. It enables businesses to set objectives, monitor progress, and provide feedback to employees, fostering a culture of continuous improvement. The platform supports HR departments in making data-driven decisions about employee development and performance.",
    tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
    buttonText: "Read More",
    image: Qudos,
    link: "/case-study-single?id=5&title=qudos",
  },
  {
    id: 6,
    badge: "Case Studies",
    title: "Lucky Rhino",
    description:
      "Lucky Rhino is a gaming and entertainment platform that offers a wide variety of online games and betting options. The platform provides users with a secure and engaging environment to play games, place bets, and win prizes. Lucky Rhino aims to create an exciting, user-friendly gaming experience with a focus on customer satisfaction.",
    tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
    buttonText: "Read More",
    image: LuckyRhino,
    link: "/case-study-single?id=6&title=lucky-rhino",
  },
  // {
  //   id: 7,
  //   badge: "Case Studies",
  //   title: "Magic Edtech",
  //   description:
  //     "Magic Edtech provides a comprehensive educational platform offering courses, tutoring services, and interactive learning experiences. It includes a vast library of resources, including video lectures, quizzes, and assignments. Magic Edtech aims to make learning engaging and accessible to students worldwide.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: magicEdtech,
  //   link: "/case-studies/magic-edtech",
  // },
  // {
  //   id: 8,
  //   badge: "Case Studies",
  //   title: "Dapt",
  //   description:
  //     "Dapt is a productivity and task management platform designed to help individuals and teams stay organized. It allows users to create, prioritize, and track tasks and projects. Dapt aims to boost productivity by providing an intuitive and easy-to-use interface that helps users stay on top of their tasks.",
  //   tags: ["React", "Web App", "Web Admin", "Node.js", "MongoDB"],
  //   buttonText: "Read More",
  //   image: dapt,
  //   link: "/case-studies/dapt",
  // },
  // {
  //   id: 9,
  //   badge: "Case Studies",
  //   title: "Skeep",
  //   description:
  //     "Skeep is a fitness and wellness platform offering personalized workout plans, nutrition tracking, and health management tools. Users can track their progress, set goals, and receive tailored fitness recommendations. Skeep aims to help individuals lead healthier, more active lives through technology.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: skeep,
  //   link: "/case-studies/skeep",
  // },
  // {
  //   id: 10,
  //   badge: "Case Studies",
  //   title: "Omnumi",
  //   description:
  //     "Omnumi is a social networking and communication platform designed to connect people through shared interests, hobbies, and activities. It offers tools for messaging, group chats, and event organizing, making it easy for users to meet like-minded individuals.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: Omnumi,
  //   link: "/case-studies/omnumi",
  // },
  // {
  //   id: 11,
  //   badge: "Case Studies",
  //   title: "Rize",
  //   description:
  //     "Rize is a digital platform designed for financial planning and wealth management. It provides users with tools to track their income, expenses, and investments, offering insights and advice to help users achieve their financial goals.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: Rize,
  //   link: "/case-studies/rize",
  // },
  // {
  //   id: 12,
  //   badge: "Case Studies",
  //   title: "Mad Engine",
  //   description:
  //     "Mad Engine is a clothing and fashion brand focused on providing high-quality apparel for active individuals. The platform offers a wide range of styles, from casual wear to performance gear, catering to various tastes and needs. Mad Engine aims to offer comfortable and stylish clothing for people who lead active lifestyles.",
  //   tags: ["React", "Web App", "Web Admin", "Node.js", "MongoDB"],
  //   buttonText: "Read More",
  //   image: madEngine,
  //   link: "/case-studies/mad-engine",
  // },
  // {
  //   id: 13,
  //   badge: "Case Studies",
  //   title: "Ganpatis",
  //   description:
  //     "Ganpatis is an online platform for purchasing and customizing religious idols, specifically focusing on eco-friendly Ganesha idols. The platform offers a variety of designs and allows customers to select, customize, and purchase idols for religious ceremonies and celebrations.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js],
  //   buttonText: "Read More",
  //   image: ganpatis,
  //   link: "/case-studies/ganpatis",
  // },
  // {
  //   id: 14,
  //   badge: "Case Studies",
  //   title: "Farah Sanjana",
  //   description:
  //     "Farah Sanjana is an e-commerce platform for a high-end fashion brand that offers clothing, accessories, and jewelry. The platform focuses on delivering a luxurious shopping experience with features such as customized recommendations, curated collections, and seamless checkout.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: FarahSanjana,
  //   link: "/case-studies/farah-sanjana",
  // },
  // {
  //   id: 15,
  //   badge: "Case Studies",
  //   title: "Scott Dunn",
  //   description:
  //     "Scott Dunn is a luxury travel agency offering personalized vacation experiences. The platform allows users to book custom travel packages, including private villas, guided tours, and luxury cruises. Scott Dunn focuses on providing a bespoke travel experience tailored to each customer's needs.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: Scottdunn,
  //   link: "/case-studies/scott-dunn",
  // },
  // {
  //   id: 16,
  //   badge: "Case Studies",
  //   title: "Simply5",
  //   description:
  //     "Simply5 is an e-commerce platform focused on simplifying the buying process for customers. The platform offers a variety of products at competitive prices with easy navigation, secure payments, and fast delivery.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: Simply5,
  //   link: "/case-studies/simply5",
  // },
  // {
  //   id: 17,
  //   badge: "Case Studies",
  //   title: "India Car Kharido",
  //   description:
  //     "India Car Kharido is an online platform for purchasing and selling cars. The platform allows users to browse through various car listings, compare prices, and make secure transactions. It also provides reviews and ratings to help buyers make informed decisions.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: ick,
  //   link: "/case-studies/india-car-kharido",
  // },
  // {
  //   id: 18,
  //   badge: "Case Studies",
  //   title: "Protax Canada",
  //   description:
  //     "Protax Canada is an online platform providing tax services for individuals and businesses in Canada. The platform allows users to file taxes, calculate refunds, and access expert tax advice.",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   buttonText: "Read More",
  //   image: protax,
  //   link: "/case-studies/protax-canada",
  // },
  // {
  //   id: 19,
  //   badge: "Case Studies",
  //   title: "Quay",
  //   tags: ["NextJS", "Web App", "Web Admin", "React", "Node.js"],
  //   description:
  //     "Quay is an eyewear brand offering stylish sunglasses, prescription glasses, and blue-light glasses for both men and women. They focus on fashion-forward designs, with categories like aviator, square, cat-eye, and polarized lenses. Additionally, Quay provides accessories and offers special deals, including prescription glasses at discounted prices. The brand is popular for its trendy eyewear and direct-to-consumer approach, with free shipping on orders over $50.",
  //   image: quay,
  //   buttonText: "Read More",
  //   link: "/case-studies/protax-canada",
  // },
];

export default caseStudies;
