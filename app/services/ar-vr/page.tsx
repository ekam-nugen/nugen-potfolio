"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "@/src/components/common/Loader";
import ARVRServices from "@/src/components/services/AR_VRService";

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
          AR/VR Development - Immersive Solutions by Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services offers cutting-edge AR/VR development solutions. We create immersive experiences that enhance training, marketing, and user engagement with the latest augmented and virtual reality technologies."
        />
        <meta
          name="keywords"
          content="AR development, VR development, augmented reality, virtual reality, immersive experiences, Nugen IT services, AR/VR solutions, 3D experiences"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="AR/VR Development - Immersive Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Discover Nugen IT Services' AR/VR development services. We craft immersive augmented and virtual reality solutions that transform how businesses engage with customers and train employees."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/services/ar-vr" />
      </Head>
      {loading ? <Loader /> : <ARVRServices />}
    </>
  );
};

export default AppDevelopment;
