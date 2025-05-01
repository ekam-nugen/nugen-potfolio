"use client";

import Loader from "@/src/components/common/Loader";
import Head from "next/head";
import TechDescription from "@/src/components/technologySection/technologyDescription";
import { technologyStack } from "@/src/json/technologyDescription";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TechnologyPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tech = technologyStack.find(
    (t) =>
      t?.value?.toLowerCase() ===
      (typeof id === "string" && id?.trim().toLowerCase())
  );

  if (!tech) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Technology {id} not found 🚫
      </div>
    );
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* SEO and Social Media Meta Tags */}
      <Head>
        <title>{tech.label} - Technology | Nugen IT Services</title>
        <meta
          name="description"
          content={`Learn about ${tech.label}, its features, highlights, and how it is used in the industry. Explore its benefits and use cases at Nugen IT Services.`}
        />
        <meta
          name="keywords"
          content={`technology, ${tech.label}, ${tech.value}, features, benefits, tech stack, Nugen IT Services`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`${tech.label} - Technology | Nugen IT Services`}
        />
        <meta
          property="og:description"
          content={`Discover the power of ${tech.label} in the tech industry. Get insights on its features, benefits, and real-world applications at Nugen IT Services.`}
        />
        <meta property="og:image" content={tech.imageSrc || "/logo.png"} />
        <meta
          property="og:url"
          content={`https://nugeninfo.com/technology/${tech.value}`}
        />
      </Head>

      {/* Page Content */}
      <TechDescription
        label={tech.label}
        value={tech.value}
        highlights={tech.highlights}
        tagline={tech.tagline}
        imageSrc={tech.imageSrc}
        features={tech.features}
      />
    </>
  );
}
