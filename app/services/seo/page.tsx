"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import SEOOptimization from "@/src/components/services/SEO";
import Loader from "@/src/components/common/Loader";

const SEOPage = () => {
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
          SEO Services - Boost Your Online Presence with Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers expert SEO solutions to help businesses improve their search engine rankings, drive organic traffic, and increase online visibility. We use proven strategies to enhance your website's performance."
        />
        <meta
          name="keywords"
          content="SEO services, search engine optimization, Nugen IT services, organic traffic, website optimization, SEO strategies, on-page SEO, off-page SEO, link building"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="SEO Services - Boost Your Online Presence with Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services’ SEO expertise. Our comprehensive SEO strategies help businesses enhance their online visibility, improve search engine rankings, and attract more qualified traffic to their websites."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/services/seo" />
      </Head>
      {loading ? <Loader /> : <SEOOptimization />}
    </>
  );
};

export default SEOPage;
