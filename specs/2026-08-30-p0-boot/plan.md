# P0 Boot — Plan

## 1. Scaffold Next.js over the skeleton

- 1.1 Confirm Node 22 LTS is active (`node -v`).
- 1.2 Run `create-next-app` into a temp directory — it refuses a non-empty target, and running it
    in place would risk `.git`, `specs/`, `learning_notes/`, `README.md`, `prompts.md`:
    `npx create-next-app@latest agentclinic --typescript --tailwind --app --src-dir --eslint --no-turbopack --no-import-alias`
- 1.3 Move the generated files into the repo root: `src/app/`, `next.config.ts`, `postcss.config.mjs`,
    `eslint.config.mjs`, `next-env.d.ts`, `public/`, `tsconfig.json`, `package.json`, `package-lock.json`.
- 1.4 Delete `src/index.ts` and the old `dist/` output if present.
- 1.5 Merge `.gitignore` — keep the existing entries, add `.next/`, `node_modules/`, `.vercel`,
    `next-env.d.ts` if they are not already covered.
- 1.6 `npm install`, then `npm run build` — must pass clean before touching the page.

## 2. Home page

- 2.1 Rewrite `src/app/page.tsx` as a server component (no `'use client'`): product name,
    the mission one-liner, and a `<Link href="/therapies">Browse therapies</Link>` that will
    404 until P2. Tailwind utilities only.
- 2.2 Set `metadata` in `src/app/layout.tsx` — title `AgentClinic`, description from the mission.
    Strip the create-next-app default title.
- 2.3 Empty out the generated boilerplate in `globals.css` down to the Tailwind import plus whatever
    base tokens the scaffold needs. No design system.
- 2.4 `npm run dev`, load `http://localhost:3000` — name, tagline, and link render; Tailwind styles apply.
- 2.5 `npm run build && npm run lint` clean.

## 3. Deploy to Vercel (walked through together)

- 3.1 Commit the branch and push it to GitHub.
- 3.2 Walk the user through `npx vercel login` — browser auth, their account, their choice of
    login method. Their command to run, not mine.
- 3.3 Walk through `npx vercel` for the first deploy: accept the detected Next.js framework preset,
    default build settings, project name `agentclinic`. Nothing to configure — no env vars,
    no database yet.
- 3.4 Open the returned preview URL, confirm the home page loads.
- 3.5 `npx vercel --prod` for the production URL; confirm it loads too.
- 3.6 Record the production URL in `README.md`.

## 4. Close the phase

- 4.1 Walk `validation.md` top to bottom; every box ticks.
- 4.2 Update `README.md`: how to run locally (`npm install`, `npm run dev`), the live URL.
- 4.3 Open a PR from `p0-boot` to `main`.

## Notes

- No test framework in this phase. P0 ships no logic to check — `Done when` is "home page loads",
  and that is checked by loading it. Vitest arrives in P6, Playwright in P11.
- If `create-next-app` defaults drift (Turbopack flag renamed, Tailwind version bump), take the
  generated defaults and note the drift rather than fighting the generator.
