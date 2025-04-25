"use client";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { caseStudiesData } from "../json/caseStudy/casyStudysData";

export default function SingleCaseStudy() {
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id") || "0");
  const title = searchParams.get("title") || "";

  const caseStudy = caseStudiesData.find(
    (item) => item.id === id && item.title === title
  );

  if (!caseStudy) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Case study not found.
      </div>
    );
  }

  const { hero, summary, sections, images, cta, skills, industry } = caseStudy;

  function getColorForIndex(index: number): string {
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
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white text-gray-900">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            fill
            src={hero.backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover scale-105 brightness-90 contrast-110 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent backdrop-blur-sm" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-sm uppercase tracking-widest mb-2 text-orange-400">
            {hero.subtitle}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold max-w-xl text-gray-900">
            {hero.title}
          </h1>

          <div className="flex flex-wrap mt-6 gap-6">
            <div className="text-lg text-gray-600 font-semibold">
              {industry}
            </div>
            <ul className="flex gap-4 flex-wrap">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="relative pl-3 pr-4 py-2 rounded-xl bg-gray-100 text-gray-800 font-medium text-sm shadow-sm"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1 rounded-l-md"
                    style={{ backgroundColor: getColorForIndex(index) }}
                  />
                  <span className="inline-block">{skill}</span>
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

      {/* Dynamic Sections */}
      {sections.map((section, i) => (
        <section key={i} className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4 text-[#ff6b3d]">
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
              height={100}
              width={100}
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg shadow-md"
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
        <button className="cursor-pointer bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
          {cta.buttonText}
        </button>
      </section>
    </div>
  );
}
