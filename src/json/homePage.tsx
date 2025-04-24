
interface Button {
    text: string;
    href: string;
    color: string;
  }
  
  interface Rating {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  
  interface Service {
    text: string;
    href: string;
    borderColor: string;
  }
  
  interface Event {
    logoSrc: string;
    logoAlt: string;
    hall: string;
    stand: string;
    date: string;
    location: string;
  }

interface Slide {
    title: string;
    subtitle: string;
    subheading: string;
    subheadingIcon?: { src: string; alt: string; width: number; height: number };
    button1: Button;
    button2: Button | null;
    rightContent: {
      type: "image" | "services" | "iconText" | "events";
      image?: {
        src: string;
        alt: string;
        width: number;
        height: number;
        text: string;
        button?: Button;
      };
      services?: { header: string; items: Service[]; button: Button };
      iconText?: {
        iconSrc: string;
        iconAlt: string;
        text: string;
        button: Button;
      };
      events?: { items: Event[]; button?: Button };
    };
    ratings?: Rating[];
    background: string;
  }
export const slides: Slide[] = [
    {
      title:
        'Award-Winning <span class="text-green-500">Tech Excellence</span>',
      subtitle: "Partner with India's top-rated development company.",
      subheading: "Trusted by industry leaders worldwide.",
      button1: {
        text: "Discover Services",
        href: "#",
        color: "bg-orange-500 hover:bg-orange-600",
      },
      button2: null,
      rightContent: {
        type: "services",
        services: {
          header: "Project-Based and Dedicated Teams For:",
          items: [
            {
              text: "AI/ML & GEN AI",
              href: "/ai-ml-development",
              borderColor: "border-blue-300",
            },
            {
              text: "Cloud",
              href: "/cloud-engineering",
              borderColor: "border-green-300",
            },
            {
              text: "Software Development",
              href: "/custom-software-development",
              borderColor: "border-yellow-300",
            },
            {
              text: "Quality Assurance",
              href: "/quality-assurance",
              borderColor: "border-purple-300",
            },
            {
              text: "UI/UX",
              href: "/uiux-design",
              borderColor: "border-purple-300",
            },
            {
              text: "Back-End",
              href: "/back-end",
              borderColor: "border-purple-300",
            },
          ],
          button: {
            text: "View All Services",
            href: "#",
            color: "bg-orange-500 hover:bg-orange-600",
          },
        },
      },
      ratings: [
        {
          src: "https://megasite.ua/cache/cache_image/d/d60aaf99feb42195ced60bde22d590fc.webp",
          alt: "Clutch",
          width: 90,
          height: 70,
        },
        {
          src: "https://www.g2.com/products/g2-seller-solutions/widgets/stars?color=white&type=read",
          alt: "G2",
          width: 110,
          height: 70,
        },
        {
          src: "https://i.ytimg.com/vi/f8vrTlBe0sc/maxresdefault.jpg",
          alt: "Google",
          width: 100,
          height: 70,
        },
      ],
      background: "bg-gradient-to-r from-white to-[#ffedd5]",
    },
    {
      title:
        'Outsourcing Mastery: <span class="text-green-500">Growth & Savings</span>',
      subtitle: "Your shortcut to growth and savings.",
      subheading: "Stop Outsourcing Fails. Start Fueling Success.",
      button1: {
        text: "Download Free Guide",
        href: "#",
        color: "bg-orange-500 hover:bg-orange-600",
      },
      button2: null,
      rightContent: {
        type: "iconText",
        iconText: {
          iconSrc:
            "https://www.ivybusiness.iastate.edu/files/2024/11/Photo-of-2024-Hackathon-2160x807-1.jpg",
          iconAlt: "Outsource Icon",
          text: "Don't miss out on the outsourcing revolution. <span class='text-green-500'>Download your free guide</span> and start winning today!",
          button: {
            text: "Download Guide",
            href: "/guides/free-outsourcing-guide",
            color: "bg-orange-500 hover:bg-orange-600",
          },
        },
      },
      background: "bg-gradient-to-r from-[#ffedd5] to-white",
    },
    {
      title:
        'Innovative Solutions for a <span class="text-green-500">Digital World</span>',
      subtitle: "Your one-stop-shop for all your web services needs.",
      subheading: "Start building your digital future today.",
      button1: {
        text: "Get Started",
        href: "#",
        color: "bg-orange-500 hover:bg-orange-600",
      },
      button2: {
        text: "Learn More",
        href: "#",
        color:
          "bg-white hover:bg-black text-black hover:text-white border-2 border-gray-200",
      },
      rightContent: {
        type: "image",
        image: {
          src: "https://plus.unsplash.com/premium_photo-1661277666101-01fb123f2a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMGNlbGVicmF0aW9uJTIwb2ZmaWNlfGVufDB8fDB8fHww",
          alt: "Digital Dashboard",
          width: 500,
          height: 375,
          text: "Transform your business with cutting-edge solutions.",
        },
      },
      background: "bg-gradient-to-r from-white to-[#fff1eb]",
    },
    {
      title:
        'Meet Us at <span class="text-green-500">Global Tech Events</span>',
      subtitle: "Innovate and grow with us at Seamless & GITEX 2025.",
      subheading: "Join us to explore new opportunities.",
      button1: {
        text: "Schedule a Meeting",
        href: "#",
        color: "bg-orange-500 hover:bg-orange-600",
      },
      button2: null,
      rightContent: {
        type: "events",
        events: {
          items: [
            {
              logoSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWu-PGsB-ldEQBJxLUrZI4Y_SqyvfIWDk4mg&s",
              logoAlt: "Seamless Digital Commerce",
              hall: "Hall 2",
              stand: "E48",
              date: "May 20 - 22, 2025",
              location: "Dubai, UAE",
            },
            {
              logoSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiafPpkf2MDAavXYMC1hhdY-omfvtsl2Jy3Q&s",
              logoAlt: "GITEX Europe",
              hall: "Hall 1.2",
              stand: "H1.2-03",
              date: "May 21 - 23, 2025",
              location: "Messe, Berlin, Germany",
            },
          ],
        },
      },
      background: "bg-gradient-to-r from-[#fef8e0] to-[#FFF3EE]",
    },
  ];