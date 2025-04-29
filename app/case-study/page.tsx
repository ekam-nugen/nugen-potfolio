"use client";
import { useEffect, useState } from "react";
import CaseStudiesPage from "@/src/components/caseStudy/index";
import Loader from "@/src/components/common/Loader";

export default function Casestudy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5 seconds, same as other pages

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <CaseStudiesPage />}</>;
}
