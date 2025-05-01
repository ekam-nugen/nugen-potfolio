"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import CMSEngineering from "@/src/components/services/Cms";
import Loader from "@/src/components/common/Loader";

const CmsPage = () => {
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
          CMS Development Services - Tailored Content Management Solutions by
          Nugen IT Services
        </title>
        <meta
          name="description"
          content="Nugen IT Services provides custom CMS development solutions to help businesses manage their content efficiently. We create flexible, user-friendly, and scalable content management systems tailored to your needs."
        />
        <meta
          name="keywords"
          content="CMS development, content management systems, Nugen IT services, custom CMS, website CMS solutions, CMS platforms, content management, scalable CMS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="CMS Development Services - Tailored Content Management Solutions by Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Explore Nugen IT Services' CMS development expertise. We design and build custom content management systems that streamline content creation, management, and delivery for your business."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/services/cms" />
      </Head>
      {loading ? <Loader /> : <CMSEngineering />}
    </>
  );
};

export default CmsPage;
