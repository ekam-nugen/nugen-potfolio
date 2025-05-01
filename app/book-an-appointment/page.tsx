"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import HireUsPage from "@/src/components/hireus";
import Loader from "@/src/components/common/Loader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Hire Us - Partner with Nugen IT Services</title>
        <meta
          name="description"
          content="Hire Nugen IT Services for innovative and scalable IT solutions. Schedule a consultation to build powerful tech tailored to your goals."
        />
        <meta
          name="keywords"
          content="hire developers, hire Nugen IT Services, software development partner, IT outsourcing, project consultation, hire IT team"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Hire Us - Partner with Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Looking to transform your business with technology? Hire Nugen IT Services to build and scale custom IT solutions tailored to your needs."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/book-an-appointment"
        />
      </Head>

      {loading ? <Loader /> : <HireUsPage />}
    </>
  );
}
