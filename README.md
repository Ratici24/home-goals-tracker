# Home Goals Tracker

A personal tracker for household and everyday goals.

## Problem

Household goals are often long-term and consist of multiple small steps.
Without a clear progress overview, it is easy to lose motivation or forget unfinished tasks.

## Solution

Home Goals Tracker helps users break down goals into steps, track progress,
and analyze completion over time.

## MVP (Laboratory work #3)

- Create, update and archive goals
- Add steps (subtasks) to goals
- Track goal progress based on completed steps
- List and filter goals by status and priority

## Key user scenarios

1. Create a goal → add steps → mark steps as completed → observe progress
2. View all active goals and filter them
3. Archive completed or irrelevant goals

## Technology stack

- Node.js + TypeScript
- NestJS — modular architecture and dependency injection
- PostgreSQL + Prisma — relational data model and migrations
- Jest / Supertest / Playwright — unit, integration and E2E testing
- GitHub Actions — CI/CD
- Husky + lint-staged + Conventional Commits — code quality and commit discipline

## Repository structure

- `apps/api` — backend API
- `docs/requirements` — laboratory requirements
- `docs/architecture` — architecture decisions and diagrams
- `docs/runbooks` — deployment, debugging and performance notes

## Development status

The project is developed incrementally as part of the Node.js mentoring course,
following
