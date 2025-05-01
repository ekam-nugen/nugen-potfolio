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
import Head from "next/head";

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
      <Head>
        <title>Nugen IT Services - Leading IT Solutions at NugenInfo.com</title>
        <meta
          name="description"
          content="Nugen IT Services offers cutting-edge IT solutions for businesses. Explore our innovative services and technology expertise at NugenInfo.com."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Nugen IT Services - Leading IT Solutions at NugenInfo.com"
        />
        <meta
          property="og:description"
          content="Discover Nugen IT Services' transformative IT solutions. Visit NugenInfo.com to learn more about how we empower businesses with technology."
        />
        <meta property="og:image" content="/logo.png" />
      </Head>
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
