# DemoLayout Component

A reusable layout component for all demo pages in the design system. Provides consistent sidebar navigation and content structure.

## Usage

```tsx
import DemoLayout from '../../components/DemoLayout';

export default function MySectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { href: '/my-section', label: 'Overview' },
    { href: '/my-section/page1', label: 'Page 1' },
    { href: '/my-section/page2', label: 'Page 2' },
  ];

  return (
    <DemoLayout
      title="My Section"
      description="Description of what this section contains."
      sidebarItems={sidebarItems}
    >
      {children}
    </DemoLayout>
  );
}
```

## Props

- `children`: React.ReactNode - The page content
- `title`: string - The section title (displayed in sidebar)
- `description?`: string - Optional description text
- `sidebarItems?`: Array<{href: string, label: string}> - Navigation items

## Features

- **Consistent Layout**: Same sidebar and content structure across all sections
- **Responsive Design**: Sidebar collapses on smaller screens
- **Accessible Navigation**: Proper semantic HTML structure
- **Themeable**: Uses CSS custom properties for consistent styling
- **Flexible**: Easy to add new sections and pages

## Examples

- **Primitives**: `/app/primitives/layout.tsx`
- **Icons**: `/app/icons/layout.tsx`
- **Tokens**: `/app/tokens/layout.tsx`
