// Single source of truth for every tool on the site.
// Used by the homepage grid, header/footer, related tools and the sitemap.
export const SITE_URL = "https://typnivo.com";

export const tools = [
  {
    slug: "fancy-text-generator",
    title: "Fancy Text Generator",
    description: "Turn ordinary text into stylish copy-and-paste text.",
  },
  {
    slug: "bold-text-generator",
    title: "Bold Text Generator",
    description: "Create bold Unicode text instantly.",
  },
  {
    slug: "instagram-font-generator",
    title: "Instagram Font Generator",
    description: "Create stylish text for Instagram profiles and posts.",
  },
  {
    slug: "cursive-text-generator",
    title: "Cursive Text Generator",
    description: "Give your words a smooth handwritten style.",
  },
  {
    slug: "small-text-generator",
    title: "Small Text Generator",
    description: "Create tiny, superscript and small-cap style text.",
  },
  {
    slug: "symbol-generator",
    title: "Symbol Generator",
    description: "Find hearts, stars, arrows and aesthetic symbols.",
  },
  {
    slug: "invisible-text-generator",
    title: "Invisible Text Generator",
    description: "Generate copyable invisible Unicode characters.",
  },
  {
    slug: "instagram-bio-generator",
    title: "Instagram Bio Generator",
    description: "Create clean and stylish profile bios.",
  },
  {
    slug: "instagram-caption-generator",
    title: "Instagram Caption Generator",
    description: "Format captions with spacing, symbols and styles.",
  },
  {
    slug: "fancy-username-generator",
    title: "Fancy Username Generator",
    description: "Create unique usernames for social platforms and games.",
  },
].map((tool) => ({ ...tool, href: `/${tool.slug}` }));

export const toolBySlug = Object.fromEntries(tools.map((tool) => [tool.slug, tool]));

// Picks `count` other tools, starting after the current one so each page
// links to a different set.
export function getRelatedTools(slug, count = 3) {
  const index = tools.findIndex((tool) => tool.slug === slug);
  const others = [...tools.slice(index + 1), ...tools.slice(0, Math.max(index, 0))];
  return others.slice(0, count);
}
