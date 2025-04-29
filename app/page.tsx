"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import TestimonialCard from "@/src/components/TestimonialCard";
import HomePage from "@/src/components/home";
import TechnologySection from "@/src/components/Home/technologies";
import ServicesSection from "@/src/components/Home/service";
import CaseStudyHero from "@/src/components/caseStudy";
import PlatformSolutions from "@/src/components/Home/platform";
import BlogSection from "@/src/components/blog";
import CompanyStatsSection from "@/src/components/contactUs/highlightsSection";
import { services } from "../src/json/technologycardData";
import { FAQSection } from "@/src/components/technologySection/questionSection";
import ContactUsSection from "@/src/components/technologySection/contactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HomePage />
          <CompanyStatsSection
            data={services}
            title={"Software Development and Consulting"}
            subTitle={
              "As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:"
            }
          />
          <PlatformSolutions />
          <TechnologySection />
          <CaseStudyHero />
          <ServicesSection />
          <BlogSection />
          <TestimonialCard />
          <ContactUsSection />
          <FAQSection />
        </>
      )}
    </>
  );
}
