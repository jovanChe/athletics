"use client";

import React, { useState } from "react";
import { Box, Flex, Section, Label, Slider } from "../../../src";

export default function SliderPage() {
  const [value, setValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([20, 80]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Slider</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Accessible range slider component for numeric inputs and filters.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Usage
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>
                Volume: {value[0]}%
              </Label>
              <Slider
                value={value}
                onValueChange={setValue}
                max={100}
                step={1}
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </div>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>
                Default Value
              </Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </div>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Range Slider
        </h2>
        <Box mb={4}>
          <div>
            <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>
              Price Range: ${rangeValue[0]} - ${rangeValue[1]}
            </Label>
            <Slider
              value={rangeValue}
              onValueChange={setRangeValue}
              max={100}
              min={0}
              step={5}
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          With Steps
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>
                Step: 10
              </Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={10}
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </div>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>
                Step: 25
              </Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={25}
                style={{ width: "100%", maxWidth: "400px" }}
              />
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
            <Label style={{ marginBottom: "var(--space-sm)", display: "block" }} data-disabled>
              Disabled Slider
            </Label>
            <Slider
              defaultValue={[50]}
              max={100}
              disabled
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div>
        </Box>
      </Section>
    </div>
  );
}
