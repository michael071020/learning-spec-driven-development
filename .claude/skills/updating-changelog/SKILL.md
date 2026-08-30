---
name: updating-changelog
description: Use when about to merge a branch, close a roadmap phase, or open a PR in this repo, and whenever the user asks to update, write, backfill, or check CHANGELOG.md.
---

# Updating the changelog

`CHANGELOG.md` in the repo root is the human-readable record of what changed, by date.
It is not `git log`. A reader who never sees the commits should still know what the product
does now that it didn't before.

## What the file is

- `# Changelog`, then one `## YYYY-MM-DD` heading per date, newest first.
- Under each heading, bullets in Markdown. No version numbers, no `Unreleased` section —
  this project ships phases, not releases.
- Dates come from `git log`, never from memory.

## Producing an entry

1. Get the commits not yet in the file:
   `git log --date=short --pretty='%ad|%h|%s' --reverse <last-logged-date>..HEAD`
2. Group them by their `%ad` date.
3. For each date, write bullets that state **what is now true of the product or the specs**.
   One bullet per meaningful change — several commits often collapse into one bullet, and one
   commit that did two unrelated things becomes two.
4. If a `## YYYY-MM-DD` heading already exists, add to it. Never open a second heading
   for the same date.
5. Lead a phase-completing bullet with the phase in bold: `**P0 Boot shipped and merged.**`
   Include the live URL when a deploy changed it.
6. Commit `CHANGELOG.md` on the feature branch, before the merge.

## Bullets: shape

A bullet names the change and, where it isn't obvious, the consequence.

| Instead of | Write |
|---|---|
| `Install vitest` | Vitest installed with `npm test`; it is now how a phase's `Done when` gets checked |
| `Reflect Vitest runner across specs and README` | *(fold into the bullet above — same change)* |
| `Merge P0 Boot (#1)` | *(drop — merge commits describe branches, not changes)* |

Drop entirely: merge commits, typo and formatting fixes, commits that only tick a checkbox,
`WIP`/`fixup` commits.

## If the file doesn't exist

Build it from the whole history — `git log --date=short --pretty='%ad|%h|%s' --reverse` —
applying the same rules per date. Do this once; afterwards only new commits get read.

## Common mistakes

- **Pasting commit subjects as bullets.** The result is a worse `git log`. Rewrite each one.
- **Guessing today's date.** Read it from the commits you are logging.
- **Writing the entry after merging.** The branch is gone and so is the easy diff.
- **Bullets for spec churn nobody will remember.** If a bullet wouldn't matter in a month,
  it isn't a bullet.
