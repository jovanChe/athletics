import DemoLayout from '../../components/DemoLayout';

export default function PrimitivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { href: '/primitives', label: 'Overview' },
    { href: '/primitives/accordion', label: 'Accordion' },
    { href: '/primitives/alert', label: 'Alert' },
    { href: '/primitives/alert-dialog', label: 'Alert Dialog' },
    { href: '/primitives/avatar', label: 'Avatar' },
    { href: '/primitives/badge', label: 'Badge' },
    { href: '/primitives/breadcrumb', label: 'Breadcrumb' },
    { href: '/primitives/button', label: 'Button' },
    { href: '/primitives/calendar', label: 'Calendar' },
    { href: '/primitives/card', label: 'Card' },
    { href: '/primitives/chart', label: 'Chart' },
    { href: '/primitives/checkbox', label: 'Checkbox' },
    { href: '/primitives/collapsible', label: 'Collapsible' },
    { href: '/primitives/command', label: 'Command' },
    { href: '/primitives/context-menu', label: 'Context Menu' },
    { href: '/primitives/data-table', label: 'Data Table' },
    { href: '/primitives/dialog', label: 'Dialog' },
    { href: '/primitives/drawer', label: 'Drawer' },
    { href: '/primitives/empty-state', label: 'Empty State' },
    { href: '/primitives/dropdown-menu', label: 'Dropdown Menu' },
    { href: '/primitives/form', label: 'Form' },
    { href: '/primitives/hover-card', label: 'Hover Card' },
    { href: '/primitives/input', label: 'Input' },
    { href: '/primitives/input-otp', label: 'Input OTP' },
    { href: '/primitives/label', label: 'Label' },
    { href: '/primitives/layout', label: 'Layout' },
    { href: '/primitives/menu-item', label: 'MenuItem' },
    { href: '/primitives/pagination', label: 'Pagination' },
    { href: '/primitives/popover', label: 'Popover' },
    { href: '/primitives/progress', label: 'Progress' },
    { href: '/primitives/radio-group', label: 'Radio Group' },
    { href: '/primitives/resizable', label: 'Resizable' },
    { href: '/primitives/scroll-area', label: 'Scroll Area' },
    { href: '/primitives/select', label: 'Select' },
    { href: '/primitives/separator', label: 'Separator' },
    { href: '/primitives/sheet', label: 'Sheet' },
    { href: '/primitives/sidebar', label: 'Sidebar' },
    { href: '/primitives/skeleton', label: 'Skeleton' },
    { href: '/primitives/slider', label: 'Slider' },
    { href: '/primitives/stat-card', label: 'Stat Card' },
    { href: '/primitives/switch', label: 'Switch' },
    { href: '/primitives/table', label: 'Table' },
    { href: '/primitives/tabs', label: 'Tabs' },
    { href: '/primitives/textarea', label: 'Textarea' },
    { href: '/primitives/toast', label: 'Toast' },
    { href: '/primitives/toggle', label: 'Toggle' },
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
