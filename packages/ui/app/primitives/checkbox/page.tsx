"use client";

import React, { useState } from "react";
import { Box, Flex, Section, Label, Checkbox } from "../../../src";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Checkbox</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Accessible checkbox input component built with Radix UI.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Usage
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={2}>
              <Checkbox
                id="terms"
                checked={checked}
                onCheckedChange={(checked) => setChecked(checked === true)}
              />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Checkbox id="updates" />
              <Label htmlFor="updates">Receive product updates</Label>
            </Flex>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          States
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={2}>
              <Checkbox id="disabled-checkbox" disabled />
              <Label htmlFor="disabled-checkbox" data-disabled>
                Disabled checkbox
              </Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Checkbox id="checked-disabled" checked disabled />
              <Label htmlFor="checked-disabled" data-disabled>
                Checked and disabled
              </Label>
            </Flex>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Form Example
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Preferences</Label>
              <Flex direction="column" gap={2}>
                <Flex align="center" gap={2}>
                  <Checkbox id="email-notifications" />
                  <Label htmlFor="email-notifications">Email notifications</Label>
                </Flex>
                <Flex align="center" gap={2}>
                  <Checkbox id="sms-notifications" />
                  <Label htmlFor="sms-notifications">SMS notifications</Label>
                </Flex>
                <Flex align="center" gap={2}>
                  <Checkbox id="push-notifications" defaultChecked />
                  <Label htmlFor="push-notifications">Push notifications</Label>
                </Flex>
              </Flex>
            </div>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
