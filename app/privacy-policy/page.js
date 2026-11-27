import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Typnivo",
  description:
    "Read the Typnivo Privacy Policy to understand how information, cookies, analytics, and contact information are handled when you use our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="border-b border-gray-100 bg-linear-to-b from-violet-50/70 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
            Typnivo Policies
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Your privacy matters to us. This Privacy Policy explains what
            information may be collected when you use Typnivo and how that
            information may be used.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 22, 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-10 text-base leading-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              1. About Typnivo
            </h2>

            <p className="mt-4">
              Typnivo is a free online platform providing text and social
              utilities such as fancy text generators, Unicode text tools,
              symbols, social media text tools, bios, captions, and username
              generators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              2. Information You Provide
            </h2>

            <p className="mt-4">
              Most Typnivo tools can be used without creating an account. When
              you enter text into a browser-based tool, that text is generally
              processed by the website interface to generate the requested
              result.
            </p>

            <p className="mt-4">
              If you contact us by email, we may receive information such as
              your email address, name, and the contents of your message. We
              use this information to respond to your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              3. Automatically Collected Information
            </h2>

            <p className="mt-4">
              Like many websites, Typnivo may collect limited technical
              information automatically. This may include information such as
              browser type, device type, operating system, approximate location,
              referring pages, pages viewed, and general usage information.
            </p>

            <p className="mt-4">
              This information may be used to understand website performance,
              improve our tools, identify technical problems, and improve the
              overall user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              4. Cookies and Similar Technologies
            </h2>

            <p className="mt-4">
              Typnivo may use cookies or similar technologies to support
              website functionality, understand website usage, remember
              preferences, or measure performance.
            </p>

            <p className="mt-4">
              Third-party services used on the website may also use cookies or
              similar technologies according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              5. Analytics
            </h2>

            <p className="mt-4">
              We may use analytics services to understand how visitors use
              Typnivo. Analytics information can help us identify popular
              pages, technical issues, and opportunities to improve the
              website.
            </p>

            <p className="mt-4">
              If analytics or other third-party services are added or changed,
              their respective privacy practices may also apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              6. How We Use Information
            </h2>

            <p className="mt-4">
              Information may be used to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Operate and maintain Typnivo.</li>
              <li>Improve website features and text tools.</li>
              <li>Understand general website usage.</li>
              <li>Identify and resolve technical problems.</li>
              <li>Respond to support or contact requests.</li>
              <li>Help protect the website against misuse and abuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              7. Third-Party Services
            </h2>

            <p className="mt-4">
              Typnivo may use third-party services for hosting, analytics,
              security, advertising, or other website functionality.
            </p>

            <p className="mt-4">
              These third parties may process information according to their
              own terms and privacy policies. We recommend reviewing the
              privacy policies of third-party services when applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              8. Data Security
            </h2>

            <p className="mt-4">
              We take reasonable steps to help protect information associated
              with the website. However, no internet transmission or online
              storage system can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              9. Children&apos;s Privacy
            </h2>

            <p className="mt-4">
              Typnivo is a general-purpose online service and is not
              specifically directed toward children. We do not knowingly
              request personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              10. External Links
            </h2>

            <p className="mt-4">
              Typnivo may contain links to external websites or services. We
              are not responsible for the privacy practices or content of
              third-party websites. Please review their policies before
              providing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              11. Your Choices
            </h2>

            <p className="mt-4">
              Depending on your browser and device, you may be able to control
              cookies and certain privacy settings through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950">
              12. Changes to This Policy
            </h2>

            <p className="mt-4">
              We may update this Privacy Policy when our website, services, or
              data practices change. Any updated version will be published on
              this page with a revised update date.
            </p>
          </section>

          <section className="rounded-2xl border border-violet-100 bg-violet-50/60 p-6">
            <h2 className="text-xl font-bold text-gray-950">
              13. Contact Us
            </h2>

            <p className="mt-3">
              If you have questions about this Privacy Policy or Typnivo&apos;s
              privacy practices, contact us at{" "}
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
          <Link
            href="/"
            className="text-sm font-semibold text-violet-700 hover:text-violet-800"
          >
            ← Back to Typnivo
          </Link>
        </div>
      </article>
    </div>
  );
}