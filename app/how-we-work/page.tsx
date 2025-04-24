import CompanyStatsSection from "@/src/components/contactUs/highlightsSection";
import HowWeWorkSection from "@/src/components/how-we-work/howWeWork";
import HowItWorksTimeline from "@/src/components/how-we-work/workingFlow";
import ContactUsSection from "@/src/components/technologySection/contactSection";
import TestimonialSection from "@/src/components/TestimonialCard";
import { Hireservices } from "@/src/json/hiredata";

export default function HowWeWork() {
  return (
    <>

      <HowWeWorkSection />
      <HowItWorksTimeline />
      <CompanyStatsSection
        data={Hireservices}
        title={"Tailored Solutions for Every Need"}
        subTitle={
          "At Capital Numbers, We Offer a Variety of Engagement Models To Ensure Perfect Alignment With Your Project:"
        }
      />
      <ContactUsSection />
      <TestimonialSection />
    </>
  );
}
