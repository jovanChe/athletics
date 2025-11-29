"use client";

import React from "react";
import { Box, Flex, Section, Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Label } from "../../../src";

export default function TabsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Tabs</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Content organization component for grouping related content into tabbed interfaces.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Tabs
        </h2>
        <Box mb={4}>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're done.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Flex direction="column" gap={4}>
                    <Flex direction="column" gap={2}>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </Flex>
                    <Flex direction="column" gap={2}>
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </Flex>
                  </Flex>
                </CardContent>
                <CardFooter>
                  <Button variant="primary">Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Flex direction="column" gap={4}>
                    <Flex direction="column" gap={2}>
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </Flex>
                    <Flex direction="column" gap={2}>
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </Flex>
                  </Flex>
                </CardContent>
                <CardFooter>
                  <Button variant="primary">Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>
                    Manage your application settings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                    Settings content goes here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Box>
      </Section>
    </div>
  );
}
