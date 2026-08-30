# Tech stack

Server-side TypeScript. Popular and boring on purpose — Mary has to keep this running.

| Concern | Choice | Why |
|---|---|---|
| Runtime | Node 22 LTS | Current LTS |
| Language | TypeScript, `strict: true` | Already set in `tsconfig.json` |
| Framework | **Next.js, App Router** | Most popular TS stack; server components + server actions keep all logic server-side |
| Styling | Tailwind CSS | Covers Steve without a component library |
| Data | Prisma + SQLite | One file in dev; same client swaps to Postgres later |
| Tests | Vitest (unit), Playwright (one smoke path) | Enough to catch a broken booking |
| Test runner entry | `npm test` → `vitest run` | One command per phase's validation step |
| Deploy | Vercel | Zero-config for Next.js |

## Conventions

- Reads happen in server components. Writes happen in server actions. No `fetch` to our own app.
- `'use client'` only where a browser API is genuinely needed. Prefer plain `<form>` posting to a server action.
- Native HTML first: `<input type="date">`, `<select>`, `<details>`, CSS over JS.
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
- No auth library until the auth phase exists.
- No Docker, no CI matrix, no monorepo tooling.

Adding a dependency means saying which of these lines it breaks and why.