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
      { label: "AI/ML/GenAI", href: "/services/intelligence" },
      {
        label: "Data Engineering and Analytics",
        href: "/services/data-analytics",
      },
      { label: "Cloud Engineering", href: "/services/cloud-engineering" },
      { label: "Blockchain", href: "/services/blockchain" },
      { label: "WordPress Maintenance", href: "/services/wordpress" },
      { label: "Web Development", href: "/services/webdevelopment" },
      { label: "CMS", href: "/services/cms" },
      { label: "UI & UX Design", href: "/services/uiux" },
      { label: "Customized App Development", href: "/services/appdevelopment" },
      { label: "Optimize Your Website", href: "/services/seo" },
    ],
  },
  { label: "Technologies", href: "/technologies" },
  { label: "Case Study", href: "/case-studys" },
  { label: "Contact Us", href: "/contact-us" },
];
