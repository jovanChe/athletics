"use client";

import React from "react";
import {
  Box,
  Flex,
  Section,
  Icons,
} from "../../src";

export default function IconsPage() {
  const iconCategories = [
    {
      title: "Navigation",
      icons: [
        { name: "Home", component: Icons.Home },
        { name: "Dashboard", component: Icons.Dashboard },
        { name: "Users", component: Icons.Users },
        { name: "Settings", component: Icons.Settings },
        { name: "Analytics", component: Icons.Analytics },
        { name: "Reports", component: Icons.Reports },
      ],
    },
    {
      title: "Actions",
      icons: [
        { name: "Plus", component: Icons.Plus },
        { name: "Edit", component: Icons.Edit },
        { name: "Delete", component: Icons.Delete },
        { name: "Search", component: Icons.Search },
        { name: "Filter", component: Icons.Filter },
      ],
    },
    {
      title: "Status",
      icons: [
        { name: "Check", component: Icons.Check },
        { name: "Cross", component: Icons.Cross },
        { name: "Warning", component: Icons.Warning },
        { name: "Info", component: Icons.Info },
      ],
    },
    {
      title: "Communication",
      icons: [
        { name: "Message", component: Icons.Message },
        { name: "Mail", component: Icons.Mail },
        { name: "Bell", component: Icons.Bell },
      ],
    },
    {
      title: "Security",
      icons: [
        { name: "Lock", component: Icons.Lock },
        { name: "Unlock", component: Icons.Unlock },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <div>
        <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0, marginBottom: "var(--space-sm)" }}>
          Icon Library
        </h1>
        <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
          A comprehensive collection of icons built with Radix UI Icons, optimized for the design system.
        </p>
      </div>

      {/* Icon Categories */}
      {iconCategories.map((category) => (
        <Section key={category.title} size="sm">
          <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
            {category.title}
          </h2>
          <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
            <Flex gap={4} wrap="wrap">
              {category.icons.map(({ name, component: IconComponent }) => (
                <Box
                  key={name}
                  p={3}
                  bg="var(--color-bg-primary)"
                  borderRadius="var(--radius-md)"
                  border="1px solid var(--color-border-primary)"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--space-sm)",
                    minWidth: "100px",
                    textAlign: "center",
                  }}
                >
                  <IconComponent size="lg" />
                  <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)" }}>
                    {name}
                  </span>
                </Box>
              ))}
            </Flex>
          </Box>
        </Section>
      ))}

      {/* Usage Examples */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Usage Examples
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={4}>
            <div>
              <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
                Basic Usage
              </h3>
              <pre style={{
                background: "var(--color-bg-primary)",
                padding: "var(--space-md)",
                borderRadius: "var(--radius-md)",
                fontSize: "var(--font-size-sm)",
                overflow: "auto",
                margin: 0
              }}>
{`import { Icons } from '@repo/ui';

// Use individual icons
<Icons.Dashboard size="md" />
<Icons.Users size="lg" />
<Icons.Settings size="sm" />`}
              </pre>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
                With MenuItem
              </h3>
              <pre style={{
                background: "var(--color-bg-primary)",
                padding: "var(--space-md)",
                borderRadius: "var(--radius-md)",
                fontSize: "var(--font-size-sm)",
                overflow: "auto",
                margin: 0
              }}>
{`import { MenuItem, Icons } from '@repo/ui';

<MenuItem icon={<Icons.Dashboard />} active>
  Dashboard
</MenuItem>
<MenuItem icon={<Icons.Users />}>
  Users
</MenuItem>
<MenuItem icon={<Icons.Settings />} badge="3">
  Settings
</MenuItem>`}
              </pre>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
                Size Variants
              </h3>
              <Flex gap={4} align="center">
                <Icons.Dashboard size="xs" />
                <Icons.Dashboard size="sm" />
                <Icons.Dashboard size="md" />
                <Icons.Dashboard size="lg" />
                <Icons.Dashboard size="xl" />
                <Icons.Dashboard size="2xl" />
              </Flex>
              <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", margin: "var(--space-sm) 0 0 0" }}>
                xs (12px) • sm (16px) • md (20px) • lg (24px) • xl (32px) • 2xl (40px)
              </p>
            </div>
          </Flex>
        </Box>
      </Section>

      {/* Design Guidelines */}
      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Design Guidelines
        </h2>
        <Box p={4} bg="var(--color-bg-secondary)" borderRadius="var(--radius-md)">
          <Flex direction="column" gap={3}>
            <div>
              <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
                Consistency
              </h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                All icons follow the same 15x15 viewBox and use consistent stroke weights and corner radius.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
                Accessibility
              </h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                Icons inherit the current text color and respect high contrast preferences.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "var(--font-size-base)", margin: 0, marginBottom: "var(--space-sm)" }}>
                Customization
              </h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
                Icons can be styled with CSS classes and accept all standard SVG props.
              </p>
            </div>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}
