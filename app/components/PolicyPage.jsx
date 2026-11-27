import Link from "next/link";

// Shared layout for legal pages (Terms, Disclaimer).
export default function PolicyPage({ title, intro, lastUpdated, sections }) {
  return (
    <div className="bg-white text-gray-900">
      <section className="border-b border-gray-100 bg-linear-to-b from-violet-50/70 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
            Typnivo Policies
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600">{intro}</p>

          <p className="mt-3 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-10 text-base leading-8 text-gray-600">
          {sections.map(({ heading, paragraphs }, index) => (
            <section key={heading}>
              <h2 className="text-2xl font-bold text-gray-950">
                {index + 1}. {heading}
              </h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-2xl border border-violet-100 bg-violet-50/60 p-6">
            <h2 className="text-xl font-bold text-gray-950">Contact Us</h2>
            <p className="mt-3">
              Questions? Contact us at{" "}
              <a
                href="mailto:support@typnivo.com"
                className="font-semibold text-violet-700 hover:text-violet-800"
              >
                support@typnivo.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8">
          <Link href="/" className="text-sm font-semibold text-violet-700 hover:text-violet-800">
            ← Back to Typnivo
          </Link>
        </div>
      </article>
    </div>
  );
}
