"use client";

export default function TextInput({
  value,
  onChange,
  maxLength = 500,
}) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <label
          htmlFor="text-input"
          className="text-sm font-semibold text-gray-800"
        >
          Your Text
        </label>

        <span className="text-xs text-gray-400">
          {value.length} characters
        </span>
      </div>

      <textarea
        id="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type or paste your text here..."
        rows={6}
        maxLength={maxLength}
        className="min-h-[220px] w-full resize-none rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 lg:min-h-[300px]"
      />
    </div>
  );
}
