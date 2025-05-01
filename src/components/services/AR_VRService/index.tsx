import BlogSection from "../../blog";
import TestimonialStatic from "../../caseStudy/testimonialStatic";
import ClientSlider from "../../technologySection/clientSection";
import ContactUsSection from "../../technologySection/contactSection";
import TechnologyShowcase from "../../technologySection/launguageSection";
import { FAQSection } from "../../technologySection/questionSection";
import CoreCompetencies, { Competency } from "../AI_Ml/CoreCompentencies";
import DiscussProject from "../AI_Ml/DiscussProject";
import AIMLBanner from "../AI_Ml/HeroAI";
import DevelopmentProcess, { ProcessItem } from "../AI_Ml/ProcessAI";
import * as LucideIcons from "lucide-react";

const ARVRServices = () => {
  const icons: (keyof typeof LucideIcons)[] = ["Camera", "Cpu", "Rotate3D"];

  const processItems: ProcessItem[] = [
    {
      number: 1,
      title: "Requirement Analysis",
      description:
        "We gather technical and experiential requirements for your AR/VR solution.",
      icon: "ClipboardList",
    },
    {
      number: 2,
      title: "3D Content Creation",
      description:
        "Design immersive 3D environments and models for realistic and interactive experiences.",
      icon: "Layers",
    },
    {
      number: 3,
      title: "App Development",
      description:
        "We develop AR/VR apps for mobile, web, and headsets using Unity, Unreal, and WebXR.",
      icon: "MonitorSmartphone",
    },
    {
      number: 4,
      title: "Device Integration",
      description:
        "Ensure seamless performance across platforms like Oculus, HoloLens, and ARKit/ARCore.",
      icon: "Cpu",
    },
    {
      number: 5,
      title: "Testing & Deployment",
      description:
        "Conduct usability tests, performance optimization, and platform-specific deployment.",
      icon: "CheckCircle2",
    },
  ];

  const competencies: Competency[] = [
    {
      icon: "Camera",
      title: "Immersive UX",
      content:
        "Design experiences that engage users through spatial interaction and realistic visuals.",
    },
    {
      icon: "Rotate3D",
      title: "Cross-Platform AR/VR",
      content:
        "We build apps compatible with major VR headsets and AR-enabled devices.",
    },
    {
      icon: "Layers",
      title: "High-Fidelity 3D Assets",
      content:
        "In-house designers craft optimized 3D models for real-time rendering and performance.",
    },
    {
      icon: "MonitorSmartphone",
      title: "Full-Cycle App Development",
      content:
        "From concept to deployment, we handle design, development, testing, and support.",
    },
    {
      icon: "CheckCircle2",
      title: "QA & Performance",
      content:
        "Ensure smooth performance, low latency, and stable FPS across all supported devices.",
    },
  ];

  return (
    <>
      <AIMLBanner
        title="AR/VR Development Services"
        subtitle="Transform user experiences with immersive, interactive AR/VR solutions tailored to your industry."
        reviewCount={90}
        reviewPlatforms={[
          {
            name: "clutch",
            imageSrc:
              "https://megasite.ua/cache/cache_image/d/d60aaf99feb42195ced60bde22d590fc.webp",
            alt: "Clutch Reviews",
          },
          {
            name: "goodfirm",
            imageSrc:
              "https://www.g2.com/products/g2-seller-solutions/widgets/stars?color=white&type=read",
            alt: "GoodFirms Reviews",
          },
          {
            name: "g2",
            imageSrc: "https://i.ytimg.com/vi/f8vrTlBe0sc/maxresdefault.jpg",
            alt: "G2 Reviews",
          },
          {
            name: "google",
            imageSrc:
              "https://studio.made2grow.de/hs-fs/hubfs/made2GROW%20Studio/Tools%20and%20Certification%20Logos/Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png?width=1456&height=500&name=Google%20Ads%20BootCamp%20-%20Partners%20-%20HubSpot%20Platinum-horizontal-color.png",
            alt: "Google Reviews",
          },
        ]}
        projectLink="/case-study"
        teamLink="/dedicated-team"
        companyRatingText="by Top AR/VR Developers"
        ctaText="Build Your AR/VR Experience"
        ctaLink="/contact-us"
        consultationTitle="Looking to innovate with AR/VR?"
        consultationDescription="Let’s discuss how immersive tech can solve your business challenges and engage users."
        icons={icons}
      />
      <DevelopmentProcess
        title="AR/VR Development Workflow"
        subtitle="We follow a structured, agile process to bring your immersive vision to life."
        highlightedText="ar vr"
        processItems={processItems}
        ctaText="Request a Free Demo"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire AR VR Developers - AR VR Services"
      />
      <ClientSlider />
      <DiscussProject imageSrc="/clients/arService.jpg" />
      <CoreCompetencies
        title="Why Choose Our AR/VR Team"
        subtitle="Expertise in real-time 3D engines, platform-specific performance, and immersive UX design."
        competencies={competencies}
        ctaText="Start Building Immersive Apps"
        ctaLink="/contact-us"
        ctaDataAttribute="Hire ARVR Experts - AR VR Services"
      />
      <TechnologyShowcase />
      <BlogSection />
      <TestimonialStatic className="bg-white" />
      <ContactUsSection />
      <FAQSection />
    </>
  );
};

export default ARVRServices;
