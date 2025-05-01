"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import ContactUs from "@/src/components/contactUs";
import Loader from "@/src/components/common/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch with Nugen IT Services</title>
        <meta
          name="description"
          content="Have questions or need a custom IT solution? Contact Nugen IT Services today to speak with our experts and start your project."
        />
        <meta
          name="keywords"
          content="contact Nugen, IT support, request a quote, start a project, get in touch, tech consultation, IT services inquiry"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contact Us - Get in Touch with Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Reach out to Nugen IT Services for consultations, quotes, or general inquiries. We’re here to help you with innovative IT solutions."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://nugeninfo.com/contact-us" />
        <link rel="canonical" href="https://nugeninfo.com/contact-us" />
      </Head>
      {loading ? <Loader /> : <ContactUs />}
    </>
  );
}
