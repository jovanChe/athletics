"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  Section,
  MenuItem,
  Button,
  Icons,
} from "../../../src";

export default function MenuItemPage() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Icons.Dashboard /> },
    { id: "users", label: "Users", icon: <Icons.Users /> },
    { id: "settings", label: "Settings", icon: <Icons.Settings />, badge: "3" },
    { id: "analytics", label: "Analytics", icon: <Icons.Analytics /> },
    { id: "messages", label: "Messages", icon: <Icons.Message />, badge: "12" },
    { id: "reports", label: "Reports", icon: <Icons.Reports /> },
    { id: "help", label: "Help & Support", icon: <Icons.Info /> },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <div>
        <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0, marginBottom: "var(--space-sm)" }}>
          MenuItem Component
        </h1>
        <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
          Navigation menu items optimized for sidebars with icon, label, and badge support.
        </p>
      </div>

      {/* Basic Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic MenuItem
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={2} style={{ maxWidth: "240px" }}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                icon={item.icon}
                badge={item.badge}
                active={activeItem === item.id}
                onClick={() => setActiveItem(item.id)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Flex>
        </Box>
      </Section>

      {/* Size Variants */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Size Variants
        </h2>
        <Flex gap={4} wrap="wrap">
          <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
            <h3 style={{ fontSize: "var(--font-size-sm)", margin: 0, marginBottom: "var(--space-sm)" }}>Small</h3>
            <Flex direction="column" gap={1} style={{ maxWidth: "200px" }}>
              <MenuItem size="small" icon={<Icons.Dashboard />} active>Dashboard</MenuItem>
              <MenuItem size="small" icon={<Icons.Users />}>Users</MenuItem>
              <MenuItem size="small" icon={<Icons.Settings />} badge="3">Settings</MenuItem>
            </Flex>
          </Box>

          <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
            <h3 style={{ fontSize: "var(--font-size-sm)", margin: 0, marginBottom: "var(--space-sm)" }}>Default</h3>
            <Flex direction="column" gap={2} style={{ maxWidth: "200px" }}>
              <MenuItem icon={<Icons.Dashboard />} active>Dashboard</MenuItem>
              <MenuItem icon={<Icons.Users />}>Users</MenuItem>
              <MenuItem icon={<Icons.Settings />} badge="3">Settings</MenuItem>
            </Flex>
          </Box>

          <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
            <h3 style={{ fontSize: "var(--font-size-sm)", margin: 0, marginBottom: "var(--space-sm)" }}>Large</h3>
            <Flex direction="column" gap={2} style={{ maxWidth: "220px" }}>
              <MenuItem size="large" icon={<Icons.Dashboard />} active>Dashboard</MenuItem>
              <MenuItem size="large" icon={<Icons.Users />}>Users</MenuItem>
              <MenuItem size="large" icon={<Icons.Settings />} badge="3">Settings</MenuItem>
            </Flex>
          </Box>
        </Flex>
      </Section>

      {/* Collapsed State */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Collapsed State
        </h2>
        <p style={{ color: "var(--color-text-secondary)", margin: 0, marginBottom: "var(--space-md)" }}>
          When the sidebar is collapsed, only icons are shown.
        </p>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={2} style={{ maxWidth: "60px" }}>
            <MenuItem collapsed icon={<Icons.Dashboard />} active>Dashboard</MenuItem>
            <MenuItem collapsed icon={<Icons.Users />}>Users</MenuItem>
            <MenuItem collapsed icon={<Icons.Settings />} badge="3">Settings</MenuItem>
            <MenuItem collapsed icon={<Icons.Analytics />}>Analytics</MenuItem>
            <MenuItem collapsed icon={<Icons.Message />} badge="12">Messages</MenuItem>
          </Flex>
        </Box>
      </Section>

      {/* Interactive Example */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Interactive Sidebar Example
        </h2>
        <InteractiveSidebarExample />
      </Section>

      {/* States */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          States
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={2} style={{ maxWidth: "240px" }}>
            <MenuItem icon={<Icons.Check />} active>Active State</MenuItem>
            <MenuItem icon={<Icons.Search />}>Hover State (hover to see)</MenuItem>
            <MenuItem icon={<Icons.Lock />} disabled>Disabled State</MenuItem>
            <MenuItem icon={<Icons.Bell />} badge="99+">With Badge</MenuItem>
            <MenuItem icon={<Icons.Info />}>Normal State</MenuItem>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}

function InteractiveSidebarExample() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Icons.Dashboard /> },
    { id: "projects", label: "Projects", icon: <Icons.Reports />, badge: "5" },
    { id: "tasks", label: "Tasks", icon: <Icons.Check />, badge: "12" },
    { id: "team", label: "Team", icon: <Icons.Users /> },
    { id: "settings", label: "Settings", icon: <Icons.Settings /> },
  ];

  return (
    <Box
      border="1px solid var(--color-border-primary)"
      borderRadius="var(--radius-md)"
      overflow="hidden"
      style={{ height: "300px" }}
    >
      <Flex height="100%">
        <Box
          style={{
            width: collapsed ? "60px" : "200px",
            transition: "width 0.2s ease-in-out",
            borderRight: "1px solid var(--color-border-primary)",
            background: "var(--color-bg-primary)"
          }}
        >
          <Box p={3}>
            <Flex direction="column" gap={2}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCollapsed(!collapsed)}
                style={{ marginBottom: "var(--space-sm)" }}
              >
                {collapsed ? "→" : "←"}
              </Button>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  icon={item.icon}
                  badge={item.badge}
                  active={activeItem === item.id}
                  collapsed={collapsed}
                  onClick={() => setActiveItem(item.id)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Flex>
          </Box>
        </Box>
        <Box style={{ flex: 1 }} p={4}>
          <h3 style={{ margin: 0, marginBottom: "var(--space-md)" }}>
            {menuItems.find(item => item.id === activeItem)?.label || "Content"}
          </h3>
          <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
            This is the main content area. Click the arrow to toggle the sidebar.
            Selected: <strong>{activeItem}</strong>
          </p>
        </Box>
      </Flex>
    </Box>
  );
}
