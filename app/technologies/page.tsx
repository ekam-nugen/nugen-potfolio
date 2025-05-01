"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import TechPage from "@/src/components/technologySection";
import Loader from "@/src/components/common/Loader";

export default function Home() {
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
          Technology Solutions - Innovative and Scalable Tech Solutions by Nugen
          IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers cutting-edge technology solutions to help businesses stay ahead in the digital world. From cloud computing to artificial intelligence, we provide the tools and expertise to drive innovation and business growth."
        />
        <meta
          name="keywords"
          content="technology solutions, innovative tech, Nugen IT services, cloud computing, artificial intelligence, machine learning, software development, IT solutions, tech innovation"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Technology Solutions - Innovative and Scalable Tech Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' technology expertise. We provide innovative and scalable tech solutions in cloud computing, AI, software development, and more to help your business thrive in the digital age."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/technologies" />
      </Head>
      {loading ? <Loader /> : <TechPage />}
    </>
  );
}
