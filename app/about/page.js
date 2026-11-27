import Link from "next/link";
import {
  AppWindow,
  ArrowUpRight,
  Code2,
  DatabaseZap,
  Megaphone,
  Search,
} from "lucide-react";
import { tools } from "@/lib/tools";
import { outboundRel, webincoderLink, webincoderServices } from "@/lib/company";

export const metadata = {
  title: "About Typnivo — A Product of Webincoder",
  description:
    "Typnivo is a free collection of text and social tools built by Webincoder, a digital company offering web development, SEO, social media marketing, app development and CRM development.",
  alternates: { canonical: "/about" },
};

const serviceIcons = {
  "web-development": Code2,
  seo: Search,
  "social-media-marketing": Megaphone,
  "app-development": AppWindow,
  "crm-development": DatabaseZap,
};

const values = [
  ["Free to use", "Every Typnivo tool is free, with no paid plan needed for the core features."],
  ["No signup", "Open a tool and start typing. No account, no email, no waiting."],
  ["Private by design", "Your text is processed in your browser and is not sent to our servers."],
  ["Works everywhere", "Built mobile-first, so it works just as well on a phone as on a laptop."],
];

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b border-gray-100 bg-linear-to-b from-violet-50/70 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <a
              href={webincoderLink("about-badge")}
              target="_blank"
              rel={outboundRel}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm transition hover:border-violet-300"
            >
              A product of Webincoder
              <ArrowUpRight size={14} />
            </a>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              About Typnivo
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Typnivo is a free collection of text and social tools, designed and built by{" "}
              <a
                href={webincoderLink("about-intro")}
                target="_blank"
                rel={outboundRel}
                className="font-semibold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-800"
              >
                Webincoder
              </a>
              . It helps people style, format and personalize their text for Instagram, games, chats and everyday
              online use.
            </p>
          </div>
        </div>
      </section>

      {/* What is Typnivo */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-gray-600">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">What is Typnivo?</h2>

          <p>
            Typnivo started with a simple idea: the small tools people use every day online, like fancy fonts,
            symbols and bio ideas, should be fast, free and pleasant to use. Too many of these sites are slow,
            cluttered or ask you to sign up first. Typnivo does the opposite.
          </p>

          <p>
            Our tools use Unicode characters, so the styled text you create is real text, not an image. You can copy
            it and paste it into Instagram, WhatsApp, Discord, TikTok, games and most other apps.
          </p>

          <p>
            Typnivo is built and maintained by the team at Webincoder, using the same technology and care we bring to
            our client projects.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="border-y border-gray-100 bg-gray-50/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">What you can do with Typnivo</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {tools.length} free tools, all in one place.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-950">{tool.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">Why people use Typnivo</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Webincoder */}
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">The team behind Typnivo</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built by Webincoder</h2>
              <p className="mt-5 leading-7 text-gray-300">
                Webincoder is a digital solutions company that helps businesses grow online. We design and build
                websites, apps and custom software, and help brands get found and grow on Google and social media.
              </p>
              <p className="mt-4 leading-7 text-gray-300">
                Typnivo is one of our own products. If you like how it works, we can build something like it for
                your business.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={webincoderLink("about-cta-primary")}
                  target="_blank"
                  rel={outboundRel}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  Visit Webincoder
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={webincoderLink("about-cta-project")}
                  target="_blank"
                  rel={outboundRel}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Start a project
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {webincoderServices.map((service) => {
                const Icon = serviceIcons[service.id];
                return (
                  <a
                    key={service.id}
                    href={webincoderLink(`about-service-${service.id}`)}
                    target="_blank"
                    rel={outboundRel}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-violet-400/50 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                        <Icon size={20} />
                      </span>
                      <ArrowUpRight size={16} className="text-gray-500 transition group-hover:text-violet-300" />
                    </div>
                    <h3 className="mt-4 font-semibold">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-gray-400">{service.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">Get in touch</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
          Have feedback or an idea for a new Typnivo tool? Email{" "}
          <a href="mailto:support@typnivo.com" className="font-semibold text-violet-700 hover:text-violet-800">
            support@typnivo.com
          </a>
          . For website, app, SEO or marketing projects, contact the Webincoder team.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/#tools"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Explore Typnivo tools
          </Link>
          <a
            href={webincoderLink("about-contact")}
            target="_blank"
            rel={outboundRel}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-violet-300 hover:text-violet-700"
          >
            Contact Webincoder
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
