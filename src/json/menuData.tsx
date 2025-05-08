// json/menuData.ts
import {
  Home,
  Info,
  Building2,
  BookOpen,
  Lightbulb,
  CalendarDays,
  Settings,
  Brain,
  BarChart3,
  Cloud,
  Blocks,
  Code,
  PanelLeft,
  Palette,
  Smartphone,
  Search,
  Layers3,
  PhoneCall,
  CaseSensitive,
} from "lucide-react";
import { BsWordpress } from "react-icons/bs";

export const headerData = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "About Us",
    icon: Info,
    submenu: [
      {
        label: "Company Profile",
        icon: Building2,
        submenu: [
          { label: "Profile", href: "/about", icon: BookOpen },
          { label: "Blog", href: "/blog", icon: BookOpen },
        ],
      },
      {
        label: "Why Us",
        icon: Lightbulb,
        submenu: [
          { label: "How We Work", href: "/how-we-work", icon: Lightbulb },
        ],
      },
      { label: "Events", href: "/events", icon: CalendarDays },
    ],
  },
  {
    label: "Services",
    href: "/services",
    icon: Settings,
    submenu: [
      { label: "AI/ML/GenAI", href: "/services/intelligence", icon: Brain },
      {
        label: "Data Engineering and Analytics",
        href: "/services/data-analytics",
        icon: BarChart3,
      },
      {
        label: "Cloud Engineering",
        href: "/services/cloud-engineering",
        icon: Cloud,
      },
      { label: "Blockchain", href: "/services/blockchain", icon: Blocks },
      {
        label: "WordPress Maintenance",
        href: "/services/wordpress",
        icon: BsWordpress,
      },
      {
        label: "Web Development",
        href: "/services/webdevelopment",
        icon: Code,
      },
      { label: "CMS", href: "/services/cms", icon: PanelLeft },
      { label: "UI & UX Design", href: "/services/uiux", icon: Palette },
      {
        label: "Customized App Development",
        href: "/services/appdevelopment",
        icon: Smartphone,
      },
      {
        label: "Optimize Your Website",
        href: "/services/seo",
        icon: Search,
      },
    ],
  },
  { label: "Technologies", href: "/technologies", icon: Layers3 },
  { label: "Case Study", href: "/case-study", icon: CaseSensitive },
  { label: "Contact Us", href: "/contact-us", icon: PhoneCall },
];
