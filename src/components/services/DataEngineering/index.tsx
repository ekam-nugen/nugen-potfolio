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

const DataEngineering = () => {
  const icons: (keyof typeof LucideIcons)[] = [
    "Database",
    "BarChart2",
    "Cloud",
  ];

  const processItems: ProcessItem[] = [
    {
      number: 1,
      title: "Data Audit",
      description:
        "We assess your current data infrastructure, identify gaps, and align strategies with your business goals.",
      icon: "Search",
    },
    {
      number: 2,
      title: "ETL Pipeline Development",
      description:
        "Design and implement reliable ETL processes to ensure efficient data ingestion, transformation, and loading.",
      icon: "Repeat",
    },
    {
      number: 3,
      title: "Data Warehousing",
      description:
        "We build and manage data warehouses using Snowflake, Redshift, BigQuery, or traditional solutions.",
      icon: "Archive",
    },
    {
      number: 4,
      title: "Data Governance",
      description:
        "Implement data quality, lineage, and governance frameworks for reliable and compliant data operations.",
      icon: "Shield",
    },
    {
      number: 5,
      title: "Monitoring & Scaling",
      description:
        "Enable proactive monitoring, alerting, and auto-scaling for data pipelines and storage systems.",
      icon: "Activity",
    },
  ];

  const competencies: Competency[] = [
    {
      icon: "Database",
      title: "Scalable Data Architecture",
      content:
        "We design systems that grow with your data volume, using distributed and cloud-native tools.",
    },
    {
      icon: "Cloud",
      title: "Cloud-Native Solutions",
      content:
        "Expertise in AWS, GCP, and Azure for scalable storage, serverless processing, and secure data access.",
    },
    {
      icon: "Repeat",
      title: "Robust ETL Pipelines",
      content:
        "Build data pipelines that are fault-tolerant, observable, and optimized for throughput.",
    },
    {
      icon: "Shield",
      title: "Data Security & Compliance",
      content:
        "Ensure HIPAA, GDPR, SOC2 compliance through encryption, access controls, and auditing.",
    },
    {
      icon: "BarChart2",
      title: "BI Integration",
      content:
        "Seamlessly integrate with tools like Tableau, Power BI, or Looker for actionable insights.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="Data Engineering Services"
        subtitle="Design, build, and scale your data infrastructure for faster insights and better decisions."
        reviewCount={150}
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
        companyRatingText="from Top Data Engineers in India"
        ctaText="Get Started with Data Engineering"
        ctaLink="/contact-us"
        consultationTitle="Need a future-ready data pipeline?"
        consultationDescription="Connect with our data engineering experts for a free consultation and architecture review."
        icons={icons}
      />
      <DevelopmentProcess
        title="Our Data Engineering Process"
        subtitle="From ingestion to insights, we follow a structured approach to build your data ecosystem."
        highlightedText="data engineering"
        processItems={processItems}
        ctaText="Book a Free Data Strategy Session"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Data Engineers - Data Engineering"
      />
      <ClientSlider />
      <DiscussProject imageSrc="/clients/data-engineering.jpg" />
      <CoreCompetencies
        title="Why Choose Us for Data Engineering"
        subtitle="Trusted by fast-growing startups and enterprises for modern data infrastructure."
        competencies={competencies}
        ctaText="Start Building Your Data Stack"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Data Experts - Data Engineering"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default DataEngineering;
