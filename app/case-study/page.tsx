"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import CaseStudiesPage from "@/src/components/caseStudy/index";
import Loader from "@/src/components/common/Loader";

export default function Casestudy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5 seconds, same as other pages

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          Case Study - Innovative and Scalable Solutions by Nugen IT Services
        </title>
        <meta
          name="description"
          content="Explore Nugen IT Services' case studies, showcasing our innovative and scalable solutions that drive business growth. Learn how we've helped clients across various industries achieve success with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="case study, Nugen IT services, business solutions, technology case study, IT solutions, tech innovation, business growth, digital transformation"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Case Study - Innovative and Scalable Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Discover how Nugen IT Services has transformed businesses across different industries with our tailored technology solutions. Our case studies highlight real-world success stories powered by innovation and expertise."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/case-study" />
      </Head>
      {loading ? <Loader /> : <CaseStudiesPage />}
    </>
  );
}
