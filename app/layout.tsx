import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/src/layout/header";
import Footer from "@/src/layout/Footer";
import "swiper/css";
import "swiper/css/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nugeninfo.com"), // Replace with your actual domain
  title: "Nugen IT Services - Innovative IT Solutions",
  description:
    "Nugen IT Services offers cutting-edge IT solutions, including web development, cloud services, and IT consulting.",
  keywords: "IT services, web development, cloud solutions, Nugen IT Services",
  openGraph: {
    title: "Nugen IT Services",
    description: "Innovative IT solutions for your business.",
    url: "https://www.nugeninfo.com",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href="/contact-us"
            className="bg-gradient-to-r from-[#FF5E62] to-[#FF9966] text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold"
          >
            💬 Get a Quote
          </a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
