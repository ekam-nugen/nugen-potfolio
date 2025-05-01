"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Intelligence from "@/src/components/services/AI_Ml";
import Loader from "@/src/components/common/Loader";

const IntelligencePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <><Head>
  <title>
    Artificial Intelligence Services - Transform Your Business with AI Solutions by Nugen IT Services
  </title>
  <meta
    name="description"
    content="Nugen IT Services provides advanced artificial intelligence solutions to help businesses enhance decision-making, automate processes, and drive innovation using cutting-edge AI technologies."
  />
  <meta
    name="keywords"
    content="artificial intelligence, AI solutions, machine learning, Nugen IT services, AI development, AI automation, predictive analytics, intelligent systems, business AI"
  />
  <meta name="robots" content="index, follow" />
  <meta
    property="og:title"
    content="Artificial Intelligence Services - Transform Your Business with AI Solutions by Nugen IT Services"
  />
  <meta
    property="og:description"
    content="Explore Nugen IT Services’ artificial intelligence solutions. We create AI-driven systems that automate processes, optimize decision-making, and improve business efficiency, helping you stay ahead in your industry."
  />
  <meta property="og:image" content="/logo.png" />
  <meta
    property="og:url"
    content="https://nugeninfo.com/services/artificial-intelligence"
  />
</Head>
{loading ? <Loader /> : <Intelligence />}</>;
};

export default IntelligencePage;
