"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import TextInput from "./TextInput";
import TextOutputCard from "./TextOutputCard";
import { copyText } from "@/lib/clipboard";

export default function TextToolLayout({
  title,
  description,
  outputs = [],
  transformText,
  initialText = "",
  maxLength = 500,
  showCopyAll = true,
  showHeader = true,
}) {
  const [text, setText] = useState(initialText);
  const [allCopied, setAllCopied] = useState(false);

  const generatedOutputs = outputs.map((output) => ({
    ...output,
    value: transformText ? transformText(text, output.style) : "",
  }));

  const copyAllText = async () => {
    if (!text) return;

    const allText = generatedOutputs
      .map((output) => `${output.title}: ${output.value}`)
      .join("\n");

    if (await copyText(allText)) {
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 1500);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 text-left sm:px-6 lg:px-8">
      {showHeader && (
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid min-w-0 grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
        <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <TextInput value={text} onChange={setText} maxLength={maxLength} />
        </section>

        <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="text-base font-semibold text-gray-900">
              Popular Styles
            </h2>
            <span className="shrink-0 text-xs text-gray-400">
              Tap copy to use anywhere
            </span>
          </div>
          <div className="h-[420px] space-y-4 overflow-y-auto pr-2 lg:h-[500px]">
            {generatedOutputs.map((output) => (
              <TextOutputCard
                key={output.id}
                title={output.title}
                value={output.value}
              />
            ))}
          </div>

          {showCopyAll && (
            <button
              type="button"
              onClick={copyAllText}
              disabled={!text}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {allCopied ? <Check size={16} /> : <Copy size={16} />}
              {allCopied ? "Copied" : "Copy All"}
            </button>
          )}
        </section>
      </div>
    </section>
  );
}
