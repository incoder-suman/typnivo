function transformCharacters(text, transformCharacter) {
  return Array.from(String(text ?? ""), transformCharacter).join("");
}

function createMathematicalTransform({ upperStart, lowerStart, digitStart }) {
  return (text) =>
    transformCharacters(text, (character) => {
      const codePoint = character.codePointAt(0);

      if (codePoint >= 65 && codePoint <= 90) {
        return String.fromCodePoint(upperStart + codePoint - 65);
      }

      if (codePoint >= 97 && codePoint <= 122) {
        return String.fromCodePoint(lowerStart + codePoint - 97);
      }

      if (digitStart && codePoint >= 48 && codePoint <= 57) {
        return String.fromCodePoint(digitStart + codePoint - 48);
      }

      return character;
    });
}

export const toBoldSerif = createMathematicalTransform({
  upperStart: 0x1d400,
  lowerStart: 0x1d41a,
  digitStart: 0x1d7ce,
});

export const toBoldSans = createMathematicalTransform({
  upperStart: 0x1d5d4,
  lowerStart: 0x1d5ee,
  digitStart: 0x1d7ec,
});

const italicLowerOverrides = {
  h: "\u210e",
};

export function toItalicSerif(text) {
  return transformCharacters(text, (character) => {
    const codePoint = character.codePointAt(0);

    if (italicLowerOverrides[character]) {
      return italicLowerOverrides[character];
    }

    if (codePoint >= 65 && codePoint <= 90) {
      return String.fromCodePoint(0x1d434 + codePoint - 65);
    }

    if (codePoint >= 97 && codePoint <= 122) {
      return String.fromCodePoint(0x1d44e + codePoint - 97);
    }

    return character;
  });
}

export const toItalicSans = createMathematicalTransform({
  upperStart: 0x1d608,
  lowerStart: 0x1d622,
});

export const toItalicBoldSerif = createMathematicalTransform({
  upperStart: 0x1d468,
  lowerStart: 0x1d482,
});

export const toItalicBoldSans = createMathematicalTransform({
  upperStart: 0x1d63c,
  lowerStart: 0x1d656,
});

export const toMedievalBold = createMathematicalTransform({
  upperStart: 0x1d56c,
  lowerStart: 0x1d586,
});

export const toMonospace = createMathematicalTransform({
  upperStart: 0x1d670,
  lowerStart: 0x1d68a,
  digitStart: 0x1d7f6,
});

const frakturUpperOverrides = {
  C: "\u212d",
  H: "\u210c",
  I: "\u2111",
  R: "\u211c",
  Z: "\u2128",
};

export function toFraktur(text) {
  return transformCharacters(text, (character) => {
    const codePoint = character.codePointAt(0);

    if (frakturUpperOverrides[character]) {
      return frakturUpperOverrides[character];
    }

    if (codePoint >= 65 && codePoint <= 90) {
      return String.fromCodePoint(0x1d504 + codePoint - 65);
    }

    if (codePoint >= 97 && codePoint <= 122) {
      return String.fromCodePoint(0x1d51e + codePoint - 97);
    }

    return character;
  });
}

const doubleStruckUpperOverrides = {
  C: "\u2102",
  H: "\u210d",
  N: "\u2115",
  P: "\u2119",
  Q: "\u211a",
  R: "\u211d",
  Z: "\u2124",
};

export function toDoubleStruckStyle(text) {
  return transformCharacters(text, (character) => {
    const codePoint = character.codePointAt(0);

    if (doubleStruckUpperOverrides[character]) {
      return doubleStruckUpperOverrides[character];
    }

    if (codePoint >= 65 && codePoint <= 90) {
      return String.fromCodePoint(0x1d538 + codePoint - 65);
    }

    if (codePoint >= 97 && codePoint <= 122) {
      return String.fromCodePoint(0x1d552 + codePoint - 97);
    }

    if (codePoint >= 48 && codePoint <= 57) {
      return String.fromCodePoint(0x1d7d8 + codePoint - 48);
    }

    return character;
  });
}

export const toBoldScript = createMathematicalTransform({
  upperStart: 0x1d4d0,
  lowerStart: 0x1d4ea,
});
