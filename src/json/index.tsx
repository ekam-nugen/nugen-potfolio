import FirstUser from "../../public/user1.png";
import SecondUser from "../../public/user2.png";
import ThirdUser from "../../public/user3.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  Briefcase,
  Scissors,
  Users,
  Award,
  Building2,
  BarChart3,
  Star,
  FileBadge,
  ShieldCheck,
  Monitor,
  Globe,
  Smartphone,
  CheckCircle,
  Cloud,
  Database,
  Brain,
  PenTool,
  Sparkles,
  Code,
  BarChart2,
  MessageSquare,
  Zap,
  Wifi,
  TrendingUp,
  Shield,
  Bot,
  Cpu,
  Search,
  Brush,
  Rocket,
  Eye,
} from "lucide-react";
import { Service } from "../components/technologySection/technologiesTab";
import { FC } from "react";
import Image from "next/image";

interface ProcessItem {
  number: number;
  title: string;
  description: string;
  icon: FC<{ className?: string }>;
}

interface Competency {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}
interface ServiceAI {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link?: string;
}

export const UserProfiles = [
  { src: FirstUser, alt: "user1" },
  { src: SecondUser, alt: "user2" },
  { src: ThirdUser, alt: "user3" },
];

export const FooterSections = [
  {
    title: "Links",
    links: ["About Us", "Contact Us", "Services", "Blog"],
  },
  {
    title: "Support",
    links: ["FAQs", "Terms", "Privacy Policy", "Feedback"],
  },
  {
    title: "User Guide",
    links: ["Careers", "Testimonials", "News", "Events"],
  },
];

export const SocialLinks = [
  {
    icon: <FaTwitter />,
    label: "Twitter",
    href: "#",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "#",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "#",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "WordPress Maintenance",
    description: "Keep your WordPress site secure and up-to-date.",
    iconPath: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
    benefits: [
      "🔒 Security Updates",
      "⚙️ Performance Optimization",
      "📅 Regular Backups",
    ],
  },
  {
    id: 2,
    title: "CMS Development",
    description: "Flexible and scalable content management systems.",
    iconPath:
      "M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z",
    benefits: [
      "📝 Easy Content Editing",
      "🛠️ Custom Workflows",
      "🔗 Seamless Integrations",
    ],
  },
  {
    id: 3,
    title: "UI & UX Designing",
    description: "Crafting intuitive and engaging interfaces.",
    iconPath: "M4 8h16M4 16h16M12 12h.01M8 12h.01M16 12h.01",
    benefits: [
      "🎨 User-Centric Design",
      "🖌️ Consistent Aesthetics",
      "📊 Usability Testing",
    ],
  },
  {
    id: 4,
    title: "Customized Web App Development",
    description: "Tailored web apps to meet your needs.",
    iconPath:
      "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    benefits: [
      "🛠️ Bespoke Solutions",
      "⚡ High Performance",
      "🔒 Secure Architecture",
    ],
  },
  {
    id: 5,
    title: "Optimize Your Website",
    description: "Boost speed and SEO performance.",
    iconPath:
      "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z",
    benefits: [
      "🚀 Faster Load Times",
      "📈 SEO Enhancements",
      "🛠️ Code Optimization",
    ],
  },
  {
    id: 6,
    title: "Customized App Development",
    description: "Bespoke mobile apps for your business.",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    benefits: [
      "📱 Native & Cross-Platform",
      "🎨 Modern UI/UX",
      "⚡ Scalable Solutions",
    ],
  },
  {
    id: 7,
    title: "Web Design & Development",
    description: "Stunning and functional websites.",
    iconPath:
      "M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm2 4v10h12V7H6z",
    benefits: [
      "🌐 Responsive Design",
      "🖼️ Visually Appealing",
      "🛠️ Robust Functionality",
    ],
  },
];

export const evoultionData = [
  {
    year: "2010",
    description:
      "Nugen was founded in India, igniting a journey to deliver innovative web and mobile solutions, bridging the gap in digital excellence across global markets.",
    image:
      "https://media.istockphoto.com/id/1144645520/photo/busy-call-centre-in-operation.webp?a=1&b=1&s=612x612&w=0&k=20&c=T6ZwyGztBHa-dwPacz2Vc8kFnh4L1p0W1rsWO4CDJQA=",
  },
  {
    year: "2015",
    description:
      "Secured ISO 9001 and 27001 certifications, establishing Nugen as a trusted leader in quality management and data security worldwide.",
    image:
      "https://media.istockphoto.com/id/923222068/photo/senior-businesswoman-explaining-strategy-at-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfV2b-QznBlfclBW-RiHY-lzjgxYl2FdzcEAy5cRWYc=",
  },
  {
    year: "2022",
    description:
      "Earned AWS Partner Recognition, showcasing Nugen’s expertise in cloud deployment and empowering businesses with scalable digital solutions.",
    image:
      "https://media.istockphoto.com/id/923222068/photo/senior-businesswoman-explaining-strategy-at-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfV2b-QznBlfclBW-RiHY-lzjgxYl2FdzcEAy5cRWYc=",
  },
];

export const aboutUsData = [
  {
    name: "AI/ML/GenAI",
    color: "border-green-500",
    target: "view-ai-ml",
  },
  {
    name: "Web & Mobile Development",
    color: "border-blue-500",
    target: "view-backend-development",
  },
  {
    name: "Custom Software Development",
    color: "border-purple-500",
    target: "view-frameworks",
  },
  {
    name: "E-commerce",
    color: "border-orange-500",
    target: "view-cms",
  },
  {
    name: "UI/UX",
    color: "border-pink-500",
    target: "view-design",
  },
  {
    name: "Cloud Solutions",
    color: "border-teal-500",
    target: "view-cloud",
  },
  {
    name: "Data Science & Analytics",
    color: "border-indigo-500",
    target: "view-warehousing",
  },
];

export const industriesData = [
  {
    name: "Information Technology",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower1.svg",
    alt: "Information Technology",
  },
  {
    name: "Healthcare",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower2.svg",
    alt: "Healthcare",
  },
  {
    name: "Retail and E-commerce",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower3.svg",
    alt: "Retail and E-commerce",
  },
  {
    name: "Media & Entertainment",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower6.svg",
    alt: "Media & Entertainment",
  },
  {
    name: "Financial Services",
    image:
      "https://www.capitalnumbers.com/images/staff-augmentation/empower4.svg",
    alt: "Financial Services",
  },
];

export const logos = [
  "/clients/ivoyant.png",
  "/clients/quay.png",
  "/clients/blinkPayment.svg",
  "/clients/capitalNumber.png",
  "/clients/simply5.svg",
  "/clients/protaxCanada.png",
  "/clients/Scott.png",
  "/clients/ganpatiLogo.jpeg",
  "/clients/sunriseIntegration.jpg",
  "/clients/indiaCar.png",
  "/clients/madEngine.webp",
  "/clients/insideInjuries.png",
  "/clients/Qudos.png",
  "/clients/luckyR.jpeg",
  "/clients/magicEdt.jpeg",
  "/clients/dapt.png",
  "/clients/cloudways.webp",
  "/clients/optumLogo.png",
  "/clients/skeepLogo.webp",
];

export const faqData = [
  {
    question:
      "Which Programming Languages Does Nugen IT Services Specialize In?",
    answer:
      "Nugen IT Services excels in programming languages like Python, Java, JavaScript, C#, and more for application development.",
  },
  {
    question: "How Does Nugen IT Services Support Mobile Development?",
    answer:
      "Nugen IT Services provides expertise in Java, React Native, Xamarin, and other technologies for Android and iOS development.",
  },
  {
    question:
      "What Cloud and Containerization Technologies Does Nugen IT Services Offer?",
    answer:
      "Nugen IT Services offers AWS, Azure, Google Cloud, Docker, and Kubernetes for cloud services and deployment.",
  },
  {
    question: "Can Nugen IT Services Assist With AI and ML Projects?",
    answer:
      "Yes, Nugen IT Services leads in AI and ML with TensorFlow, PyTorch, and other frameworks for innovative solutions.",
  },
  {
    question: "What E-Commerce Support Is Available at Nugen IT Services?",
    answer:
      "Nugen IT Services offers solutions with Magento, Shopify, WooCommerce, and other platforms for online storefronts.",
  },
  {
    question: "What Web Development Frameworks Does Nugen IT Services Use?",
    answer:
      "Nugen IT Services uses Node.js, .NET, Spring, Django, and Laravel for back-end development.",
  },
  {
    question: "How Is Data Science and Analytics Approached?",
    answer:
      "Nugen IT Services uses Snowflake, Redshift, Apache Spark, and Tableau for data storage, processing, and visualization.",
  },
  {
    question: "Does Nugen IT Services Offer Blockchain Development?",
    answer:
      "Yes, offering blockchain services with Ethereum, Hyperledger Fabric, and smart contract development.",
  },
  {
    question: "What UI/UX Design Support Is Provided?",
    answer:
      "Nugen IT Services uses Figma, Adobe XD, and Sketch, focusing on accessibility and user-friendly design.",
  },
  {
    question: "How Does Nugen IT Services Ensure Software Quality?",
    answer:
      "Through manual and automated testing with Selenium, Cypress, Postman, and JMeter for quality and performance.",
  },
];

export const stats = [
  { icon: <Briefcase size={22} />, title: "Public Listed*", subtitle: "BSE" },
  { icon: <Scissors size={22} />, title: "2012+", subtitle: "Established" },
  {
    icon: <ShieldCheck size={22} />,
    title: "500+",
    subtitle: "Skilled Employees",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "50+",
    subtitle: "Technologies Supported",
  },
  { icon: <Users size={22} />, title: "250+", subtitle: "Clients Worldwide" },
  {
    icon: <Award size={22} />,
    title: "50+",
    subtitle: "Awards in the Last 11 Years",
  },
  {
    icon: <Building2 size={22} />,
    title: "02",
    subtitle: "Development Centers",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "30+%",
    subtitle: "YOY Organic Revenue Growth",
  },
  { icon: <Star size={22} />, title: "300+", subtitle: "Five Star Reviews" },
  {
    icon: <FileBadge size={22} />,
    title: "ISO 9001 & ISO 27001",
    subtitle: "Certified",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "SOC 2 Type II",
    subtitle: "Certified",
  },
  {
    icon: (
      <Image
        src="/salesforce.svg"
        alt="Salesforce"
        className="w-5 h-5"
        width={20}
        height={20}
      />
    ),
    title: "Salesforce",
    subtitle: "Partner",
  },
  {
    icon: (
      <Image
        src="/adobe.svg"
        alt="Adobe"
        className="w-5 h-5"
        width={20}
        height={20}
      />
    ),
    title: "Adobe",
    subtitle: "Partner",
  },
  {
    icon: (
      <Image
        src="/microsoft.svg"
        alt="Microsoft"
        className="w-5 h-5"
        width={20}
        height={20}
      />
    ),
    title: "Microsoft",
    subtitle: "Partner",
  },
];

export const servicesTechData: Service[] = [
  {
    id: "digital-engineering",
    title: "Digital Engineering",
    tabs: [
      {
        id: "csd",
        name: "Custom Software Development",
        icon: Monitor,
        items: [
          {
            title: "Bespoke Solutions for Unique Business Needs",
            description:
              "Unlock the full potential of custom software tailored exclusively for your business needs. Our bespoke solutions are crafted to streamline operations, enhance efficiency, and drive growth, ensuring you stay ahead in the competitive market.",
          },
          {
            title: "Robust Enterprise Systems",
            description:
              "Elevate your large organization with our enterprise systems designed for complex processes and workflows. Experience unparalleled reliability and scalability tailored to meet the demands of your business.",
          },
          {
            title: "Automation Tools",
            description:
              "Simplify and automate your operations with our cutting-edge tools. Increase efficiency, reduce errors, and free up valuable time for strategic tasks, pushing your business towards new heights of productivity.",
          },
        ],
        link: {
          href: "/custom-software-development",
          text: "Explore Custom Software Development",
        },
      },
      {
        id: "cwd",
        name: "Custom Web Development",
        icon: Globe,
        items: [
          {
            title: "Dynamic Websites",
            description:
              "Create a stunning online presence with our engaging, interactive websites. Stand out from the competition and captivate your audience with a seamless web experience.",
          },
          {
            title: "E-commerce Platforms",
            description:
              "Launch your online store with our customized e-commerce solutions. Enjoy secure payment processing, efficient inventory management, and a smooth shopping experience that converts visitors into loyal customers.",
          },
          {
            title: "Content Management Systems (CMS)",
            description:
              "Manage your website content effortlessly with our CMS solutions. Keep your site fresh and up-to-date easily, catering to the dynamic needs of your digital audience.",
          },
        ],
        link: {
          href: "/web-development",
          text: "Discover Our Web Development Services",
        },
      },
      {
        id: "mobile-app",
        name: "Mobile App Development",
        icon: Smartphone,
        items: [
          {
            title: "iOS & Android Apps",
            description:
              "Extend your reach with mobile apps for the major platforms. Connect with your audience on their favorite devices with our compelling iOS and Android app solutions.",
          },
          {
            title: "Cross-Platform Solutions",
            description:
              "Maximize your app's reach without compromising on quality. Our cost-effective, cross-platform solutions ensure your app performs seamlessly across multiple devices.",
          },
          {
            title: "App Maintenance",
            description:
              "Stay ahead in the app game with our continuous support and updates. Keep your app competitive with the latest features and optimizations.",
          },
        ],
        link: { href: "/mobile-app", text: "Dive into Mobile App Development" },
      },
      {
        id: "qa",
        name: "Quality Assurance (QA)",
        icon: CheckCircle,
        items: [
          {
            title: "Automated Testing",
            description:
              "Ensure your software is delivered error-free and on time with our automated testing services. Fast, reliable, and comprehensive, our testing processes guarantee quality.",
          },
          {
            title: "Manual Testing",
            description:
              "Our meticulous manual testing services complement automated processes, ensuring the highest standards of quality and functionality for your software.",
          },
        ],
        link: {
          href: "/testing-qa",
          text: "Ensure Quality with Our Testing Services",
        },
      },
    ],
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    tabs: [
      {
        id: "cloud",
        name: "Cloud Engineering",
        icon: Cloud,
        items: [
          {
            title: "Cloud Migration",
            description:
              "Move your data and applications to the cloud seamlessly with our expert guidance. Enjoy the benefits of flexibility, scalability, and efficiency with our cloud migration services.",
          },
          {
            title: "Cloud Infrastructure Management",
            description:
              "Optimize your cloud resources with our efficient management services. Ensure high performance, reliability, and cost-effectiveness in your cloud operations.",
          },
        ],
        link: {
          href: "/cloud-engineering",
          text: "Elevate Your Business with Cloud Solutions",
        },
      },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering and Analytics",
    tabs: [
      {
        id: "dataEn",
        name: "Data Engineering and Analytics",
        icon: Database,
        items: [
          {
            title: "Data Integration",
            description:
              "Harness the power of your data by integrating multiple sources for a comprehensive analysis. Make informed decisions with a holistic view of your business data.",
          },
          {
            title: "Data Warehousing",
            description:
              "Efficiently store and retrieve your data with our scalable data warehousing solutions. Empower your business with fast, reliable access to critical information.",
          },
          {
            title: "Data Visualization",
            description:
              "Transform data into actionable insights with our data visualization services. Make complex data easily understandable and accessible for decision-making.",
          },
          {
            title: "Predictive Analytics",
            description:
              "Anticipate future trends and make informed decisions with our predictive analytics services. Stay ahead of the curve by understanding what’s next for your business.",
          },
        ],
        link: {
          href: "/data-engineering",
          text: "Unlock Insights with Our Data Services",
        },
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI/ML/GenAI",
    tabs: [
      {
        id: "aiml",
        name: "AI/ML/GenAI",
        icon: Brain,
        items: [
          {
            title: "AI-Driven Analytics",
            description:
              "Empower your business with advanced analytics powered by AI. Make data-driven decisions with precision, enhancing your strategic capabilities.",
          },
          {
            title: "Machine Learning Solutions",
            description:
              "Automate and improve processes with our machine learning solutions. Experience the transformative power of systems that learn and adapt to add value continuously.",
          },
          {
            title: "Generative AI Applications",
            description:
              "Push the boundaries of innovation with our generative AI tools. From content creation to problem-solving, explore new possibilities and solutions for your business.",
          },
        ],
        link: {
          href: "/ai-ml-development",
          text: "Innovate with AI and Machine Learning",
        },
      },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    tabs: [
      {
        id: "uiux",
        name: "UI/UX Design",
        icon: PenTool,
        items: [
          {
            title: "User Interface Design",
            description:
              "Craft an engaging user experience with our UI design services. Attract and retain customers with beautiful, functional designs that speak directly to their needs.",
          },
          {
            title: "Prototyping & Wireframing",
            description:
              "Visualize your project with our prototyping and wireframing services. Make informed decisions and refine your ideas before committing to full-scale development.",
          },
        ],
        link: {
          href: "/uiux-design",
          text: "Design Your Success with Our UI/UX Services",
        },
      },
    ],
  },
  {
    id: "emerging-tech",
    title: "Emerging Tech",
    tabs: [
      {
        id: "et",
        name: "Emerging Tech",
        icon: Sparkles,
        items: [
          {
            title: "AR/VR",
            description:
              "Immerse your customers in stunning AR/VR environments. Whether for enhanced customer engagement, realistic training, or educational simulations, our AR/VR solutions open new worlds of possibilities.",
          },
          {
            title: "Blockchain",
            description:
              "Secure your operations with our blockchain development services. From decentralized applications to transparent systems, embrace the future of technology with blockchain.",
          },
        ],
        links: [
          { href: "/ar-vr-development", text: "Discover AR/VR Magic" },
          { href: "/blockchain", text: "Explore Blockchain Solutions" },
        ],
      },
    ],
  },
];

export const services: ServiceAI[] = [
  {
    id: "ai-software",
    title: "AI Software Development",
    description:
      "We develop custom software from scratch, integrating AI functionalities tailored to your needs. Our comprehensive AI solutions enhance automation, deliver personalized experiences, and provide advanced insights.",
    icon: Code,
    link: "https://www.capitalnumbers.com/custom-software-development.php",
  },
  {
    id: "ai-ml-integration",
    title: "AI & ML Integration",
    description:
      "Hire our AI developers to integrate AI and ML functionalities into your existing systems. We customize solutions to enhance workflows, improve decision-making, and drive efficiency.",
    icon: Cpu,
  },
  {
    id: "generative-ai",
    title: "Generative AI Development",
    description:
      "Experience the power of Generative AI with our tailored development services. From AI-driven content creation to intelligent automation, we build innovative solutions.",
    icon: Bot,
    link: "/generative-ai-development.php",
  },
  {
    id: "ai-bi",
    title: "AI-Driven Business Intelligence",
    description:
      "Implement AI into your BI systems with our expertise in developing AI models for predictions, insights, and recommendations to make data-driven decisions.",
    icon: BarChart2,
  },
  {
    id: "ai-ml-consulting",
    title: "AI & ML Consulting",
    description:
      "Get our consulting services to identify AI and ML integration opportunities for predictive analytics, process automation, and strategic decision-making.",
    icon: MessageSquare,
  },
  {
    id: "ai-ml-cloud",
    title: "AI & ML Cloud Services",
    description:
      "Enhance your business with scalable AI & ML cloud solutions that reduce costs, eliminate errors, and provide real-time analytics for better outcomes.",
    icon: Cloud,
  },
  {
    id: "openai-service",
    title: "OpenAI as a Service",
    description:
      "Implement OpenAI's cutting-edge models into your applications to improve automation, enhance decision-making, and elevate user interactions.",
    icon: Brain,
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Forecasting",
    description:
      "Our AI developers build smart solutions using advanced models to anticipate trends, optimize operations, and make data-driven decisions.",
    icon: TrendingUp,
  },
  {
    id: "ai-iot",
    title: "AI-based IoT",
    description:
      "Integrate AI with IoT for real-time insights, predictive maintenance, and automated processes to enhance efficiency and reduce downtime.",
    icon: Wifi,
  },
  {
    id: "self-learning",
    title: "Self-Learning Analytics Tool",
    description:
      "Build self-learning analytics tools that integrate data-driven insights into customer preferences for personalized products and services.",
    icon: Zap,
  },
  {
    id: "data-support",
    title: "Data-related Support for AI/ML",
    description:
      "We provide data-related support through advanced data engineering services to ensure high-quality datasets for optimized AI/ML algorithms.",
    icon: Database,
    link: "https://www.capitalnumbers.com/data-engineering.php",
  },
  {
    id: "ai-optimization",
    title: "AI Solution Support & Optimization",
    description:
      "Ensure your AI solutions perform at their best with continuous monitoring, fine-tuning, and integration of the latest advancements.",
    icon: Shield,
  },
];

export const processItems: ProcessItem[] = [
  {
    number: 1,
    title: "AI Product Discovery",
    description:
      "We identify your business needs and explore potential AI solutions. Our custom AI development team conducts thorough discussions to gather requirements and define the scope, ensuring the AI product aligns with your strategic goals and delivers value.",
    icon: Search,
  },
  {
    number: 2,
    title: "Data Cleaning",
    description:
      "We collect raw data and clean it to remove errors and inconsistencies. This step ensures the dataset is accurate and reliable, forming a solid foundation for the AI/ML models.",
    icon: Brush,
  },
  {
    number: 3,
    title: "Data Preparation",
    description:
      "We preprocess and structure the cleaned data. Our AI developers transform the data into a suitable format for analysis, enhancing the accuracy and reliability of AI models.",
    icon: Database,
  },
  {
    number: 4,
    title: "AI/ML Model Training",
    description:
      "Our custom AI/ML development team trains the models using the prepared data. We use advanced algorithms and machine learning techniques to develop models that provide predictive analytics, automate processes, and deliver actionable insights.",
    icon: Brain,
  },
  {
    number: 5,
    title: "AI Product Deployment",
    description:
      "We deploy the AI models into your business environment. Our team ensures seamless integration with your existing systems, providing a smooth transition and immediate operational benefits.",
    icon: Rocket,
  },
  {
    number: 6,
    title: "AI Model Monitoring",
    description:
      "We continuously monitor the deployed AI models to ensure optimal performance. Our AI software development services include ongoing support, ensuring necessary adjustments and improvements are made to maintain and enhance the effectiveness of your AI solutions.",
    icon: Monitor,
  },
];

export const competencies: Competency[] = [
  {
    icon: Sparkles,
    title: "Generative AI",
    content:
      'Our AI developers explore limitless opportunities with <Link href="/generative-ai-development" className="text-blue-600 hover:underline">Generative AI</Link>, using strong technical knowledge around foundational models like GPT-4. We create high-quality applications, code, images, content, and other innovative solutions, delivering exceptional results for your business.',
  },
  {
    icon: BarChart2,
    title: "Data Science",
    content:
      "Automate and operationalize your data science models with our advanced AI ML development solutions. Our AI and data science consultants integrate these technologies to automate data interpretation and decision-making processes, resulting in improved performance and accelerated growth.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    content:
      "We are proficient in Natural Language Processing (NLP), enabling machines to understand and interact with human language. Our developers build models for sentiment analysis, chatbots, language translation, and text summarization, improving customer interactions and automating communication tasks.",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    content:
      "Our expertise in deep learning involves using neural networks to tackle complex problems. We apply these techniques to image and speech recognition, autonomous systems, and predictive analytics, helping businesses innovate and achieve technological advancements.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    content:
      "Our AI developers have strong capabilities in computer vision, allowing systems to interpret and act on visual data. We create applications for image classification, object detection, facial recognition, and video analytics, enhancing efficiency and safety across industries.",
  },
  {
    icon: Bot,
    title: "Robotic Process Automation",
    content:
      "Our AI/ML developers have extensive experience in Robotic Process Automation (RPA), automating repetitive tasks to improve productivity and accuracy. We combine RPA with AI's cognitive ability to optimize business processes, reduce operational costs, and more.",
  },
];
