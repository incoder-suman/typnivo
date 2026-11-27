"use client";

import CopyButton from "./CopyButton";

export default function TextOutputCard({
  title = "Bold",
  value = "",
}) {
  return (
    <div className="min-w-0 w-full rounded-2xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-gray-900">
          {title}
        </h3>

        <CopyButton text={value} />
      </div>

      <div className="min-h-[100px] rounded-xl bg-gray-50 p-4">
        {value ? (
          <p className="whitespace-pre-wrap break-words text-lg leading-relaxed text-gray-900">
            {value}
          </p>
        ) : (
          <p className="text-sm text-gray-400">
            Your generated text will appear here...
          </p>
        )}
      </div>
    </div>
  );
}
