"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>Events - Nugen IT Services at Our Events</title>
        <meta
          name="description"
          content="Stay updated with Nugen IT Services' latest events, conferences, webinars, and workshops. Join us for insightful sessions on innovative IT solutions."
        />
        <meta
          name="keywords"
          content="Nugen events, IT conferences, IT webinars, Nugen workshops, upcoming tech events, IT solutions, Nugen IT Services events"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Events - Join Nugen IT Services at Our Upcoming Events"
        />
        <meta
          property="og:description"
          content="Explore upcoming events hosted by Nugen IT Services, including conferences, webinars, and workshops. Get insights into cutting-edge IT solutions and network with experts."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/events" />
      </Head>

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
