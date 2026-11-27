import UsernameGenerator from "../components/UsernameGenerator";
import ToolPageShell, { toolMetadata } from "../components/ToolPageShell";

const slug = "fancy-username-generator";

export const metadata = toolMetadata(slug, {
  title: "Fancy Username Generator — Instagram & Gaming Names | Typnivo",
  description:
    "Generate unique usernames for Instagram, TikTok and games. Get clean @handles plus stylish gaming names with symbols like ꧁꧂ and ★彡.",
});

const faqs = [
  {
    question: "Can I use the fancy names as my Instagram @username?",
    answer:
      "No. Instagram @usernames only allow letters, numbers, periods and underscores, so use the Social media usernames list for that. Fancy names work as your display name.",
  },
  {
    question: "How do I get more ideas?",
    answer: "Press Shuffle to generate a new set of usernames from the same name or keyword.",
  },
  {
    question: "Are these usernames available?",
    answer:
      "We can't check availability on other platforms. Copy a name you like and try it in the app; if it's taken, shuffle for more options.",
  },
];

export default function Page() {
  return (
    <ToolPageShell
      slug={slug}
      description="Enter your name or a keyword to get unique social media handles and fancy gaming names."
      faqs={faqs}
    >
      <UsernameGenerator />
    </ToolPageShell>
  );
}
