"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Services from "@/src/components/services";
import Loader from "@/src/components/common/Loader";

const ServicesPage = () => {
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
        <title>
          Services - Explore Nugen IT Services’ Comprehensive Solutions
        </title>
        <meta
          name="description"
          content="Discover the wide range of IT services offered by Nugen IT Services. From custom software development to cloud solutions, we provide tailored services to help your business thrive."
        />
        <meta
          name="keywords"
          content="Nugen IT services, IT solutions, custom software development, cloud services, IT consulting, enterprise solutions, business technology, digital transformation"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Services - Explore Nugen IT Services’ Comprehensive Solutions"
        />
        <meta
          property="og:description"
          content="Explore the expert IT services Nugen IT Services offers, including custom software development, cloud solutions, IT consulting, and more. Our solutions are tailored to meet your business needs."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/services" />
      </Head>
      {loading ? <Loader /> : <Services />}
    </>
  );
};

export default ServicesPage;
