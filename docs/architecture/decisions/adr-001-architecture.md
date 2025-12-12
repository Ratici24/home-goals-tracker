# ADR-001: Modular architecture with API + Domain + Persistence

## Status

Accepted

## Context

The course requires a full SDLC process: design, implementation, testing, deployment, performance analysis, and refactoring.

## Decision

Use a layered structure:

- Controllers (HTTP layer)
- Application services (use-cases)
- Domain model (business rules)
- Repository interfaces (persistence abstraction)
- PostgreSQL as the persistence layer (Lab 4)

## Consequences

- Easy to unit-test domain/services (Lab 5)
- Clear module boundaries (Lab 2)
- Persistence can be swapped (in-memory for Lab 3, DB for Lab 4)
- Easier to extract a module into a separate library (Lab 8)
