"use client";

import React from "react";
import { Box, Flex, Section, Alert, AlertTitle, AlertDescription } from "../../../src";

export default function AlertPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Alert</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Alert component for displaying important messages and notifications.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Default Alert
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                This is a default alert with a title and description.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Alert with title only</AlertTitle>
            </Alert>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Destructive Alert
        </h2>
        <Box mb={4}>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This is a destructive alert for error messages and critical information.
            </AlertDescription>
          </Alert>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Examples
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Alert>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Unable to process payment</AlertTitle>
              <AlertDescription>
                Please verify your billing information and try again.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This feature will be available in the next update.
              </AlertDescription>
            </Alert>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
