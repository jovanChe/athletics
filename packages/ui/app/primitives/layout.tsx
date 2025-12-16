import DemoLayout from '../../components/DemoLayout';

export default function PrimitivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { href: '/primitives', label: 'Overview' },
    { href: '/primitives/alert', label: 'Alert' },
    { href: '/primitives/alert-dialog', label: 'Alert Dialog' },
    { href: '/primitives/avatar', label: 'Avatar' },
    { href: '/primitives/badge', label: 'Badge' },
    { href: '/primitives/breadcrumb', label: 'Breadcrumb' },
    { href: '/primitives/button', label: 'Button' },
    { href: '/primitives/card', label: 'Card' },
    { href: '/primitives/checkbox', label: 'Checkbox' },
    { href: '/primitives/dialog', label: 'Dialog' },
    { href: '/primitives/drawer', label: 'Drawer' },
    { href: '/primitives/dropdown-menu', label: 'Dropdown Menu' },
    { href: '/primitives/form', label: 'Form' },
    { href: '/primitives/input', label: 'Input' },
    { href: '/primitives/label', label: 'Label' },
    { href: '/primitives/layout', label: 'Layout' },
    { href: '/primitives/menu-item', label: 'MenuItem' },
    { href: '/primitives/pagination', label: 'Pagination' },
    { href: '/primitives/popover', label: 'Popover' },
    { href: '/primitives/progress', label: 'Progress' },
    { href: '/primitives/radio-group', label: 'Radio Group' },
    { href: '/primitives/select', label: 'Select' },
    { href: '/primitives/separator', label: 'Separator' },
    { href: '/primitives/sheet', label: 'Sheet' },
    { href: '/primitives/sidebar', label: 'Sidebar' },
    { href: '/primitives/skeleton', label: 'Skeleton' },
    { href: '/primitives/slider', label: 'Slider' },
    { href: '/primitives/switch', label: 'Switch' },
    { href: '/primitives/table', label: 'Table' },
    { href: '/primitives/tabs', label: 'Tabs' },
    { href: '/primitives/textarea', label: 'Textarea' },
    { href: '/primitives/toast', label: 'Toast' },
    { href: '/primitives/tooltip', label: 'Tooltip' },
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
