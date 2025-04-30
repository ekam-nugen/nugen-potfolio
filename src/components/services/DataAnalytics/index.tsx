import React from "react";
import AIMLBanner from "../AI_Ml/HeroAI";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import ClientSlider from "../../technologySection/clientSection";
import DiscussProject from "../AI_Ml/DiscussProject";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import TechnologyShowcase from "../../technologySection/launguageSection";
import BlogSection from "../../blog";
import TestimonialStatic from "../../caseStudy/testimonialStatic";
import ContactUsSection from "../../technologySection/contactSection";
import { FAQSection } from "../../technologySection/questionSection";
import * as LucideIcons from "lucide-react";

const DataAnalytics = () => {
  const dataAnalyticsIcons: (keyof typeof LucideIcons)[] = [
    "BarChart",
    "PieChart",
    "Database",
  ];
  const dataAnalyticsProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Data Requirements Gathering",
      description:
        "We collaborate with you to understand your data needs and business goals. Our team defines the scope of analytics solutions, ensuring alignment with your strategic objectives.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Data Collection",
      description:
        "We gather raw data from various sources, ensuring comprehensive coverage. This step lays the groundwork for accurate and meaningful analytics.",
      icon: "Download",
    },
    {
      number: 3,
      title: "Data Cleaning",
      description:
        "We clean the collected data to eliminate errors and inconsistencies, creating a reliable dataset for analysis and reporting.",
      icon: "Brush",
    },
    {
      number: 4,
      title: "Data Analysis",
      description:
        "Our experts analyze the prepared data using advanced statistical and machine learning techniques to uncover actionable insights and trends.",
      icon: "BarChart",
    },
    {
      number: 5,
      title: "Visualization Deployment",
      description:
        "We create interactive dashboards and reports, deploying them into your systems for easy access to insights and data-driven decision-making.",
      icon: "PieChart",
    },
    {
      number: 6,
      title: "Performance Monitoring",
      description:
        "We monitor the analytics solutions to ensure they deliver consistent value, providing ongoing support and updates to optimize performance.",
      icon: "Monitor",
    },
  ];
  const dataAnalyticsCompetencies: Competency[] = [
    {
      icon: "BarChart2",
      title: "Data Analysis",
      content:
        "Our data analysts excel in uncovering actionable insights from complex datasets. Using advanced statistical methods and machine learning, we deliver precise analysis to drive informed decision-making and business growth.",
    },
    {
      icon: "PieChart",
      title: "Data Visualization",
      content:
        "We create intuitive dashboards and reports with tools like Tableau and Power BI. Our visualization solutions make complex data accessible, enabling stakeholders to understand trends and make strategic decisions.",
    },
    {
      icon: "Database",
      title: "Data Engineering",
      content:
        "Our team builds robust data pipelines and architectures to ensure data integrity and accessibility. We optimize data storage and processing for scalability and performance in analytics workflows.",
    },
    {
      icon: "TrendingUp",
      title: "Predictive Analytics",
      content:
        "We leverage predictive modeling to forecast trends and outcomes. Our solutions help businesses anticipate market changes, optimize operations, and stay ahead of the competition.",
    },
    {
      icon: "Filter",
      title: "Data Cleaning",
      content:
        "Our expertise in data cleaning ensures high-quality datasets by removing errors and inconsistencies. We prepare reliable data for analysis, enhancing the accuracy of insights and models.",
    },
    {
      icon: "Search",
      title: "Business Intelligence",
      content:
        'We provide comprehensive <a href="/technologies/scikit-learn" class="text-orange-600 font-semibold hover:underline">business intelligence</a> solutions, integrating data from multiple sources to deliver strategic insights that empower your organization.',
    },
  ];
  return (
    <>
      <AIMLBanner
        title="Data Analytics Services"
        subtitle="Transform your business with our data analytics services, delivering actionable insights, advanced reporting, and data-driven decision-making to drive growth."
        reviewCount={300}
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
        companyRatingText="from India's Highest-rated Company"
        ctaText="Discuss Your Data Needs"
        ctaLink="/contact-us"
        consultationTitle="Ready to unlock your data’s potential?"
        consultationDescription="Share your goals, and we’ll offer a free expert consultation within 24 hours, providing a tailored roadmap to leverage data analytics for your business success."
        icons={dataAnalyticsIcons}
      />
      <DevelopmentProcess
        title="Our Data Analytics Development Process"
        subtitle="Our data analytics development process is meticulous and client-centric, designed to transform raw data into actionable insights that drive business growth. From data collection to visualization deployment, we ensure precision and efficiency at every step."
        highlightedText="development process"
        processItems={dataAnalyticsProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire a Data Analyst - Data Analytics Development"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#fff1eb] to-white"
        imageSrc="https://static.vecteezy.com/system/resources/previews/022/997/866/non_2x/data-analytics-consept-business-analysis-tiny-people-are-studying-the-infographic-teamwork-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg"
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our Data Analysts"
        subtitle="Our data analysts specialize in transforming raw data into strategic insights through advanced analytics, visualization, and engineering. We deliver solutions that empower data-driven decisions and fuel business success."
        competencies={dataAnalyticsCompetencies}
        ctaText="Start Your Analytics Project"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top Data Analysts - Data Analytics"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default DataAnalytics;
