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

const Blockchain = () => {
  const blockchainIcons: (keyof typeof LucideIcons)[] = ["Link", "Network", "Lock"];
  const blockchainProcessItems: ProcessItem[] = [
    {
      number: 1,
      title: "Blockchain Strategy Planning",
      description:
        "We evaluate your business goals and design a blockchain strategy. Our team outlines the architecture and roadmap to ensure security, transparency, and alignment with your objectives.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Smart Contract Development",
      description:
        "We develop and deploy secure smart contracts on platforms like Ethereum or Hyperledger, ensuring reliable automation of transactions and processes.",
      icon: "Code",
    },
    {
      number: 3,
      title: "Decentralized App (DApp) Development",
      description:
        "We build decentralized applications tailored to your needs, integrating with blockchain networks for enhanced security and user trust.",
      icon: "AppWindow",
    },
    {
      number: 4,
      title: "Blockchain Integration",
      description:
        "We integrate blockchain solutions with your existing systems, ensuring seamless functionality and interoperability across platforms.",
      icon: "Link",
    },
    {
      number: 5,
      title: "Deployment & Testing",
      description:
        "We deploy blockchain solutions and conduct rigorous testing to ensure security, performance, and scalability in real-world conditions.",
      icon: "Rocket",
    },
    {
      number: 6,
      title: "Monitoring & Support",
      description:
        "We provide ongoing monitoring and support for your blockchain infrastructure, optimizing performance and ensuring long-term reliability.",
      icon: "Monitor",
    },
  ];
  const blockchainCompetencies:Competency[] = [
    {
      icon: "Vault",
      title: "Blockchain Architecture",
      content:
        "Our experts design secure and scalable blockchain architectures using platforms like Ethereum, Hyperledger, and Binance Smart Chain, tailored to your business needs.",
    },
    {
      icon: "Code",
      title: "Smart Contract Development",
      content:
        "We create secure and efficient smart contracts, automating processes with transparency and trust across decentralized networks.",
    },
    {
      icon: "Lock",
      title: "Blockchain Security",
      content:
        "We implement robust encryption, consensus mechanisms, and auditing to ensure your blockchain solutions are secure and compliant.",
    },
    {
      icon: "AppWindow",
      title: "DApp Development",
      content:
        "We build decentralized applications with seamless integration into blockchain networks, delivering user-friendly and secure solutions.",
    },
    {
      icon: "Network",
      title: "Cross-Chain Integration",
      content:
        "Our team enables interoperability between blockchain networks, ensuring your solutions work across multiple platforms and ecosystems.",
    },
    {
      icon: "Monitor",
      title: "Blockchain Monitoring",
      content:
        "We provide continuous monitoring and optimization of blockchain networks, ensuring high performance and reliability.",
    },
  ];
  return (
    <>
      <AIMLBanner
        title="Blockchain Development Services"
        subtitle="Transform your business with our blockchain development services, delivering secure, transparent, and decentralized solutions to drive innovation and trust."
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
        projectLink="#how-we-help-you"
        teamLink="#how-we-help-you"
        companyRatingText="from India's Leading Blockchain Innovator"
        ctaText="Discuss Your Blockchain Needs"
        ctaLink="#"
        consultationTitle="Ready to innovate with blockchain?"
        consultationDescription="Share your vision, and we’ll provide a free expert consultation within 24 hours, delivering a tailored blockchain strategy to drive your business forward."
        icons={blockchainIcons}
      />
      <DevelopmentProcess
        title="Our Blockchain Development Process"
        subtitle="Our blockchain development process is strategic and client-focused, delivering secure, transparent, and scalable solutions. From strategy planning to ongoing support, we build decentralized systems that empower your business."
        highlightedText="development process"
        processItems={blockchainProcessItems}
        ctaText="Get in Touch with Us"
        ctaLink="/book-an-appointment"
        ctaDataAttribute="Hire a Blockchain Developer - Blockchain Development"
      />
      <ClientSlider />
      <DiscussProject className="bg-gradient-to-r from-white via-[#e6f0fa] to-white" imageSrc="https://static.vecteezy.com/system/resources/previews/016/716/630/non_2x/flat-isometric-3d-illustration-abstract-blockchain-concept-design-free-vector.jpg" />
      <CoreCompetencies
        className=""
        title="Technological Expertise of Our Blockchain Developers"
        subtitle="Our blockchain developers excel in creating secure, scalable, and innovative decentralized solutions. From smart contracts to DApps, we deliver technology that drives trust and efficiency."
        competencies={blockchainCompetencies}
        ctaText="Start Your Blockchain Project"
        ctaLink="/book-an-appointment"
        ctaDataAttribute="Hire Top Blockchain Developers - Blockchain Development"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default Blockchain;
