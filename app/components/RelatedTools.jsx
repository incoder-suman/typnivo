import Link from "next/link";

export default function RelatedTools({ tools = [] }) {
  if (!tools.length) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        Related Tools
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <Link
            key={`${tool.title}-${index}`}
            href={tool.href}
            className="rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm"
          >
            <h3 className="font-semibold text-gray-900">
              {tool.title}
            </h3>

            {tool.description && (
              <p className="mt-1 text-sm text-gray-500">
                {tool.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}