"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import ShowReviewsPage from "@/src/components/testi";
import ContactUsSection from "@/src/components/technologySection/contactSection";

export default function HowWeWork() {
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
          <ShowReviewsPage />
          <ContactUsSection/>
        </>
      )}
    </>
  );
}
