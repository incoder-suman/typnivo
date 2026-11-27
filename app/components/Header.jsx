"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Tools", href: "/#tools" },
  { label: "Fancy Text", href: "/fancy-text-generator" },
  { label: "Instagram Fonts", href: "/instagram-font-generator" },
  { label: "Symbols", href: "/symbol-generator" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#faf9ff]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-zinc-950">
          Typ<span className="text-violet-600">nivo</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
              {item.label}
            </Link>
          ))}
          <Link href="/#tools" className="rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700">
            Explore Tools
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-xl border border-zinc-200 bg-white p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 lg:hidden"
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-zinc-200/70 bg-white lg:hidden">
          <nav id="mobile-navigation" className="mx-auto flex max-w-7xl flex-col space-y-2 px-5 py-4 sm:px-8" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-violet-50 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
                {item.label}
              </Link>
            ))}
            <Link href="/#tools" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg bg-zinc-950 px-4 py-2 text-center text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
              Explore Tools
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
