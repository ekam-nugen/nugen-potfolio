import React from "react";
import Services from "../about/Services";
import ClientSlider from "../technologySection/clientSection";
import ContactUsSection from "../technologySection/contactSection";
import { FAQSection } from "../technologySection/questionSection";
import TeamSection from "./teamSection";
import TeamHero from "./teamHero";
import TeamChoose from "./teamChoose";

const Teams: React.FC = () => {
  return (
    <div>
      <TeamHero/>
      <TeamSection />
      <ClientSlider className="bg-white" />
      <Services className="bg-gradient-to-r from-white via-[#fff1eb] to-white" />
      <TeamChoose/>
      <ContactUsSection />
      <FAQSection />
    </div>
  );
};

export default Teams;
