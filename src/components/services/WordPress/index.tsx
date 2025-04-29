import BlogSection from "../../blog";
import TestimonialStatic from "../../caseStudy/testimonialStatic";
import ClientSlider from "../../technologySection/clientSection";
import ContactUsSection from "../../technologySection/contactSection";
import TechnologyShowcase from "../../technologySection/launguageSection";
import { FAQSection } from "../../technologySection/questionSection";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import DiscussProject from "../AI_Ml/DiscussProject";
import AIMLBanner from "../AI_Ml/HeroAI";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import * as LucideIcons from "lucide-react";

const WordPressMaintenance = () => {
  const wordpressIcons: (keyof typeof LucideIcons)[] = [
    "Globe",
    "Monitor",
    "Shield",
  ];
  const wordpressProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Website Assessment",
      description:
        "We analyze your WordPress site to identify performance bottlenecks, security vulnerabilities, and areas for improvement to ensure optimal functionality.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Updates & Backups",
      description:
        "We manage core WordPress updates, themes, and plugins, while performing regular backups to safeguard your data and ensure site reliability.",
      icon: "RotateCw",
    },
    {
      number: 3,
      title: "Security Enhancements",
      description:
        "We implement robust security measures, including malware scans, firewalls, and SSL certificates, to protect your WordPress site from threats.",
      icon: "Shield",
    },
    {
      number: 4,
      title: "Performance Optimization",
      description:
        "We optimize your site’s speed and performance through caching, image compression, and database optimization to enhance user experience.",
      icon: "Gauge",
    },
    {
      number: 5,
      title: "Content & SEO Updates",
      description:
        "We update your site’s content and optimize SEO elements to improve search engine rankings and keep your site relevant and engaging.",
      icon: "Pencil",
    },
    {
      number: 6,
      title: "Monitoring & Support",
      description:
        "We provide continuous monitoring and 24/7 support to address issues promptly, ensuring your WordPress site remains secure and operational.",
      icon: "Monitor",
    },
  ];
  const wordpressCompetencies: Competency[] = [
    {
      icon: "Globe",
      title: "WordPress Expertise",
      content:
        "Our team specializes in WordPress maintenance, ensuring your site runs smoothly with the latest features and compatibility across devices.",
    },
    {
      icon: "Shield",
      title: "Website Security",
      content:
        "We protect your WordPress site with advanced security protocols, including malware removal, firewalls, and regular security audits.",
    },
    {
      icon: "Gauge",
      title: "Performance Optimization",
      content:
        "We enhance your site’s speed and performance using caching, CDN integration, and database optimization for a seamless user experience.",
    },
    {
      icon: "RotateCw",
      title: "Updates & Backups",
      content:
        "We manage WordPress core, theme, and plugin updates, along with regular backups, to keep your site secure and recoverable.",
    },
    {
      icon: "Pencil",
      title: "Content Management",
      content:
        "We handle content updates and SEO optimization to keep your site fresh, relevant, and optimized for search engine performance.",
    },
    {
      icon: "Monitor",
      title: "Proactive Monitoring",
      content:
        "Our team provides 24/7 monitoring and support, quickly resolving issues to ensure your WordPress site remains reliable and secure.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="WordPress Maintenance Services"
        subtitle="Keep your WordPress site secure, fast, and up-to-date with our comprehensive maintenance services, ensuring optimal performance and user satisfaction."
        reviewCount={350}
        reviewPlatforms={[
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
        ]}
        projectLink="/case-studys"
        teamLink="/dedicated-team"
        companyRatingText="from India's Top WordPress Maintenance Provider"
        ctaText="Discuss Your Maintenance Needs"
        ctaLink="/contact-us"
        consultationTitle="Ready to optimize your WordPress site?"
        consultationDescription="Share your needs, and we’ll provide a free expert consultation within 24 hours, delivering a tailored maintenance plan to keep your WordPress site secure and high-performing."
        icons={wordpressIcons}
      />
      <DevelopmentProcess
        title="Our WordPress Maintenance Process"
        subtitle="Our WordPress maintenance process is thorough and client-focused, ensuring your site remains secure, fast, and reliable. From updates to ongoing support, we keep your WordPress site at its best."
        highlightedText="maintenance process"
        processItems={wordpressProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire a WordPress Expert - WordPress Maintenance"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#f0f4f8] to-white"
        imageSrc="https://www.dynamicdreamz.com/wp-content/uploads/2024/08/wordpress-white-label-img.svg"
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our WordPress Experts"
        subtitle="Our WordPress experts deliver comprehensive maintenance services, ensuring your site is secure, optimized, and up-to-date. From performance tuning to proactive monitoring, we keep your site running smoothly."
        competencies={wordpressCompetencies}
        ctaText="Start Your Maintenance Plan"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top WordPress Experts - WordPress Maintenance"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default WordPressMaintenance;
