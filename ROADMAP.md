# ROADMAP

A living plan to guide development, ensure completeness, and make this reusable as a boilerplate.

## Status Legend
- [x] Done
- [ ] Todo
- [~] In-progress / Partial

## Phase 0 — Project Bootstrap
- [x] Monorepo with Turborepo
  - `turbo.json`, `pnpm-workspace.yaml`
- [x] Workspaces: `apps/web`, `apps/docs`, `packages/auth`, `packages/db`, `packages/ui`, `packages/config`, `packages/typescript-config`
- [x] Base TypeScript and ESLint config
- [x] Tailwind setup in `apps/web` using shared styles from `packages/config`

## Phase 1 — Auth & Users (Backend)
- [x] User model (MongoDB + Mongoose)
  - `packages/db/src/models/User.ts`
- [x] DB connection util
  - `packages/db/src/lib/mongoose.ts`
- [x] JWT utilities and roles
  - `packages/auth/src/jwt.ts`, `packages/auth/src/roles.ts`, `packages/auth/src/policies.ts`
- [x] Sign up API: `POST /api/auth/sign-up`
  - Zod validation, bcrypt hashing
  - `apps/web/app/api/auth/sign-up/route.ts`
- [x] Sign in API: `POST /api/auth/sign-in`
  - Verifies credentials, sets `auth_token` cookie
  - `apps/web/app/api/auth/sign-in/route.ts`
- [x] Sign out API: `POST /api/auth/sign-out`
  - Clears cookie
  - `apps/web/app/api/auth/sign-out/route.ts`
- [x] Me API: `GET /api/users/me`, `PATCH /api/users/me`
  - JWT from cookie, update name/image
  - `apps/web/app/api/users/me/route.ts`
- [x] Healthcheck: `GET /api/health`
- [~] Middleware protection
  - Present for `/dashboard` and `/admin` routes based on cookie existence
  - `apps/web/app/middleware.ts`
  - [ ] Enforce role-based access (decode + verify token; guard `/admin` only for `admin|superAdmin`)
  - [ ] Add public route allowlist and explicit protected matchers
- [ ] Security hardening
  - [ ] Rate limiting (sign-in/sign-up/admin routes)
  - [ ] CSRF protection if using non-REST patterns
  - [ ] Cookie settings review (domain, secure, sameSite, path)
  - [ ] Input sanitization strategy
- [ ] Account lifecycle
  - [ ] Email verification flow
  - [ ] Password reset flow
  - [ ] Password change endpoint (with old password check)
  - [ ] Session invalidation/rotation strategy
- [x] Seeding & roles
  - [x] Seed script for `superAdmin` + demo users (`apps/web/scripts/seed.ts`)
  - [ ] Admin role promotion endpoint (admin-only)

## Phase 2 — Admin (Backend)
- [x] Admin APIs
  - `GET /api/admin/users` list
  - `GET /api/admin/users/[id]` fetch
  - `PATCH /api/admin/users/[id]` update
- [ ] Admin APIs hardening
  - [ ] Ensure `canManageUsers` used everywhere and middleware guards `/admin`
  - [ ] Audit fields allowed in updates (no email/password change here unless intended)
  - [ ] Add delete user endpoint if needed
  - [ ] Pagination & filtering on users list

## Phase 3 — Frontend Screens
- Landing
  - [x] Basic landing page
- Auth UI
  - [x] Sign-up page + form
  - [x] Sign-in page + form
  - [x] Sign-out button
- User
  - [ ] Profile page: view/update name/image (uses `/api/users/me`)
  - [ ] Avatar upload or URL picker (optional)
- Dashboard
  - [~] Basic dashboard shell
  - [ ] Server-side session check and redirect
  - [ ] Example widgets and data fetching pattern
- Admin
  - [x] Admin users list (table with pagination)
  - [x] Admin user detail/edit form (role changes)
  - [x] Guarded routes + error/forbidden states

## Phase 4 — Design System (Reusable)
- [x] Base UI package with primitives: `packages/ui` (`button`, `card`, `code`)
- [ ] Tokenized theme structure (colors, spacing, radii, typography)
- [ ] Global theming and dark mode support
- [ ] Form components (input, select, textarea, checkbox, radio, switch)
- [ ] Layout primitives (stack, grid, container)
- [ ] Data display (table, badge, avatar, skeleton)
- [ ] Feedback (toast system, alert, dialog)
- [ ] Docs playground/examples in `ui/design-system` with usage guidelines
- [ ] Theming guide to swap branding quickly

## Phase 5 — DevEx, Quality & Testing
- [ ] End-to-end tests (Playwright/Cypress) for auth flows
- [ ] API tests (Vitest/Jest + supertest or Next test utils)
- [ ] Linting and type-check on commit/CI
- [ ] Prettier standardized
- [ ] Error logging (Sentry/OpenTelemetry)
- [ ] Request logging (pino/http), correlation IDs
- [ ] Runtime schema validation (zod) on all request bodies and responses
- [ ] Monitoring health endpoint integration

## Phase 6 — Hosting & CI/CD
- Hosting (suggested)
  - **Web**: Vercel (Next.js)
  - **DB**: MongoDB Atlas
- Envs
  - [x] `AUTH_SECRET` (required)
  - [x] `MONGODB_URI` (required)
  - [ ] `NEXT_PUBLIC_*` as needed for client
- Steps
  - [ ] Create Atlas cluster; get `MONGODB_URI`
  - [ ] Create Vercel project pointing to `apps/web`; set build output
  - [ ] Configure env vars on Vercel (`AUTH_SECRET`, `MONGODB_URI`)
  - [ ] Add `vercel.json` if any custom routing needed
  - [ ] Production cookie settings verify (`secure`, `sameSite`)
- CI/CD
  - [ ] GitHub Actions for lint, typecheck, test, build
  - [ ] Preview deployments on PRs
  - [ ] Auto-run seed script on first deploy (guarded)

## Reusability & Boilerplate Goals
- [ ] Clear configuration boundaries:
  - App-specific in `apps/web`; reusable in `packages/*`
- [ ] Auth and RBAC isolated in `packages/auth`
- [ ] DB models and connect isolated in `packages/db`
- [ ] Styling/system isolated in `packages/ui` and `packages/config`
- [ ] Documentation in `apps/docs` explaining structure and usage
- [ ] Example `.env` in `apps/web/env.example` kept up to date

## Open Questions / Decisions
- [ ] Email provider for verification/reset (e.g., Resend/SendGrid)
- [ ] File storage for images (Vercel Blob/S3/Cloudinary)
- [ ] Logging/Monitoring stack choice
- [ ] Preferred test stack (Playwright vs Cypress, Vitest vs Jest)
- [ ] Whether to use refresh tokens vs short-lived access tokens
- [ ] Whether to add OAuth providers later

## References (current implementation)
- Auth
  - `packages/auth/src/*`
  - `apps/web/app/api/auth/*`
  - `apps/web/app/middleware.ts`
- Users
  - `packages/db/src/models/User.ts`
  - `apps/web/app/api/users/me/route.ts`
  - `apps/web/app/api/admin/users/*`
- Infra
  - `packages/db/src/lib/mongoose.ts`
  - `apps/web/app/api/health/route.ts`