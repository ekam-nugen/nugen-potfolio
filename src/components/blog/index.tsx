"use client";

import Services from "../about/Services";
import AwardsSection from "../award";
import TeamChoose from "../team/teamChoose";
import BlogSectionPage from "./blogsection";

export default function BlogPageSection() {
  return (
    <>
      <BlogSectionPage />
      <Services className="bg-gradient-to-r from-white via-[#fff1eb] to-white" />
      <AwardsSection />
      <TeamChoose />
    </>
  );
}
