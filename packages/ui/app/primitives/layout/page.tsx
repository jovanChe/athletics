"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Container,
  Section,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  Button,
  MenuItem,
  Table,
  Icons,
} from "../../../src";

export default function LayoutPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Layout Components</h1>

      {/* Box Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Box Component
        </h2>
        <Flex gap={4} wrap="wrap">
          <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
            <p style={{ margin: 0 }}>Box with padding</p>
          </Box>
          <Box m={4} p={2} border="1px solid var(--color-border-primary)" borderRadius="var(--radius-md)">
            <p style={{ margin: 0 }}>Box with margin and border</p>
          </Box>
          <Box width="200px" height="100px" bg="var(--color-primary-100)" borderRadius="var(--radius-md)" display="flex" align="center" justify="center">
            <span>Fixed size box</span>
          </Box>
        </Flex>
      </Section>

      {/* Flex Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Flex Component
        </h2>
        <Flex direction="column" gap={4}>
          <Flex gap={2} justify="space-between">
            <Button variant="primary">Left</Button>
            <Button variant="secondary">Center</Button>
            <Button variant="outline">Right</Button>
          </Flex>
          <Flex direction="column" gap={2}>
            <Box p={2} bg="var(--color-bg-secondary)" borderRadius="var(--radius-sm)">
              Column item 1
            </Box>
            <Box p={2} bg="var(--color-bg-secondary)" borderRadius="var(--radius-sm)">
              Column item 2
            </Box>
          </Flex>
        </Flex>
      </Section>

      {/* Grid Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Grid Component
        </h2>
        <Grid columns={3} gap={4}>
          <Box p={4} bg="var(--color-primary-50)" borderRadius="var(--radius-md)" textAlign="center">
            Grid Item 1
          </Box>
          <Box p={4} bg="var(--color-primary-100)" borderRadius="var(--radius-md)" textAlign="center">
            Grid Item 2
          </Box>
          <Box p={4} bg="var(--color-primary-200)" borderRadius="var(--radius-md)" textAlign="center">
            Grid Item 3
          </Box>
        </Grid>
      </Section>

      {/* Container Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Container Component
        </h2>
        <Container size="md" p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <p style={{ margin: 0 }}>
            This content is constrained to a medium container width and centered.
          </p>
        </Container>
      </Section>

      {/* MenuItem Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          MenuItem Component
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={2} style={{ maxWidth: "200px" }}>
            <MenuItem icon={<Icons.Dashboard />} active>Dashboard</MenuItem>
            <MenuItem icon={<Icons.Users />}>Users</MenuItem>
            <MenuItem icon={<Icons.Settings />} badge="3">Settings</MenuItem>
            <MenuItem icon={<Icons.Analytics />}>Analytics</MenuItem>
            <MenuItem icon={<Icons.Message />} badge="12">Messages</MenuItem>
            <MenuItem icon={<Icons.Reports />} size="small">Reports</MenuItem>
            <MenuItem icon={<Icons.Lock />} disabled>Locked Feature</MenuItem>
          </Flex>
        </Box>
      </Section>

      {/* Sidebar Example */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Sidebar Component
        </h2>
        <Box height="300px" border="1px solid var(--color-border-primary)" borderRadius="var(--radius-md)" overflow="hidden">
          <Flex height="100%">
            <Sidebar
              side="left"
              width="200px"
              collapsible
              collapsed={sidebarCollapsed}
              onCollapseChange={setSidebarCollapsed}
            >
              <Box p={4}>
                <Flex direction="column" gap={2}>
                  <SidebarTrigger>
                    {sidebarCollapsed ? "→" : "←"}
                  </SidebarTrigger>
                  <MenuItem
                    collapsed={sidebarCollapsed}
                    icon={<Icons.Dashboard />}
                    active
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    collapsed={sidebarCollapsed}
                    icon={<Icons.Users />}
                  >
                    Users
                  </MenuItem>
                  <MenuItem
                    collapsed={sidebarCollapsed}
                    icon={<Icons.Settings />}
                    badge="3"
                  >
                    Settings
                  </MenuItem>
                  <MenuItem
                    collapsed={sidebarCollapsed}
                    icon={<Icons.Analytics />}
                  >
                    Analytics
                  </MenuItem>
                </Flex>
              </Box>
            </Sidebar>
            <SidebarContent>
              <Box p={4}>
                <h3 style={{ margin: 0, marginBottom: "var(--space-md)" }}>Main Content</h3>
                <p style={{ margin: 0 }}>
                  This is the main content area. The sidebar can be collapsed and expanded.
                </p>
              </Box>
            </SidebarContent>
          </Flex>
        </Box>
      </Section>

      {/* Table Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Table Component
        </h2>

        {/* Basic Table */}
        <Box mb={4}>
          <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
            Basic Table
          </h3>
          <Table.Root variant="ghost" size="2" layout="auto">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>

        {/* Table with Surface Variant */}
        <Box mb={4}>
          <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
            Table with Surface Variant
          </h3>
          <Table.Root variant="surface" layout="auto">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Stock</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Widget A</Table.RowHeaderCell>
                <Table.Cell>$29.99</Table.Cell>
                <Table.Cell>150</Table.Cell>
                <Table.Cell>In Stock</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Widget B</Table.RowHeaderCell>
                <Table.Cell>$49.99</Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>Low Stock</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Widget C</Table.RowHeaderCell>
                <Table.Cell>$19.99</Table.Cell>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>Out of Stock</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>

        {/* Table Size Variants */}
        <Flex direction="column" gap={4}>
          <Box>
            <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
              Size Variants
            </h3>
            <Flex direction="column" gap={3}>
              <Box>
                <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
                  Size 1 (Small)
                </p>
                <Table.Root variant="ghost" size="1">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.RowHeaderCell>John Doe</Table.RowHeaderCell>
                      <Table.Cell>john@example.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.RowHeaderCell>Jane Smith</Table.RowHeaderCell>
                      <Table.Cell>jane@example.com</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
              <Box>
                <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
                  Size 2 (Default)
                </p>
                <Table.Root variant="ghost" size="2">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.RowHeaderCell>John Doe</Table.RowHeaderCell>
                      <Table.Cell>john@example.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.RowHeaderCell>Jane Smith</Table.RowHeaderCell>
                      <Table.Cell>jane@example.com</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
              <Box>
                <p style={{ fontSize: "var(--font-size-xs)", margin: 0, marginBottom: "var(--space-xs)", color: "var(--color-text-secondary)" }}>
                  Size 3 (Large)
                </p>
                <Table.Root variant="ghost" size="3">
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.RowHeaderCell>John Doe</Table.RowHeaderCell>
                      <Table.Cell>john@example.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.RowHeaderCell>Jane Smith</Table.RowHeaderCell>
                      <Table.Cell>jane@example.com</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Section>
    </div>
  );
}
