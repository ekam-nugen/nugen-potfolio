import React from "react";
import ContactUsSection from "../technologySection/contactSection";
import CompanyStatsSection from "./highlightsSection";
import { stats } from "@/src/json/highlightsData";

export default function ContactUs() {
  return (
    <div className="">
      <ContactUsSection />
      <CompanyStatsSection
        data={stats}
        title={"We’re a 500+ Team of Proven AI, Cloud, Web, Mobile, UI/UX,"}
        subTitle={"Ambitious Startups Like You."}
      />
    </div>
  );
}
