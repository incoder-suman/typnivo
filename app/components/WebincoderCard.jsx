import { ArrowUpRight } from "lucide-react";
import { outboundRel, webincoderLink } from "@/lib/company";

// "Built by Webincoder" call-to-action shown at the bottom of every tool page.
export default function WebincoderCard({ placement }) {
  return (
    <section className="mt-12 overflow-hidden rounded-3xl bg-zinc-950 p-7 text-white sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Built by Webincoder</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Need a website, app or more customers?</h2>
          <p className="mt-3 leading-7 text-zinc-400">
            Typnivo is made by Webincoder. We help businesses grow with web development, SEO, social media
            marketing, app development and CRM development.
          </p>
        </div>

        <a
          href={webincoderLink(placement)}
          target="_blank"
          rel={outboundRel}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Talk to Webincoder
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
