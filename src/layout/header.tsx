"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, User } from "lucide-react";
import { headerData } from "../json/menuData";
import { AnimatePresence, motion } from "framer-motion";

interface MenuItem {
  label: string;
  href?: string;
  submenu?: MenuItem[];
  icon?: React.ElementType;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const renderDesktopDropdown = (submenu: MenuItem[]) => (
    <div className="absolute left-0 top-21 w-64 bg-white shadow-xl rounded-xl transform transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto pointer-events-none z-50">
      <div className="divide-y divide-gray-200 divide-dashed">
        {submenu.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="relative group/sub">
              {section.submenu ? (
                <>
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer text-black font-semibold transition-all duration-200">
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className="w-4 h-4" />}
                      {section.label}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#ff6b3d]" />
                  </div>
                  <div className="absolute left-full top-0 w-64 bg-white shadow-xl rounded-xl transform transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:pointer-events-auto pointer-events-none z-50">
                    {section.submenu.map((item, idx) => {
                      const SubIcon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href!}
                          className={`block px-4 py-2 hover:bg-gray-100 transition flex items-center gap-2 ${
                            isActive(item.href!)
                              ? "text-[#ff6b3d]"
                              : "text-black"
                          }`}
                        >
                          {SubIcon && <SubIcon className="w-4 h-4" />}
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <Link
                  href={section.href!}
                  className={`block px-4 py-2 hover:bg-gray-100 transition flex items-center gap-2 ${
                    isActive(section.href!) ? "text-[#ff6b3d]" : "text-black"
                  } font-medium`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {section.label}
                </Link>
              )}
            </div>
          );
        })}
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
              width={80}
              height={80}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center justify-center space-x-6">
              {headerData.map((item: MenuItem, index) => {
                const Icon = item.icon;
                const active = item.href && isActive(item.href);
                return (
                  <div
                    key={index}
                    className="relative group cursor-pointer py-8"
                  >
                    {item.submenu ? (
                      <>
                        <div className="flex items-center gap-2">
                          <div className="bg-[#FF6B3D] text-white p-1 rounded-full shadow-md">
                            {Icon && <Icon className="w-3 h-3" />}
                          </div>
                          <Link
                            href={item?.href || "#"}
                            className="font-medium flex items-center gap-1 hover:text-[#ff6b3d]"
                          >
                            {item.label}
                            <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                          </Link>
                        </div>
                        {renderDesktopDropdown(item.submenu)}
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="flex items-center gap-2 hover:text-[#ff6b3d]"
                      >
                        <div className="bg-[#FF6B3D] text-white p-1 rounded-full shadow-md">
                          {Icon && <Icon className="w-3 h-3" />}
                        </div>
                        <span
                          className={`font-medium ${
                            active ? "text-[#ff6b3d]" : "text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-400 to-purple-400 text-white px-6 py-2 rounded-full font-medium shadow-md flex items-center gap-2 transition hover:scale-105"
            >
              <User className="w-4 h-4" />
              Contact Us
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
              {headerData.map((item: MenuItem, index) => {
                const Icon = item.icon;
                return (
                  <div key={index}>
                    {item.submenu ? (
                      <>
                        <button
                          className="flex justify-between items-center w-full text-left py-2 text-black font-medium"
                          onClick={() => toggleMobileDropdown(item.label)}
                        >
                          <span className="flex items-center gap-2">
                            <div className="bg-[#FF6B3D] text-white p-1 rounded-full shadow-md">
                              {Icon && <Icon className="w-3 h-3" />}
                            </div>
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              openMobileDropdown === item.label
                                ? "rotate-180 text-[#ff6b3d]"
                                : ""
                            }`}
                          />
                        </button>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className={`flex items-center gap-2 py-2 font-medium ${
                          isActive(item.href!) ? "text-[#ff6b3d]" : "text-black"
                        }`}
                      >
                        <div className="bg-[#FF6B3D] text-white p-1 rounded-full shadow-md">
                          {Icon && <Icon className="w-3 h-3" />}
                        </div>
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <Link
                href="/contact"
                className="flex items-center gap-2 py-2 font-medium text-black"
              >
                <div className="bg-gradient-to-r from-orange-400 to-purple-400 text-white p-2 rounded-full shadow-md">
                  <User className="w-4 h-4" />
                </div>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
