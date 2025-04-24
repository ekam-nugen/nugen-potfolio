"use client";
import { processItems } from "@/src/json";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const DevelopmentProcess: FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white via-[#fff1eb] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Our AI Software Development Process
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-6xl">
            Our AI{" "}
            <span className="font-semibold">software development process</span>{" "}
            is thorough and client-focused, ensuring every AI project is
            tailored to meet specific business objectives and deliver tangible
            value. From AI product discovery and data cleaning to model training
            and deployment, our rigorous process ensures that every AI solution
            is built with precision and efficiency.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {processItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.number}
                  className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-orange-500 mr-4">
                      {item.number}
                    </span>
                    <div className="flex items-center">
                      <Icon className="w-10 h-10 text-orange-500 mr-4" />
                      <h4 className="text-xl font-semibold text-gray-800">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              );
            })}
          </ul>
          <Link
            href="/book-an-appointment"
            className="mt-8 inline-flex items-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors"
            data-bookctablock="Hire an AI Developer - AI ML Development"
          >
            Get in Touch with Us
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
