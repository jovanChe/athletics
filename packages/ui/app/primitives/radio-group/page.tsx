"use client";

import React, { useState } from "react";
import { Box, Flex, Section, Label, RadioGroup, RadioGroupItem } from "../../../src";

export default function RadioGroupPage() {
  const [value, setValue] = useState("option1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Radio Group</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Accessible radio button group component for single-choice selections.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Usage
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Select an option</Label>
              <RadioGroup value={value} onValueChange={setValue}>
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">Option 1</Label>
                </Flex>
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">Option 2</Label>
                </Flex>
                <Flex align="center" gap={2}>
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3">Option 3</Label>
                </Flex>
              </RadioGroup>
            </div>
            <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: "var(--font-size-sm)" }}>
              Selected: {value}
            </p>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Default Value
        </h2>
        <Box mb={4}>
          <div>
            <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Priority</Label>
            <RadioGroup defaultValue="normal">
              <Flex align="center" gap={2}>
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low">Low</Label>
              </Flex>
              <Flex align="center" gap={2}>
                <RadioGroupItem value="normal" id="normal" />
                <Label htmlFor="normal">Normal</Label>
              </Flex>
              <Flex align="center" gap={2}>
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high">High</Label>
              </Flex>
            </RadioGroup>
          </div>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Disabled State
        </h2>
        <Box mb={4}>
          <div>
            <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Disabled Radio Group</Label>
            <RadioGroup disabled defaultValue="option1">
              <Flex align="center" gap={2}>
                <RadioGroupItem value="option1" id="disabled-option1" />
                <Label htmlFor="disabled-option1" data-disabled>
                  Disabled Option 1
                </Label>
              </Flex>
              <Flex align="center" gap={2}>
                <RadioGroupItem value="option2" id="disabled-option2" />
                <Label htmlFor="disabled-option2" data-disabled>
                  Disabled Option 2
                </Label>
              </Flex>
            </RadioGroup>
          </div>
        </Box>
      </Section>
    </div>
  );
}
