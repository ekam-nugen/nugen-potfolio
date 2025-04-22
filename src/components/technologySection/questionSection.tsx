"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question:
      "Which Programming Languages Does Nugen IT Services Specialize In?",
    answer:
      "Nugen IT Services excels in programming languages like Python, Java, JavaScript, C#, and more for application development.",
  },
  {
    question: "How Does Nugen IT Services Support Mobile Development?",
    answer:
      "Nugen IT Services provides expertise in Java, React Native, Xamarin, and other technologies for Android and iOS development.",
  },
  {
    question:
      "What Cloud and Containerization Technologies Does Nugen IT Services Offer?",
    answer:
      "Nugen IT Services offers AWS, Azure, Google Cloud, Docker, and Kubernetes for cloud services and deployment.",
  },
  {
    question: "Can Nugen IT Services Assist With AI and ML Projects?",
    answer:
      "Yes, Nugen IT Services leads in AI and ML with TensorFlow, PyTorch, and other frameworks for innovative solutions.",
  },
  {
    question: "What E-Commerce Support Is Available at Nugen IT Services?",
    answer:
      "Nugen IT Services offers solutions with Magento, Shopify, WooCommerce, and other platforms for online storefronts.",
  },
  {
    question: "What Web Development Frameworks Does Nugen IT Services Use?",
    answer:
      "Nugen IT Services uses Node.js, .NET, Spring, Django, and Laravel for back-end development.",
  },
  {
    question: "How Is Data Science and Analytics Approached?",
    answer:
      "Nugen IT Services uses Snowflake, Redshift, Apache Spark, and Tableau for data storage, processing, and visualization.",
  },
  {
    question: "Does Nugen IT Services Offer Blockchain Development?",
    answer:
      "Yes, offering blockchain services with Ethereum, Hyperledger Fabric, and smart contract development.",
  },
  {
    question: "What UI/UX Design Support Is Provided?",
    answer:
      "Nugen IT Services uses Figma, Adobe XD, and Sketch, focusing on accessibility and user-friendly design.",
  },
  {
    question: "How Does Nugen IT Services Ensure Software Quality?",
    answer:
      "Through manual and automated testing with Selenium, Cypress, Postman, and JMeter for quality and performance.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Have Questions?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-10">
          Got Any Queries? Our FAQ Section Has All the Answers You Need To Make
          an Informed Decision With Confidence.
        </p>

        <div className="space-y-4 text-left">
          {faqData?.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex items-center justify-between text-gray-800 text-sm sm:text-base md:text-lg font-semibold">
                <span>{faq?.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-xs sm:text-sm text-gray-600">
                  {faq?.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
