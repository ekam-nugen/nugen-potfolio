"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import CustomerReviews from "@/src/components/about/CTA";
import Evolution from "@/src/components/about/Evolution";
import HeroSection from "@/src/components/about/Hero";
import Services from "@/src/components/about/Services";
import { FAQSection } from "@/src/components/technologySection/questionSection";
import Loader from "@/src/components/common/Loader";
import ContactUsSection from "@/src/components/technologySection/contactSection";
import TeamChoose from "@/src/components/team/teamChoose";

const AboutPage = () => {
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
        <title>About Us - Nugen IT Services</title>
        <meta
          name="description"
          content="Learn about Nugen IT Services, our mission, values, and the team driving innovation through advanced IT solutions for businesses worldwide."
        />
        <meta
          name="keywords"
          content="about Nugen, IT company, Nugen team, software development company, IT services, tech company, innovation, Nugen IT Services"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Nugen IT Services" />
        <meta
          property="og:description"
          content="Explore the story behind Nugen IT Services. Meet our team and learn how we’re transforming businesses with powerful technology solutions."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/about" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <Services
            className={"bg-gradient-to-r from-white via-[#fff1eb] to-white"}
          />
          <Evolution />
          <CustomerReviews />
          <TeamChoose />
          <ContactUsSection />
          <FAQSection />
        </>
      )}
    </>
  );
};

export default AboutPage;
