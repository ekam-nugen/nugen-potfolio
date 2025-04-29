import React from "react";
import Image from "next/image";

const platforms = [
  {
    name: "Salesforce",
    logo: "/platforms/salesforce.png",
    description:
      "We specialize in Salesforce development, offering custom solutions to enhance your CRM processes and drive business growth. Our experienced developers tailor Salesforce to your needs, ensuring seamless integration and improved efficiency.",
  },
  {
    name: "Adobe Commerce",
    logo: "/platforms/adobe.png",
    description:
      "With our expertise in Magento and Adobe Commerce, we deliver robust E-commerce solutions tailored to your business needs. From initial design to deployment, we ensure high performance, security, and scalability.",
  },
  {
    name: "Power BI",
    logo: "/platforms/powerbi.png",
    description:
      "Power BI helps you turn data into smart decisions. We help implement, customize, and visualize your business metrics using Microsoft's leading BI tools.",
  },
  {
    name: "ServiceNow",
    logo: "/platforms/servicenow.png",
    description:
      "From ITSM to HR workflows, ServiceNow empowers digital transformation. Our solutions ensure seamless integration and automation.",
  },
];

export const TopPlatformsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          We Work With The <br className="sm:hidden" /> Top-rated Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {platform.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{platform.description}</p>
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-[#ff896b] transition-colors"
              >
                Know More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
