"use client";

import React from "react";
import Link from "next/link";
import { Box, Section, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../../../src";

// ChevronDown icon SVG for dropdown indicator
const ChevronDownIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export default function BreadcrumbPageComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", margin: 0 }}>Breadcrumb</h1>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Navigation hierarchy component for showing the current page location within a site structure.
      </p>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Basic Breadcrumb (Default Separator: &gt;)
        </h2>
        <Box mb={4}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Primitives</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Custom Separator (/)
        </h2>
        <Box mb={4}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <span style={{ color: "var(--color-text-tertiary)" }}>/</span>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Primitives</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <span style={{ color: "var(--color-text-tertiary)" }}>/</span>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Custom Separator (→)
        </h2>
        <Box mb={4}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <span style={{ color: "var(--color-text-tertiary)" }}>→</span>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Primitives</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <span style={{ color: "var(--color-text-tertiary)" }}>→</span>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          With Ellipsis (Collapsed)
        </h2>
        <Box mb={4}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Primitives</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          With Dropdown Menu (with arrow indicator)
        </h2>
        <Box mb={4}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                    <BreadcrumbEllipsis />
                    <ChevronDownIcon style={{ width: "0.875rem", height: "0.875rem", color: "var(--color-text-tertiary)" }} />
                    <span className="sr-only" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: 0 }}>Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Primitives</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Box>
      </Section>

      <Section size="sm">
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
          Link Component (asChild)
        </h2>
        <Box mb={4}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/primitives">Primitives</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Box>
      </Section>
    </div>
  );
}
