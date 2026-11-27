import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { tools } from "@/lib/tools";
import { outboundRel, webincoderLink, webincoderServices } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-5 py-12 text-zinc-300 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-white">
              Typ<span className="text-violet-400">nivo</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Free tools to style, format and personalize your text.
            </p>
            <a href="mailto:support@typnivo.com" className="mt-4 block text-sm text-zinc-500 hover:text-white">
              support@typnivo.com
            </a>

            <a
              href={webincoderLink("footer-badge")}
              target="_blank"
              rel={outboundRel}
              className="mt-6 inline-flex max-w-sm flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-violet-400/50"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-500">A product of</span>
              <span className="mt-1 flex items-center gap-1.5 text-lg font-bold text-white">
                Webincoder <ArrowUpRight size={16} className="text-violet-400" />
              </span>
              <span className="mt-1 text-sm leading-6 text-zinc-400">
                Websites, apps, SEO and marketing for growing businesses.
              </span>
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white">Tools</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              {tools.map((tool) => (
                <Link key={tool.slug} href={tool.href} className="block hover:text-white">
                  {tool.title.replace(" Generator", "")}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Webincoder Services</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              {webincoderServices.map((service) => (
                <a
                  key={service.id}
                  href={webincoderLink(`footer-service-${service.id}`)}
                  target="_blank"
                  rel={outboundRel}
                  className="block hover:text-white"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <Link href="/about" className="block hover:text-white">About</Link>
              <Link href="/privacy-policy" className="block hover:text-white">Privacy</Link>
              <Link href="/terms" className="block hover:text-white">Terms</Link>
              <Link href="/disclaimer" className="block hover:text-white">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-500">
          &copy; 2026 Typnivo. All rights reserved. A product of{" "}
          <a
            href={webincoderLink("footer-copyright")}
            target="_blank"
            rel={outboundRel}
            className="text-zinc-400 transition hover:text-white"
          >
            Webincoder
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
