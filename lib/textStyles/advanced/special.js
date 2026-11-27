import { applyCombiningMark } from "./combining";

export function toBlocks(text) {
  return Array.from(String(text ?? ""), (character) => {
    const codePoint = character.toUpperCase().codePointAt(0);

    if (codePoint >= 65 && codePoint <= 90) {
      return String.fromCodePoint(0x1f170 + codePoint - 65);
    }

    return character;
  }).join("");
}

export function toBubbles(text) {
  return Array.from(String(text ?? ""), (character) => {
    const codePoint = character.codePointAt(0);

    if (codePoint >= 65 && codePoint <= 90) return String.fromCodePoint(0x24b6 + codePoint - 65);
    if (codePoint >= 97 && codePoint <= 122) return String.fromCodePoint(0x24d0 + codePoint - 97);
    if (codePoint === 48) return "⓪";
    if (codePoint >= 49 && codePoint <= 57) return String.fromCodePoint(0x2460 + codePoint - 49);

    return character;
  }).join("");
}

const superscriptMap = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ",
  j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ",
  s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};

// Unicode has no subscript for b, c, d, f, g, q, w, y, z; those stay as-is.
const subscriptMap = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ",
  o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
  0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
};

function mapLowercased(text, characterMap) {
  return Array.from(String(text ?? ""), (character) => characterMap[character.toLowerCase()] || character).join("");
}

export const toSuperscript = (text) => mapLowercased(text, superscriptMap);
export const toSubscript = (text) => mapLowercased(text, subscriptMap);

export const toStrikethrough = (text) => applyCombiningMark(text, "̶");
export const toUnderline = (text) => applyCombiningMark(text, "̲");
export const toSlashed = (text) => applyCombiningMark(text, "̸");

export const toSpaced = (text) => Array.from(String(text ?? "")).join(" ");
