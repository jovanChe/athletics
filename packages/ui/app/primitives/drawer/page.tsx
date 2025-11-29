"use client";

import React, { useState } from "react";
import { Box, Section, Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Button, Flex } from "../../../src";

export default function DrawerPage() {
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Drawer</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Bottom sheets component for mobile actions and menus.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Drawer
        </h2>
        <Box mb={4}>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div style={{ width: "100%", maxWidth: "24rem", margin: "0 auto" }}>
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div style={{ padding: "var(--space-md)", paddingBottom: 0 }}>
                  <Flex align="center" justify="center" gap={2}>
                    <Button
                      variant="outline"
                      onClick={() => onClick(-10)}
                      disabled={goal <= 200}
                    >
                      -
                    </Button>
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <div style={{ fontSize: "var(--font-size-4xl)", fontWeight: "var(--font-weight-bold)" }}>
                        {goal}
                      </div>
                      <div style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => onClick(10)}
                      disabled={goal >= 400}
                    >
                      +
                    </Button>
                  </Flex>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </Box>
      </Section>
    </div>
  );
}
