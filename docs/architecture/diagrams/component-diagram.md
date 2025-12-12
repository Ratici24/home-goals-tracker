# Component diagram

```mermaid
flowchart LR
  user((User)) --> web[Web UI (future)]
  user --> api[HTTP API]

  subgraph API["Home Goals Tracker API (Node.js / TS)"]
    router[Controllers / Routes]
    app[Application Services]
    domain[Domain Model]
    repo[Repository Interfaces]
  end

  api --> router --> app --> domain
  app --> repo

  subgraph DB["Persistence"]
    pg[(PostgreSQL)]
  end

  repo --> pg

  subgraph Observability["Observability (future)"]
    logs[Structured logs]
    metrics[Metrics]
  end

  api --> logs
  api --> metrics
```
