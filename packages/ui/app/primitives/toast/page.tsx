"use client";

import React from "react";
import { toast } from "sonner";
import { Box, Section, Button, Flex } from "../../../src";

export default function ToastPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Toast</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Non-blocking notifications component for success messages, errors, and alerts.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Toast
        </h2>
        <Box mb={4}>
          <Flex gap={2} wrap="wrap">
            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                })
              }
            >
              Show Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.success("Success!", {
                  description: "Your changes have been saved.",
                })
              }
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("Error!", {
                  description: "Something went wrong.",
                })
              }
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Toast with Action
            </Button>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
