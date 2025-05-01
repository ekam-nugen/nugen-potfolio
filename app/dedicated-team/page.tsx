"use client";
import { useEffect, useState } from "react";
import Teams from "@/src/components/team";
import Loader from "@/src/components/common/Loader";

export default function DedicatedTeamsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time (1000ms = 1s) as needed for your loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Teams />
      )}
    </>
  );
}
