"use client";
import { Suspense } from "react";
import SingleCaseStudy from "@/src/components/caseStudySingle";
import ContactUsSection from "@/src/components/technologySection/contactSection";
import Loader from "@/src/components/common/Loader";

export default function CasestudySingle() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SingleCaseStudy />
        <ContactUsSection />
      </Suspense>
    </>
  );
}
