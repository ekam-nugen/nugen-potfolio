"use client";
import { useEffect, useState } from "react";
import BlogPage from "@/src/components/SingleBlog/Singleblog";
import { FAQSection } from "@/src/components/technologySection/questionSection";
import TestimonialSection from "@/src/components/TestimonialCard";
import Loader from "@/src/components/common/Loader";

export default function SingleBlog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BlogPage />
          <TestimonialSection />
          <FAQSection />
        </>
      )}
    </>
  );
}
