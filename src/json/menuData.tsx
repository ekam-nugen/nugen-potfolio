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
        submenu: [
          { label: "How We Work", href: "/how-we-work" },
          { label: "Work With Top 1%", href: "/about/top-talent" },
        ],
      },
      {
        label: "How We Collaborate",
        submenu: [
          { label: "Staff Augmentation", href: "/about/staff-augmentation" },
          { label: "Fixed Cost", href: "/about/fixed-cost" },
          { label: "Agile Pods", href: "/about/agile-pods" },
        ],
      },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Services",
    submenu: [
      { label: "AI/ML/GenAI", href: "/services/ai-ml" },
      {
        label: "Data Engineering and Analytics",
        href: "/services/data-engineering",
      },
      { label: "Cloud Engineering", href: "/services/cloud-engineering" },
    ],
  },
  { label: "Technologies", href: "/technologies" },
  { label: "Case Study", href: "/case-studys" },
  { label: "Resources", href: "/resources" },
];
