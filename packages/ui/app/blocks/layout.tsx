import DemoLayout from '../../components/DemoLayout';

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { href: '/blocks', label: 'Overview' },
    // Authentication
    { href: '/blocks/login-01', label: 'Login 01' },
    { href: '/blocks/login-02', label: 'Login 02' },
    { href: '/blocks/signup-01', label: 'Signup 01' },
    // Dashboard
    { href: '/blocks/dashboard-01', label: 'Dashboard 01' },
    // Settings
    { href: '/blocks/settings-01', label: 'Settings 01' },
  ];

  return (
    <DemoLayout
      title="Blocks"
      description="Pre-built UI blocks combining multiple components for common patterns."
      sidebarItems={sidebarItems}
    >
      {children}
    </DemoLayout>
  );
}

