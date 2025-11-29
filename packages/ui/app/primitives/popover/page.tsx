"use client";

import React from "react";
import { Box, Section, Popover, PopoverTrigger, PopoverContent, Button, Input, Label, Flex } from "../../../src";

export default function PopoverPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Popover</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Contextual information component for displaying content in a floating panel.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Popover
        </h2>
        <Box mb={4}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent style={{ width: "20rem" }}>
              <Flex direction="column" gap={4}>
                <Flex direction="column" gap={2}>
                  <h4 style={{ fontSize: "var(--font-size-base)", fontWeight: "var(--font-weight-medium)", margin: 0 }}>
                    Dimensions
                  </h4>
                  <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", margin: 0 }}>
                    Set the dimensions for the layer.
                  </p>
                </Flex>
                <Flex direction="column" gap={2}>
                  <Flex align="center" gap={4}>
                    <Label htmlFor="width" style={{ minWidth: "80px" }}>Width</Label>
                    <Input id="width" defaultValue="100%" />
                  </Flex>
                  <Flex align="center" gap={4}>
                    <Label htmlFor="maxWidth" style={{ minWidth: "80px" }}>Max. width</Label>
                    <Input id="maxWidth" defaultValue="300px" />
                  </Flex>
                  <Flex align="center" gap={4}>
                    <Label htmlFor="height" style={{ minWidth: "80px" }}>Height</Label>
                    <Input id="height" defaultValue="25px" />
                  </Flex>
                </Flex>
              </Flex>
            </PopoverContent>
          </Popover>
        </Box>
      </Section>
    </div>
  );
}
