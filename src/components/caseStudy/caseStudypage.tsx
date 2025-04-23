import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const caseStudiesData = [
  {
    id: 1,
    title: "IT Staff Augmentation Fueling Digital Transformation at Cinépolis",
    industry: "Media & Entertainment",
    skills: ["Python", "Java", "React.js", "Next.js", "AWS", "GCP"],
    image: "/21b1e3a7-abc6-4f97-9929-b85cbe29376b.webp",
    pdfLink: "https://example.com/fintech-case-study.pdf",
    readMoreLink: "https://example.com/fintech-case-study",
  },
  {
    id: 2,
    title:
      "Capital Numbers' IT Staff Augmentation Accelerates Volvo's GenAI Innovation with SPINE",
    industry: "Manufacturing",
    skills: ["React.js", "HTML", "CSS", "Python", "GCP"],
    image: "/21b1e3a7-abc6-4f97-9929-b85cbe29376b.webp",
    pdfLink: "https://example.com/fintech-case-study.pdf",
    readMoreLink: "https://example.com/fintech-case-study",
  },
  {
    id: 3,
    title:
      "Capital Numbers Helps Fintech Client Quickly Launch Innovative Financial Advisory Platform",
    industry: "Finance",
    skills: ["React", "Rails", "PostgreSQL", "AWS"],
    image: "/21b1e3a7-abc6-4f97-9929-b85cbe29376b.webp",
    pdfLink: "https://example.com/fintech-case-study.pdf",
    readMoreLink: "https://example.com/fintech-case-study",
  },
];

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
        className="flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm"
      >
        <span>{title}</span>
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute mt-2 max-h-60 overflow-y-auto z-10 w-60 bg-white border rounded shadow">
          <ul className="p-2">
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
  image: string;
  title: string;
  industry: string;
  skills: string[];
  pdfLink: string;
  readMoreLink: string;
};

const CaseStudyCard = ({
  image,
  title,
  industry,
  skills,
  pdfLink,
  readMoreLink,
}: CaseStudyCardProps) => (
  <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
    <img
      src={image}
      alt={title}
      className="rounded-xl h-48 object-cover w-full"
    />
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">
      <strong>Industry:</strong> {industry}
    </p>
    <p className="text-sm text-gray-500">
      <strong>Skills:</strong> {skills.join(", ")}
    </p>
    <div className="mt-4 flex justify-between">
      <a
        className="border px-4 py-2 rounded text-sm"
        href={pdfLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        DOWNLOAD
      </a>
      <a
        className="bg-orange-500 text-white px-4 py-2 rounded text-sm text-center"
        href={readMoreLink}
        target="_blank"
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
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        <FilterDropdown
          title="Filter by Technology"
          options={technologies}
          selected={selectedTech}
          onChange={toggleSelection(selectedTech, setSelectedTech)}
        />
        <span className="font-bold">OR</span>
        <FilterDropdown
          title="Filter by Industry"
          options={industries}
          selected={selectedInd}
          onChange={toggleSelection(selectedInd, setSelectedInd)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cs) => (
          <CaseStudyCard key={cs.id} {...cs} />
        ))}
      </div>
    </div>
  );
}
