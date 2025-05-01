"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "@/src/components/common/Loader";
import BIMaintenance from "@/src/components/services/Bi";

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
          BI Maintenance Services - Optimizing Your Business Intelligence
          Solutions
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers comprehensive BI maintenance services to ensure the smooth operation of your business intelligence solutions. We help optimize and support your BI systems for better decision-making."
        />
        <meta
          name="keywords"
          content="BI maintenance, business intelligence support, BI solutions, Nugen IT services, BI optimization, data analytics, BI system management, business data maintenance"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="BI Maintenance Services - Optimizing Your Business Intelligence Solutions"
        />
        <meta
          property="og:description"
          content="Discover how Nugen IT Services’ BI maintenance services can improve the performance, reliability, and effectiveness of your business intelligence systems, ensuring your data remains a powerful asset."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/bi"
        />
      </Head>

      {loading ? <Loader /> : <BIMaintenance />}
    </>
  );
};

export default AppDevelopment;
