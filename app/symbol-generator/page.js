import SymbolPicker from "../components/SymbolPicker";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "symbol-generator";

export const metadata = toolMetadata(slug, {
  title: "Symbol Generator — Copy & Paste Hearts, Stars & Aesthetic Symbols | Typnivo",
  description:
    "Copy and paste hearts ♥, stars ★, arrows →, brackets 【】, flowers ❀ and aesthetic symbols for Instagram, Discord, games and more.",
});

const faqs = [
  {
    question: "How do I copy a symbol?",
    answer:
      "Tap any symbol and it is copied to your clipboard right away. It is also added to the box at the top, so you can build a combination and copy it all at once.",
  },
  {
    question: "Where can I paste these symbols?",
    answer:
      "Symbols are standard Unicode characters, so they work in most apps: Instagram bios and captions, WhatsApp, Discord, game names, documents and more.",
  },
  {
    question: "Why does a symbol look different on my phone?",
    answer:
      "Each device uses its own font to draw symbols, and some are shown as colorful emoji. The character is the same; only the look changes.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Tap any symbol to copy it instantly. Hearts, stars, arrows, brackets, dividers and more."
      faqs={faqs}
    >
      <SymbolPicker />
    </ToolPageShell>
  );
}
