"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import ARVRServices from "@/src/components/services/AR_VRService";

const AppDevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <ARVRServices />}</>;
};

export default AppDevelopment;
