"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  Section,
  Button,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "../../../src";

export default function AlertDialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Alert Dialog</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Modal dialog component for confirmations and critical actions.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Usage
        </h2>
        <Box mb={4}>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Controlled Dialog
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Button variant="destructive" onClick={() => setOpen(true)}>
              Delete Account
            </Button>
            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Account</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete your account? This action cannot be undone
                    and all your data will be permanently removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => setOpen(false)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Flex>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Examples
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Confirm Action</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will perform an important action. Are you sure you want to continue?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
