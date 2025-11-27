import { Avatar } from "../../../components/primitives/avatar";

export default function AvatarPage() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-lg)' }}>
        Avatar
      </h1>
      <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2xl)' }}>
        An image element with a fallback for representing the user.
      </p>

      {/* Basic Usage */}
      <section style={{ marginBottom: 'var(--space-3xl)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
          Basic Usage
        </h2>
        <div style={{
          padding: 'var(--space-lg)',
          background: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-primary)'
        }}>
          <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
            <Avatar.Root>
              <Avatar.Image
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
              />
              <Avatar.Fallback delayMs={600}>
                CT
              </Avatar.Fallback>
            </Avatar.Root>

            <Avatar.Root>
              <Avatar.Image
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Pedro Duarte"
              />
              <Avatar.Fallback delayMs={600}>
                PD
              </Avatar.Fallback>
            </Avatar.Root>

            <Avatar.Root>
              <Avatar.Fallback>
                JD
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
        </div>
      </section>

      {/* Different Sizes */}
      <section style={{ marginBottom: 'var(--space-3xl)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
          Different Sizes
        </h2>
        <div style={{
          padding: 'var(--space-lg)',
          background: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-primary)'
        }}>
          <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
            <Avatar.Root style={{ width: '2rem', height: '2rem' }}>
              <Avatar.Fallback style={{ fontSize: 'var(--font-size-xs)' }}>
                SM
              </Avatar.Fallback>
            </Avatar.Root>

            <Avatar.Root style={{ width: '2.5rem', height: '2.5rem' }}>
              <Avatar.Fallback>
                MD
              </Avatar.Fallback>
            </Avatar.Root>

            <Avatar.Root style={{ width: '3rem', height: '3rem' }}>
              <Avatar.Fallback style={{ fontSize: 'var(--font-size-base)' }}>
                LG
              </Avatar.Fallback>
            </Avatar.Root>

            <Avatar.Root style={{ width: '4rem', height: '4rem' }}>
              <Avatar.Fallback style={{ fontSize: 'var(--font-size-lg)' }}>
                XL
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section style={{ marginBottom: 'var(--space-3xl)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
          Code Example
        </h2>
        <pre style={{
          padding: 'var(--space-md)',
          background: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-primary)',
          overflow: 'auto',
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-family-mono)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
{`import { Avatar } from "@repo/ui";

export default function MyComponent() {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="/user-image.jpg"
        alt="User Name"
      />
      <Avatar.Fallback delayMs={600}>
        UN
      </Avatar.Fallback>
    </Avatar.Root>
  );
}`}
        </pre>
      </section>
    </div>
  );
}
