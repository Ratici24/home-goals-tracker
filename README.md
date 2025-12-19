Home Goals Tracker

Backend API for tracking personal goals and their progress.

The project was developed as part of a laboratory course and demonstrates
basic backend architecture, REST API design, testing, and CI.

==================================================

Tech stack

- Node.js
- TypeScript
- Express
- Prisma ORM
- SQLite
- Jest
- GitHub Actions

==================================================

Project structure

apps/api/src

- app.ts Express app configuration
- index.ts API entrypoint
- routes HTTP route handlers
- services Business logic layer
- repositories Data access layer
- models Domain models

docs

- architecture Architecture diagrams and decisions
- requirements Lab requirements
- performance Performance and load testing reports

==================================================

API endpoints

Health check

GET /health

Response:
{
"status": "ok"
}

---

Goals

GET /goals
Returns a list of all goals.

POST /goals
Creates a new goal.

Request body example:
{
"title": "Learn Node.js",
"priority": 4
}

Response example:
{
"id": "uuid",
"title": "Learn Node.js",
"priority": 4,
"status": "active",
"createdAt": "2025-12-16T22:43:28.187Z"
}

==================================================

Development

Install dependencies:
npm install

Start API in development mode:
npm run dev:api

Run tests:
npm test

Run lint:
npm run lint

==================================================

Database

The project uses Prisma ORM with SQLite.

To apply migrations:
npx prisma migrate dev

==================================================

Testing

- Unit tests for services
- End-to-end test for health endpoint
- Tests are executed automatically in CI pipeline

==================================================

CI / CD

The project uses GitHub Actions to automatically:

- install dependencies
- run lint
- run tests
- check build

==================================================

Notes

The project was gradually extended during multiple laboratory works:

- basic tooling and formatting
- API prototype
- database integration
- testing
- CI pipeline
- performance testing
- final project polishing
