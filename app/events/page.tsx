import TechEventsPage from "@/src/components/tech-events";
import { FAQSection } from "@/src/components/technologySection/questionSection";
import TestimonialSection from "@/src/components/TestimonialCard";

export default function events() {
  return (
    <>
     <TechEventsPage/> 
     <TestimonialSection/>
     <FAQSection/>
    </>
  );
}
