import FirstUser from "../../public/user1.png";
import SecondUser from "../../public/user2.png";
import ThirdUser from "../../public/user3.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

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
