"use client";

import { useRef, useState } from "react";
import { Check, Copy, Trash2 } from "lucide-react";
import { copyText } from "@/lib/clipboard";

const symbolGroups = [
  { name: "Hearts", symbols: "♥ ♡ ❤ ❥ ❣ ❦ ❧ ღ ᦢ ჱ ♥︎ 💕 💖 💗 💘 💝 💞 💓 💟 🤍 🖤 🤎 💜 💙 💚 💛 🧡 ❤️‍🔥" },
  { name: "Stars", symbols: "★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⋆ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ❂ ⁂ ⍟ ✡ ✴ ✵ 🌟 ⭐ 💫 ✨" },
  { name: "Arrows", symbols: "→ ← ↑ ↓ ↔ ↕ ↗ ↘ ↙ ↖ ⇒ ⇐ ⇑ ⇓ ⇔ ➜ ➔ ➙ ➛ ➝ ➞ ➟ ➠ ➡ ➢ ➣ ➤ ➥ ➦ ↩ ↪ ⤴ ⤵ ⟶ ⟵ ⟹" },
  { name: "Flowers & Nature", symbols: "❀ ✿ ❁ ✾ ❃ ❋ ✽ ❊ ⚘ ☘ ❦ 🌸 🌷 🌹 🌺 🌻 🌼 💐 🍀 🌿 🌱 🍃 🍂 🍁 🌙 ☾ ☽ ☀ ☁ ☂ ☃ ❄ ⚡ 🌈" },
  { name: "Aesthetic", symbols: "˚ ʚ ɞ ‧₊˚ ⋆｡˚ ✩°｡ ⋆⁺₊ ꒰ ꒱ ୨ ୧ ♡ ⊹ ˖ ꕤ ⟡ ✧˖° ⁺‧₊ ༄ ⋆ ☁︎ ᡣ𐭩 ꨄ ʕ•ᴥ•ʔ ◡̈ ⌒ ❀ ゛" },
  { name: "Checks & Marks", symbols: "✓ ✔ ✗ ✘ ☑ ☒ ☐ ✅ ❌ ❎ ⊗ ⊘ ⓧ ⦿ ◉ ○ ● ◎ ◌ ◍ ◐ ◑ ◒ ◓ ◔ ◕" },
  { name: "Shapes", symbols: "■ □ ▢ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ▪ ▫ ▬ ▭ ▮ ▯ ▲ △ ▶ ▷ ▼ ▽ ◀ ◁ ◆ ◇ ◈ ◊ ◢ ◣ ◤ ◥ ⬟ ⬢ ⬡" },
  { name: "Brackets", symbols: "【 】 「 」 『 』 〖 〗 《 》 〈 〉 ⟨ ⟩ ⟦ ⟧ ⦃ ⦄ ⦅ ⦆ ꧁ ꧂ ⫷ ⫸ ⌈ ⌉ ⌊ ⌋ ❨ ❩ ❪ ❫ ❬ ❭ ❮ ❯ ❰ ❱" },
  { name: "Dividers", symbols: "• · ∙ ‣ ⁃ ⁌ ⁍ ― ─ ━ ═ ┈ ┉ ┄ ┅ ⋯ ⋮ ∴ ∵ ⫶ ✦•┈┈• •°•°• ⊱ ⊰ ⊹⊱ ⊰⊹ ༺ ༻ ⏤ ⸻" },
  { name: "Music", symbols: "♩ ♪ ♫ ♬ ♭ ♮ ♯ 𝄞 𝄢 🎵 🎶 🎧 🎤 🎸 🎹 🥁 🎻 🎷" },
  { name: "Math", symbols: "± × ÷ ≠ ≈ ≡ ≤ ≥ ∞ √ ∑ ∏ ∫ ∂ ∆ ∇ π µ ∈ ∉ ∩ ∪ ⊂ ⊃ ∀ ∃ ∅ ° ‰ ¹ ² ³ ½ ¼ ¾" },
  { name: "Currency", symbols: "$ € £ ¥ ₹ ₩ ₽ ₺ ₴ ₦ ₱ ₫ ₪ ₿ ¢ ฿ ₡ ₲ ₵ ₸" },
  { name: "Zodiac", symbols: "♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ☉ ☿ ♀ ♁ ♂ ♃ ♄ ♅ ♆ ♇" },
  { name: "Misc", symbols: "☮ ☯ ☪ ✝ ☦ ✡ ☸ ☤ ⚕ ⚖ ⚓ ⚔ ⚜ ⚛ ♻ ♾ ☠ ☢ ☣ ⚠ ☎ ✉ ✂ ✎ ✏ ✐ ⌚ ⌛ ⏳ ☕ ♔ ♕ ♖ ♗ ♘ ♙ ♠ ♣ ♦" },
];

export default function SymbolPicker() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [collected, setCollected] = useState("");
  const [lastCopied, setLastCopied] = useState(null);
  const [allCopied, setAllCopied] = useState(false);
  const timer = useRef(null);

  const visibleGroups =
    activeGroup === "All" ? symbolGroups : symbolGroups.filter((group) => group.name === activeGroup);

  const handleSymbol = async (symbol) => {
    setCollected((current) => current + symbol);
    if (await copyText(symbol)) {
      setLastCopied(symbol);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setLastCopied(null), 1200);
    }
  };

  const copyCollected = async () => {
    if (collected && (await copyText(collected))) {
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 1500);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl py-10">
      <div className="sticky top-20 z-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <label htmlFor="symbol-collector" className="text-sm font-semibold text-gray-800">
          Your symbols
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="symbol-collector"
            value={collected}
            onChange={(event) => setCollected(event.target.value)}
            placeholder="Tap any symbol to copy it and add it here..."
            className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-lg text-gray-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={copyCollected}
              disabled={!collected}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
            >
              {allCopied ? <Check size={16} /> : <Copy size={16} />}
              {allCopied ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              onClick={() => setCollected("")}
              disabled={!collected}
              aria-label="Clear symbols"
              className="rounded-xl border border-gray-200 bg-white px-3 text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        <p className="mt-2 h-5 text-xs text-violet-600" aria-live="polite">
          {lastCopied ? `Copied ${lastCopied}` : ""}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Symbol categories">
        {["All", ...symbolGroups.map((group) => group.name)].map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={activeGroup === name}
            onClick={() => setActiveGroup(name)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              activeGroup === name
                ? "border-violet-600 bg-violet-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-violet-300 hover:text-violet-700"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {visibleGroups.map((group) => (
          <div key={group.name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900">{group.name}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(3.25rem,1fr))] gap-2">
              {group.symbols.split(" ").map((symbol, index) => (
                <button
                  key={`${symbol}-${index}`}
                  type="button"
                  onClick={() => handleSymbol(symbol)}
                  title={`Copy ${symbol}`}
                  className="flex h-13 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 px-1 text-xl text-gray-900 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50"
                >
                  {symbol}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
