"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import DataEngineering from "@/src/components/services/DataEngineering";

const DataAnalyticsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <Loader /> : <DataEngineering />}</div>;
};

export default DataAnalyticsPage;
