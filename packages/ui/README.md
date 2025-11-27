# Flexible Design System

A themeable design system built with Radix UI primitives and CSS custom properties, designed for maximum flexibility and brand customization.

## Features

- 🎨 **Flexible Theming**: Complete visual customization through CSS custom properties
- ♿ **Accessibility First**: Built on Radix UI primitives for robust accessibility
- 🎭 **Runtime Theme Switching**: Change themes without page reload
- 📱 **Responsive Design**: Fluid typography and responsive spacing
- 🎯 **Design Token Architecture**: Systematic approach to design decisions
- 🧩 **CSS Modules**: Scoped styling with Next.js native support
- 🚀 **Framework Agnostic**: Can be integrated into any React project

## Quick Start

### Installation

```bash
# Install the design system package
npm install @repo/ui

# Install required dependencies (Radix UI primitives)
npm install @radix-ui/react-button @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-icons
npm install clsx
```

### Basic Usage

```tsx
import { Button, ThemeProvider } from '@repo/ui';
import '@repo/ui/styles/index.css';

function App() {
  return (
    <ThemeProvider defaultTheme="base">
      <Button variant="primary">Hello World</Button>
    </ThemeProvider>
  );
}
```

## Components

### Button

Built with Radix Button primitive, featuring multiple variants and states.

```tsx
import { Button } from '@repo/ui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">⭐</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// With icons
<Button leftIcon={<Icon />}>With Left Icon</Button>
<Button rightIcon={<Icon />}>With Right Icon</Button>
```

### Dialog

Built with Radix Dialog primitive for accessible modal interactions.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@repo/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent size="md">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>

    {/* Dialog content */}

    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Input

Styled input component with support for labels, descriptions, and validation states.

```tsx
import { Input } from '@repo/ui';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  description="We'll never share your email"
  error="Please enter a valid email"
  leftIcon={<EmailIcon />}
  rightIcon={<CheckIcon />}
/>
```

### Select

Built with Radix Select primitive for accessible dropdown interactions.

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@repo/ui';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose option..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### MenuItem

Navigation menu item component optimized for sidebars with icon, label, and badge support.

```tsx
import { MenuItem } from '@repo/ui';

// Basic usage
<MenuItem icon={<Icons.Dashboard />} active>Dashboard</MenuItem>
<MenuItem icon={<Icons.Users />}>Users</MenuItem>
<MenuItem icon={<Icons.Settings />} badge="3">Settings</MenuItem>

// Size variants
<MenuItem size="small" icon={<Icons.Reports />}>Reports</MenuItem>
<MenuItem size="large" icon={<Icons.Message />} badge="12">Messages</MenuItem>

// Collapsed state (for collapsible sidebars)
<MenuItem collapsed icon={<Icons.Dashboard />} active>Dashboard</MenuItem>

// With link
<MenuItem icon={<Icons.Mail />} href="/external">External Link</MenuItem>

// Disabled state
<MenuItem icon={<Icons.Lock />} disabled>Locked Feature</MenuItem>
```

### Icon

Base icon component with consistent sizing and styling.

```tsx
import { Icon, Icons } from '@repo/ui';

// Use predefined icons
<Icons.Dashboard size="md" />
<Icons.Users size="lg" />
<Icons.Settings size="sm" />

// Size variants
<Icons.Home size="xs" />   // 12px
<Icons.Home size="sm" />   // 16px
<Icons.Home size="md" />   // 20px (default)
<Icons.Home size="lg" />   // 24px
<Icons.Home size="xl" />   // 32px
<Icons.Home size="2xl" />  // 40px

// Custom styling
<Icons.Analytics className="text-blue-500" />
<Icons.Reports style={{ color: 'var(--color-primary-600)' }} />
```

### Available Icons

The design system includes a comprehensive icon library:

**Navigation**: Home, Dashboard, Users, Settings, Analytics, Reports
**Actions**: Plus, Edit, Delete, Search, Filter
**Status**: Check, Cross, Warning, Info
**Communication**: Message, Mail, Bell
**Security**: Lock, Unlock

Visit `/icons` to browse the complete icon library with interactive examples.

## Theming

### Built-in Themes

- `base` - Default light theme
- `dark` - Dark theme
- `athletics` - Athletics brand theme
- `purple` - Purple brand theme
- `high-contrast` - High contrast theme

### Theme Provider

```tsx
import { ThemeProvider } from '@repo/ui';

<ThemeProvider
  defaultTheme="base"
  defaultSpacing="normal"
  enableSystem={true}
>
  <App />
</ThemeProvider>
```

### Runtime Theme Switching

```tsx
import { useTheme } from '@repo/ui';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme('dark')}>
      Switch to Dark Theme
    </button>
  );
}
```

### Custom Themes

Create custom themes by overriding CSS custom properties:

```css
[data-theme="custom"] {
  /* Override primary colors */
  --color-primary-500: #your-brand-color;
  --color-primary-600: #your-brand-color-dark;

  /* Update semantic tokens */
  --color-interactive-primary: var(--color-primary-600);
  --color-button-primary-bg: var(--color-primary-600);
}
```

### Spacing Variants

Control component spacing globally:

```tsx
const { spacing, setSpacing } = useTheme();

// Options: 'compact', 'normal', 'comfortable'
setSpacing('compact');
```

## Design Tokens

### Color System

- **Base Colors**: Raw color values (gray, primary, success, error, warning)
- **Semantic Colors**: Intent-based colors (text, background, border, interactive)
- **Component Colors**: Component-specific color mappings

### Spacing Scale

T-shirt sizing with consistent multipliers:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px

### Typography

Fluid typography with responsive scaling:
- Font families: Sans, Mono, Display
- Font sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl
- Font weights: light, normal, medium, semibold, bold
- Line heights: tight, normal, relaxed

### Shadows

Elevation system for depth and hierarchy:
- `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
- Component-specific shadows for buttons, dialogs, dropdowns

### Animation

Consistent timing and easing:
- Durations: fast (150ms), normal (200ms), slow (300ms)
- Easing curves: ease-out, ease-in-out, bounce, spring
- Component-specific transitions

## Accessibility

Built on Radix UI primitives, the design system includes:

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Visible focus indicators and logical focus flow
- **High Contrast Support**: Respects `prefers-contrast: high`
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

### Building

```bash
# Build TypeScript
npm run build

# Build CSS
npm run build:styles
```

### Linting

```bash
npm run lint
npm run check-types
```

## Architecture

### File Structure

```
packages/ui/
├── tokens/
│   ├── base/           # Core scale definitions
│   ├── semantic/       # Semantic token mappings
│   └── themes/         # Brand-specific overrides
├── components/
│   ├── primitives/     # Radix UI wrappers
│   └── utilities/      # Helper components
├── styles/
│   ├── reset.css       # CSS reset
│   ├── tokens.css      # CSS custom properties
│   ├── themes.css      # Theme definitions
│   └── components/     # Component styles
└── examples/           # Usage examples
```

### Design Philosophy

1. **Radix for Behavior**: Use Radix UI for accessibility, keyboard navigation, and component logic
2. **CSS for Styling**: Apply visual design through CSS classes and custom properties
3. **Tokens for Consistency**: Systematic approach to design decisions through design tokens
4. **Flexibility First**: Enable easy customization without touching component logic

## Contributing

1. Follow the established token structure
2. Use Radix UI primitives for new components
3. Maintain accessibility standards
4. Write CSS that leverages design tokens
5. Test across different themes and spacing variants

## License

MIT
