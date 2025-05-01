import { caseStudiesData } from "@/src/json/caseStudy/casyStudysData";
import { GetServerSideProps } from "next";
import { technologyStack } from "@/src/json/technologyDescription";
import { blogData } from "@/src/json/blogData/blogdata";

const Sitemap = () => null;

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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "http://localhost:3000/";

  const staticRoutes = [
    "/",
    "about",
    "blog",
    "book-an-appointment",
    "case-study",
    "contact-us",
    "dedicated-team",
    "events",
    "how-we-work",
    "platforms",
    "review",
    "services",
    "services/appdevelopment",
    "services/blockchain",
    "services/cloud-engineering",
    "services/cms",
    "services/data-analytics",
    "services/intelligence",
    "services/seo",
    "services/uiux",
    "services/webdevelopment",
    "services/wordpress",
    "technologies",
  ];

  const dynamicCaseStudy = caseStudiesData.map(
    (cs) => `case-study/${slugify(cs.title)}`
  );
  const dynamicBlog = blogData.map((cs) => `blog/${blogSlugify(cs.title)}`);
  const dynamicTechnologies = technologyStack.map(
    (cs) => `technologies${cs.value}`
  );

  const allRoutes = [
    ...staticRoutes,
    ...dynamicCaseStudy,
    ...dynamicBlog,
    ...dynamicTechnologies,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
  <url>
    <loc>${baseUrl}/${route}</loc>
  </url>
    `;
    })
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
