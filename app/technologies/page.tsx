"use client";
import { useEffect, useState } from "react";
import TechPage from "@/src/components/technologySection";
import Loader from "@/src/components/common/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <TechPage />}</>;
}
