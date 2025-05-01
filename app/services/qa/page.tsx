"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "@/src/components/common/Loader";
import QAMaintenance from "@/src/components/services/QA";

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
          QA Services - Ensuring Excellence and Performance with Nugen IT
          Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services provides comprehensive QA and testing services to ensure the highest quality standards for your software applications. We help businesses deliver reliable, secure, and bug-free solutions."
        />
        <meta
          name="keywords"
          content="QA services, software testing, quality assurance, Nugen IT services, automation testing, performance testing, bug-free solutions, security testing, manual testing"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="QA Services - Ensuring Excellence and Performance with Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' QA expertise. We offer manual and automated testing services to ensure your applications perform flawlessly, delivering the highest standards of quality and security."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/services/qa" />
      </Head>

      {loading ? <Loader /> : <QAMaintenance />}
    </>
  );
};

export default AppDevelopment;
