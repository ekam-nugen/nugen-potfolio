"use client";

import React from "react";

interface ContactPopupProps {
  onClose: () => void;
}

export default function ContactPopup({ onClose }: ContactPopupProps) {
  // Handle outside click
  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="relative bg-[#fff7f4] rounded-3xl shadow-2xl p-6 w-full max-w-6xl flex flex-col md:flex-row gap-6 transition-all"
        onClick={stopPropagation}
      >
        {/* Left Form Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Let’s Build Something <br className="hidden md:block" /> Great
            Together!
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Reach out and we’ll get back to you within a few hours.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none bg-white shadow-sm"
              />
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none bg-white shadow-sm"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none bg-white shadow-sm"
            />
            <textarea
              placeholder="Your Message *"
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none bg-white shadow-sm"
            />
            <button
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all font-semibold shadow-lg"
            >
              Send Your Query →
            </button>
            <p className="text-green-600 text-xs pt-2">✅ 100% Confidential</p>
          </form>
        </div>

        {/* Divider for large screens */}
        <div className="hidden md:block w-px bg-orange-200 rounded-full"></div>

        {/* Right Info Section */}
        <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-orange-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            📞 Contact Information
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Address:</strong>
            <br />
            Phase 8, C-196/A, Times Square Building,
            <br />
            3rd Floor, Sector 74, SAS Nagar,
            <br />
            Mohali, Punjab, 160071
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Phone:</strong> +91 78148 52571
          </p>
          <p className="text-sm text-gray-700 mb-4">
            <strong>Email:</strong> info@nugeninfo.com
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13733.847729419933!2d76.6788635667232!3d30.712281946712053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb28c0d2d59f%3A0xf5bb3e788f06d37d!2sNugen%20InfoTech%20Services!5e0!3m2!1sen!2sin!4v1715151717509"
            className="w-full h-40 rounded-lg border border-gray-200"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-3 right-4 text-gray-500 hover:text-orange-500 text-3xl font-bold transition-all"
        >
          ×
        </button>
      </div>
    </div>
  );
}
