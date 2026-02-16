# Node Monitoring Dashboard

A real-time node monitoring dashboard built as a React assessment project. The backend simulates 50 worker nodes with fluctuating CPU/memory metrics, and the frontend renders them in a responsive card/table layout with status filtering.

## Development Choices

The base project structure and backend were handmade. Gemini coding agent was used to improve the frontend design. 

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── server.ts              # Express server (port 3000)
│   │   └── utils/
│   │       ├── classes.ts         # Node & Status types
│   │       └── utils.ts           # Node generation & update logic
│   ├── backend.Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── actions/               # Server actions (API fetching)
│   │   ├── app/                   # Next.js app router (pages, layout)
│   │   ├── components/
│   │   │   ├── card/              # Node card components
│   │   │   └── display/           # Main display with filtering
│   │   ├── providers/             # React Query provider
│   │   ├── queries/               # TanStack Query hooks
│   │   └── schemas/               # Zod validation schemas
│   ├── frontend.Dockerfile
│   └── package.json
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) 

### Docker

```bash
docker compose up --build
```

| Service  | URL                              |
| -------- | -------------------------------- |
| Frontend | http://localhost:8080             |
| Backend  | http://localhost:3000/api/nodes   |

To stop:

```bash
docker compose down
```
