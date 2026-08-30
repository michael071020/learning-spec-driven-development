# Roadmap

Nano phases: 1–3 features each, a day or less, one vertical slice (schema + route + UI + one
check). The app runs and is demoable at the end of every phase. Phases ship in order.

| # | Phase | Ships | Done when |
|---|---|---|---|
| P0 ✅ | Boot | Next.js + Tailwind app, home page, deployed | Home page loads on Vercel — <https://agentclinic-ten.vercel.app> |
| P1 | Data floor | Prisma + SQLite, `Therapy` model, seed ~6 therapies | `prisma migrate` + `seed` run clean |
| P2 | Therapy list | `/therapies` reading from DB | List shows seeded therapies |
| P3 | Therapy detail | `/therapies/[slug]`, linked from list | Each therapy has a page; 404 on unknown slug |
| P4 | Agents | `Agent` model + ailment tags, seed ~5 agents | Seeded agents queryable |
| P5 | Agent profile | `/agents/[id]` with ailment tags | Profile renders tags and nothing else |
| P6 | Slots | `Appointment` model, fixed slot list per therapy | Free vs taken slots computed correctly (test) |
| P7 | Booking | Booking form → server action → confirmation | Booking persists; double-booking a slot is rejected (test) |
| P8 | Staff dashboard | `/staff` — today's bookings | A booking made in P7 appears on `/staff` |
| P9 | Change plans | Cancel + reschedule a booking | Cancelled slot becomes bookable again (test) |
| P10 | Polish | Copy, layout, responsive pass (Steve) | Looks intentional on phone and desktop |
| P11 | Playwright smoke | One test: browse → book → see on `/staff` | Passes locally |

## Deferred

- Auth (agent + staff accounts) — pick up after P11 if the loop holds.
- Postgres swap, admin CRUD for therapies, notifications, session notes.
- These stay off the board until someone asks; the mission says v1 is the loop.

## Rules

- One phase in flight. No starting P7 while P6 is half done.
- A phase that grows past a day gets split, not extended.
- Non-trivial logic in a phase leaves one runnable check behind (see the `Done when` column).