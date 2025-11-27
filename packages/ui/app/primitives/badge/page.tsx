"use client";

import React from "react";
import { Box, Flex, Section, Badge } from "../../../src";

export default function BadgePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Badge</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Small status indicator component for labels, tags, and counts.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Variants
        </h2>
        <Box mb={4}>
          <Flex align="center" gap={4} wrap="wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Inline Usage
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <p style={{ margin: 0 }}>
              Badges can be used inline: <Badge variant="default">New</Badge> or{" "}
              <Badge variant="secondary">Updated</Badge>
            </p>
            <p style={{ margin: 0 }}>
              Status: <Badge variant="destructive">Error</Badge> |{" "}
              <Badge variant="default">Success</Badge>
            </p>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          With Text
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <h3 style={{ margin: 0, marginBottom: "var(--space-xs)", display: "inline-flex", alignItems: "center", gap: "var(--space-xs)" }}>
                Notifications <Badge variant="default">5</Badge>
              </h3>
            </div>
            <div>
              <h3 style={{ margin: 0, marginBottom: "var(--space-xs)", display: "inline-flex", alignItems: "center", gap: "var(--space-xs)" }}>
                Messages <Badge variant="secondary">12</Badge>
              </h3>
            </div>
            <div>
              <h3 style={{ margin: 0, marginBottom: "var(--space-xs)", display: "inline-flex", alignItems: "center", gap: "var(--space-xs)" }}>
                Alerts <Badge variant="destructive">3</Badge>
              </h3>
            </div>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
