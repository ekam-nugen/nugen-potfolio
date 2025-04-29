"use client";
import { useEffect, useState } from "react";
import HowWeWorkSection from "@/src/components/how-we-work/howWeWork";
import HowItWorksTimeline from "@/src/components/how-we-work/workingFlow";
import CompanyStatsSection from "@/src/components/contactUs/highlightsSection";
import ContactUsSection from "@/src/components/technologySection/contactSection";
import TestimonialSection from "@/src/components/TestimonialCard";
import { Hireservices } from "@/src/json/hiredata";
import Loader from "@/src/components/common/Loader";

export default function HowWeWork() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5 seconds or adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}
