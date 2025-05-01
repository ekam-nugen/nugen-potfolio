import React, { ReactNode } from "react";
import Link from "next/link";

interface TechnologySectionProps {
  subheading: ReactNode;
  heading: string;
  tags: { label: string; color: string; href?: string }[];
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({
  subheading,
  heading,
  tags,
}) => {
  return (
    <div className="bg-white px-4 py-10 flex flex-col items-center mt-4">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#ffbb9f] font-semibold mb-2">
          {heading}
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-extrabold leading-tight">
          {subheading}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tags?.map((tag, index) =>
            tag?.href ? (
              <Link
                key={index}
                href={tag?.href}
                className={`px-6 py-3 border-l-4 ${tag.color} text-gray-800 font-medium hover:bg-slate-100 rounded-lg transition-colors duration-200`}
              >
                {tag.label}
              </Link>
            ) : (
              <div
                key={index}
                className={`cursor-pointer px-6 py-3 border-l-4 ${tag.color} text-gray-800 font-medium hover:bg-slate-100 rounded-lg transition-colors duration-200`}
              >
                {tag.label}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
