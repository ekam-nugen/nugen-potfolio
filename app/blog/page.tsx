"use client";
import { useEffect, useState } from "react";
import BlogPageSection from "@/src/components/blog/index";
import Loader from "@/src/components/common/Loader";

export default function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <BlogPageSection />}</>;
}
