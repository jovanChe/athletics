# UI Components Reference

Complete list of all implemented components based on shadcn/ui.

## Component Categories

### Core Components
- **Button** - Primary action component with multiple variants
- **Input** - Text input field
- **Label** - Form label
- **Textarea** - Multi-line text input
- **Card** - Content container with header, content, and footer
- **Badge** - Status indicators and tags
- **Separator** - Visual divider

### Form Components
- **Checkbox** - Boolean input
- **Radio Group** - Single selection from options
- **Switch** - Toggle input (iOS-style)
- **Slider** - Range input
- **Select** - Dropdown selection
- **Form** - React Hook Form integration

### Feedback Components
- **Alert** - Info/warning/error messages
- **Alert Dialog** - Modal confirmation dialogs
- **Toast/Sonner** - Notifications
- **Skeleton** - Loading placeholders
- **Progress** - Progress indicators
- **Empty State** - Placeholder for empty data

### Overlay Components
- **Dialog** - Modal dialogs
- **Sheet** - Side panels
- **Drawer** - Bottom sheets (mobile)
- **Popover** - Floating content panels
- **Tooltip** - Hover information
- **Hover Card** - Rich hover previews
- **Context Menu** - Right-click menus
- **Dropdown Menu** - Action menus

### Navigation Components
- **Tabs** - Tabbed content
- **Breadcrumb** - Navigation hierarchy
- **Pagination** - Page navigation
- **Navigation Menu** - Complex nav with mega-menus
- **Menubar** - Desktop app-style menu bar
- **Sidebar** - Full-featured sidebar

### Data Components
- **Table** - Base table component
- **DataTable** - Advanced table with TanStack Table (sorting, filtering, pagination)
- **Calendar** - Date selection with multiple modes
- **Date Picker** - Calendar in popover
- **Date Range Picker** - Range selection
- **Command** - Command palette
- **Chart** - Recharts integration (Bar, Line, Area, Pie)
- **Stat Card** - Statistics display

### Layout Components
- **Accordion** - Expandable content
- **Collapsible** - Show/hide content
- **Scroll Area** - Custom scrollbars
- **Resizable** - Resizable panels
- **Aspect Ratio** - Maintain aspect ratios
- **Carousel** - Content sliders (Embla)

### Interaction Components
- **Toggle** - Two-state button
- **Toggle Group** - Multiple toggle buttons
- **Input OTP** - One-time password input

### Display Components
- **Avatar** - User avatars with fallback
- **Icon** - Icon wrapper
- **Icons** - Icon library

## Design System

- **Styling**: CSS Modules + CSS Custom Properties (design tokens)
- **Accessibility**: Built on Radix UI primitives
- **Theming**: Token-based system with multiple themes
- **Components**: 60+ production-ready components

## Usage

```tsx
import { Button, Card, CardContent } from "@repo/ui/primitives";

export function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

For demos and examples, run the UI package dev server and visit http://localhost:3001/primitives

