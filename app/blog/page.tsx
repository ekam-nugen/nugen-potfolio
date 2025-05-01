"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import BlogPageSection from "@/src/components/blog/index";
import Loader from "@/src/components/common/Loader";

export default function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SEO and Social Media Meta Tags */}
      <Head>
        <title>Blog - Latest Insights and Trends | Nugen IT Services</title>
        <meta
          name="description"
          content="Explore the latest blog posts from Nugen IT Services. Stay updated on the latest trends in technology, digital transformation, and more."
        />
        <meta
          name="keywords"
          content="Nugen IT services, blog, technology trends, digital transformation, tech insights, innovation, software development, AI, cloud computing"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Blog - Latest Insights and Trends | Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest posts on technology, digital transformation, and more. Nugen IT Services' blog covers everything you need to know."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/blog" />
      </Head>

      {/* Page Content */}
      {loading ? <Loader /> : <BlogPageSection />}
    </>
  );
}
