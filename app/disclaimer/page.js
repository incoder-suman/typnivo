import PolicyPage from "../components/PolicyPage";

export const metadata = {
  title: "Disclaimer — Typnivo",
  description: "Important information about how Typnivo's Unicode text tools work and their limitations.",
};

const sections = [
  {
    heading: "General Information",
    paragraphs: [
      "The tools and content on Typnivo are provided for general informational and entertainment purposes. We make reasonable efforts to keep them accurate and working, but we make no guarantees.",
    ],
  },
  {
    heading: "Unicode Text, Not Fonts",
    paragraphs: [
      "Typnivo's styled text is made from Unicode characters, not downloadable font files. How these characters appear depends on the app, browser, operating system and device you use.",
      "Some characters may display as boxes, question marks or plain letters on platforms that do not support them.",
    ],
  },
  {
    heading: "Accessibility",
    paragraphs: [
      "Screen readers and search engines may not read styled Unicode text the same way as normal text. Consider this before using styled text for important information, names or headings.",
    ],
  },
  {
    heading: "Third-Party Platforms",
    paragraphs: [
      "Typnivo is not affiliated with Instagram, Facebook, TikTok, Discord or any other platform mentioned on this website. Platform names are used only to describe where generated text may be pasted. Each platform may change what characters it accepts at any time.",
    ],
  },
  {
    heading: "External Links",
    paragraphs: [
      "Typnivo may link to external websites. We are not responsible for the content, availability or practices of those websites.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <PolicyPage
      title="Disclaimer"
      intro="Please read this disclaimer to understand how Typnivo's tools work and their limitations."
      lastUpdated="November 26, 2026"
      sections={sections}
    />
  );
}
