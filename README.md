# Athletics Auth Boilerplate

A production-ready Next.js monorepo with authentication, role-based access control, and a complete UI component library.

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based authentication with httpOnly cookies
- Role-based access control (user, admin, superAdmin)
- Protected routes with middleware
- Secure password hashing

### 🎨 Complete UI Library
- **60+ components** based on shadcn/ui
- CSS Modules + Design Tokens architecture
- Multiple theme support
- Fully accessible (Radix UI primitives)
- Production-ready components:
  - Forms, Data Tables, Charts
  - Dialogs, Sheets, Popovers
  - Navigation, Tabs, Sidebar
  - Calendar, Date Pickers
  - And much more...

### 👥 User Management
- User registration and authentication
- Admin panel for user management
- Role assignment and updates
- Profile management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm
- MongoDB

### Installation

```bash
# Clone repository
git clone https://github.com/jovanChe/athletics.git
cd athletics

# Install dependencies
pnpm install

# Set up environment variables
cp apps/web/.env.example apps/web/.env
# Edit .env with your MongoDB URI and secrets

# Run development servers
pnpm dev
```

### Create SuperAdmin

```bash
pnpm --filter web tsx scripts/seed.ts
```

### Access

- **Main App**: http://localhost:3000
- **UI Library**: http://localhost:3001
- **Docs**: http://localhost:3002

## 📦 Monorepo Structure

```
athletics/
├── apps/
│   ├── web/              # Main Next.js application (Port 3000)
│   ├── docs/             # Documentation site (Port 3002)
│   └── ui/               # UI component library (Port 3001)
├── packages/
│   ├── auth/             # Authentication utilities
│   ├── db/               # Database models
│   ├── ui/               # 60+ UI components
│   └── config/           # Shared configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Styling**: CSS Modules + Design Tokens
- **UI Components**: Based on shadcn/ui + Radix UI
- **Monorepo**: Turborepo
- **Package Manager**: pnpm

## 📚 Documentation

- `PROJECT_CONTEXT.md` - Project overview and architecture
- `ROADMAP.md` - Development roadmap
- `packages/ui/ARCHITECTURE.md` - UI design system architecture
- `packages/ui/COMPONENTS.md` - Component reference

## 🎨 UI Component Library

View live demos at http://localhost:3001/primitives

### Component Categories

- **Core**: Button, Input, Card, Badge, Label
- **Forms**: Checkbox, Switch, Select, Form, Textarea
- **Data**: Table, DataTable, Calendar, Chart, StatCard
- **Overlays**: Dialog, Sheet, Drawer, Popover, Tooltip
- **Navigation**: Tabs, Sidebar, Breadcrumb, Navigation Menu
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Layout**: Accordion, Collapsible, Carousel, Aspect Ratio

### Usage Example

```tsx
import { Button, Card, CardContent } from "@repo/ui/primitives";

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

## 🔒 Environment Variables

```env
# Database
MONGODB_URI=mongodb://localhost:27017/athletics

# Authentication
AUTH_SECRET=your-super-secret-key-min-32-chars

# Seed Data (for development)
SEED_SUPERADMIN_EMAIL=admin@example.com
SEED_SUPERADMIN_PASSWORD=secure-password
SEED_SUPERADMIN_NAME=Super Admin
```

## 🚢 Deployment

### Vercel + MongoDB Atlas

1. Create MongoDB Atlas cluster
2. Create Vercel project
3. Configure environment variables
4. Deploy: `npx vercel --prod`

## 🤝 Contributing

This is a personal boilerplate project. Feel free to fork and adapt for your own use.

## 📄 License

MIT

## 👨‍💻 Author

jovanChe - [GitHub](https://github.com/jovanChe)
