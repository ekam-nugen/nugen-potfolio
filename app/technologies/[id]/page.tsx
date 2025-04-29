"use client";

import TechDescription from "@/src/components/technologySection/technologyDescription";
import { technologyStack } from "@/src/json/technologyDescription";
import { useParams } from "next/navigation";

export default function TechnologyPage() {
  const { id } = useParams();
  const tech = technologyStack.find(
    (t) =>
      t.value.toLowerCase() ===
      (typeof id === "string" && id?.trim().toLowerCase())
  );

  if (!tech) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Technology {id} not found 🚫
      </div>
    );
  }

  return (
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
