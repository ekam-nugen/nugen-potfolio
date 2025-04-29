"use client";
import { useEffect, useState } from "react";
import DataAnalytics from "@/src/components/services/DataAnalytics";
import Loader from "@/src/components/common/Loader";

const DataAnalyticsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <Loader /> : <DataAnalytics />}</div>;
};

export default DataAnalyticsPage;
