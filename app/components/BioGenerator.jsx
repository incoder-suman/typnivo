"use client";

import { useState } from "react";
import TextOutputCard from "./TextOutputCard";
import { toBold, toBoldScript, toSmallCaps, toMonospace, toSuperscript } from "@/lib/textStyles";

const themes = {
  minimal: { name: "Minimal", bullets: ["•", "•", "•"], deco: "" },
  aesthetic: { name: "Aesthetic", bullets: ["˚₊‧", "⋆｡˚", "✧"], deco: "♡" },
  cute: { name: "Cute", bullets: ["🌸", "🎀", "💕"], deco: "ʚɞ" },
  pro: { name: "Professional", bullets: ["💼", "📍", "📩"], deco: "" },
  creator: { name: "Creator", bullets: ["🎥", "✨", "👇"], deco: "⚡" },
  nature: { name: "Nature", bullets: ["🌿", "🌙", "☀️"], deco: "🍃" },
};

const fields = [
  { id: "name", label: "Name", placeholder: "Aanya Sharma" },
  { id: "role", label: "What you do", placeholder: "Photographer & travel creator" },
  { id: "interests", label: "Interests (comma separated)", placeholder: "coffee, mountains, film cameras" },
  { id: "location", label: "Location", placeholder: "Mumbai, India" },
  { id: "cta", label: "Call to action", placeholder: "DM for collabs" },
];

const MAX_BIO = 150; // Instagram's bio limit

function buildBios({ name, role, interests, location, cta }, theme) {
  const [b1, b2, b3] = theme.bullets;
  const list = interests
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const join = (lines) => lines.filter(Boolean).join("\n");
  const deco = (text) => (theme.deco && text ? `${theme.deco} ${text} ${theme.deco}` : text);

  return [
    {
      id: "classic",
      title: "Classic",
      value: join([
        name && toBold(name),
        role && `${b1} ${role}`,
        list.length > 0 && `${b2} ${list.join(" | ")}`,
        location && `${b3} ${location}`,
        cta && `👇 ${cta}`,
      ]),
    },
    {
      id: "script",
      title: "Elegant Script",
      value: join([
        name && deco(toBoldScript(name)),
        role,
        list.length > 0 && list.map((item) => `${b2} ${item}`).join("  "),
        cta && `${b3} ${cta}`,
      ]),
    },
    {
      id: "small-caps",
      title: "Soft & Simple",
      value: join([
        name && toSmallCaps(name),
        role && toSmallCaps(role),
        location && `${b1} ${toSmallCaps(location)}`,
        cta && `↓ ${toSmallCaps(cta)}`,
      ]),
    },
    {
      id: "one-line",
      title: "One Liner",
      value: [name && toBold(name), role, location, list[0]].filter(Boolean).join(` ${b1} `),
    },
    {
      id: "typewriter",
      title: "Typewriter",
      value: join([
        name && `> ${toMonospace(name)}`,
        role && `> ${toMonospace(role)}`,
        list.length > 0 && `> ${toMonospace(list.join(" / "))}`,
        cta && `${b3} ${cta}`,
      ]),
    },
    {
      id: "spaced",
      title: "Clean Spaced",
      value: join([
        name && toBold(name),
        "⠀",
        role && `${b1} ${role}`,
        location && `${b2} ${location}`,
        "⠀",
        cta && `${toSuperscript("link below")} ↓  ${cta}`,
      ]),
    },
  ].filter((bio) => bio.value.trim());
}

export default function BioGenerator() {
  const [values, setValues] = useState({
    name: "Aanya Sharma",
    role: "Photographer & travel creator",
    interests: "coffee, mountains, film cameras",
    location: "Mumbai, India",
    cta: "DM for collabs",
  });
  const [themeId, setThemeId] = useState("aesthetic");

  const bios = buildBios(values, themes[themeId]);

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 py-10 lg:grid-cols-2 lg:gap-8">
      <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-semibold text-gray-900">About you</h2>
        <div className="mt-4 space-y-4">
          {fields.map((field) => (
            <div key={field.id}>
              <label htmlFor={`bio-${field.id}`} className="mb-1.5 block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                id={`bio-${field.id}`}
                value={values[field.id]}
                onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                placeholder={field.placeholder}
                maxLength={80}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-base font-semibold text-gray-900">Style</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {Object.entries(themes).map(([id, theme]) => (
            <button
              key={id}
              type="button"
              onClick={() => setThemeId(id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                themeId === id ? "border-violet-600 bg-violet-600 text-white" : "border-gray-200 bg-white text-gray-600 hover:border-violet-300"
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {bios.length === 0 && (
          <p className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
            Fill in at least one field to generate bios.
          </p>
        )}
        {bios.map((bio) => {
          const length = Array.from(bio.value).length;
          return (
            <div key={bio.id}>
              <TextOutputCard title={bio.title} value={bio.value} />
              <p className={`mt-1 px-2 text-right text-xs ${length > MAX_BIO ? "text-red-500" : "text-gray-400"}`}>
                {length}/{MAX_BIO} characters{length > MAX_BIO ? " — too long for Instagram, shorten a field" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
