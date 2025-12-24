# Project Context

## Project Overview

**Name**: Athletics Auth Boilerplate
**Repository**: https://github.com/jovanChe/athletics.git
**Type**: Next.js monorepo with authentication and UI design system
**Purpose**: Production-ready boilerplate with auth and comprehensive UI library

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Monorepo**: Turborepo
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with httpOnly cookies
- **UI Components**: 60+ components based on shadcn/ui
- **Styling**: CSS Modules + Design Tokens
- **Language**: TypeScript
- **Package Manager**: pnpm

## Project Structure

```
athletics/
├── apps/
│   ├── web/                 # Main Next.js app with auth
│   └── docs/               # Documentation site
├── packages/
│   ├── auth/               # JWT auth & role-based access
│   ├── db/                 # MongoDB models
│   ├── ui/                 # Complete UI component library
│   ├── config/             # Shared config
│   └── typescript-config/  # TypeScript configs
```

## Key Features

### Authentication System
- JWT tokens with httpOnly cookies
- Role-based access control (user, admin, superAdmin)
- Middleware protection
- Secure password hashing

### UI Design System
- **60+ Components**: Complete shadcn/ui implementation
- **CSS Modules**: Scoped styling
- **Design Tokens**: Theme-able with CSS custom properties
- **Accessibility**: Built on Radix UI primitives
- **Components**: Button, Card, Dialog, Table, DataTable, Calendar, Charts, and more

### User Management
- Registration and authentication
- Admin panel for user management
- Role assignment
- Protected API routes

## Important Directories

### Authentication
- `packages/auth/src/` - JWT, roles, policies

### Database
- `packages/db/src/models/` - Mongoose models
- `packages/db/src/lib/` - DB connection

### UI Library
- `packages/ui/components/primitives/` - 60+ UI components
- `packages/ui/styles/` - CSS Modules & tokens
- `packages/ui/app/primitives/` - Component demos
- `packages/ui/app/blocks/` - Block templates

### Main App
- `apps/web/app/api/` - API routes
- `apps/web/app/components/` - App components
- `apps/web/app/middleware.ts` - Route protection

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/athletics
AUTH_SECRET=your-secret-key
SEED_SUPERADMIN_EMAIL=admin@example.com
SEED_SUPERADMIN_PASSWORD=secure-password
SEED_SUPERADMIN_NAME=Admin User
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Development (all apps)
pnpm dev

# Development (specific app)
pnpm --filter web dev      # Port 3000
pnpm --filter @repo/ui dev # Port 3001

# Create superAdmin
pnpm --filter web tsx scripts/seed.ts

# Build all
pnpm build

# Lint
pnpm lint
```

## Component Usage

```tsx
import {
  Button,
  Card,
  CardContent,
  DataTable,
  Chart
} from "@repo/ui/primitives";

export function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button variant="primary">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## Security

- JWT with expiration
- httpOnly cookies
- Role-based authorization
- Password hashing (bcrypt)
- Input validation (Zod)
- Protected routes and APIs

## Git Configuration

**Project-specific** (in `.git/config`):
```ini
[user]
    name = jovanChe
    email = j.predrag@gmail.com
```

## Deployment

### Vercel + MongoDB Atlas
1. Create MongoDB Atlas cluster
2. Set environment variables in Vercel
3. Deploy: `npx vercel --prod`

## Documentation

- `packages/ui/ARCHITECTURE.md` - UI design system architecture
- `packages/ui/COMPONENTS.md` - Component reference
- `packages/ui/SHADCN_PRIORITY.md` - Component implementation status
- Live demos: http://localhost:3001/primitives (when running UI dev server)

## Current Status

✅ **Complete**
- Authentication system
- Admin panel
- 60+ UI components
- Design token system
- Multiple themes
- Component demos
- Block templates
