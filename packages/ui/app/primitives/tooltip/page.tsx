"use client";

import React from "react";
import { Box, Section, Flex, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button } from "../../../src";

export default function TooltipPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Tooltip</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Help text and hover information component for providing contextual information.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Tooltip
        </h2>
        <Box mb={4}>
          <TooltipProvider>
            <Flex gap={4} wrap="wrap">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="primary">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </Flex>
          </TooltipProvider>
        </Box>
      </Section>
    </div>
  );
}
