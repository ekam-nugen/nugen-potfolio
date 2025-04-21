"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full px-4 py-2 bg-white shadow-sm flex items-center justify-between rounded-xl max-w-md mx-auto mt-4">
      <div className="flex items-center space-x-2">
        <span className="text-xl">🔥</span>
        <span className="font-medium text-lg text-gray-800">glowy</span>
      </div>

      <div className="flex items-center space-x-2 relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-sm rounded-md text-gray-700"
        >
          Explore
          <ChevronDown className="ml-1 w-4 h-4" />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-12 right-16 bg-white border rounded-md shadow-md py-2 w-32 z-50">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
              Option 1
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
              Option 2
            </button>
          </div>
        )}

        <button className="px-4 py-1.5 rounded-md text-white text-sm font-medium bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600">
          Learn
        </button>
      </div>
    </header>
  );
}
