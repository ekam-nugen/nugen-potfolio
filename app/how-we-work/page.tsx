"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>How We Work - Nugen IT Services Approach to Innovation</title>
        <meta
          name="description"
          content="Discover how Nugen IT Services approaches every project. Our innovative solutions, dedicated team, and collaborative process deliver exceptional results for your business."
        />
        <meta
          name="keywords"
          content="how Nugen works, Nugen IT process, IT solutions, collaborative approach, project development, innovative IT services, business solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="How We Work - Nugen IT Services Approach to Innovation"
        />
        <meta
          property="og:description"
          content="Learn about the unique process that drives Nugen IT Services. From consultation to delivery, we ensure every project is executed with precision and tailored to meet your business needs."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/how-we-work" />
=      </Head>

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
