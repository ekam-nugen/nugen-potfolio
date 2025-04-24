"use client";
import { Suspense } from "react";
import SingleCaseStudy from "@/src/components/caseStudySingle";
import ContactUsSection from "@/src/components/technologySection/contactSection";

export default function CasestudySingle() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SingleCaseStudy />
        <ContactUsSection />
      </Suspense>
    </>
  );
}
