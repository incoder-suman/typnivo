import { toCursive, toSmallCaps } from "./transformations";
import {
  popularStyles,
  toBoldSans,
  toBoldScript,
  toBoldSerif,
  toBubbles,
  toDoubleStruckStyle,
  toFraktur,
  toItalicBoldSans,
  toItalicBoldSerif,
  toItalicSans,
  toItalicSerif,
  toMedievalBold,
  toMonospace,
  toSlashed,
  toSpaced,
  toStrikethrough,
  toSubscript,
  toSuperscript,
  toUnderline,
} from "./advanced";

export { toCursive, toSmallCaps } from "./transformations";
export * from "./advanced";

// Short aliases used by the homepage demo and other tools.
export const toBold = toBoldSans;
export const toDoubleStruck = toDoubleStruckStyle;

const style = (id, name, transform) => ({ id, name, transform });

const cursive = style("cursive", "Cursive", toCursive);
const boldScript = style("bold-script", "Bold Cursive", toBoldScript);
const smallCaps = style("small-caps", "Small Caps", toSmallCaps);
const superscript = style("superscript", "Superscript (Tiny)", toSuperscript);
const subscript = style("subscript", "Subscript", toSubscript);
const bubbles = style("bubbles", "Bubbles", toBubbles);
const strikethrough = style("strikethrough", "Strikethrough", toStrikethrough);
const underline = style("underline", "Underline", toUnderline);
const slashed = style("slashed", "Slashed", toSlashed);
const spaced = style("spaced", "Wide Spaced", toSpaced);

// Style lists for each tool page.
export const boldStyles = [
  style("bold-serif", "Bold (Serif)", toBoldSerif),
  style("bold-sans", "Bold (Sans)", toBoldSans),
  style("italic-bold-serif", "Italic Bold (Serif)", toItalicBoldSerif),
  style("italic-bold-sans", "Italic Bold (Sans)", toItalicBoldSans),
  boldScript,
  style("medieval-bold", "Medieval Bold", toMedievalBold),
];

export const cursiveStyles = [
  cursive,
  boldScript,
  style("italic-serif", "Italic", toItalicSerif),
  style("italic-bold-serif", "Italic Bold", toItalicBoldSerif),
  style("italic-sans", "Italic (Sans)", toItalicSans),
  style("fraktur", "Gothic", toFraktur),
];

export const smallTextStyles = [smallCaps, superscript, subscript];

export const instagramStyles = [
  style("bold-sans", "Bold", toBoldSans),
  cursive,
  boldScript,
  style("italic-serif", "Italic", toItalicSerif),
  smallCaps,
  style("monospace", "Typewriter", toMonospace),
  style("double-struck", "Outline", toDoubleStruckStyle),
  style("medieval-bold", "Gothic Bold", toMedievalBold),
  bubbles,
  superscript,
  spaced,
  strikethrough,
];

// Every style, for the Fancy Text Generator.
export const allStyles = [
  ...popularStyles,
  cursive,
  boldScript,
  smallCaps,
  superscript,
  subscript,
  bubbles,
  strikethrough,
  underline,
  slashed,
  spaced,
];
