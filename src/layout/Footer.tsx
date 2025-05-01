import Image from "next/image";
import { FooterSections, SocialLinks } from "../json";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-white text-zinc-800 pt-14 pb-10 px-6 md:px-10 bg-gradient-to-r from-white via-[#fff1eb] to-white border-t border-zinc-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-5">
        {/* Brand section */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt="Nugen-Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

          <p className="text-sm text-gray-600">
            Discover our services tailored to your needs.
          </p>
        </div>

        {/* Footer sections */}
        {FooterSections?.map((section, index: number) => (
          <div key={section.title + index}>
            <h3 className="font-semibold text-zinc-800 mb-3 text-base">
              {section?.title}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              {section?.links.map((link, idx: number) => (
                <p
                  key={link[0] + idx}
                  className="hover:text-zinc-900 hover:underline cursor-pointer transition"
                >
                  {link}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Social links */}
        <div>
          <h3 className="font-semibold mb-3 text-zinc-800 text-base">
            Stay Connected
          </h3>
          <div className="flex flex-wrap gap-3 text-xl text-zinc-700">
            {SocialLinks?.map((social, index: number) => (
              <a
                key={social.label + index}
                href={social?.href}
                aria-label={social?.label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition rounded-full p-2 hover:bg-zinc-100"
              >
                {social?.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center md:text-start text-sm text-gray-500 px-5 mt-12">
        © 2025 Nugen IT Service. All Rights Reserved.
      </div>
    </footer>
  );
}
