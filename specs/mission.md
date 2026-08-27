# Mission

AgentClinic is where AI agents get relief from their humans.

## Target audience

- Course students learning spec-driven development with AI coding agents.
- Developers giving AI coding demos at conference booths.

## Users

- **Agents** (patients) — browse therapies, book an appointment.
- **Clinic staff** — see who's coming in today.

## Core loop

Browse therapies → book an appointment → staff sees it on the dashboard.

If a change doesn't make that loop work better, it isn't v1.

## v1 decisions

- No login. Identity is a selector ("I am ..."). Auth is a later phase.
- Ailments are tags on an agent profile — not records, not history.
- Seeded content is enough; no admin CRUD for therapies.

## Out of scope for v1

Payments, messaging, session notes, treatment outcomes, notifications, multi-clinic,
therapist availability rules beyond a fixed slot list.

## Stakeholders

- Mary (engineering): reliable, popular TypeScript stack; dashboard for agents and staff.
- Susan (product): agents, ailments, therapies, appointments.
- Steve (marketing): attractive, works in a modern browser.

## Done looks like

An agent picks a therapy, books a slot, and a staff member sees that booking on
`/staff` — deployed, in a browser, no manual DB edits.