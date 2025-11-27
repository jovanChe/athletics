"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MenuItem } from "./primitives/menu-item";

interface DemoLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  sidebarItems?: Array<{
    href: string;
    label: string;
  }>;
}

export default function DemoLayout({
  children,
  title,
  description,
  sidebarItems = [],
}: DemoLayoutProps) {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          borderRight: "1px solid var(--color-border-primary)",
          background: "var(--color-bg-primary)",
          padding: "var(--space-lg)",
          overflowY: "auto",
        }}
      >
        <nav>
          <h3
            style={{
              fontSize: "var(--font-size-sm)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-text-secondary)",
              margin: 0,
              marginBottom: "var(--space-md)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {title}
          </h3>
          {description && (
            <p
              style={{
                fontSize: "var(--font-size-xs)",
                color: "var(--color-text-secondary)",
                margin: 0,
                marginBottom: "var(--space-lg)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              {description}
            </p>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-xs)",
            }}
          >
            {sidebarItems.map((item) => (
              <MenuItem key={item.href} href={item.href} active={pathname === item.href}>
                {item.label}
              </MenuItem>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "var(--space-2xl)",
          background: "var(--color-bg-primary)",
          color: "var(--color-text-primary)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
