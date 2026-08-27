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
| Deploy | Vercel | Zero-config for Next.js |

## Conventions

- Reads happen in server components. Writes happen in server actions. No `fetch` to our own app.
- `'use client'` only where a browser API is genuinely needed. Prefer plain `<form>` posting to a server action.
- Native HTML first: `<input type="date">`, `<select>`, `<details>`, CSS over JS.
- Validation lives in the server action, at the trust boundary — not only in the UI.
- Schema changes go through a Prisma migration, never a hand-edited DB.

## Explicitly not using

- No REST/tRPC/GraphQL layer — server actions are the API.
- No client state library (Redux/Zustand/React Query). URL and server state are the state.
- No component library or design system package.
- No auth library until the auth phase exists.
- No Docker, no CI matrix, no monorepo tooling.

Adding a dependency means saying which of these lines it breaks and why.