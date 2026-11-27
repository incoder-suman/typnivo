"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyText } from "@/lib/clipboard";
import { toBold, toBoldScript, toItalicSerif, toSmallCaps } from "@/lib/textStyles";

const MAX_CAPTION = 2200; // Instagram caption limit
const MAX_HASHTAGS = 30; // Instagram hashtag limit
const BLANK = "⠀"; // keeps empty lines from being removed by Instagram

const headlineStyles = {
  none: { name: "Normal", transform: (text) => text },
  bold: { name: "Bold", transform: toBold },
  italic: { name: "Italic", transform: toItalicSerif },
  script: { name: "Script", transform: toBoldScript },
  smallCaps: { name: "Small caps", transform: toSmallCaps },
};

const bulletStyles = ["none", "•", "✦", "→", "✅", "🔹", "✨"];
const separators = {
  none: "",
  dots: [".", ".", "."].join("\n"),
  blank: [BLANK, BLANK].join("\n"),
  line: "━━━━━━━━━━",
  stars: "⋆ ˚｡⋆୨୧˚ ⋆",
};

function formatCaption({ caption, hashtags, headline, bullet, separator, keepSpacing }) {
  let lines = caption.replace(/\r\n/g, "\n").split("\n");

  if (lines.length && headline !== "none") {
    lines[0] = headlineStyles[headline].transform(lines[0]);
  }

  if (bullet !== "none") {
    lines = lines.map((line) => line.replace(/^\s*[-*]\s+/, `${bullet} `));
  }

  if (keepSpacing) {
    lines = lines.map((line) => (line.trim() === "" ? BLANK : line.replace(/\s+$/, "")));
  }

  const tags = hashtags
    .split(/[\s,]+/)
    .map((tag) => tag.replace(/^#+/, "").replace(/[^\p{L}\p{N}_]/gu, ""))
    .filter(Boolean);
  const uniqueTags = [...new Set(tags)];

  const parts = [lines.join("\n").trim()];
  if (uniqueTags.length) {
    if (separators[separator]) parts.push(separators[separator]);
    parts.push(uniqueTags.map((tag) => `#${tag}`).join(" "));
  }

  return { text: parts.filter(Boolean).join("\n"), tagCount: uniqueTags.length };
}

function Select({ id, label, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function CaptionFormatter() {
  const [caption, setCaption] = useState(
    "Weekend in the mountains\n\nThings I loved:\n- sunrise hikes\n- local chai stalls\n- zero notifications\n\nWhere should I go next?"
  );
  const [hashtags, setHashtags] = useState("travel mountains weekendvibes");
  const [headline, setHeadline] = useState("bold");
  const [bullet, setBullet] = useState("✦");
  const [separator, setSeparator] = useState("dots");
  const [keepSpacing, setKeepSpacing] = useState(true);
  const [copied, setCopied] = useState(false);

  const { text, tagCount } = formatCaption({ caption, hashtags, headline, bullet, separator, keepSpacing });
  const length = Array.from(text).length;

  const copy = async () => {
    if (await copyText(text)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 py-10 lg:grid-cols-2 lg:gap-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <label htmlFor="caption-input" className="mb-1.5 block text-sm font-semibold text-gray-800">
          Your caption
        </label>
        <textarea
          id="caption-input"
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
          rows={9}
          placeholder="Write your caption. Start lines with - to turn them into bullets."
          className="w-full resize-y rounded-xl border border-gray-200 p-4 text-sm text-gray-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
        />
        <p className="mt-1 text-xs text-gray-400">Tip: start a line with &quot;- &quot; to turn it into a bullet.</p>

        <label htmlFor="caption-hashtags" className="mb-1.5 mt-4 block text-sm font-semibold text-gray-800">
          Hashtags
        </label>
        <input
          id="caption-hashtags"
          value={hashtags}
          onChange={(event) => setHashtags(event.target.value)}
          placeholder="travel, food, photography"
          className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Select
            id="caption-headline"
            label="First line style"
            value={headline}
            onChange={setHeadline}
            options={Object.entries(headlineStyles).map(([id, style]) => [id, style.name])}
          />
          <Select
            id="caption-bullet"
            label="Bullets"
            value={bullet}
            onChange={setBullet}
            options={bulletStyles.map((item) => [item, item === "none" ? "Keep -" : item])}
          />
          <Select
            id="caption-separator"
            label="Before hashtags"
            value={separator}
            onChange={setSeparator}
            options={[
              ["none", "Nothing"],
              ["dots", "Dots"],
              ["blank", "Blank lines"],
              ["line", "Line"],
              ["stars", "Stars"],
            ]}
          />
        </div>

        <label className="mt-4 flex items-start gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={keepSpacing}
            onChange={(event) => setKeepSpacing(event.target.checked)}
            className="mt-0.5 accent-violet-600"
          />
          <span>Keep line breaks (adds an invisible character to empty lines so Instagram doesn&apos;t remove them)</span>
        </label>
      </div>

      <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold text-gray-900">Preview</h2>
          <span className={`text-xs ${length > MAX_CAPTION ? "text-red-500" : "text-gray-400"}`}>
            {length}/{MAX_CAPTION}
          </span>
        </div>
        <div className="min-h-60 rounded-xl bg-gray-50 p-4">
          <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-gray-900">{text}</p>
        </div>
        {tagCount > MAX_HASHTAGS && (
          <p className="mt-2 text-xs text-red-500">
            {tagCount} hashtags. Instagram allows up to {MAX_HASHTAGS}.
          </p>
        )}
        <button
          type="button"
          onClick={copy}
          disabled={!text}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy Caption"}
        </button>
      </div>
    </section>
  );
}
