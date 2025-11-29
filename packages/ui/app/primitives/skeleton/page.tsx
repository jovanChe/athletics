"use client";

import React from "react";
import { Box, Section, Skeleton, Flex } from "../../../src";

export default function SkeletonPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Skeleton</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Loading state component for better UX than spinners.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Skeleton
        </h2>
        <Box mb={4}>
          <Flex align="center" gap={4}>
            <Skeleton style={{ height: "3rem", width: "3rem", borderRadius: "50%" }} />
            <Flex direction="column" gap={2} style={{ flex: 1 }}>
              <Skeleton style={{ height: "1rem", width: "15.625rem" }} />
              <Skeleton style={{ height: "1rem", width: "12.5rem" }} />
            </Flex>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Card Skeleton
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4} style={{ width: "20rem" }}>
            <Skeleton style={{ height: "12.5rem", width: "100%" }} />
            <Flex direction="column" gap={2}>
              <Skeleton style={{ height: "1.25rem", width: "80%" }} />
              <Skeleton style={{ height: "1rem", width: "60%" }} />
            </Flex>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
