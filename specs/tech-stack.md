# Tech stack

Server-side TypeScript. Popular and boring on purpose — Mary has to keep this running.

| Concern | Choice | Why |
|---|---|---|
| Runtime | Node 22 LTS | Current LTS |
| Language | TypeScript, `strict: true` | Already set in `tsconfig.json` |
| Framework | **Next.js, App Router** | Most popular TS stack; server components + server actions keep all logic server-side |
| Styling | Tailwind CSS, mobile-first | Covers Steve without a component library; breakpoints come free |
| Data | Prisma + SQLite | One file in dev; same client swaps to Postgres later |
| Tests | Vitest (unit), Playwright (one smoke path) | Enough to catch a broken booking |
| Test runner entry | `npm test` → `vitest run` | One command per phase's validation step |
| Deploy | Vercel | Zero-config for Next.js |

## Conventions

- Reads happen in server components. Writes happen in server actions. No `fetch` to our own app.
- `'use client'` only where a browser API is genuinely needed. Prefer plain `<form>` posting to a server action.
- Native HTML first: `<input type="date">`, `<select>`, `<details>`, CSS over JS.
- Responsive is mobile-first, every phase, not a phase of its own. Unprefixed Tailwind classes
  are the phone layout; `sm:`/`md:`/`lg:` widen it. Never the reverse.
- 375px wide is the floor. No horizontal scroll, no clipped text, no fixed pixel widths —
  `max-w-*` plus fluid width instead. Tap targets stay at least 44px.
- One layout, not two. No mobile-only route, component, or user-agent branch; a wide table
  becomes a stacked list at the same URL via CSS.
- Validation lives in the server action, at the trust boundary — not only in the UI.
- Schema changes go through a Prisma migration, never a hand-edited DB.
- Vitest is how a phase's `Done when` gets checked. A phase with non-trivial logic leaves one
  runnable Vitest check behind; `validation.md` cites `npm test`, not a manual click-through.
- Tests live next to what they test as `*.test.ts`. No `__tests__/` tree, no fixture layer,
  no mocking library — a real function and an `expect`.
- `npm test` runs once and exits (`vitest run`), so it works the same locally and in a PR check.
  `npm run test:watch` is the local loop.

## Explicitly not using

- No REST/tRPC/GraphQL layer — server actions are the API.
- No client state library (Redux/Zustand/React Query). URL and server state are the state.
- No component library or design system package.
- No CSS-in-JS, no JS-driven breakpoint hooks — media queries via Tailwind do this.
- No auth library until the auth phase exists.
- No Docker, no CI matrix, no monorepo tooling.

Adding a dependency means saying which of these lines it breaks and why.