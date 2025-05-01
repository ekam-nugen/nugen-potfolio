"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import DataAnalytics from "@/src/components/services/DataAnalytics";
import Loader from "@/src/components/common/Loader";

const DataAnalyticsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Data Analytics Services - Unlock Insights and Drive Decisions with
          Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services provides expert data analytics solutions to help businesses unlock valuable insights from their data. Our services include data visualization, predictive analytics, and data-driven decision-making."
        />
        <meta
          name="keywords"
          content="data analytics, business intelligence, data visualization, predictive analytics, data-driven decisions, Nugen IT services, big data solutions, data analysis, analytics services"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Data Analytics Services - Unlock Insights and Drive Decisions with Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services’ data analytics solutions. We help businesses harness the power of their data through advanced analytics techniques, empowering smarter decision-making and business growth."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/data-analytics"
        />
      </Head>
      {loading ? <Loader /> : <DataAnalytics />}
    </div>
  );
};

export default DataAnalyticsPage;
