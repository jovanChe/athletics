"use client";

import React from "react";
import { Box, Flex, Section, Label, Textarea } from "../../../src";

export default function TextareaPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Textarea</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Multi-line text input component for longer form inputs.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Usage
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message here..."
                style={{ marginTop: "var(--space-xs)" }}
              />
            </div>
            <div>
              <Label htmlFor="comments">Comments</Label>
              <Textarea
                id="comments"
                placeholder="Add your comments..."
                rows={5}
                style={{ marginTop: "var(--space-xs)" }}
              />
            </div>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          States
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
              <Textarea
                id="disabled-textarea"
                disabled
                placeholder="This textarea is disabled"
                style={{ marginTop: "var(--space-xs)" }}
              />
            </div>
            <div>
              <Label htmlFor="readonly-textarea">Read-only Textarea</Label>
              <Textarea
                id="readonly-textarea"
                readOnly
                value="This textarea is read-only"
                style={{ marginTop: "var(--space-xs)" }}
              />
            </div>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
