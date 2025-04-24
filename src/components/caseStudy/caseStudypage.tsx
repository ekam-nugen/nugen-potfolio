import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { caseStudiesData } from "@/src/json/caseStudy/caseStudys";

const technologies = [
  "MongoDB",
  "Next.js",
  "Node.js",
  "PHP",
  "Python",
  "React.js",
  "React Native",
  "Shopify",
  "Swift",
  "Vue Js",
  "Wordpress",
];

const industries = [
  "Finance",
  "Gaming & Sports",
  "Healthcare",
  "Legal Services",
  "Lifestyle",
  "Logistics & Transportation",
  "Manufacturing",
  "Marketing & Advertising",
  "Media & Entertainment",
  "Nonprofit",
  "Real Estate",
  "SaaS",
  "Social",
  "Technology",
];

const FilterDropdown = ({
  title,
  options,
  selected,
  onChange,
}: {
  title: string;
  options: string[];
  selected: string[];
  onChange: (option: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow hover:shadow-md transition"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute mt-2 max-h-60 overflow-y-auto z-10 w-60 bg-white border rounded shadow-lg">
          <ul className="p-2 space-y-1">
            {options.map((option) => (
              <li key={option} className="flex items-center space-x-2 py-1">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => onChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

type CaseStudyCardProps = {
  image: string | StaticImageData;
  title: string;
  industry: string;
  skills: string[];
  pdfLink?: string;
  readMoreLink: string;
};

const CaseStudyCard = ({
  image,
  title,
  industry,
  skills,
  readMoreLink,
}: CaseStudyCardProps) => (
  <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm transition hover:shadow-lg hover:-translate-y-1 duration-200">
    <Image
      src={image}
      alt={title}
      className="rounded-xl h-48 object-cover w-full"
      height={192}
      width={0}
    />
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">
      <strong>Industry:</strong> {industry}
    </p>
    <p className="text-sm text-gray-500">
      <strong>Skills:</strong> {skills.join(", ")}
    </p>
    <div className="mt-4 flex justify-between">
      <a></a>
      <a
        className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded text-sm"
        href={readMoreLink}
        rel="noopener noreferrer"
      >
        READ MORE
      </a>
    </div>
  </div>
);

export default function CaseStudiesSection() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedInd, setSelectedInd] = useState<string[]>([]);

  const toggleSelection =
    (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) =>
    (item: string) => {
      setList((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };

  const filtered = caseStudiesData.filter((cs) => {
    const techMatch =
      selectedTech.length === 0 ||
      selectedTech.some((tech) => cs.skills.includes(tech));
    const indMatch =
      selectedInd.length === 0 || selectedInd.includes(cs.industry);
    return techMatch && indMatch;
  });

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto text-center space-y-10">
      <h2 className="text-3xl font-bold">Our Case Studies</h2>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        <FilterDropdown
          title="Filter by Technology"
          options={technologies}
          selected={selectedTech}
          onChange={toggleSelection(selectedTech, setSelectedTech)}
        />
        <span className="text-gray-600 font-semibold">OR</span>
        <FilterDropdown
          title="Filter by Industry"
          options={industries}
          selected={selectedInd}
          onChange={toggleSelection(selectedInd, setSelectedInd)}
        />
      </div>
      <hr className="border-t border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {filtered.map((cs) => (
          <CaseStudyCard key={cs.id} {...cs} />
        ))}
      </div>
    </section>
  );
}
