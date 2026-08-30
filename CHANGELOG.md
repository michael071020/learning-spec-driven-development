# Changelog

Newest first. One heading per date, one bullet per change worth remembering.

## 2026-08-30

- **P0 Boot shipped and merged.** `create-next-app` scaffold replaced the bare `tsc` skeleton:
  Next 16.3.3, React 19, App Router, TypeScript `strict`, Tailwind v4, `src/` layout.
- Home page at `/` — a server component with the product name, the mission tagline, and a
  `Browse therapies` link that 404s until P2.
- First Vercel deploy, live at <https://agentclinic-ten.vercel.app>.
- Vitest installed with `npm test` / `npm run test:watch`; it is now how a phase's `Done when`
  gets checked. No tests written yet — P6 writes the first.
- Responsive design became a standing convention in `specs/tech-stack.md` (mobile-first, 375px
  floor, one layout) instead of a P10 phase.
- Phase 0 feature spec written: `specs/2026-08-30-p0-boot/{requirements,plan,validation}.md`.
- This changelog started, plus an `updating-changelog` project skill that maintains it —
  invoke it before merging a branch or closing a phase.
- Learning notes added under `learning_notes/`.

## 2026-08-27

- Foundational project specs: `specs/mission.md`, `specs/tech-stack.md`, `specs/roadmap.md`.
