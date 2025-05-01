"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import CloudEngineering from "@/src/components/services/CloudEngineering";
import Loader from "@/src/components/common/Loader";

const CloudEngineeringPage = () => {
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
          Cloud Engineering Services - Scalable and Secure Cloud Solutions by
          Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers expert cloud engineering services to design, deploy, and manage scalable and secure cloud infrastructures. We provide solutions to optimize performance and reduce costs for your business."
        />
        <meta
          name="keywords"
          content="cloud engineering, cloud infrastructure, cloud solutions, Nugen IT services, cloud architecture, cloud deployment, scalable cloud services, secure cloud solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Cloud Engineering Services - Scalable and Secure Cloud Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services’ cloud engineering expertise. We build robust, scalable, and secure cloud infrastructures to help your business achieve efficiency and innovation with cutting-edge cloud technologies."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/cloud-engineering"
        />
      </Head>
      {loading ? <Loader /> : <CloudEngineering />}
    </>
  );
};

export default CloudEngineeringPage;
