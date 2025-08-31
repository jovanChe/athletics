## Athletics Monorepo Structure

This document describes the high-level structure, responsibilities, and common workflows for the Athletics monorepo. The repository is organized with Turborepo and PNPM workspaces.

### Top-level

- `package.json`: Turborepo tasks (`dev`, `build`, `lint`, `check-types`) and shared deps.
- `pnpm-workspace.yaml`: Workspace configuration.
- `turbo.json`: Turborepo pipeline config.
- `prettier.config.mjs`: Shared formatting rules.

### Apps

- `apps/docs`: Next.js documentation site (starter). Useful for docs/playground.
- `apps/web`: Main Next.js web app.
  - `app/`: Next.js App Router code (routes, components, layout, styles).
    - `api/`: Route handlers (server actions) for auth, users, health, admin.
    - `components/`: UI components for pages (e.g., dashboard content, landing page).
    - `dashboard/`: Dashboard route (server components).
    - `layout.tsx`: Root layout.
    - `globals.css`: Global Tailwind CSS imports.
    - `middleware.ts`: Edge middleware (e.g., auth protection/redirects).
  - `scripts/seed.ts`: Seed script to create an initial super admin user.
  - `env.example`: Example env vars for local setup (MongoDB, auth secret, seed values).
  - `tailwind.config.ts`: Tailwind v4 config.
  - `package.json`: App scripts and dependencies.

### Packages

- `packages/ui`: Shared UI components (Button, Card, Code). Consumed by apps.
- `packages/auth`: Auth utilities and policies used by `apps/web`.
  - `src/jwt.ts`: JWT sign/verify helpers typed with `JwtUser`.
  - `src/roles.ts`: Centralized role constants and type.
  - `src/policies.ts`: Authorization helpers (role/policy checks).
  - `src/index.ts`: Barrel exports.
- `packages/db`: Database connection and models (Mongoose).
  - `src/lib/mongoose.ts`: Reusable `connectToDatabase()` with global connection cache.
  - `src/models/User.ts`: `User` Mongoose model and `Role` type.
  - `src/index.ts`: Barrel exports for db lib and models.
- `packages/eslint-config`: Shared ESLint configs (base, next, react-internal).
- `packages/typescript-config`: Shared tsconfig bases for apps and libraries.
- `packages/config`: Shared Tailwind and Prettier config distribution.

### Environment Variables

Copy `apps/web/env.example` to `.env` in `apps/web` and fill in values:

```
MONGODB_URI="mongodb+srv://<username>:<password>@host/athletix?retryWrites=true&w=majority"
AUTH_SECRET="replace-with-strong-random-string"

# Optional, for seeding
SEED_SUPERADMIN_EMAIL="you@example.com"
SEED_SUPERADMIN_PASSWORD="please-change"
SEED_SUPERADMIN_NAME="Your Name"
```

### Common Scripts

- Root:
  - `pnpm dev`: Run `dev` across apps/packages with Turborepo.
  - `pnpm build`: Build all apps/packages.
  - `pnpm lint`: Lint all workspaces.
  - `pnpm check-types`: Type-check all workspaces.
- `apps/web`:
  - `pnpm --filter web dev`: Start Next.js (Turbopack) on port 3000.
  - `pnpm --filter web build`: Build the app.
  - `pnpm --filter web start`: Start the production server.
  - `pnpm --filter web seed`: Seed initial data (uses `.env`).

### Development Workflow

1. Install deps: `pnpm install` (at repo root).
2. Prepare env: copy `apps/web/env.example` → `apps/web/.env` and set values.
3. Start dev: `pnpm dev` or `pnpm --filter web dev` for only the web app.
4. Database: Ensure MongoDB is reachable via `MONGODB_URI`.
5. Seed (optional): `pnpm --filter web seed` to create an initial super admin.

### Architectural Notes

- Next.js App Router with server components and route handlers under `app/api`.
- Authentication/authorization handled via shared `@repo/auth` utilities and policies.
- Persistence via Mongoose models from `@repo/db`. A global cached connection prevents multiple clients in dev/hot-reload.
- Shared UI primitives live in `@repo/ui` and imported into apps.
- Turborepo orchestrates builds, dev, and caching across workspaces.

### Conventions

- TypeScript everywhere; keep exports explicit via `index.ts` barrels.
- Keep cross-cutting concerns in `packages/*` to avoid duplication.
- Use Tailwind for styling in apps; colocate route components under `app/`.


