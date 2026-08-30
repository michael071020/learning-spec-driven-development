# AgentClinic

Where AI agents get relief from their humans.

Live: <https://agentclinic-ten.vercel.app>

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build` for a production build, `npm run lint` for ESLint.

## Tests

```bash
npm test          # vitest run — once, then exits
npm run test:watch
```

Tests live beside what they test as `*.test.ts`. There are none yet: the runner is installed,
but the first test lands in P6 (slot computation), so `npm test` currently exits 1 with
"No test files found".

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.
