"use client";

import React from "react";
import { Box, Flex, Section, Label, Input } from "../../../src";

export default function LabelPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Label</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Accessible label component for form inputs, built with Radix UI.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Usage
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" style={{ marginTop: "var(--space-xs)" }} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" style={{ marginTop: "var(--space-xs)" }} />
            </div>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Disabled State
        </h2>
        <Box mb={4}>
          <div>
            <Label htmlFor="disabled" data-disabled>
              Disabled Label
            </Label>
            <Input id="disabled" disabled placeholder="Disabled input" style={{ marginTop: "var(--space-xs)" }} />
          </div>
        </Box>
      </Section>
    </div>
  );
}
