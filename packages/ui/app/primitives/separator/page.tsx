"use client";

import React from "react";
import { Box, Flex, Section, Separator } from "../../../src";

export default function SeparatorPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Separator</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Visual divider component for separating content sections.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Horizontal Separator
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <p style={{ margin: 0 }}>Content above</p>
              <Separator style={{ margin: "var(--space-md) 0" }} />
              <p style={{ margin: 0 }}>Content below</p>
            </div>
            <div>
              <p style={{ margin: 0 }}>Section 1</p>
              <Separator style={{ margin: "var(--space-md) 0" }} />
              <p style={{ margin: 0 }}>Section 2</p>
              <Separator style={{ margin: "var(--space-md) 0" }} />
              <p style={{ margin: 0 }}>Section 3</p>
            </div>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Vertical Separator
        </h2>
        <Box mb={4}>
          <Flex align="center" gap={4}>
            <span>Left</span>
            <Separator orientation="vertical" style={{ height: "1rem" }} />
            <span>Middle</span>
            <Separator orientation="vertical" style={{ height: "1rem" }} />
            <span>Right</span>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          In Card Layout
        </h2>
        <Box mb={4}>
          <div style={{ border: "1px solid var(--color-border-primary)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)" }}>
            <h3 style={{ margin: 0, marginBottom: "var(--space-sm)" }}>Card Title</h3>
            <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>Card description</p>
            <Separator style={{ margin: "var(--space-md) 0" }} />
            <p style={{ margin: 0 }}>Card content goes here</p>
          </div>
        </Box>
      </Section>
    </div>
  );
}
