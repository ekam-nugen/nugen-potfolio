"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { headerData } from "../json/menuData";
import { AnimatePresence, motion } from "framer-motion";

interface MenuItem {
  label: string;
  href?: string;
  submenu?: MenuItem[];
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const renderDesktopDropdown = (submenu: MenuItem[]) => (
    <div className="absolute left-0 top-21 w-64 bg-white shadow-xl rounded-xl transform transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto pointer-events-none z-50">
      <div className="divide-y divide-gray-200 divide-dashed">
        {submenu.map((section, index) => (
          <div key={index} className="relative group/sub">
            {section.submenu ? (
              <>
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-black font-semibold transition-all duration-200">
                  {section.label}
                  <ChevronRight className="w-4 h-4 text-[#ff6b3d]" />
                </div>
                <div className="absolute left-full top-0 w-64 bg-white shadow-xl rounded-xl transform transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:pointer-events-auto pointer-events-none z-50">
                  {section.submenu.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href!}
                      className={`block px-4 py-2 hover:bg-gray-100 transition ${
                        isActive(item.href!) ? "text-[#ff6b3d]" : "text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={section.href!}
                className={`block px-4 py-2 hover:bg-gray-100 transition ${
                  isActive(section.href!) ? "text-[#ff6b3d]" : "text-black"
                } font-medium`}
              >
                {section.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={350}
              height={150}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center justify-center space-x-6">
              {headerData.map((item: MenuItem, index) => (
                <div
                  key={index}
                  className={
                    item.submenu
                      ? `relative group cursor-pointer py-7 ${
                          item.submenu.some(
                            (s) =>
                              s.submenu?.some((sub) => isActive(sub.href!)) ||
                              isActive(s.href!)
                          )
                            ? "text-[#ff6b3d]"
                            : "text-black hover:text-[#ff6b3d]"
                        }`
                      : ""
                  }
                >
                  {item.submenu ? (
                    <>
                      <Link
                        href={item?.href || "#"}
                        className={`font-medium flex items-center transition-all`}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>
                      {renderDesktopDropdown(item.submenu)}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`font-medium transition py-7 ${
                        isActive(item.href!)
                          ? "text-[#ff6b3d]"
                          : "text-black hover:text-[#ff6b3d]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/book-an-appointment"
              className={`bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-4 py-2 rounded-md font-medium`}
            >
              Hire us
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-full bg-white shadow-md z-50 overflow-hidden lg:hidden"
          >
            <div className="py-4 px-4 space-y-4">
              {headerData.map((item: MenuItem, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <>
                      <button
                        className="flex justify-between w-full text-left py-2 text-black font-medium"
                        onClick={() => toggleMobileDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openMobileDropdown === item.label
                              ? "rotate-180 text-[#ff6b3d]"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {openMobileDropdown === item.label && (
                          <motion.div
                            key="submenu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden space-y-2"
                          >
                            {item.submenu.map((sub, idx) =>
                              sub.submenu ? (
                                <div key={idx}>
                                  <div className="text-sm font-semibold text-black">
                                    {sub.label}
                                  </div>
                                  <div className="ml-4 space-y-1">
                                    {sub.submenu.map((nested, nidx) => (
                                      <Link
                                        key={nidx}
                                        href={nested.href!}
                                        className={`block text-sm ${
                                          isActive(nested.href!)
                                            ? "text-[#ff6b3d]"
                                            : "text-gray-700 hover:underline"
                                        }`}
                                      >
                                        {nested.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={idx}
                                  href={sub.href!}
                                  className={`block text-sm ${
                                    isActive(sub.href!)
                                      ? "text-[#ff6b3d]"
                                      : "text-gray-700 hover:underline"
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`block py-2 font-medium ${
                        isActive(item.href!) ? "text-[#ff6b3d]" : "text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/book-an-appointment"
                className={`block py-2 font-medium ${
                  pathname === "/contact" ? "text-[#ff6b3d]" : "text-black"
                }`}
              >
                Hire us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
