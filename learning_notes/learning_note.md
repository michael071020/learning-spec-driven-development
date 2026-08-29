# Learning note

## Desc

My learning record for the Spec-Driven Development (SDD) course.

**Goal:** learn how to build software by writing specs first and letting an AI
coding agent work from them — using this repo (AgentClinic) as the walkthrough
project.

I update this file as I go: what I did in each lesson, what clicked, what
tripped me up, and anything I keep building here after the course ends.

## Notes through the video
### Create the constitution
- Video: 5

#### Steps
- Use `READMD.md` to specify input from stakeholders and ask ai to read the file
- Create the constitution
    - including
        - `mission.md`
        - `tech-stack.md`
        - `roadmap.md` for high-level implementation
    - specify ai MUST use `AskUserQuestion` tool, grouped on these 3, before writing to disk.
- Add target audience to the mission

## Log

<!-- newest at the bottom -->

### 2026-08-28 — Start

Set up the repo and wrote the constitution in `specs/`: `mission.md`,
`tech-stack.md`, `roadmap.md`. Takeaway: the specs decide what gets built —
the roadmap's "one phase in flight" rule is what stops scope creep.
