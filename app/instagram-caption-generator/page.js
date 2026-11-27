import CaptionFormatter from "../components/CaptionFormatter";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "instagram-caption-generator";

export const metadata = toolMetadata(slug, {
  title: "Instagram Caption Generator — Line Breaks, Bullets & Hashtags | Typnivo",
  description:
    "Format Instagram captions with line breaks that stay, bullets, styled headlines and neat hashtags. Preview and copy in one click.",
});

const faqs = [
  {
    question: "Why does Instagram remove my line breaks?",
    answer:
      "Instagram deletes empty lines in captions. This tool puts an invisible Braille Blank character on each empty line, so your spacing stays exactly as you wrote it.",
  },
  {
    question: "How many hashtags can I use?",
    answer:
      "Instagram allows up to 30 hashtags per post. The tool removes duplicates and warns you if you go over the limit.",
  },
  {
    question: "How long can an Instagram caption be?",
    answer: "Captions can be up to 2,200 characters. The counter above the preview shows how many you've used.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Write your caption, add hashtags, and get a clean, well-spaced caption ready to paste into Instagram."
      faqs={faqs}
    >
      <CaptionFormatter />
    </ToolPageShell>
  );
}
