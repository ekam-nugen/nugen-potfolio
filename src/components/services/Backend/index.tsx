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

const BackendMaintenance = () => {
  const backendIcons: (keyof typeof LucideIcons)[] = [
    "Server",
    "Database",
    "ShieldCheck",
  ];

  const backendProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Initial Assessment",
      description:
        "We evaluate your backend infrastructure to identify performance issues, code inefficiencies, and architectural flaws.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Code Refactoring",
      description:
        "We clean and refactor your codebase to enhance readability, maintainability, and overall backend performance.",
      icon: "Wrench",
    },
    {
      number: 3,
      title: "Security Hardening",
      description:
        "We apply best practices for security—patching vulnerabilities, applying rate-limiting, and implementing secure authentication protocols.",
      icon: "ShieldCheck",
    },
    {
      number: 4,
      title: "Database Optimization",
      description:
        "We tune your database for performance, optimize queries, manage indexes, and ensure efficient data handling.",
      icon: "Database",
    },
    {
      number: 5,
      title: "Monitoring & Alerts",
      description:
        "We set up monitoring tools and alerts to proactively catch issues like downtime, memory leaks, or high latency.",
      icon: "Activity",
    },
    {
      number: 6,
      title: "Ongoing Support & Updates",
      description:
        "We provide regular backend updates, third-party library upgrades, and long-term technical support.",
      icon: "RefreshCw",
    },
  ];

  const backendCompetencies: Competency[] = [
    {
      icon: "Server",
      title: "Backend Expertise",
      content:
        "Our developers specialize in backend systems using Node.js, Express, NestJS, and other modern technologies to ensure high availability and performance.",
    },
    {
      icon: "ShieldCheck",
      title: "Security First",
      content:
        "We follow OWASP standards, perform security audits, and ensure your system is protected from common and advanced threats.",
    },
    {
      icon: "Database",
      title: "Data Efficiency",
      content:
        "From relational databases like MySQL to NoSQL solutions like MongoDB, we optimize storage, indexing, and query execution.",
    },
    {
      icon: "Wrench",
      title: "Clean & Maintainable Code",
      content:
        "We ensure your backend codebase is modular, testable, and scalable by applying proven software engineering principles.",
    },
    {
      icon: "Activity",
      title: "Real-time Monitoring",
      content:
        "We integrate tools like Prometheus, Grafana, or New Relic to monitor performance metrics and trigger alerts.",
    },
    {
      icon: "RefreshCw",
      title: "Continuous Updates",
      content:
        "We keep your backend environment updated with the latest dependencies, security patches, and improvements.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="Backend Maintenance Services"
        subtitle="Ensure your backend systems remain secure, scalable, and high-performing with our tailored maintenance services."
        reviewCount={250}
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
        projectLink="/case-study"
        teamLink="/dedicated-team"
        companyRatingText="from Top Backend Specialists in India"
        ctaText="Discuss Your Backend Needs"
        ctaLink="/contact-us"
        consultationTitle="Need to optimize your backend systems?"
        consultationDescription="Get a free consultation with our backend experts to evaluate your system’s health and plan a reliable maintenance strategy."
        icons={backendIcons}
      />
      <DevelopmentProcess
        title="Our Backend Maintenance Process"
        subtitle="We follow a systematic approach to maintain, secure, and enhance your backend systems, ensuring they’re always production-ready."
        highlightedText="backend process"
        processItems={backendProcessItems}
        ctaText="Schedule a Free Backend Audit"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Backend Developers - Backend Maintenance"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#eef2f7] to-white"
        imageSrc="/clients/backendService.jpg"
      />
      <CoreCompetencies
        className=""
        title="Why Choose Our Backend Engineers"
        subtitle="We provide reliable and scalable backend solutions tailored to your business goals and system needs."
        competencies={backendCompetencies}
        ctaText="Start Your Maintenance Plan"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Backend Experts - Backend Maintenance"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default BackendMaintenance;
