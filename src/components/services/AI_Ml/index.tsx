import React from "react";
import AIMLBanner from "./HeroAI";
import DevelopmentProcess from "./ProcessAI";
import ClientSlider from "../../technologySection/clientSection";
import DiscussProject from "./DiscussProject";
import TechnologyShowcase from "../../technologySection/launguageSection";
import ContactUsSection from "../../technologySection/contactSection";
import { FAQSection } from "../../technologySection/questionSection";
import CoreCompetencies from "./CoreCompentencies";
import BlogSection from "../../blog";
import TestimonialStatic from "../../caseStudy/testimonialStatic";

const Intelligence = () => {
  return (
    <>
      <AIMLBanner />
      <DevelopmentProcess />
      <ClientSlider />
      <DiscussProject className="bg-gradient-to-r from-white via-[#fff1eb] to-white" />
      <CoreCompetencies />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default Intelligence;
