"use client";

import Image from "next/image";
import Link from "next/link";
import salesforce from "../../../public/salesforce.svg";
import microsoft from "../../../public/microsoft-partner.svg";
import adobe from "../../../public/adobe.svg";

const partners = [
  {
    title: "Salesforce Partner",
    icon: salesforce,
  },
  {
    title: "Microsoft Solutions Partner",
    icon: microsoft,
  },
  {
    title: "Adobe Solution Partner",
    icon: adobe,
  },
];

export default function PlatformSolutions() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#fff1eb] to-white">
      <div className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
            Platform Solutions and Services
          </h2>
          <p className="text-[#f0845a] mt-4 text-lg font-medium underline">
            We drive your business forward with innovative solutions
          </p>

          {/* Partner Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md cursor-pointer rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-4"
              >
                <Image
                  src={partner.icon}
                  alt={partner.title}
                  width={120}
                  height={120}
                />
                <span className="text-base font-semibold text-gray-900">
                  {partner.title}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition flex items-center gap-2"
            >
              Share Your Requirements →
            </Link>
            <Link
              href="#"
              className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white transition flex items-center gap-2"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
