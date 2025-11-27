"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../../../src';

export default function SelectPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', maxWidth: '40rem' }}>
      <h1 style={{ fontSize: 'var(--font-size-xl)', margin: 0 }}>Select</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-lg)' }}>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
            <SelectItem value="three">Three</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger variant="filled">
            <SelectValue placeholder="Filled" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">A</SelectItem>
            <SelectItem value="b">B</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger variant="ghost">
            <SelectValue placeholder="Ghost" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="x">X</SelectItem>
            <SelectItem value="y">Y</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}


