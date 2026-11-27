import StyleTool from "../components/StyleTool";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "fancy-text-generator";

export const metadata = toolMetadata(slug, {
  title: "Fancy Text Generator — Copy & Paste Stylish Fonts | Typnivo",
  description:
    "Turn ordinary text into stylish Unicode fonts: bold, italic, cursive, gothic, bubbles, small caps and more. Free copy and paste.",
});

const faqs = [
  {
    question: "What is fancy text?",
    answer:
      "Fancy text is made of special Unicode characters that look like different fonts. Because they are characters, not font files, you can copy and paste them into many apps.",
  },
  {
    question: "Does fancy text work on Instagram and other social apps?",
    answer:
      "Many styles work in Instagram bios, captions and comments, as well as Facebook, Discord, TikTok and more. Support varies by app and device.",
  },
  {
    question: "Why do some characters show as boxes?",
    answer:
      "If a device or app does not support a particular Unicode character, it may show a box or a fallback character instead.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Turn ordinary text into stylish Unicode text you can copy and paste anywhere."
      faqs={faqs}
    >
      <StyleTool styleSet="all" showHeader={false} />
    </ToolPageShell>
  );
}
