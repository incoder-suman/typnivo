# Typnivo

Free text and social tools: fancy fonts, symbols, invisible text, Instagram bios, captions and usernames. Everything runs in the browser; there is no backend.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Project layout

| Path | What it is |
| --- | --- |
| `lib/tools.js` | The list of all tools. The homepage grid, footer, related tools and sitemap all read from it. |
| `lib/textStyles/` | Unicode text transforms (bold, cursive, fraktur, small caps, bubbles…) and the style lists for each tool. |
| `lib/clipboard.js` | Copy helper with a fallback for older browsers. |
| `app/<tool-slug>/page.js` | One page per tool. Server component with SEO metadata. |
| `app/components/ToolPageShell.jsx` | Shared tool page layout: heading, related tools, FAQ and FAQ structured data. |
| `app/components/StyleTool.jsx` | Text-in, styles-out tool used by the font generators. Pick a style set with `styleSet`. |
| `app/components/*` | The interactive tools: `SymbolPicker`, `InvisibleTextTool`, `BioGenerator`, `CaptionFormatter`, `UsernameGenerator`. |
| `app/sitemap.js`, `app/robots.js` | Generated `/sitemap.xml` and `/robots.txt`. |

## Adding a tool

1. Add an entry to `tools` in `lib/tools.js`.
2. Create `app/<slug>/page.js` using `ToolPageShell` and `toolMetadata` (copy an existing tool page).
3. Add an icon for the slug in `toolIcons` in `app/page.js`.

The site URL used for SEO is `SITE_URL` in `lib/tools.js`.
