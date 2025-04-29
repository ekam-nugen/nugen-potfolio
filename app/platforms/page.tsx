"use client";
import { useEffect, useState } from "react";
import Loader from "@/src/components/common/Loader";
import { TechnologySection } from "@/src/components/technologySection/technologySection";
import ClientSlider from "@/src/components/technologySection/clientSection";
import { platformTags } from "@/src/json/languageSection";
import { TopPlatformsSection } from "@/src/components/platforms/platforms";

export default function Events() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TechnologySection
            heading={"Nugen I.T Services"}
            subheading={
              <>
                Empower your business with <br />
                Nugen it service
              </>
            }
            tags={platformTags}
          />
          <ClientSlider className="bg-gradient-to-r from-white via-[#fff1eb] to-white" />
          <TopPlatformsSection/>
        </>
      )}
    </>
  );
}
