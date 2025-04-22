import React from 'react';
import ClientSlider from './clientSection';
import ContactUsSection from './contactSection';
import { FAQSection } from './questionSection';
import { TechnologySection } from './technologySection';
import TechnologyShowcase from './launguageSection';

export default function TechPage() {
  return (
    <div className="technology-section">
     <TechnologySection />
      <ClientSlider/>
      <TechnologyShowcase />
      <ContactUsSection/>
      <FAQSection/>
    </div>
  );
}
