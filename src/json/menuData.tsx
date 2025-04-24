export const headerData = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    submenu: [
      {
        label: "Company Profile",
        submenu: [
          { label: "Profile", href: "/about" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        label: "Why Us",
        submenu: [{ label: "How We Work", href: "/how-we-work" }],
      },
      { label: "Events", href: "/events" },
    ],
  },
  {
    label: "Services",
    submenu: [
      { label: "AI/ML/GenAI", href: "/intelligence" },
      {
        label: "Data Engineering and Analytics",
        href: "/services/data-engineering",
      },
      { label: "Cloud Engineering", href: "/services/cloud-engineering" },
    ],
  },
  { label: "Technologies", href: "/technologies" },
  { label: "Case Study", href: "/case-studys" },
  { label: "Contact Us", href: "/contact-us" },
];
