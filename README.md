# Athletics - Next.js Auth Boilerplate

A production-ready Next.js monorepo with authentication, role-based access control, and MongoDB integration. Built with Turborepo for scalability and reusability.

## 🚀 Features

- **🔐 Authentication System**
  - JWT-based authentication with secure cookies
  - Sign-up, sign-in, and sign-out functionality
  - Password hashing with bcrypt
  - Role-based access control (user, admin, superAdmin)

- **👥 User Management**
  - User registration and profile management
  - Admin panel for user management
  - Role assignment and updates
  - Secure API endpoints with authorization

- **🏗️ Architecture**
  - Monorepo structure with Turborepo
  - Shared packages for auth, database, and UI
  - TypeScript throughout
  - MongoDB with Mongoose ODM

- **🎨 UI/UX**
  - Responsive design with Tailwind CSS
  - Role-based dashboard content
  - Admin user management interface
  - Clean, modern UI components

## 📁 Project Structure

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

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Monorepo**: Turborepo
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with httpOnly cookies
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: pnpm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd athletics
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cd apps/web
   cp env.example .env.local
   ```

   Edit `.env.local`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/athletics
   AUTH_SECRET=your-super-secret-key-here
   ```

4. **Create a superAdmin user**
   ```bash
   # Add to .env.local
   SEED_SUPERADMIN_EMAIL=admin@example.com
   SEED_SUPERADMIN_PASSWORD=password123
   SEED_SUPERADMIN_NAME=Super Admin

   # Run seed script
   pnpm --filter web tsx scripts/seed.ts
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication Flow

1. **Sign Up**: Users can create accounts with email/password
2. **Sign In**: JWT token stored in httpOnly cookie
3. **Role-Based Access**:
   - `user`: Access to dashboard
   - `admin`: Access to dashboard + user management
   - `superAdmin`: Full system access

## 🛡️ Security Features

- JWT tokens with expiration
- Password hashing with bcrypt
- Role-based middleware protection
- Secure cookie settings
- Input validation with Zod
- Protected API routes

## 📊 API Endpoints

### Auth
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-in` - User login
- `POST /api/auth/sign-out` - User logout

### Users
- `GET /api/users/me` - Get current user
- `PATCH /api/users/me` - Update current user

### Admin (admin/superAdmin only)
- `GET /api/admin/users` - List all users
- `GET /api/admin/users/[id]` - Get specific user
- `PATCH /api/admin/users/[id]` - Update user

## 🎯 Usage as Boilerplate

This project is designed to be a reusable boilerplate:

1. **Clone and customize** the branding and styling
2. **Extend the User model** with additional fields
3. **Add new roles** in `packages/auth/src/roles.ts`
4. **Create new protected routes** following the middleware pattern
5. **Deploy** to Vercel with MongoDB Atlas

## 🚀 Deployment

### Vercel + MongoDB Atlas

1. **Set up MongoDB Atlas**
   - Create cluster and get connection string
   - Add to Vercel environment variables

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

3. **Configure environment variables**
   - `MONGODB_URI`: Your Atlas connection string
   - `AUTH_SECRET`: Strong secret key
   - `NODE_ENV`: production

## 📝 Development

### Available Scripts

```bash
# Development
pnpm dev              # Start all apps
pnpm dev --filter=web # Start only web app

# Build
pnpm build            # Build all apps
pnpm build --filter=web # Build only web app

# Database
pnpm --filter web tsx scripts/seed.ts # Create superAdmin

# Linting
pnpm lint             # Lint all packages
```

### Adding New Features

1. **New API routes**: Add to `apps/web/app/api/`
2. **New components**: Add to `apps/web/app/components/`
3. **Shared utilities**: Add to `packages/`
4. **Database models**: Add to `packages/db/src/models/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- Check the [ROADMAP.md](./ROADMAP.md) for development status
- Review the [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for architecture details
- Open an issue for bugs or feature requests
