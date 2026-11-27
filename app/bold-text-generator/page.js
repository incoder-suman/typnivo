import StyleTool from "../components/StyleTool";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "bold-text-generator";

export const metadata = toolMetadata(slug, {
  title: "Bold Text Generator — Copy & Paste Unicode Bold | Typnivo",
  description:
    "Convert your text into Unicode bold characters (serif, sans, italic bold, bold cursive and more) you can copy and paste anywhere.",
});

const faqs = [
  {
    question: "What is Unicode bold text?",
    answer:
      "Unicode bold text uses special Unicode characters that look bold and can be copied into many supported apps and websites.",
  },
  {
    question: "Can I copy and paste the generated text?",
    answer:
      "Yes. Use the Copy button, then paste the generated Unicode text wherever the platform supports those characters.",
  },
  {
    question: "Will Unicode bold text work everywhere?",
    answer:
      "Support varies by platform, browser, and device. If a character is not supported, it may appear differently or fall back to a regular character.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Convert your text into Unicode bold characters you can copy and paste anywhere."
      faqs={faqs}
    >
      <StyleTool styleSet="bold" showHeader={false} />
    </ToolPageShell>
  );
}
