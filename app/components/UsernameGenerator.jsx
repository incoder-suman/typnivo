"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import CopyButton from "./CopyButton";
import {
  toBoldScript,
  toBoldSans,
  toBubbles,
  toFraktur,
  toMedievalBold,
  toMonospace,
  toSmallCaps,
  toCursive,
  toDoubleStruck,
} from "@/lib/textStyles";

const prefixes = ["the", "its", "iam", "real", "hey", "just", "mr", "ms", "official", "daily", "x"];
const suffixes = ["official", "xo", "hq", "vibes", "world", "life", "zone", "fx", "tv", "codes", "creates", "diaries", "verse", "nation"];
const adjectives = ["lazy", "cosmic", "golden", "silent", "neon", "lucky", "wild", "royal", "tiny", "urban", "frosty", "midnight", "pixel", "velvet"];
const gamingWords = ["Slayer", "Ghost", "Ninja", "Wolf", "Phantom", "Viper", "Reaper", "Storm", "Hunter", "Blaze", "Shadow", "Titan", "Rogue", "Sniper"];

const decorations = [
  (name) => `꧁${name}꧂`,
  (name) => `★彡${name}彡★`,
  (name) => `【${name}】`,
  (name) => `•°${name}°•`,
  (name) => `×${name}×`,
  (name) => `༺${name}༻`,
  (name) => `乂${name}乂`,
  (name) => `⚡${name}⚡`,
  (name) => `ツ${name}`,
  (name) => `亗${name}亗`,
  (name) => `『${name}』`,
  (name) => `⫷${name}⫸`,
];

const fancyStyles = [toBoldScript, toBoldSans, toFraktur, toMedievalBold, toMonospace, toSmallCaps, toCursive, toDoubleStruck, toBubbles];

// Small seeded random generator, so results are the same on the server and
// the first render in the browser, and "Shuffle" just moves to the next seed.
function createRandom(seed) {
  let state = seed + 0x6d2b79f5;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cleanKeyword(keyword) {
  return keyword
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]/g, "");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generate(keyword, seed) {
  const random = createRandom(seed);
  const pick = (list) => list[Math.floor(random() * list.length)];
  const number = () => String(Math.floor(random() * 900) + 10);
  const base = cleanKeyword(keyword) || "user";

  const patterns = [
    () => `${pick(prefixes)}${base}`,
    () => `${base}.${pick(suffixes)}`,
    () => `${base}_${pick(suffixes)}`,
    () => `${pick(prefixes)}.${base}`,
    () => `${pick(adjectives)}${base}`,
    () => `${pick(adjectives)}_${base}`,
    () => `${base}${number()}`,
    () => `${base}.${pick(adjectives)}`,
    () => `_${base}_`,
    () => `${base}__${pick(suffixes)}`,
    () => `${pick(adjectives)}.${base}.${number()}`,
    () => `${base.split("").join(".")}`,
  ];

  const social = new Set();
  let guard = 0;
  while (social.size < 12 && guard++ < 100) {
    const name = pick(patterns)().slice(0, 30); // Instagram max length is 30
    if (!/^[._]|[.]{2}|\.$/.test(name)) social.add(name);
  }

  const display = capitalize(base);
  const gaming = new Set();
  guard = 0;
  while (gaming.size < 12 && guard++ < 100) {
    const word = random() < 0.5 ? `${display}${pick(gamingWords)}` : `${pick(gamingWords)}${display}`;
    const styled = pick(fancyStyles)(random() < 0.5 ? word : display);
    gaming.add(pick(decorations)(styled));
  }

  return { social: [...social], gaming: [...gaming] };
}

function NameList({ title, note, names }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{note}</p>
      <ul className="mt-4 divide-y divide-gray-100">
        {names.map((name) => (
          <li key={name} className="flex items-center justify-between gap-3 py-2.5">
            <span className="min-w-0 break-all text-base text-gray-900">{name}</span>
            <CopyButton text={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UsernameGenerator() {
  const [keyword, setKeyword] = useState("Aarav");
  const [seed, setSeed] = useState(1);

  const { social, gaming } = generate(keyword, seed);

  return (
    <section className="mx-auto w-full max-w-6xl py-10">
      <div className="mx-auto flex max-w-2xl flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:p-5">
        <label htmlFor="username-keyword" className="sr-only">
          Name or keyword
        </label>
        <input
          id="username-keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Enter your name or a keyword"
          maxLength={20}
          className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
        />
        <button
          type="button"
          onClick={() => setSeed((current) => current + 1)}
          className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
        >
          <RefreshCw size={16} />
          Shuffle
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <NameList
          title="Social media usernames"
          note="Letters, numbers, dots and underscores only, so they work as an Instagram or TikTok @handle."
          names={social}
        />
        <NameList
          title="Fancy gaming & display names"
          note="Styled with symbols. Use them as display names in games, Discord, or your Instagram name."
          names={gaming}
        />
      </div>
    </section>
  );
}
