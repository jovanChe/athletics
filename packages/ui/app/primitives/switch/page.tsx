"use client";

import React, { useState } from "react";
import { Box, Flex, Section, Label, Switch } from "../../../src";

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Switch</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Accessible toggle switch component for settings and preferences.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Usage
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={2}>
              <Switch
                id="airplane-mode"
                checked={enabled}
                onCheckedChange={setEnabled}
              />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Switch id="notifications" defaultChecked />
              <Label htmlFor="notifications">Enable Notifications</Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Switch id="dark-mode" />
              <Label htmlFor="dark-mode">Dark Mode</Label>
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
              <Switch id="disabled-switch" disabled />
              <Label htmlFor="disabled-switch" data-disabled>
                Disabled switch
              </Label>
            </Flex>
            <Flex align="center" gap={2}>
              <Switch id="checked-disabled" checked disabled />
              <Label htmlFor="checked-disabled" data-disabled>
                Checked and disabled
              </Label>
            </Flex>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Settings Example
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <div>
              <Label style={{ marginBottom: "var(--space-sm)", display: "block" }}>Account Settings</Label>
              <Flex direction="column" gap={2}>
                <Flex align="center" justify="space-between">
                  <Label htmlFor="email-notifications-switch">Email notifications</Label>
                  <Switch id="email-notifications-switch" />
                </Flex>
                <Flex align="center" justify="space-between">
                  <Label htmlFor="sms-notifications-switch">SMS notifications</Label>
                  <Switch id="sms-notifications-switch" defaultChecked />
                </Flex>
                <Flex align="center" justify="space-between">
                  <Label htmlFor="push-notifications-switch">Push notifications</Label>
                  <Switch id="push-notifications-switch" />
                </Flex>
              </Flex>
            </div>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
