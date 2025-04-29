"use client";
import { useEffect, useState } from "react";
import SEOOptimization from "@/src/components/services/SEO";
import Loader from "@/src/components/common/Loader";

const SEOPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <SEOOptimization />}</>;
};

export default SEOPage;
