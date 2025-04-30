"use client";

import Loader from "@/src/components/common/Loader";
import TechDescription from "@/src/components/technologySection/technologyDescription";
import { technologyStack } from "@/src/json/technologyDescription";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TechnologyPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tech = technologyStack.find(
    (t) =>
      t?.value?.toLowerCase() ===
      (typeof id === "string" && id?.trim().toLowerCase())
  );

  if (!tech) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Technology {id} not found 🚫
      </div>
    );
  }

  return loading ? (
    <Loader />
  ) : (
    <TechDescription
      label={tech.label}
      value={tech.value}
      highlights={tech.highlights}
      tagline={tech.tagline}
      imageSrc={tech.imageSrc}
      features={tech.features}
    />
  );
}
