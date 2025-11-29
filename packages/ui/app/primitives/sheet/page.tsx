"use client";

import React from "react";
import { Box, Section, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose, Button, Input, Label, Flex } from "../../../src";

export default function SheetPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Sheet</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Mobile-friendly side panels component for navigation, filters, and additional content.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Sheet
        </h2>
        <Box mb={4}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <Flex direction="column" gap={4} style={{ padding: "var(--space-md)" }}>
                <Flex direction="column" gap={2}>
                  <Label htmlFor="sheet-name">Name</Label>
                  <Input id="sheet-name" defaultValue="Pedro Duarte" />
                </Flex>
                <Flex direction="column" gap={2}>
                  <Label htmlFor="sheet-username">Username</Label>
                  <Input id="sheet-username" defaultValue="@peduarte" />
                </Flex>
              </Flex>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Box>
      </Section>
    </div>
  );
}
