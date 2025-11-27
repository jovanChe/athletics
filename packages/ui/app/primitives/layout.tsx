import DemoLayout from '../../components/DemoLayout';

export default function PrimitivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { href: '/primitives', label: 'Overview' },
    { href: '/primitives/button', label: 'Button' },
    { href: '/primitives/dialog', label: 'Dialog' },
    { href: '/primitives/input', label: 'Input' },
    { href: '/primitives/select', label: 'Select' },
    { href: '/primitives/layout', label: 'Layout' },
    { href: '/primitives/menu-item', label: 'MenuItem' },
    { href: '/primitives/avatar', label: 'Avatar' },
    { href: '/primitives/dropdown-menu', label: 'Dropdown Menu' },
    { href: '/primitives/table', label: 'Table' },

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