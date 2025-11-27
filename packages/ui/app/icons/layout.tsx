import DemoLayout from '../../components/DemoLayout';

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { href: '/icons', label: 'Overview' },
  ];

  return (
    <DemoLayout
      title="Icons"
      description="Comprehensive icon library based on Radix UI Icons with consistent sizing and styling."
      sidebarItems={sidebarItems}
    >
      {children}
    </DemoLayout>
  );
}
