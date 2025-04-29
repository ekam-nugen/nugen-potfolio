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

const SEOOptimization = () => {
  const seoIcons: (keyof typeof LucideIcons)[] = [
    "Search",
    "ChartLine",
    "Globe",
  ];
  const seoProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "SEO Audit",
      description:
        "We conduct a comprehensive audit of your website to identify technical issues, content gaps, and opportunities for improving search engine rankings.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Keyword Research",
      description:
        "Our team performs in-depth keyword research to target high-value, relevant terms that align with your business goals and audience intent.",
      icon: "Tag",
    },
    {
      number: 3,
      title: "On-Page Optimization",
      description:
        "We optimize meta tags, headings, content, and images to enhance relevance and user experience, ensuring alignment with search engine algorithms.",
      icon: "Edit",
    },
    {
      number: 4,
      title: "Technical SEO",
      description:
        "We improve site speed, mobile-friendliness, crawlability, and structured data to ensure your website meets technical SEO best practices.",
      icon: "Settings",
    },
    {
      number: 5,
      title: "Content Strategy",
      description:
        "We develop and execute a content strategy, creating high-quality, SEO-optimized content to engage users and boost organic rankings.",
      icon: "FileText",
    },
    {
      number: 6,
      title: "Performance Tracking & Reporting",
      description:
        "We monitor SEO performance using tools like Google Analytics and Search Console, providing detailed reports and ongoing optimization recommendations.",
      icon: "ChartBar",
    },
  ];
  const seoCompetencies: Competency[] = [
    {
      icon: "Search",
      title: "Keyword Strategy",
      content:
        "Our experts craft targeted keyword strategies to drive relevant traffic, leveraging tools like Ahrefs and SEMrush to identify high-impact opportunities.",
    },
    {
      icon: "Edit",
      title: "On-Page SEO",
      content:
        "We optimize on-page elements like titles, meta descriptions, and content structure to improve rankings and user engagement.",
    },
    {
      icon: "Settings",
      title: "Technical SEO",
      content:
        "Our team ensures your website is fast, mobile-friendly, and crawlable, addressing issues like broken links, redirects, and schema markup.",
    },
    {
      icon: "FileText",
      title: "Content Optimization",
      content:
        "We create and optimize content that resonates with your audience and ranks well, incorporating SEO best practices and user intent.",
    },
    {
      icon: "Link",
      title: "Link Building",
      content:
        'Our <a href="/#" class="text-orange-600 font-sembold hover:underline">link building</a> strategies secure high-quality backlinks to boost your site’s authority and rankings.',
    },
    {
      icon: "ChartLine",
      title: "Analytics & Reporting",
      content:
        "We provide actionable insights through detailed SEO performance reports, tracking rankings, traffic, and conversions to maximize ROI.",
    },
  ];
  return (
    <>
      <AIMLBanner
        title="SEO Optimization Services"
        subtitle="Boost your website’s visibility with our SEO optimization services, delivering tailored strategies to improve rankings, drive organic traffic, and maximize online success."
        reviewCount={260}
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
        companyRatingText="from India's Highest-rated SEO Agency"
        ctaText="Discuss Your SEO Goals"
        ctaLink="/contact-us"
        consultationTitle="Ready to rank higher?"
        consultationDescription="Share your goals, and we’ll provide a free expert SEO consultation within 24 hours, delivering a tailored strategy to boost your website’s visibility."
        icons={seoIcons}
      />
      <DevelopmentProcess
        title="Our SEO Optimization Process"
        subtitle="Our SEO optimization process is data-driven and strategic, ensuring higher rankings and increased organic traffic. From audits to performance tracking, we deliver measurable results."
        highlightedText="optimization process"
        processItems={seoProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire an SEO Expert - SEO Optimization"
      />
      <ClientSlider />
      <DiscussProject
        className="bg-gradient-to-r from-white via-[#fff1eb] to-white"
        imageSrc="https://static.vecteezy.com/system/resources/previews/026/509/328/non_2x/concept-of-seo-search-engine-optimization-and-web-analytics-elements-interface-element-with-search-button-seo-trend-search-optimization-flat-illustration-on-a-white-background-vector.jpg"
      />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our SEO Experts"
        subtitle="Our SEO experts excel in optimizing websites for search engines, driving traffic, and boosting conversions. From keyword strategies to technical SEO, we deliver results that matter."
        competencies={seoCompetencies}
        ctaText="Start Your SEO Project"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire Top SEO Experts - SEO Optimization"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default SEOOptimization;
