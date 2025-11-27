"use client";

import { Button } from '../../../src';
import { useState } from 'react';

export default function ButtonPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
      <h1 style={{ fontSize: 'var(--font-size-xl)', margin: 0 }}>Button</h1>

      <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button size="icon">⭐</Button>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button disabled>Disabled</Button>

        <form
          id="button-submit-demo"
          onSubmit={handleSubmit}
          style={{ display: 'inline' }}
        >
          <Button type="submit" loading={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit Form'}
          </Button>
        </form>
      </div>
    </div>
  );
}


