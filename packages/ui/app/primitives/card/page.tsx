"use client";

import React from "react";
import { Box, Flex, Section, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "../../../src";

export default function CardPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Card</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Container component for grouping related content with header, content, and footer sections.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Card
        </h2>
        <Box mb={4}>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                This is the card content. You can put any content here.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="md">
                Action
              </Button>
              <Button variant="ghost" size="md">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Card without Footer
        </h2>
        <Box mb={4}>
          <Card>
            <CardHeader>
              <CardTitle>Card without Footer</CardTitle>
              <CardDescription>Some cards don't need a footer</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                This card only has header and content sections.
              </p>
            </CardContent>
          </Card>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Multiple Cards
        </h2>
        <Box mb={4}>
          <Flex direction="column" gap={4}>
            <Card>
              <CardHeader>
                <CardTitle>Card 1</CardTitle>
                <CardDescription>First card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>Content for card 1</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card 2</CardTitle>
                <CardDescription>Second card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>Content for card 2</p>
              </CardContent>
            </Card>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
