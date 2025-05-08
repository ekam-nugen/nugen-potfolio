"use client"
import React, { useState } from "react";
import Image from "next/image";
import salesforce from "../../../public/salesforce.svg";
import microsoft from "../../../public/microsoft-partner.svg";
import adobe from "../../../public/adobe.svg";
import ContactPopup from "../contactusPopup";
const platforms = [
  {
    name: "Salesforce",
    logo: salesforce,
    description:
      "At Nugen, we deliver tailored Salesforce solutions that transform your CRM capabilities. Our certified experts help you streamline operations, improve customer engagement, and unlock business growth through seamless integrations and automation.",
  },
  {
    name: "Adobe Commerce",
    logo: adobe,
    description:
      "Nugen empowers businesses with scalable Adobe Commerce (Magento) solutions, delivering high-performing, user-focused online stores. From UX to backend architecture, our team ensures secure, feature-rich E-commerce experiences built for growth.",
  },

  {
    name: "Microsoft",
    logo: microsoft,
    description:
      "At Nugen, we leverage Microsoft's ecosystem—including Azure, .NET, and Power Platform—to build scalable, secure, and enterprise-grade solutions. Whether it's cloud infrastructure, business analytics, or custom development, our Microsoft experts deliver results aligned with your business goals.",
  },
];

export const TopPlatformsSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          We Work With The <br className="sm:hidden" /> Top-rated Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {platform.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {platform.description}
              </p>
              <button
                onClick={handlePopupOpen}
                className="text-sm font-medium text-black hover:text-[#ff896b] transition-colors"
              >
                Know More →
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Popup Render */}
      {isPopupOpen && <ContactPopup onClose={handlePopupClose} />}
    </section>
  );
};
