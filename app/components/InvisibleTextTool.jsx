"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyText } from "@/lib/clipboard";

const characterTypes = [
  {
    id: "hangul",
    name: "Hangul Filler (U+3164)",
    character: "ㅤ",
    note: "Best for blank names and nicknames on Instagram, WhatsApp, Discord and games.",
  },
  {
    id: "braille",
    name: "Braille Blank (U+2800)",
    character: "⠀",
    note: "Looks like a space. Great for empty lines in Instagram captions and bios.",
  },
  {
    id: "zero-width",
    name: "Zero-Width Space (U+200B)",
    character: "​",
    note: "Takes up no width at all. Useful for splitting words or blank messages.",
  },
  {
    id: "em-space",
    name: "Em Space (U+2003)",
    character: " ",
    note: "A wide space that apps usually don't collapse. Good for spacing and indents.",
  },
];

export default function InvisibleTextTool() {
  const [typeId, setTypeId] = useState("hangul");
  const [count, setCount] = useState(1);
  const [copiedId, setCopiedId] = useState(null);

  const type = characterTypes.find((item) => item.id === typeId);
  const safeCount = Math.min(Math.max(Number(count) || 1, 1), 1000);
  const output = type.character.repeat(safeCount);

  const copy = async (id, text) => {
    if (await copyText(text)) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    }
  };

  return (
    <section className="mx-auto grid w-full max-w-5xl gap-6 py-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-gray-900">1. Choose a character</h2>
        <div className="mt-4 space-y-3">
          {characterTypes.map((item) => (
            <label
              key={item.id}
              className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition ${
                typeId === item.id ? "border-violet-400 bg-violet-50" : "border-gray-200 hover:border-violet-200"
              }`}
            >
              <input
                type="radio"
                name="invisible-type"
                value={item.id}
                checked={typeId === item.id}
                onChange={() => setTypeId(item.id)}
                className="mt-1 accent-violet-600"
              />
              <span>
                <span className="block text-sm font-semibold text-gray-900">{item.name}</span>
                <span className="mt-1 block text-sm text-gray-500">{item.note}</span>
              </span>
            </label>
          ))}
        </div>

        <h2 className="mt-6 text-base font-semibold text-gray-900">2. How many?</h2>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {[1, 3, 5, 10, 50].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setCount(value)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
                safeCount === value ? "border-violet-600 bg-violet-600 text-white" : "border-gray-200 bg-white text-gray-700 hover:border-violet-300"
              }`}
            >
              {value}
            </button>
          ))}
          <input
            type="number"
            min={1}
            max={1000}
            value={count}
            onChange={(event) => setCount(event.target.value)}
            aria-label="Custom number of characters"
            className="w-24 rounded-lg border border-gray-200 px-3 py-1.5 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-base font-semibold text-gray-900">3. Copy</h2>
          <div className="mt-4 flex min-h-24 items-center justify-center rounded-xl border-2 border-dashed border-violet-200 bg-violet-50/50 p-4">
            <span className="select-all whitespace-pre-wrap break-all text-lg">[{output}]</span>
          </div>
          <p className="mt-2 text-center text-xs text-gray-400">
            {safeCount} invisible character{safeCount === 1 ? "" : "s"} between the brackets
          </p>
          <button
            type="button"
            onClick={() => copy("main", output)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            {copiedId === "main" ? <Check size={16} /> : <Copy size={16} />}
            {copiedId === "main" ? "Copied" : "Copy Invisible Text"}
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-base font-semibold text-gray-900">Quick copy</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              ["blank-name", "Blank name", "ㅤ"],
              ["blank-message", "Blank message", "⠀"],
              ["empty-line", "Empty line", "\n⠀\n"],
              ["long-blank", "Long blank", "ㅤ".repeat(20)],
            ].map(([id, label, text]) => (
              <button
                key={id}
                type="button"
                onClick={() => copy(id, text)}
                className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm font-medium text-gray-700 transition hover:border-violet-300 hover:bg-violet-50"
              >
                {copiedId === id ? "Copied ✓" : label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
