import {
  toBoldSans,
  toBoldSerif,
  toDoubleStruckStyle,
  toFraktur,
  toItalicBoldSans,
  toItalicBoldSerif,
  toItalicSans,
  toItalicSerif,
  toMedievalBold,
  toMonospace,
} from "./mathematical";
import { toBlocks } from "./special";

export * from "./mathematical";
export * from "./special";

export const popularStyles = [
  { id: "bold-serif", name: "Bold (Serif)", category: "bold", transform: toBoldSerif },
  { id: "bold-sans", name: "Bold (Sans)", category: "bold", transform: toBoldSans },
  { id: "italic-serif", name: "Italic", category: "mathematical", transform: toItalicSerif },
  { id: "italic-sans", name: "Italic (Sans)", category: "mathematical", transform: toItalicSans },
  { id: "italic-bold-serif", name: "Italic Bold (Serif)", category: "italic", transform: toItalicBoldSerif },
  { id: "italic-bold-sans", name: "Italic Bold (Sans)", category: "italic", transform: toItalicBoldSans },
  { id: "monospace", name: "Monospace", category: "mathematical", transform: toMonospace },
  { id: "fraktur", name: "Fraktur", category: "mathematical", transform: toFraktur },
  { id: "medieval-bold", name: "Medieval Bold", category: "fraktur", transform: toMedievalBold },
  { id: "double-struck", name: "Double-Struck", category: "mathematical", transform: toDoubleStruckStyle },
  { id: "blocks", name: "Blocks", category: "squared", transform: toBlocks },
];

export const styleById = Object.fromEntries(
  popularStyles.map((style) => [style.id, style])
);
