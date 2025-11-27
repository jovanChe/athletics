# Architecture & Design Decisions

This document outlines the architectural decisions and patterns used in the UI design system.

## Component Source Strategy

**We use shadcn/ui components as the foundation for our component library.**

### Why shadcn/ui?

- **Copy-paste approach**: Components are copied into our codebase, giving us full ownership and control
- **Built on Radix UI primitives**: Same accessibility foundation we already use
- **No external dependencies**: Components live in our codebase, no library version conflicts
- **Easy customization**: Since we own the code, we can modify anything

### Component Adaptation Process

When adopting a shadcn/ui component:

1. **Copy the component** from shadcn/ui registry
2. **Convert Tailwind classes** to CSS Modules using our design tokens
3. **Maintain component structure** and Radix UI primitive usage
4. **Preserve accessibility** features from shadcn
5. **Add custom features** as needed (e.g., loading states, custom variants)

## Styling Approach

### CSS Modules + Design Tokens

**We do NOT use Tailwind CSS.** Instead, we use:

- **CSS Modules** for scoped component styling
- **Design Tokens** (CSS custom properties) for consistent theming
- **CSS custom properties** defined in `/styles/tokens.css`

### Why CSS Modules over Tailwind?

- **Design token integration**: Direct mapping to our design system tokens
- **Better control**: Full CSS capabilities without utility class limitations
- **Smaller bundle**: Only styles we use are included
- **Theme flexibility**: Easy runtime theme switching via CSS custom properties
- **Team preference**: Aligns with project architecture decisions

### Design Token System

All styling uses CSS custom properties defined in `/styles/tokens.css`:

```css
/* Colors */
--color-text-primary: var(--color-gray-900);
--color-bg-primary: #ffffff;

/* Spacing */
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;

/* Typography */
--font-size-sm: 0.875rem;
--font-weight-medium: 500;
```

Components reference these tokens in their CSS Modules:

```css
.button {
  padding: var(--space-button-y) var(--space-button-x);
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}
```

## Component Architecture

### Structure Pattern

Components follow this structure:

```
components/
  primitives/          # Core UI components (Button, Dialog, etc.)
  layout/             # Layout components (Box, Flex, Table, etc.)
  utilities/          # Helper components (ThemeProvider, cn, etc.)
```

### Component Implementation Pattern

1. **Use Radix UI primitives** for accessibility and behavior
2. **Wrap with custom styling** using CSS Modules
3. **Export component API** matching shadcn/ui patterns where applicable
4. **Support variants** via CSS Module classes and `cn()` utility

Example:

```tsx
// Component uses Radix primitive
import * as DialogPrimitive from "@radix-ui/react-dialog";

// Styled with CSS Modules
import styles from "../../styles/components/dialog.module.css";

// Variants via CSS classes
const DialogContent = ({ className, size, ...props }) => (
  <DialogPrimitive.Content
    className={cn(styles.content, styles[`size-${size}`], className)}
    {...props}
  />
);
```

## Accessibility

- **Radix UI primitives**: All components built on accessible primitives
- **Semantic HTML**: Proper use of HTML elements (`<table>`, `<thead>`, etc.)
- **ARIA attributes**: Applied automatically by Radix primitives
- **Keyboard navigation**: Full keyboard support via Radix
- **Screen reader support**: Proper labels and descriptions

## Theming

- **Runtime theme switching**: Via `ThemeProvider` component
- **CSS custom properties**: Themes defined as CSS variable overrides
- **No build-time compilation**: Themes work at runtime
- **Multiple themes**: Base, dark, athletics, purple, high-contrast

## Dependencies

### Core Dependencies

- **Radix UI Primitives**: For accessibility and behavior
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-select`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-icons`

- **Utilities**:
  - `clsx`: For conditional class names
  - `class-variance-authority`: For variant management (where used)

### What We Don't Use

- **Tailwind CSS**: Not used - we use CSS Modules instead
- **Radix UI Themes**: Not used - we build custom components
- **Styled Components**: Not used - CSS Modules preferred
- **CSS-in-JS**: Not used - CSS Modules preferred

## File Organization

```
packages/ui/
├── components/
│   ├── primitives/     # Core components (Button, Dialog, etc.)
│   ├── layout/         # Layout components (Box, Flex, Table, etc.)
│   └── utilities/      # Helpers (ThemeProvider, cn, etc.)
├── styles/
│   ├── components/     # Component CSS Modules
│   ├── tokens.css      # Design tokens (CSS custom properties)
│   ├── themes.css      # Theme overrides
│   └── index.css       # Main stylesheet entry point
└── tokens/
    ├── base/           # Base token definitions
    ├── semantic/       # Semantic token mappings
    └── themes/        # Theme configurations
```

## Adding New Components

When adding a new component from shadcn/ui:

1. Copy component code from shadcn registry
2. Replace Tailwind classes with CSS Module classes
3. Map Tailwind utilities to design tokens:
   - `p-4` → `padding: var(--space-md)`
   - `text-sm` → `font-size: var(--font-size-sm)`
   - `bg-primary` → `background: var(--color-bg-primary)`
4. Create CSS Module file in `/styles/components/`
5. Export from appropriate index file
6. Add to showcase page for documentation

## Migration Notes

- Components are gradually migrated from custom implementations to shadcn/ui patterns
- Existing custom features (like Button loading state) are preserved
- API compatibility is maintained where possible
- Breaking changes are documented in component files

