import React from "react";
import ClientSlider from "./clientSection";
import ContactUsSection from "./contactSection";
import { FAQSection } from "./questionSection";
import { TechnologySection } from "./technologySection";
import TechnologyShowcase from "./launguageSection";
import { techTags } from "@/src/json/languageSection";

export default function TechPage() {
  return (
    <div className="technology-section">
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
      <TechnologyShowcase />
      <ContactUsSection />
      <FAQSection />
    </div>
  );
}
