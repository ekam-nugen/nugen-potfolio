"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Teams from "@/src/components/team";
import Loader from "@/src/components/common/Loader";

export default function DedicatedTeamsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time (1000ms = 1s) as needed for your loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Dedicated Team - Nugen IT Services</title>
        <meta
          name="description"
          content="Build your own dedicated development team with Nugen IT Services. Get scalable, expert IT talent aligned with your project goals."
        />
        <meta
          name="keywords"
          content="dedicated team, IT team extension, hire developers, Nugen IT Services, staff augmentation, remote developers"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Dedicated Team - Nugen IT Services"
        />
        <meta
          property="og:description"
          content="Nugen IT Services offers dedicated development teams to help you scale quickly and efficiently. Partner with us for tailored IT staffing solutions."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://nugeninfo.com/dedicated-team"
        />
      </Head>

      {loading ? <Loader /> : <Teams />}
    </>
  );
}
