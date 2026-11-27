import BioGenerator from "../components/BioGenerator";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "instagram-bio-generator";

export const metadata = toolMetadata(slug, {
  title: "Instagram Bio Generator — Aesthetic & Professional Bios | Typnivo",
  description:
    "Create stylish Instagram bios in seconds. Enter your name, what you do and your interests, pick a style, and copy a ready-made bio.",
});

const faqs = [
  {
    question: "How long can an Instagram bio be?",
    answer:
      "Instagram bios can be up to 150 characters. Each bio here shows its length, and turns red if it is too long.",
  },
  {
    question: "How do I add line breaks to my Instagram bio?",
    answer:
      "Copy a bio from this page and paste it into Instagram's Edit Profile > Bio field. The line breaks are kept.",
  },
  {
    question: "Will the stylish fonts work in my bio?",
    answer:
      "Yes. The bold, script and small caps letters are Unicode characters that Instagram supports on most modern devices.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Fill in a few details, pick a style, and copy a ready-to-use Instagram bio."
      faqs={faqs}
    >
      <BioGenerator />
    </ToolPageShell>
  );
}
