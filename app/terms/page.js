import PolicyPage from "../components/PolicyPage";

export const metadata = {
  title: "Terms of Use — Typnivo",
  description: "Read the terms that apply when you use Typnivo's free text and social tools.",
};

const sections = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using Typnivo, you agree to these Terms of Use. If you do not agree, please do not use the website.",
    ],
  },
  {
    heading: "Use of the Tools",
    paragraphs: [
      "Typnivo provides free online tools for styling and formatting text. You may use the generated text for personal and commercial purposes.",
      "You agree not to use Typnivo for unlawful purposes, to harass or impersonate others, or to attempt to disrupt, overload or gain unauthorized access to the website.",
    ],
  },
  {
    heading: "Your Content",
    paragraphs: [
      "You are responsible for the text you enter and for how you use the generated results. Make sure your use complies with the rules of the platforms where you paste it.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "The Typnivo name, logo, design and website code belong to Typnivo. Unicode characters themselves are part of an open standard and are not owned by Typnivo.",
    ],
  },
  {
    heading: "No Warranty",
    paragraphs: [
      'Typnivo is provided "as is" without warranties of any kind. We do not guarantee that the tools will be uninterrupted, error-free, or that generated text will display correctly on every platform or device.',
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Typnivo is not liable for any indirect, incidental or consequential damages arising from your use of the website.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of Typnivo after changes are published means you accept the updated Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Use"
      intro="These terms explain the rules for using Typnivo and its free text and social tools."
      lastUpdated="November 26, 2026"
      sections={sections}
    />
  );
}
