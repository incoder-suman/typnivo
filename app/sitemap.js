import { SITE_URL, tools } from "@/lib/tools";

export default function sitemap() {
  const pages = [
    { path: "", priority: 1 },
    ...tools.map((tool) => ({ path: tool.href, priority: 0.9 })),
    { path: "/about", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/disclaimer", priority: 0.3 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
