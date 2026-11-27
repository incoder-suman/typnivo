import InvisibleTextTool from "../components/InvisibleTextTool";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "invisible-text-generator";

export const metadata = toolMetadata(slug, {
  title: "Invisible Text Generator — Copy Blank Characters | Typnivo",
  description:
    "Copy invisible characters and blank text for empty names, blank messages and Instagram line breaks. Works on WhatsApp, Discord, games and more.",
});

const faqs = [
  {
    question: "What is invisible text?",
    answer:
      "Invisible text is made of Unicode characters that don't show anything on screen, such as the Hangul Filler or Braille Blank. Apps treat them as real characters, so you can use them where empty text isn't allowed.",
  },
  {
    question: "How do I make a blank name?",
    answer:
      "Copy the Hangul Filler character (the Blank name button) and paste it into the name field. If the app needs a minimum length, paste it a few times.",
  },
  {
    question: "How do I add line breaks in an Instagram caption?",
    answer:
      "Instagram removes empty lines. Put a Braille Blank character on each empty line, or use our Instagram Caption Generator which does it for you.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Generate copyable invisible characters for blank names, empty messages and caption line breaks."
      faqs={faqs}
    >
      <InvisibleTextTool />
    </ToolPageShell>
  );
}
