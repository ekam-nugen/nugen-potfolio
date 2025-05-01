"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import UIUXDesign from "@/src/components/services/UIUX";
import Loader from "@/src/components/common/Loader";

const UIUXPage = () => {
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
          UI/UX Design Services - Creating Engaging and User-Centered
          Experiences with Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers expert UI/UX design services to create intuitive, engaging, and user-centered digital experiences. We focus on enhancing user satisfaction through innovative and visually appealing designs."
        />
        <meta
          name="keywords"
          content="UI/UX design, user interface design, user experience design, Nugen IT services, web design, mobile app design, user-centered design, digital experiences, responsive design"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="UI/UX Design Services - Creating Engaging and User-Centered Experiences with Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' UI/UX design expertise. We design user-friendly, visually stunning interfaces and experiences that engage your audience and enhance usability across web and mobile platforms."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/services/uiux" />
      </Head>
      {loading ? <Loader /> : <UIUXDesign />}
    </>
  );
};

export default UIUXPage;
