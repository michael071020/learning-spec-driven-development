# P0 Boot — Requirements

Branch: `p0-boot`

## Goal

Turn the bare `tsc` skeleton into a running Next.js + Tailwind app with a home page,
deployed to Vercel. This is the vertical slice with nothing in it yet — no DB, no data,
no routes beyond `/`. Its only job is to prove the stack renders and ships.

## Scope

In:

- `create-next-app` scaffold in place: App Router, TypeScript `strict`, Tailwind, `src/` layout.
- One home page at `/` — a server component, no `'use client'`.
- First deploy to Vercel, walked through together.

Out (later phases own these):

- Prisma, SQLite, any model or seed — P1.
- `/therapies`, `/agents`, `/staff` routes — P2, P5, P8.
- Vitest / Playwright setup — P6 and P11 add them when there is logic to check.
- Layout polish, responsive pass — P10.
- Nav shell, header, footer — nothing to navigate to yet.

## Decisions

**Scaffold: `create-next-app` in place, skeleton replaced.**
The generated `tsconfig.json` and `package.json` overwrite the existing ones, and
`src/index.ts` is deleted. The current tsconfig (`commonjs` / `es2016`, no `jsx`) would need
rewriting for Next.js anyway, and `src/index.ts` is a `console.log` placeholder. Hand-adding
Next.js was considered and rejected: more files to get right for the same result.

Flags: `--typescript --tailwind --app --src-dir --eslint --no-turbopack --no-import-alias`,
scaffolded into a temp dir and moved in so `create-next-app` doesn't refuse the non-empty
directory or clobber `.git`, `specs/`, `learning_notes/`, `README.md`, `prompts.md`.

**Home page: minimal branded landing.**
Product name, the mission one-liner, and a `<Link href="/therapies">` that 404s until P2.
Enough to see that Tailwind classes apply and a server component renders. Not the default
boilerplate page — the demo has to look like AgentClinic from the first commit. Not a nav
shell either; building layout for three routes that don't exist is P10's problem, later.

**Deploy: in scope, done together.**
The roadmap's `Done when` for P0 is "Home page loads on Vercel", so the phase isn't finished
at a local build. The user has not used Vercel before, so `validation.md` carries the full
walkthrough rather than a one-line "run `vercel`". Commands that need their browser or their
account (`vercel login`, the deploy prompts) are theirs to run; everything else is mine.

## Context

- Repo today: `src/index.ts` printing `Happy developing ✨`, `tsconfig.json` targeting
  `es2016`/`commonjs`, `package.json` with only `typescript` as a dependency, empty `node_modules`
  install from that. No app, no framework.
- `specs/tech-stack.md` fixes the choices — Next.js App Router, Tailwind, Vercel, Node 22 LTS.
  P0 adopts them; it does not re-litigate them.
- `specs/tech-stack.md` conventions that bind from this phase on: reads in server components,
  writes in server actions, `'use client'` only for a real browser API, native HTML first.
- `specs/mission.md` supplies the home page copy — "where AI agents get relief from their humans".

## Constraints

- No dependency beyond what `create-next-app` installs. No component library, no design system,
  no state library, no auth. Adding one means saying which tech-stack line it breaks.
- `strict: true` stays on.
- Node 22 LTS.
