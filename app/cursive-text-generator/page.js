import StyleTool from "../components/StyleTool";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "cursive-text-generator";

export const metadata = toolMetadata(slug, {
  title: "Cursive Text Generator — Copy & Paste Cursive Fonts | Typnivo",
  description:
    "Convert text into cursive, script and handwriting-style Unicode fonts. Copy and paste cursive text for Instagram, Discord and more.",
});

const faqs = [
  {
    question: "How does cursive text work?",
    answer:
      "The generator swaps each letter for a Unicode script character that looks handwritten. It is text, not an image, so it can be copied and pasted.",
  },
  {
    question: "Can I use cursive text in my Instagram bio?",
    answer:
      "Yes. Copy any cursive style and paste it into your bio, name, captions or comments.",
  },
  {
    question: "Why are some cursive letters a different size?",
    answer:
      "A few script letters come from an older Unicode block, so some fonts draw them slightly differently. This is normal for Unicode cursive text.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Give your words a smooth handwritten, script style you can copy and paste anywhere."
      faqs={faqs}
    >
      <StyleTool styleSet="cursive" showHeader={false} />
    </ToolPageShell>
  );
}
