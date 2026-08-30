# P0 Boot — Validation

Roadmap `Done when`: **Home page loads on Vercel.**

## Local

Run from the repo root. All of these are mine to run.

- [x] `node -v` → v25.9.0 (homebrew; no nvm on this machine — see Drift below)
- [x] `npm install` completes with no errors
- [x] `npm run build` exits 0, output shows `/` as a static or server route
- [x] `npm run lint` exits 0
- [x] `npm run dev` starts; `http://localhost:3000` returns 200
- [x] Home page shows the product name, the mission tagline, and a "Browse therapies" link
- [x] Tailwind is live — the page is styled, not unstyled HTML
- [x] `src/app/page.tsx` contains no `'use client'`
- [x] `src/index.ts` and `dist/` are gone
- [x] `git status` is clean apart from intended files — no `.next/` or `node_modules/` staged

## Deploy

You run these; I'll be at the keyboard with you for each one.

- [ ] Branch pushed to GitHub
- [ ] `npx vercel login` — opens a browser, you pick a login method, terminal says you're logged in
- [ ] `npx vercel` — answer the prompts:
      - "Set up and deploy?" → **yes**
      - scope → your personal account
      - "Link to existing project?" → **no**
      - project name → `agentclinic`
      - directory → `./` (the default)
      - "Want to modify these settings?" → **no** (Next.js is auto-detected; there is nothing to configure)
- [ ] The preview URL it prints loads the home page in a browser
- [ ] `npx vercel --prod` succeeds
- [ ] The production `*.vercel.app` URL loads the home page in a browser
- [ ] The "Browse therapies" link 404s on the deployed site — expected until P2, not a bug

## Mergeable when

- [ ] Every box above is ticked
- [ ] `README.md` has local run instructions and the live URL
- [ ] PR open from `p0-boot` → `main`

## Not checked in this phase

No unit or e2e tests — P0 ships no branching logic, no data, no validation. The first Vitest check
lands in P6 with slot computation; the Playwright smoke path lands in P11.

## If it fails

- Build fails on types → the generated `tsconfig.json` is the source of truth; do not loosen
  `strict` to get green.
- Vercel build fails but local build passes → almost always a Node version mismatch. Set the
  project's Node version to 22.x in the Vercel dashboard under Settings → General.
- `vercel login` hangs → the browser tab didn't open; the terminal prints a URL to paste manually.

## Drift from the plan

- **Node**: this machine has v25.9.0 from Homebrew and no nvm. Next 16 runs fine on it, but
  Vercel builds on its own Node — set the project to 22.x in Settings → General if the remote
  build differs from local.
- **Versions**: `create-next-app` gave Next 16.3.3, React 19.2.8, Tailwind v4 (via
  `@tailwindcss/postcss`, no `tailwind.config.ts`). `--no-turbopack` was accepted without complaint.
- **Generated agent docs**: Next 16's `next build` writes `AGENTS.md` and `CLAUDE.md` at the repo
  root on every build. Committed rather than fought.
