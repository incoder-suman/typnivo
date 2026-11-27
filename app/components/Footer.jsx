import Link from "next/link";
import { tools } from "@/lib/tools";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-5 py-12 text-zinc-300 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tight text-white">
              Typ<span className="text-violet-400">nivo</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Free tools to style, format and personalize your text.
            </p>
            <a href="mailto:support@typnivo.com" className="mt-4 block text-sm text-zinc-500 hover:text-white">
              support@typnivo.com
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
          &copy; 2026 Typnivo. All rights reserved. Powered by{" "}
          <a href="https://www.webincoder.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
            Webincoder
          </a>
        </div>
      </div>
    </footer>
  );
}
