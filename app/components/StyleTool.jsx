"use client";

import TextToolLayout from "./TextToolLayout";
import {
  allStyles,
  boldStyles,
  cursiveStyles,
  instagramStyles,
  smallTextStyles,
  toBold,
  toCursive,
  toDoubleStruck,
  toSmallCaps,
} from "@/lib/textStyles";

const homepageStyles = [
  { id: "bold", name: "Bold Unicode", transform: toBold },
  { id: "cursive", name: "Cursive", transform: toCursive },
  { id: "small-caps", name: "Small Caps", transform: toSmallCaps },
  { id: "double-struck", name: "Double-Struck", transform: toDoubleStruck },
];

// Functions can't be passed from server components to client components,
// so pages pick a style set by name and the transforms are resolved here.
const styleSets = {
  home: homepageStyles,
  bold: boldStyles,
  cursive: cursiveStyles,
  small: smallTextStyles,
  instagram: instagramStyles,
  all: allStyles,
};

export default function StyleTool({ styleSet = "all", ...layoutProps }) {
  const styles = styleSets[styleSet] ?? allStyles;
  const outputs = styles.map(({ id, name }) => ({ id, title: name, style: id }));
  const transformById = Object.fromEntries(styles.map((s) => [s.id, s.transform]));

  return (
    <TextToolLayout
      {...layoutProps}
      outputs={outputs}
      transformText={(text, id) => transformById[id](text)}
    />
  );
}
