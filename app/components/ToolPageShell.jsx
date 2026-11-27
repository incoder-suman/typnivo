import RelatedTools from "./RelatedTools";
import ToolFAQ from "./ToolFAQ";
import { getRelatedTools, SITE_URL, toolBySlug } from "@/lib/tools";

// Builds the page metadata for a tool from the shared tools list.
export function toolMetadata(slug, { title, description }) {
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title, description, url: `${SITE_URL}/${slug}`, siteName: "Typnivo", type: "website" },
  };
}

// Shared layout for every tool page: heading, tool, related tools, FAQ,
// and FAQ structured data so Google can show the answers in search results.
export default function ToolPageShell({ slug, description, faqs = [], children }) {
  const tool = toolBySlug[slug];

  const faqJsonLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-[#faf9ff] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{tool.title}</h1>
        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">{description}</p>
      </div>

      {children}

      <div className="mx-auto w-full max-w-5xl pb-10">
        <RelatedTools tools={getRelatedTools(slug)} />
        <ToolFAQ faqs={faqs} />
      </div>

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </div>
  );
}
