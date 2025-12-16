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

  const tier2Components = [
    { href: '/primitives/form', label: 'Form' },
    { href: '/primitives/switch', label: 'Switch' },
    { href: '/primitives/slider', label: 'Slider' },
    { href: '/primitives/alert', label: 'Alert' },
    { href: '/primitives/alert-dialog', label: 'Alert Dialog' },
  ];

  const tier3Components = [
    { href: '/primitives/tabs', label: 'Tabs' },
    { href: '/primitives/breadcrumb', label: 'Breadcrumb' },
    { href: '/primitives/pagination', label: 'Pagination' },
    { href: '/primitives/tooltip', label: 'Tooltip' },
    { href: '/primitives/popover', label: 'Popover' },
  ];

  const tier4Components = [
    { href: '/primitives/sheet', label: 'Sheet' },
    { href: '/primitives/drawer', label: 'Drawer' },
    { href: '/primitives/skeleton', label: 'Skeleton' },
    { href: '/primitives/progress', label: 'Progress' },
    { href: '/primitives/toast', label: 'Toast' },
  ];

  const sidebarItems = [
    { href: '/primitives', label: 'Overview' },
    { href: '/primitives/button', label: 'Button' },
    { href: '/primitives/dialog', label: 'Dialog' },
    { href: '/primitives/input', label: 'Input' },
    { href: '/primitives/select', label: 'Select' },
    { href: '/primitives/layout', label: 'Layout' },
    { href: '/primitives/table', label: 'Table' },
    { href: '/primitives/sidebar', label: 'Sidebar' },
    ...tier1Components,
    ...tier2Components,
    ...tier3Components,
    ...tier4Components,
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
