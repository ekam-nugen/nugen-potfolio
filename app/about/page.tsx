"use client";
import React, { useEffect, useState } from "react";
import CustomerReviews from "@/src/components/about/CTA";
import Evolution from "@/src/components/about/Evolution";
import HeroSection from "@/src/components/about/Hero";
import Services from "@/src/components/about/Services";
import { FAQSection } from "@/src/components/technologySection/questionSection";
import Loader from "@/src/components/common/Loader";

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
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <Services />
          <Evolution />
          <CustomerReviews />
          <FAQSection />
        </>
      )}
    </>
  );
};

export default AboutPage;
