import Link from "next/link";
const features = [
  {
    title: "Fancy Text Generator",
    description:
      "Create stylish Unicode text that you can copy and paste into social media posts, profiles, messages, and online communities.",
  },
  {
    title: "Bold Text Generator",
    description:
      "Turn ordinary text into bold Unicode styles that are easy to copy and use across supported platforms.",
  },
  {
    title: "Instagram Fonts",
    description:
      "Create different Unicode text styles for Instagram bios, captions, usernames, comments, and posts.",
  },
  {
    title: "Symbols & Special Characters",
    description:
      "Find useful symbols and special characters for profiles, messages, posts, usernames, and creative text.",
  },
];

export const metadata = {
  title: "About Typnivo — Free Text & Social Tools",
  description:
    "Learn about Typnivo, a free collection of text and social tools for creating stylish text, Unicode fonts, symbols, bios, captions, and usernames.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b border-gray-100 bg-linear-to-b from-violet-50/70 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
              Free Text & Social Tools
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              About Typnivo
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Typnivo is a collection of free online text and social tools
              designed to make it easier to style, format, personalize, and
              copy text for everyday online use.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-gray-600">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            What is Typnivo?
          </h2>

          <p>
            Typnivo is a free text and social tools website built for anyone
            who wants to personalize the way their text looks online. Whether
            you are writing an Instagram bio, creating a social media caption,
            choosing a username, styling a message, or looking for special
            symbols, Typnivo provides simple tools that work directly in your
            browser.
          </p>

          <p>
            Our tools use Unicode characters and other text techniques to
            create styles that can be copied and pasted into compatible apps,
            websites, social networks, messaging platforms, and online
            communities.
          </p>

          <p>
            Typnivo is designed to keep the process simple: enter your text,
            choose a style or tool, copy the result, and use it wherever you
            need it.
          </p>
        </div>
      </section>

      {/* What you can do */}
      <section className="border-y border-gray-100 bg-gray-50/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
              What can you do with Typnivo?
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Typnivo brings together practical text and social utilities for
              different online needs.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-950">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
              Built for everyday online use
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Typnivo is not limited to one type of user. The tools are made
              for anyone who wants a faster and easier way to personalize
              text.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <ul className="space-y-4 text-sm leading-6 text-gray-600">
              <li>
                <strong className="text-gray-950">Social media users:</strong>{" "}
                personalize profiles, posts, comments, and messages.
              </li>

              <li>
                <strong className="text-gray-950">Creators and influencers:</strong>{" "}
                style captions, bios, names, and social content.
              </li>

              <li>
                <strong className="text-gray-950">Businesses and marketers:</strong>{" "}
                create distinctive text for campaigns, social posts, and
                promotional content.
              </li>

              <li>
                <strong className="text-gray-950">Gamers and communities:</strong>{" "}
                create usernames and text styles for online communities.
              </li>

              <li>
                <strong className="text-gray-950">Students and professionals:</strong>{" "}
                personalize messages, profiles, and other everyday online
                text.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Typnivo */}
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why Typnivo?
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
              We believe useful text tools should be simple, fast, and
              accessible without unnecessary steps.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Free to use</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Core Typnivo tools are designed to be available without
                requiring a paid subscription.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">No signup required</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Use the tools directly without creating an account for basic
                text generation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Fast results</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Text transformations are designed to appear instantly as you
                work.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Mobile friendly</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Typnivo is designed to work comfortably across phones,
                tablets, and desktop devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
          Our goal
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
          Our goal is simple: make text personalization easier for everyone.
          Typnivo brings useful text, social, and formatting utilities
          together so you can spend less time searching for individual tools
          and more time creating the text you actually want to use.
        </p>

        <Link
          href="/#tools"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
        >
          Explore Text &amp; Social Tools
        </Link>
      </section>
    </div>
  );
}