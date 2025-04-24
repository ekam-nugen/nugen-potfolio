"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DiscussProjectProps {
  className?: string;
}

const DiscussProject: React.FC<DiscussProjectProps> = ({ className}) => {
  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?semt=ais_hybrid&w=740"
              alt="Let's Discuss Your Project"
              width={300}
              height={150}
              className="object-contain  rounded-full"
              priority
            />
          </div>

          {/* Text and Button Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
              Let&apos;s Discuss Your Project
            </h2>
            <ul className="list-none space-y-4 mb-8">
              <li className="text-gray-700 text-lg flex items-start">
                <span className="mr-2">•</span>
                Our solutions experts schedule a secure meeting within 24 hours.
              </li>
              <li className="text-gray-700 text-lg flex items-start">
                <span className="mr-2">•</span>
                They recommend tailored skills and hiring models.
              </li>
              <li className="text-gray-700 text-lg flex items-start">
                <span className="mr-2">•</span>
                You make informed decisions based on our expert guidance.
              </li>
            </ul>
            <Link
              href="#"
              data-bookctablock="Schedule a discovery call - API Development"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Schedule a discovery call
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussProject;
