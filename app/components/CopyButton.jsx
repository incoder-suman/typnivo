"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { copyText } from "@/lib/clipboard";

export default function CopyButton({ text, className }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;

    if (await copyText(text)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      className={
        className ||
        "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      }
    >
      {copied ? (
        <>
          <Check size={15} />
          Copied
        </>
      ) : (
        "Copy"
      )}
    </button>
  );
}
