"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, BarChart2, MessageSquare, Brain, Eye, Bot } from "lucide-react";

interface CoreCompetenciesProps {
  className?: string;
}

interface Competency {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}

const competencies: Competency[] = [
  {
    icon: Sparkles,
    title: "Generative AI",
    content:
      'Our AI developers explore limitless opportunities with <Link href="/generative-ai-development" className="text-blue-600 hover:underline">Generative AI</Link>, using strong technical knowledge around foundational models like GPT-4. We create high-quality applications, code, images, content, and other innovative solutions, delivering exceptional results for your business.',
  },
  {
    icon: BarChart2,
    title: "Data Science",
    content:
      "Automate and operationalize your data science models with our advanced AI ML development solutions. Our AI and data science consultants integrate these technologies to automate data interpretation and decision-making processes, resulting in improved performance and accelerated growth.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    content:
      "We are proficient in Natural Language Processing (NLP), enabling machines to understand and interact with human language. Our developers build models for sentiment analysis, chatbots, language translation, and text summarization, improving customer interactions and automating communication tasks.",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    content:
      "Our expertise in deep learning involves using neural networks to tackle complex problems. We apply these techniques to image and speech recognition, autonomous systems, and predictive analytics, helping businesses innovate and achieve technological advancements.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    content:
      "Our AI developers have strong capabilities in computer vision, allowing systems to interpret and act on visual data. We create applications for image classification, object detection, facial recognition, and video analytics, enhancing efficiency and safety across industries.",
  },
  {
    icon: Bot,
    title: "Robotic Process Automation",
    content:
      "Our AI/ML developers have extensive experience in Robotic Process Automation (RPA), automating repetitive tasks to improve productivity and accuracy. We combine RPA with AI's cognitive ability to optimize business processes, reduce operational costs, and more.",
  },
];

const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({ className}) => {
  // SVG Arrow component for the button
  const ArrowIcon: React.FC = () => (
    <svg
      className="inline-block ml-2"
      width="26"
      height="16"
      viewBox="0 0 26 16"
      fill="none"
    >
      <g fill="#FFFFFF">
        <path d="M24.839219,8.071071 C25.229719,7.680541 25.229719,7.047381 24.839219,6.656851 L18.475319,0.292893 C18.084719,-0.097631 17.451619,-0.097631 17.061019,0.292893 C16.670519,0.683421 16.670519,1.316581 17.061019,1.707111 L22.717919,7.363961 L17.061019,13.020861 C16.670519,13.411361 16.670519,14.044461 17.061019,14.435061 C17.451619,14.825561 18.084719,14.825561 18.475319,14.435061 L24.839219,8.071071 Z M-6.66133815e-16,8.363961 L24.132119,8.363961 L24.132119,6.363961 L-6.66133815e-16,6.363961 L-6.66133815e-16,8.363961 Z" />
      </g>
    </svg>
  );

  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Technological Expertise of Our{" "}
            <span className="block lg:inline">AI Developers</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI developers excel in cutting-edge technologies like generative AI, Natural Language Processing, deep learning, and more. We build innovative solutions that drive progress, enhance automation, and deliver actionable insights tailored to your business goals.
          </p>
        </div>

        {/* Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <competency.icon className="w-16 h-16 text-orange-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {competency.title}
              </h4>
              <p
                className="text-gray-600 text-center"
                dangerouslySetInnerHTML={{ __html: competency.content }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/book-an-appointment"
            data-bookctablock="Hire Top AI Developers - AI"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Start Your Project Today
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;