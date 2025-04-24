import BlogPage from "@/src/components/SingleBlog/Singleblog";
import { FAQSection } from "@/src/components/technologySection/questionSection";
import TestimonialSection from "@/src/components/TestimonialCard";

export default function singleBlog() {
  return (
    <>
     <BlogPage/> 
     <TestimonialSection/>
     <FAQSection/>
    </>
  );
}
