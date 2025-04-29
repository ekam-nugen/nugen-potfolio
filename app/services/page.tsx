"use client";
import { useEffect, useState } from "react";
import Services from "@/src/components/services";
import Loader from "@/src/components/common/Loader";

const ServicesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <Services />}</>;
};

export default ServicesPage;
