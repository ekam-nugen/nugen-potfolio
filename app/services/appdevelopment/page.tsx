"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import CustomizedAppDevelopment from "@/src/components/services/AppDevelopment";
import Loader from "@/src/components/common/Loader";

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
          App Development - Custom Mobile and Web Apps by Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services specializes in custom app development for mobile and web platforms. We create intuitive, scalable apps that help businesses enhance user engagement and drive growth."
        />
        <meta
          name="keywords"
          content="app development, custom mobile apps, web app development, Nugen IT services, app development services, scalable apps, mobile app solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="App Development - Custom Mobile and Web Apps by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services’ app development solutions. From concept to deployment, we deliver custom mobile and web apps that cater to your business needs and enhance user experiences."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/services/app-development"
        />
      </Head>

      {loading ? <Loader /> : <CustomizedAppDevelopment />}
    </>
  );
};

export default AppDevelopment;
