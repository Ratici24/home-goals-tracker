```md
# Key data flows

## Flow 1 — Create goal with steps

1. Client sends `POST /goals` with goal fields.
2. API validates input and creates `GOAL`.
3. Client optionally sends `POST /goals/:id/steps` to add steps (creates `STEP` rows linked by `goalId`).

Data changes:

- Insert into `GOAL`
- Insert into `STEP` (0..N)

## Flow 2 — Mark step as done (progress update)

1. Client sends `PATCH /steps/:id` with `done=true`.
2. API updates the `STEP.done` field.
3. Progress is recalculated on read: `count(done=true) / count(all)` for the goal.

Data changes:

- Update `STEP.done`
- No write to `GOAL` required (progress is computed)

## Flow 3 — List goals (filters)

1. Client calls `GET /goals?status=active&priority>=3`.
2. API queries goals + optional aggregated progress.

Data changes:

- None (read-only)
```
