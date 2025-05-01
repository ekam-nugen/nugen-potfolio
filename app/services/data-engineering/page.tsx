"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "@/src/components/common/Loader";
import DataEngineering from "@/src/components/services/DataEngineering";

const DataAnalyticsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Data Engineering Services - Scalable and Efficient Data Solutions by
          Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers expert data engineering solutions to help businesses design, build, and maintain scalable and efficient data pipelines. We enable seamless data integration, storage, and processing for better decision-making."
        />
        <meta
          name="keywords"
          content="data engineering, data pipelines, data integration, Nugen IT services, big data solutions, data storage, data processing, scalable data systems, data architecture"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Data Engineering Services - Scalable and Efficient Data Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' data engineering expertise. We build robust and scalable data systems that integrate and process your data efficiently, empowering your business with the insights needed for strategic growth."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/data-engineering"
        />
      </Head>
      {loading ? <Loader /> : <DataEngineering />}
    </div>
  );
};

export default DataAnalyticsPage;
