"use client";
import { useEffect, useState } from "react";
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

  return <>{loading ? <Loader /> : <ContactUs />}</>;
}
