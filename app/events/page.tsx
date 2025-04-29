"use client";
import { useEffect, useState } from "react";
import TechEventsPage from "@/src/components/tech-events";
import { FAQSection } from "@/src/components/technologySection/questionSection";
import TestimonialSection from "@/src/components/TestimonialCard";
import Loader from "@/src/components/common/Loader";

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
      {loading ? (
        <Loader />
      ) : (
        <>
          <TechEventsPage />
          <TestimonialSection />
          <FAQSection />
        </>
      )}
    </>
  );
}
