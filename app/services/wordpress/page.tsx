"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import WordPressMaintenance from "@/src/components/services/WordPress";
import Loader from "@/src/components/common/Loader";

const WordpressPage = () => {
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
          WordPress Development Services - Custom and Scalable Solutions by
          Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services specializes in custom WordPress development, offering tailored themes, plugins, and full website development. We create scalable, secure, and high-performance WordPress solutions for your business."
        />
        <meta
          name="keywords"
          content="WordPress development, custom WordPress themes, WordPress plugins, Nugen IT services, WordPress website development, responsive WordPress sites, secure WordPress solutions, WordPress optimization"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="WordPress Development Services - Custom and Scalable Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' WordPress development expertise. We create custom themes, plugins, and optimized WordPress websites that meet your unique business requirements and deliver outstanding user experiences."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/wordpress"
        />
      </Head>
      {loading ? <Loader /> : <WordPressMaintenance />}
    </>
  );
};

export default WordpressPage;
