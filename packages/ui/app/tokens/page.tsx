"use client";

import React from "react";
import {
  Box,
  Flex,
  Section,
} from "../../src";

export default function TokensPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <div>
        <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0, marginBottom: "var(--space-sm)" }}>
          Design Tokens
        </h1>
        <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
          Design tokens that define the visual foundation of the design system.
        </p>
      </div>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Color Tokens
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex gap={4} wrap="wrap">
            <Box p={3} bg="var(--color-primary-500)" borderRadius="var(--radius-md)" style={{ minWidth: "100px", textAlign: "center" }}>
              <span style={{ color: "var(--color-text-inverse)", fontSize: "var(--font-size-xs)" }}>Primary</span>
            </Box>
            <Box p={3} bg="var(--color-secondary-500)" borderRadius="var(--radius-md)" style={{ minWidth: "100px", textAlign: "center" }}>
              <span style={{ color: "var(--color-text-inverse)", fontSize: "var(--font-size-xs)" }}>Secondary</span>
            </Box>
            <Box p={3} bg="var(--color-success-500)" borderRadius="var(--radius-md)" style={{ minWidth: "100px", textAlign: "center" }}>
              <span style={{ color: "var(--color-text-inverse)", fontSize: "var(--font-size-xs)" }}>Success</span>
            </Box>
            <Box p={3} bg="var(--color-warning-500)" borderRadius="var(--radius-md)" style={{ minWidth: "100px", textAlign: "center" }}>
              <span style={{ color: "var(--color-text-inverse)", fontSize: "var(--font-size-xs)" }}>Warning</span>
            </Box>
            <Box p={3} bg="var(--color-error-500)" borderRadius="var(--radius-md)" style={{ minWidth: "100px", textAlign: "center" }}>
              <span style={{ color: "var(--color-text-inverse)", fontSize: "var(--font-size-xs)" }}>Error</span>
            </Box>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Typography Tokens
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={3}>
            <div>
              <h1 style={{ fontSize: "var(--font-size-2xl)", margin: 0 }}>Heading 1</h1>
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", margin: 0 }}>var(--font-size-2xl)</p>
            </div>
            <div>
              <h2 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Heading 2</h2>
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", margin: 0 }}>var(--font-size-xl)</p>
            </div>
            <div>
              <h3 style={{ fontSize: "var(--font-size-lg)", margin: 0 }}>Heading 3</h3>
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", margin: 0 }}>var(--font-size-lg)</p>
            </div>
            <div>
              <p style={{ fontSize: "var(--font-size-base)", margin: 0 }}>Body text</p>
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", margin: 0 }}>var(--font-size-base)</p>
            </div>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Spacing Tokens
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={2}>
            <Flex align="center" gap={3}>
              <Box width="var(--space-xs)" height="var(--space-xs)" bg="var(--color-primary-500)" borderRadius="var(--radius-sm)" />
              <span style={{ fontSize: "var(--font-size-sm)" }}>xs: var(--space-xs)</span>
            </Flex>
            <Flex align="center" gap={3}>
              <Box width="var(--space-sm)" height="var(--space-sm)" bg="var(--color-primary-500)" borderRadius="var(--radius-sm)" />
              <span style={{ fontSize: "var(--font-size-sm)" }}>sm: var(--space-sm)</span>
            </Flex>
            <Flex align="center" gap={3}>
              <Box width="var(--space-md)" height="var(--space-md)" bg="var(--color-primary-500)" borderRadius="var(--radius-sm)" />
              <span style={{ fontSize: "var(--font-size-sm)" }}>md: var(--space-md)</span>
            </Flex>
            <Flex align="center" gap={3}>
              <Box width="var(--space-lg)" height="var(--space-lg)" bg="var(--color-primary-500)" borderRadius="var(--radius-sm)" />
              <span style={{ fontSize: "var(--font-size-sm)" }}>lg: var(--space-lg)</span>
            </Flex>
            <Flex align="center" gap={3}>
              <Box width="var(--space-xl)" height="var(--space-xl)" bg="var(--color-primary-500)" borderRadius="var(--radius-sm)" />
              <span style={{ fontSize: "var(--font-size-sm)" }}>xl: var(--space-xl)</span>
            </Flex>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
