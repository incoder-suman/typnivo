import StyleTool from "../components/StyleTool";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "instagram-font-generator";

export const metadata = toolMetadata(slug, {
  title: "Instagram Font Generator — Stylish Fonts for Bio & Captions | Typnivo",
  description:
    "Create stylish Instagram fonts for your bio, name, captions and comments. Copy and paste bold, cursive, typewriter, bubble and more.",
});

const faqs = [
  {
    question: "How do I change my Instagram font?",
    answer:
      "Instagram doesn't let you pick a font, but you can paste Unicode styled text. Type your text here, copy a style, and paste it into your bio, name, caption or comment.",
  },
  {
    question: "Where can I use these fonts on Instagram?",
    answer:
      "Most styles work in your bio, display name, captions, comments and stories. Your @username only allows letters, numbers, periods and underscores, so styled text won't work there.",
  },
  {
    question: "Will other people see my Instagram font?",
    answer:
      "Yes, on most modern phones. Very old devices may show some characters as boxes.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Create stylish fonts for your Instagram bio, name, captions and comments, then copy and paste them into the app."
      faqs={faqs}
    >
      <StyleTool styleSet="instagram" showHeader={false} />
    </ToolPageShell>
  );
}
