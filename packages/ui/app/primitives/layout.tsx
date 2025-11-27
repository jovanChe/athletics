import DemoLayout from '../../components/DemoLayout';

export default function PrimitivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tier1Components = [
    { href: '/primitives/label', label: 'Label' },
    { href: '/primitives/card', label: 'Card' },
    { href: '/primitives/separator', label: 'Separator' },
    { href: '/primitives/badge', label: 'Badge' },
    { href: '/primitives/textarea', label: 'Textarea' },
    { href: '/primitives/checkbox', label: 'Checkbox' },
    { href: '/primitives/radio-group', label: 'Radio Group' },
  ];

  const sidebarItems = [
    { href: '/primitives', label: 'Overview' },
    { href: '/primitives/button', label: 'Button' },
    { href: '/primitives/dialog', label: 'Dialog' },
    { href: '/primitives/input', label: 'Input' },
    { href: '/primitives/select', label: 'Select' },
    { href: '/primitives/layout', label: 'Layout' },
    { href: '/primitives/table', label: 'Table' },
    { href: '/primitives/tier1', label: 'Tier 1 Components' },
    ...tier1Components,
    { href: '/primitives/menu-item', label: 'MenuItem' },
    { href: '/primitives/avatar', label: 'Avatar' },
    { href: '/primitives/dropdown-menu', label: 'Dropdown Menu' },
  ];

  return (
    <DemoLayout
      title="Primitives"
      description="Core UI components built with Radix UI primitives and styled with CSS custom properties."
      sidebarItems={sidebarItems}
    >
      {children}
    </DemoLayout>
  );
}
