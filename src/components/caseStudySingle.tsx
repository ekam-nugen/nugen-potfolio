"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/src/components/common/Loader";
import { caseStudiesData } from "@/src/json/caseStudy/casyStudysData";
import { ArrowRight } from "lucide-react";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function SingleCaseStudy() {
  const { title } = useParams<{ title: string }>();
  const [loading, setLoading] = useState(true);

  const caseStudy = caseStudiesData.find(
    (item) => slugify(item.title) === title?.trim().toLowerCase()
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!caseStudy) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Case study <strong>{title}</strong> not found 🚫
      </div>
    );
  }

  const { hero, summary, sections, images, cta, skills, industry } = caseStudy;

  const getColorForIndex = (index: number): string => {
    const colors = [
      "#007bff",
      "#e83e8c",
      "#dc3545",
      "#28a745",
      "#6610f2",
      "#6f42c1",
      "#17a2b8",
      "#fd7e14",
      "#20c997",
      "#ffc107",
    ];
    return colors[index % colors.length];
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            src={hero.backgroundImage}
            alt="Hero background"
            className="object-cover w-full h-full brightness-90 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-sm uppercase tracking-wide text-orange-400 mb-2">
            {hero.subtitle}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            {hero.title}
          </h1>

          <div className="flex flex-wrap gap-6 mt-6">
            <span className="text-lg font-semibold text-gray-600">
              {industry}
            </span>
            <ul className="flex gap-3 flex-wrap">
              {skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="relative pl-3 pr-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm font-medium shadow-sm"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1 rounded-l"
                    style={{ backgroundColor: getColorForIndex(idx) }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-lg font-semibold text-gray-800">{summary.text}</p>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-[#ff6b3d] mb-4">
            {section.title}
          </h2>
          <p className="text-gray-700">{section.description}</p>
        </section>
      ))}

      {/* Images */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              width={100}
              height={100}
              className="rounded-lg shadow-md w-full h-auto"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-50 text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-[#ff6b3d] mb-4">
          {cta.headline}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{cta.subtext}</p>
        <button className="group inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
          {cta.buttonText}
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </section>
    </div>
  );
}
