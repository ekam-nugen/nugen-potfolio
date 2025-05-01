"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "@/src/components/common/Loader";
import { TechnologySection } from "@/src/components/technologySection/technologySection";
import ClientSlider from "@/src/components/technologySection/clientSection";
import { platformTags } from "@/src/json/languageSection";
import { TopPlatformsSection } from "@/src/components/platforms/platforms";
import TestimonialStatic from "@/src/components/caseStudy/testimonialStatic";
import { FAQSection } from "@/src/components/technologySection/questionSection";

export default function Events() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          Platforms - Nugen IT Services’ Expertise in Leading Platforms
        </title>
        <meta
          name="description"
          content="Explore the platforms Nugen IT Services specializes in. From cloud solutions to enterprise software, we deliver tailored solutions across a variety of industries and technologies."
        />
        <meta
          name="keywords"
          content="Nugen IT platforms, cloud solutions, enterprise software, IT platforms expertise, Nugen IT services, platform integration, cloud computing, technology solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Platforms - Nugen IT Services’ Expertise in Leading Platforms"
        />
        <meta
          property="og:description"
          content="Learn about the diverse platforms Nugen IT Services works with. We specialize in cloud computing, enterprise solutions, and platform integrations to drive your business forward."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/platforms" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <TechnologySection
            heading={"Nugen I.T Services"}
            subheading={
              <>
                Empower your business with <br />
                Nugen IT Service
              </>
            }
            tags={platformTags}
          />
          <ClientSlider className="bg-gradient-to-r from-white via-[#fff1eb] to-white" />
          <TopPlatformsSection />
          <TestimonialStatic />
          <FAQSection />
        </>
      )}
    </>
  );
}
