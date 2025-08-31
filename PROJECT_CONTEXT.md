# Project Context for AI Assistants

This file provides context for AI assistants working on this project.

## Project Overview

**Name**: Athletics Auth Boilerplate
**Repository**: https://github.com/jovanChe/athletics.git
**Type**: Next.js monorepo with authentication system
**Purpose**: Reusable boilerplate for auth-enabled applications

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Monorepo**: Turborepo
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with httpOnly cookies
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: pnpm

### Project Structure
```
athletics/
├── apps/
│   ├── web/                 # Main Next.js application
│   │   ├── app/            # App Router pages
│   │   ├── components/     # React components
│   │   └── scripts/        # Database seeding
│   └── docs/               # Documentation site
├── packages/
│   ├── auth/               # Authentication utilities
│   ├── db/                 # Database models and connection
│   ├── ui/                 # Shared UI components
│   └── config/             # Shared configuration
└── ROADMAP.md              # Development roadmap
```

## Key Features

### Authentication System
- JWT-based authentication with secure cookies
- Role-based access control (user, admin, superAdmin)
- Password hashing with bcrypt
- Middleware protection with role enforcement

### User Management
- User registration and profile management
- Admin panel for user management
- Role assignment and updates
- Secure API endpoints with authorization

## Important Files

### Core Authentication
- `packages/auth/src/jwt.ts` - JWT utilities
- `packages/auth/src/roles.ts` - Role definitions
- `packages/auth/src/policies.ts` - Authorization policies

### Database
- `packages/db/src/models/User.ts` - User model
- `packages/db/src/lib/mongoose.ts` - Database connection

### API Routes
- `apps/web/app/api/auth/sign-up/route.ts` - User registration
- `apps/web/app/api/auth/sign-in/route.ts` - User login
- `apps/web/app/api/auth/sign-out/route.ts` - User logout
- `apps/web/app/api/users/me/route.ts` - Current user
- `apps/web/app/api/admin/users/route.ts` - Admin user management

### Frontend
- `apps/web/app/components/LandingPage.tsx` - Auth forms
- `apps/web/app/components/DashboardContent.tsx` - Dashboard
- `apps/web/app/components/UsersManagement.tsx` - Admin panel
- `apps/web/app/middleware.ts` - Route protection

## Development Setup

### Environment Variables
```env
MONGODB_URI=mongodb://localhost:27017/athletics
AUTH_SECRET=your-super-secret-key-here
SEED_SUPERADMIN_EMAIL=admin@example.com
SEED_SUPERADMIN_PASSWORD=password123
SEED_SUPERADMIN_NAME=Super Admin
```

### Key Commands
```bash
# Development
pnpm dev

# Create superAdmin
pnpm --filter web tsx scripts/seed.ts

# Build
pnpm build

# Lint
pnpm lint
```

## Git Configuration

### Multi-Account Setup
- **jovanChe account**: Used for this project via HTTPS
- **Predrag-Homestory account**: Used for other projects via SSH
- **Project config**: Stored in `.git/config` (local)
- **Global config**: Stored in `~/.gitconfig`

### Project-Specific Config
```ini
[user]
    name = jovanChe
    email = j.predrag@gmail.com
```

## Security Considerations

- JWT tokens with expiration
- httpOnly cookies for token storage
- Role-based middleware protection
- Input validation with Zod
- Password hashing with bcrypt
- Protected API routes

## Deployment

### Vercel + MongoDB Atlas
1. Set up MongoDB Atlas cluster
2. Configure environment variables in Vercel
3. Deploy with `npx vercel --prod`

## Common Patterns

### Adding New Protected Routes
1. Create page in `apps/web/app/`
2. Add middleware protection in `apps/web/app/middleware.ts`
3. Use role-based checks with `canManageUsers()` from `@repo/auth`

### Adding New API Routes
1. Create route in `apps/web/app/api/`
2. Use `verifyAuthToken()` for authentication
3. Use policy functions for authorization
4. Connect to database with `connectToDatabase()`

### Adding New Database Models
1. Create model in `packages/db/src/models/`
2. Export from `packages/db/src/index.ts`
3. Import in API routes as `@repo/db`

## Recent Development

### Latest Changes
- Enhanced middleware with role-based protection
- Created admin user management interface
- Updated README with comprehensive documentation
- Set up multi-account Git configuration

### Current Status
- ✅ Complete auth system implemented
- ✅ Admin panel functional
- ✅ Repository pushed to GitHub
- ✅ Documentation updated

## Future Enhancements

- User profile management page
- Email verification flow
- Password reset functionality
- File upload for avatars
- Testing suite
- CI/CD pipeline

---

*This context file should be updated as the project evolves.*
