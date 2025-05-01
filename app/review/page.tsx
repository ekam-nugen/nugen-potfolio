"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>Reviews - What Our Clients Say About Nugen IT Services</title>
        <meta
          name="description"
          content="Read reviews and testimonials from Nugen IT Services' satisfied clients. Learn how our innovative IT solutions have helped businesses transform and grow."
        />
        <meta
          name="keywords"
          content="Nugen reviews, client testimonials, IT services feedback, Nugen IT services, customer reviews, business transformation, IT solutions reviews"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Reviews - What Our Clients Say About Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore real feedback from Nugen IT Services' clients and discover how our tailored IT solutions have made a positive impact on businesses across various industries."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/reviews" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <>
          <ShowReviewsPage />
          <ContactUsSection />
        </>
      )}
    </>
  );
}
