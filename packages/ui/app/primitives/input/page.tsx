"use client";

import { Input } from '../../../src';
import { useState } from 'react';

export default function InputPage() {
  const [email, setEmail] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', maxWidth: '40rem' }}>
      <h1 style={{ fontSize: 'var(--font-size-xl)', margin: 0 }}>Input</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
        <Input label="Email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" placeholder="••••••••" />
        <Input label="Error" placeholder="Invalid" error="This field is required" />
        <Input label="Success" placeholder="Looks good" success="All good" />
        <Input label="Warning" placeholder="Check this" warning="Please double-check" />
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
      </div>
    </div>
  );
}


