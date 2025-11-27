import DemoLayout from '../../components/DemoLayout';

export default function TokensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    { href: '/tokens', label: 'Overview' },
  ];

  return (
    <DemoLayout
      title="Tokens"
      description="Design tokens that define the visual foundation of the design system."
      sidebarItems={sidebarItems}
    >
      {children}
    </DemoLayout>
  );
}
