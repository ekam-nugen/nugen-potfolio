"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "@/src/components/common/Loader";
import BackendMaintenance from "@/src/components/services/Backend";

const AppDevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          Backend Development - Scalable Solutions by Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services provides robust backend development solutions that power your business. We create scalable, secure, and high-performance server-side applications tailored to your needs."
        />
        <meta
          name="keywords"
          content="backend development, server-side development, scalable backend solutions, Nugen IT services, backend architecture, secure backend, API development"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Backend Development - Scalable Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' backend development expertise. We deliver custom backend solutions that are secure, scalable, and optimized for performance, driving business growth."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/backend"
        />
      </Head>

      {loading ? <Loader /> : <BackendMaintenance />}
    </>
  );
};

export default AppDevelopment;
