export const headerData = [
  {  
    label: "About Us",
    submenu: [
      {
        label: "Company Profile",
        submenu: [
          { label: "Profile", href: "/about" },
          { label: "Blog", href: "/about/blog" },
          { label: "CSR", href: "/about/csr" },
        ],
      },
      {
        label: "Why Us",
        submenu: [
          { label: "Free Trial", href: "/about/free-trial" },
          { label: "How We Work", href: "/about/how-we-work" },
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