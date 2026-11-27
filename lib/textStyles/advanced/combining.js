export function applyCombiningMark(text, mark) {
  return Array.from(String(text ?? ""), (character) =>
    /\s/.test(character) ? character : `${character}${mark}`
  ).join("");
}
