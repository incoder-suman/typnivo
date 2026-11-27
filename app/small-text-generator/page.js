import StyleTool from "../components/StyleTool";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "small-text-generator";

export const metadata = toolMetadata(slug, {
  title: "Small Text Generator — Tiny, Superscript & Small Caps | Typnivo",
  description:
    "Create tiny text with superscript, subscript and small caps Unicode characters. Copy and paste small text anywhere.",
});

const faqs = [
  {
    question: "What is small text?",
    answer:
      "Small text uses Unicode small-capital, superscript and subscript characters that appear smaller than normal letters.",
  },
  {
    question: "Why are some letters not converted?",
    answer:
      "Unicode doesn't include a tiny version of every letter. For example, there is no subscript b, c or d, so those letters stay normal.",
  },
  {
    question: "Where can I use tiny text?",
    answer:
      "Tiny text works in most social apps, chats and bios, and is popular for subtle notes, footers and aesthetic usernames.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Make your text tiny with small caps, superscript and subscript characters you can copy and paste."
      faqs={faqs}
    >
      <StyleTool styleSet="small" showHeader={false} />
    </ToolPageShell>
  );
}
