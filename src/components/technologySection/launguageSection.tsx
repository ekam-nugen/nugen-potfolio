"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { data } from "@/src/json/languageSection";
import Image from "next/image";

export default function TechnologyShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof data>("Programming Languages");
  const [selectedSubcategory, setSelectedSubcategory] = useState("General-purpose");
  const [openCategory, setOpenCategory] = useState("Programming Languages");

  const isExpandable = (category: string) =>
    typeof data[category as keyof typeof data] === "object" &&
    !Array.isArray(data[category as keyof typeof data]);

  const getActiveItems = () => {
    const section = data[selectedCategory];
    if (isExpandable(selectedCategory)) {
      const subSection = section as Record<string, { name: string; icon: string }[]>;
      return subSection[selectedSubcategory] || [];
    }
    if (Array.isArray(section)) {
      return section as { name: string; icon: string }[];
    }
    return [];
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category as keyof typeof data);
    setOpenCategory((prev) => (prev === category ? "" : category));

    if (isExpandable(category)) {
      const firstSub = Object.keys(data[category as keyof typeof data] as Record<string, { name: string; icon: string }[]>)[0];
      setSelectedSubcategory(firstSub);
    } else {
      setSelectedSubcategory("");
    }
  };

  return (
    <>
      <h1 className="text-4xl bg-white text-black font-bold text-center pt-8">
        We Work With 40+ Cutting-Edge Technologies
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-12 xl:p-20 bg-white text-black min-h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 space-y-6 overflow-x-auto">
          {Object.keys(data)?.map((category) => {
            const expanded = isExpandable(category);
            const isOpen = openCategory === category;

            return (
              <div key={category}>
                <div
                  onClick={() => handleCategoryClick(category)}
                  className={`font-bold cursor-pointer flex justify-between items-center ${
                    selectedCategory === category ? "text-[#FFC39E]" : "text-black"
                  }`}
                >
                  <span>{category}</span>
                  {expanded && (isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                </div>

                {expanded && isOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {Object.keys(data[category as keyof typeof data] as Record<string, { name: string; icon: string }[]>).map((sub) => (
                      <div
                        key={sub}
                        onClick={() => setSelectedSubcategory(sub)}
                        className={`cursor-pointer ${
                          selectedSubcategory === sub
                            ? "text-[#FFC39E] font-medium border-b-2 border-[#FFC39E]-600"
                            : "text-gray-500"
                        }`}
                      >
                        {sub}
                        {selectedSubcategory === sub && (
                          <span className="ml-2 text-[#FFC39E]">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-50 rounded-xl shadow p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            {selectedSubcategory || selectedCategory}
          </h2>

          {getActiveItems().length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {getActiveItems()?.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="bg-white border p-4 rounded-lg shadow-sm flex items-center gap-3"
                  >
                    <Image src={icon} alt={name} className="w-8 h-8 object-contain" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 px-6 py-3 hover:bg-gradient-to-r from-orange-400 to-purple-500 hover:text-white bg-white text-black rounded-lg font-bold shadow hover:from-orange-500 transition">
                Explore Programming Solutions →
              </button>
            </>
          ) : (
            <p className="text-gray-500 italic mt-6">No technologies listed yet.</p>
          )}
        </div>
      </div>
    </>
  );
}
