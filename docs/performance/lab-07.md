# Lab 07 — Performance

## Load testing

Tool: autocannon  
Command: `npm run perf:load`  
Scenario: health endpoint as baseline (typical availability check).

## Profiling

Planned approach:

- Node.js `--prof` / `--inspect`
- measure CPU hotspots during load
- observe memory usage in Task Manager / `process.memoryUsage()`

## DB query analysis

For SQLite + Prisma:

- inspect generated SQL via Prisma logging (planned)
- identify slow queries once real DB endpoints are enabled
