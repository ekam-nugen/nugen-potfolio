"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import WebDevelopment from "@/src/components/services/WebDevelopment";
import Loader from "@/src/components/common/Loader";

const WebDevelopmentPage = () => {
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
          Web Development Services - Scalable and High-Performance Websites by
          Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers expert web development solutions to build fast, scalable, and secure websites. We specialize in responsive web design, eCommerce platforms, and custom web applications tailored to your business needs."
        />
        <meta
          name="keywords"
          content="web development, website design, Nugen IT services, responsive web design, custom web development, web applications, eCommerce solutions, front-end development, back-end development"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Web Development Services - Scalable and High-Performance Websites by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' web development expertise. We create scalable, high-performance websites and web applications that are designed to deliver exceptional user experiences and business growth."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/web-development"
        />
      </Head>
      {loading ? <Loader /> : <WebDevelopment />}
    </>
  );
};

export default WebDevelopmentPage;
