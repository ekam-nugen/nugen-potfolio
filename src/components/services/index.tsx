import React from "react";
import { TechnologySection } from "../technologySection/technologySection";
import ContactUsSection from "../technologySection/contactSection";
import { FAQSection } from "../technologySection/questionSection";
import ServicesSection from "../technologySection/technologiesTab";
import CompanyStatsSection from "../contactUs/highlightsSection";
import { services } from "@/src/json/technologycardData";
import ClientSlider from "../technologySection/clientSection";
import TestimonialStatic from "../caseStudy/testimonialStatic";
import { techTags } from "@/src/json/languageSection";

const Services = () => {
  return (
    <>
      <TechnologySection
        heading={"Nugen I.T Services"}
        subheading={
          <>
            Power Your Business with <br />
            Cutting-Edge Solutions
          </>
        }
        tags={techTags}
      />
      <ClientSlider className="bg-gradient-to-r from-white via-[#fff1eb] to-white" />
      <CompanyStatsSection
        data={services}
        title={"Software Development and Consulting"}
        subTitle={
          "As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:"
        }
      />
      <ServicesSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default Services;
