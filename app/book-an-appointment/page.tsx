"use client";
import { useEffect, useState } from "react";
import HireUsPage from "@/src/components/hireus";
import Loader from "@/src/components/common/Loader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <HireUsPage />}
    </>
  );
}
