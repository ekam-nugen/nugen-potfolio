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

const BIMaintenance = () => {
  const biIcons: (keyof typeof LucideIcons)[] = [
    "BarChart3",
    "Database",
    "PieChart",
  ];

  const biProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Data Source Validation",
      description:
        "We ensure all data sources feeding your BI system are connected, accurate, and syncing as expected to maintain data integrity.",
      icon: "PlugZap",
    },
    {
      number: 2,
      title: "ETL/ELT Pipeline Monitoring",
      description:
        "We monitor and maintain ETL/ELT jobs to ensure smooth data flow, minimize failures, and maintain up-to-date insights.",
      icon: "Repeat",
    },
    {
      number: 3,
      title: "Dashboard Optimization",
      description:
        "We fine-tune dashboards and visualizations for faster loading, better UX, and meaningful insights delivery.",
      icon: "BarChart3",
    },
    {
      number: 4,
      title: "Report Accuracy Audits",
      description:
        "We regularly audit and validate reports for consistency, ensuring decisions are based on reliable data.",
      icon: "FileBarChart2",
    },
    {
      number: 5,
      title: "Security & Access Management",
      description:
        "We enforce role-based access controls and security policies to protect sensitive BI data.",
      icon: "ShieldCheck",
    },
    {
      number: 6,
      title: "Ongoing Support & Enhancements",
      description:
        "We provide continuous support, enhancements, and change implementations as your business grows or evolves.",
      icon: "Settings",
    },
  ];

  const biCompetencies: Competency[] = [
    {
      icon: "BarChart3",
      title: "BI Dashboard Management",
      content:
        "We manage and enhance dashboards using tools like Power BI, Tableau, Looker, and Metabase to ensure clarity and performance.",
    },
    {
      icon: "Database",
      title: "Data Pipeline Maintenance",
      content:
        "From ETL workflows to streaming data, we ensure your data pipelines are robust, timely, and error-free.",
    },
    {
      icon: "FileBarChart2",
      title: "Reporting Accuracy",
      content:
        "We validate KPIs and automate reporting checks so your business metrics always reflect reality.",
    },
    {
      icon: "ShieldCheck",
      title: "Secure BI Environment",
      content:
        "We implement user-level security, audit logs, and encryption to safeguard sensitive data assets.",
    },
    {
      icon: "Settings",
      title: "Ongoing Enhancements",
      content:
        "As business needs evolve, we adapt dashboards and analytics solutions to maintain their relevance and usability.",
    },
    {
      icon: "Repeat",
      title: "ETL/ELT Workflow Optimization",
      content:
        "We streamline data transformations for better performance and reduced system load.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="BI Maintenance Services"
        subtitle="Keep your Business Intelligence systems running efficiently with our proactive maintenance solutions tailored for accuracy, performance, and security."
        reviewCount={180}
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
        companyRatingText="Trusted BI Support from Certified Experts"
        ctaText="Talk to a BI Consultant"
        ctaLink="/contact-us"
        consultationTitle="Want error-free BI insights?"
        consultationDescription="Let our team audit and maintain your BI systems to ensure reliable insights and peak performance."
        icons={biIcons}
      />
      <DevelopmentProcess
        title="Our BI Maintenance Process"
        subtitle="From ensuring data accuracy to optimizing dashboards and reports, we provide full-cycle BI maintenance tailored to your analytics stack."
        highlightedText="BI maintenance"
        processItems={biProcessItems}
        ctaText="Request a BI Audit"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire BI Experts - BI Maintenance"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#f4f7fa] to-white"
        imageSrc="/clients/biService.jpg"
      />
      <CoreCompetencies
        className=""
        title="BI Systems We Maintain & Optimize"
        subtitle="Our experts handle BI maintenance across modern analytics tools, enabling you to trust your data and accelerate business decisions."
        competencies={biCompetencies}
        ctaText="Start BI Maintenance"
        ctaLink="/contact-us"
        ctaDataAttribute="Start BI Services - BI Maintenance"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default BIMaintenance;
