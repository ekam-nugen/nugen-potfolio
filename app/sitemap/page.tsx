// pages/sitemap.tsx
import { blogData } from "@/src/json/blogData/blogdata";
import { caseStudiesData } from "@/src/json/caseStudy/casyStudysData";
import { technologyStack } from "@/src/json/technologyDescription";
import Link from "next/link";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const blogSlugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const Sitemap = () => {
  const staticRoutes = [
    "/",
    "/about",
    "/blog",
    "/book-an-appointment",
    "/case-study",
    "/contact-us",
    "/dedicated-team",
    "/events",
    "/how-we-work",
    "/platforms",
    "/review",
    "/services",
    "/services/appdevelopment",
    "/services/blockchain",
    "/services/cloud-engineering",
    "/services/cms",
    "/services/data-analytics",
    "/services/intelligence",
    "/services/seo",
    "/services/uiux",
    "/services/webdevelopment",
    "/services/wordpress",
    "/technologies",
  ];

  const dynamicCaseStudy = caseStudiesData.map((cs) => ({
    path: `/case-study/${slugify(cs.title)}`,
    label: cs.title,
  }));

  const dynamicBlog = blogData.map((cs) => ({
    path: `/blog/${blogSlugify(cs.title)}`,
    label: cs.title,
  }));

  const dynamicTechnologies = technologyStack.map((tech) => ({
    path: `/technologies${tech.value}`,
    label: tech.label || tech.value,
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">HTML Sitemap</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Static Pages</h2>
          <ul className="list-disc list-inside space-y-1">
            {staticRoutes.map((route) => (
              <li key={route}>
                <Link href={route} className="text-blue-600 hover:underline">
                  {route}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Case Studies</h2>
          <ul className="list-disc list-inside space-y-1">
            {dynamicCaseStudy.map(({ path, label }) => (
              <li key={path}>
                <Link href={path} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Blog</h2>
          <ul className="list-disc list-inside space-y-1">
            {dynamicBlog.map(({ path, label }) => (
              <li key={path}>
                <Link href={path} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Technologies</h2>
          <ul className="list-disc list-inside space-y-1">
            {dynamicTechnologies.map(({ path, label }) => (
              <li key={path}>
                <Link href={path} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
