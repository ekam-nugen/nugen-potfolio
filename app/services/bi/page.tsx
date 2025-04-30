"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import BIMaintenance from "@/src/components/services/Bi";

const AppDevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <BIMaintenance />}
    </>
  );
}

export default AppDevelopment;
