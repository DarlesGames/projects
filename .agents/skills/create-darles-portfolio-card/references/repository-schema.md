# Darles Games portfolio repository schema

This snapshot describes the repository as inspected on 2026-07-17. Always re-check the live files before editing.

## Site and publication

- Repository: `https://github.com/DarlesGames/projects.git`
- Data file: `projects.js`, assigning an array to `window.DARLES_PROJECTS`
- Cover directory: `assets/projects/`
- Cover value: repository-relative path such as `assets/projects/quadropuzzle.webp`
- Static entry point: `index.html`; it loads `projects.js` before `app.js`
- There is no package manifest, build command, test suite, or workflow in the repository. `.nojekyll` and the static root layout are compatible with GitHub Pages.
- Project deep links use the hash form `#project=<id>`. When Pages serves this repository at its conventional project URL, the expected card URL is `https://darlesgames.github.io/projects/#project=<id>`, but verify deployment before calling it published.

## Card object

Every object has exactly these required fields:

```js
{
  id: "kebab-case-id",
  title: { ru: "...", en: "..." },
  category: "html5",
  type: { ru: "...", en: "..." },
  status: "released",
  statusLabel: { ru: "...", en: "..." },
  featured: false,
  accent: "violet",
  cover: "assets/projects/kebab-case-id.webp",
  short: { ru: "...", en: "..." },
  details: { ru: "...", en: "..." },
  solutions: { ru: ["..."], en: ["..."] },
  stack: ["..."],
  links: [{ label: { ru: "...", en: "..." }, url: "https://..." }]
}
```

Supported categories from `projects.js` comments and `app.js`: `html5`, `web-product`, `mechanic`, `desktop`, `case`.

Supported statuses from live cards and CSS: `released`, `development`, `internal`.

Supported accents from CSS: `violet`, `green`, `cyan`, `blue`, `orange`, `gold`, `magic`, `space`.

Constraints:

- `id` is unique lowercase kebab-case.
- All localized scalar objects contain non-empty `ru` and `en` strings.
- `solutions.ru` and `solutions.en` contain 2–4 non-empty items and have equal lengths.
- `stack` contains 3–6 non-empty confirmed items in professional dependency order: core engine/framework, runtime/platform, SDKs/services, authoring tools, then implemented technical disciplines or product systems. Use canonical product names, merge synonyms, and exclude marketing language or unsupported inference.
- `links` may be empty; every entry has a localized label and an HTTP(S) URL.
- `featured` is Boolean and defaults to `false` for a new card.
- `cover` for this workflow is `assets/projects/<id>.webp`; the file must exist and be a 1600×900 WebP.
- No year field exists.
- ADD appends a top-level object unless current repository ordering establishes a more specific placement. REPLACE swaps the complete matching object while preserving its ID.

## Batch update payload

`scripts/update_project.py` accepts one card object, a JSON array of card objects, or an envelope with a `cards` array. Use `--mode auto` to select ADD or REPLACE independently by id. To force a per-card operation, wrap an item as `{ "mode": "replace", "card": { ... } }`.

The script validates required fields and structure, rejects duplicate ids in the payload, and performs all transformations in memory before writing `projects.js`. Validate the entire repository after the update; never commit a partial batch.
