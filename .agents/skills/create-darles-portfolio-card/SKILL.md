---
name: create-darles-portfolio-card
description: Add, replace, or batch-process one or more Darles Games portfolio cards in projects.js; write factual Russian and English copy with a professional technical narrative and normalized technology stack; generate WebP covers; validate, commit, and push main to GitHub. Use when a user asks to add or update games or products in the Darles Games portfolio, improve descriptions or technology stacks, generate covers, publish portfolio changes, or supplies a numbered batch such as "карточка 1", "карточка 2" with descriptions, links, or images.
---

# Create a Darles Portfolio Card

Execute the complete workflow for one card or an atomic batch. Work autonomously, ask at most three aggregated questions only when critical facts are missing, and never invent public facts.

## 1. Preflight

1. Confirm the working directory is the repository root with `git rev-parse --show-toplevel`.
2. Run `git status --short`, `git branch --show-current`, and `git remote -v`.
3. Require branch `main` and an `origin` for `DarlesGames/projects`. Preserve unrelated changes; stop if they overlap files needed for the card.
4. If the tree is clean, run `git pull --ff-only origin main`. Otherwise fetch `origin/main` and do not overwrite user changes.
5. Read [references/repository-schema.md](references/repository-schema.md), then inspect the live `projects.js`, `app.js`, and cover directory because the reference can become stale.
6. Split numbered input such as `карточка 1`, `карточка 2`, and so on into separate records. Associate each description, link, and image with its nearest card heading; never leak facts between cards.
7. Build a batch manifest with input label, official title, proposed or preserved id, ADD/REPLACE operation, sources, and cover path.
8. Search every item by normalized `id` and both localized titles. Select `ADD` only when absent; otherwise select `REPLACE`. Reject duplicate cards within the request and never create a duplicate in the repository.

## 2. Establish facts and write the card

- Extract explicit facts independently for every card from its free-form description, links, and supplied images. Ask only for information whose absence blocks a truthful card; combine questions across the batch and ask no more than three.
- Preserve the official product name. Write natural, mutually consistent RU/EN text describing the product, mechanics, user value, and implemented decisions without advertising exaggeration.
- Do not invent technology, platform, function, client, metric, result, award, or link.
- Use only values supported by the live schema. Default to `featured: false` and `links: []` when no verified links exist. Do not add a year field.
- Create a unique kebab-case `id`; for `REPLACE`, preserve the existing `id`.
- Supply every required localized field and 2–4 corresponding solution items per language. Include only verified `http` or `https` links.
- Write a professional technical narrative: make `details` explain the product architecture, platform constraints, integrations, content pipeline, or implementation tradeoffs that are actually known; make `solutions` name concrete implemented systems or decisions rather than generic praise.
- Build `stack` from 3–6 confirmed, canonical labels ordered from core technology to supporting systems: engine/framework, runtime/platform, SDKs/services, authoring tools, then implemented technical disciplines or product systems.
- Prefer precise labels such as `Construct 3`, `HTML5`, `GamePush`, `Platform SDKs`, `Adobe Photoshop`, `Leaderboards`, or `Touch Controls`. Normalize spelling and merge synonyms. Do not use marketing claims, gameplay content, vague outcomes such as `Modern Technology`, or tools inferred only from appearance.
- Treat a user-facing feature as stack only when it names an implemented system, for example `Leaderboards`, `In-App Purchases`, `Save System`, or `Touch Controls`. If fewer than three stack items are confirmed, ask for the missing technologies instead of padding the list.
- Set `cover` to `assets/projects/<project-id>.webp`.
- For one card, use `scripts/update_project.py projects.js card.json --mode auto`.
- For multiple cards, place the card objects in one temporary JSON array and run `scripts/update_project.py projects.js cards.json --mode auto` once. The script validates every object and applies all changes in memory before writing, so the update is atomic. A batch item may instead use `{ "mode": "add|replace|auto", "card": { ... } }` when an explicit operation is required.
- Review the resulting diff and delete temporary JSON inputs. Do not reformat unrelated objects or the full data file.

## 3. Generate and prepare the cover

Use the built-in `$imagegen` skill. For a batch, issue one generation call per card and keep prompts, references, generated files, and cover paths isolated by id. Inspect attached references and follow each product's visual style; if none exist, generate from its factual description.

Generate a 16:9 image with one clear focal point and strong small-card readability. Do not add text, captions, platform logos, HUD, frames, watermarks, unconfirmed mechanics or characters, the Darles Games logo, or default purple Darles styling for an unrelated product unless explicitly requested.

Save the generated source outside tracked repository paths, then run:

```text
python .agents/skills/create-darles-portfolio-card/scripts/prepare_cover.py <source> assets/projects/<project-id>.webp
```

Every final asset must be exactly 1600×900 WebP. Do not stage intermediate PNG or temporary files.

## 4. Validate

Run all checks and fix failures before committing:

```text
node --check projects.js
node .agents/skills/create-darles-portfolio-card/scripts/validate_projects.mjs projects.js
git diff --check
```

Also run any repository tests, lint, or build commands that actually exist. The validator checks duplicate IDs, required fields, RU/EN structure, links, cover existence, and WebP dimensions. For every card, manually compare RU/EN meaning, source support, stack professionalism, and cover fidelity. Review the complete batch diff and confirm only intended files changed. If any card or mandatory check fails, do not commit or push any part of the batch.

## 5. Commit and push

After successful checks, run `git status --short` again and stage only `projects.js`, every final `assets/projects/<project-id>.webp`, and files directly required for the requested cards. Never stage unrelated user changes.

- ADD commit: `feat(portfolio): add <project-id>`
- REPLACE commit: `feat(portfolio): update <project-id>`
- Multiple ADD cards: `feat(portfolio): add <count> projects`
- Multiple REPLACE cards: `feat(portfolio): update <count> projects`
- Mixed batch: `feat(portfolio): update project catalog`

Commit, then run `git push origin main` without force. The explicit invocation of this skill authorizes commit and push; do not ask again. If rejected because `origin/main` advanced, fetch and safely rebase onto it, repeat validation, and retry without discarding others' work.

## 6. Report

Report ADD or REPLACE for each card; every project ID and title; changed files; cover paths; checks; commit hash; pushed branch and remote; and card URLs only when they can be reliably derived. Distinguish a successful push from verified deployment and do not claim the site is published while deployment is running or unknown.
