"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Section,
  Button,
  Icons,
} from "../src";

export default function DesignSystemLanding() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2xl)" }}>
      {/* Hero Section */}
      <Section size="lg">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "var(--font-size-3xl)",
            fontWeight: "var(--font-weight-bold)",
            margin: 0,
            marginBottom: "var(--space-md)",
            background: "linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-600))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Flexible Design System
          </h1>
          <p style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-text-secondary)",
            margin: 0,
            marginBottom: "var(--space-xl)",
            lineHeight: "var(--line-height-relaxed)"
          }}>
            A comprehensive design system built with Radix UI primitives and CSS custom properties,
            designed for maximum flexibility and brand customization.
          </p>
          <Flex gap={4} justify="center" wrap="wrap">
            <Button variant="primary" size="lg" asChild>
              <Link href="/primitives">Explore Components</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/icons">View Icons</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/tokens">Design Tokens</Link>
            </Button>
          </Flex>
        </div>
      </Section>

      {/* Features Grid */}
      <Section size="lg">
        <h2 style={{
          fontSize: "var(--font-size-xl)",
          textAlign: "center",
          margin: 0,
          marginBottom: "var(--space-xl)"
        }}>
          Key Features
        </h2>
        <Flex gap={6} wrap="wrap" justify="center">
          <Box
            p={6}
            bg="var(--color-bg-secondary)"
            borderRadius="var(--radius-lg)"
            style={{
              flex: "1 1 300px",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <Icons.Settings style={{ fontSize: "var(--font-size-xl)", marginBottom: "var(--space-md)" }} />
            <h3 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-sm)" }}>
              Flexible Theming
            </h3>
            <p style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              margin: 0,
              lineHeight: "var(--line-height-relaxed)"
            }}>
              Complete visual customization through CSS custom properties with runtime theme switching.
            </p>
          </Box>

          <Box
            p={6}
            bg="var(--color-bg-secondary)"
            borderRadius="var(--radius-lg)"
            style={{
              flex: "1 1 300px",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <Icons.Check style={{ fontSize: "var(--font-size-xl)", marginBottom: "var(--space-md)" }} />
            <h3 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-sm)" }}>
              Accessibility First
            </h3>
            <p style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              margin: 0,
              lineHeight: "var(--line-height-relaxed)"
            }}>
              Built on Radix UI primitives for robust accessibility and keyboard navigation support.
            </p>
          </Box>

          <Box
            p={6}
            bg="var(--color-bg-secondary)"
            borderRadius="var(--radius-lg)"
            style={{
              flex: "1 1 300px",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <Icons.Analytics style={{ fontSize: "var(--font-size-xl)", marginBottom: "var(--space-md)" }} />
            <h3 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-sm)" }}>
              Design Tokens
            </h3>
            <p style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              margin: 0,
              lineHeight: "var(--line-height-relaxed)"
            }}>
              Systematic approach to design decisions with consistent spacing, typography, and colors.
            </p>
          </Box>
        </Flex>
      </Section>

      {/* Component Showcase */}
      <Section size="lg">
        <h2 style={{
          fontSize: "var(--font-size-xl)",
          textAlign: "center",
          margin: 0,
          marginBottom: "var(--space-xl)"
        }}>
          Component Library
        </h2>
        <Flex gap={6} wrap="wrap" justify="center">
          <Box
            p={6}
            border="1px solid var(--color-border-primary)"
            borderRadius="var(--radius-lg)"
            style={{
              flex: "1 1 300px",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
              Primitives
            </h3>
            <p style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              margin: 0,
              marginBottom: "var(--space-md)",
              lineHeight: "var(--line-height-relaxed)"
            }}>
              Core UI components built with Radix UI primitives and styled with CSS custom properties.
            </p>
            <Button variant="outline" asChild>
              <Link href="/primitives">Explore Primitives</Link>
            </Button>
          </Box>

          <Box
            p={6}
            border="1px solid var(--color-border-primary)"
            borderRadius="var(--radius-lg)"
            style={{
              flex: "1 1 300px",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
              Icons
            </h3>
            <p style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              margin: 0,
              marginBottom: "var(--space-md)",
              lineHeight: "var(--line-height-relaxed)"
            }}>
              Comprehensive icon library based on Radix UI Icons with consistent sizing and styling.
            </p>
            <Button variant="outline" asChild>
              <Link href="/icons">Browse Icons</Link>
            </Button>
          </Box>

          <Box
            p={6}
            border="1px solid var(--color-border-primary)"
            borderRadius="var(--radius-lg)"
            style={{
              flex: "1 1 300px",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "var(--font-size-lg)", margin: 0, marginBottom: "var(--space-md)" }}>
              Design Tokens
            </h3>
            <p style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-secondary)",
              margin: 0,
              marginBottom: "var(--space-md)",
              lineHeight: "var(--line-height-relaxed)"
            }}>
              Design tokens that define the visual foundation of the design system.
            </p>
            <Button variant="outline" asChild>
              <Link href="/tokens">View Tokens</Link>
            </Button>
          </Box>
        </Flex>
      </Section>

      {/* Quick Start */}
      <Section size="lg">
        <Box
          p={8}
          bg="var(--color-primary-50)"
          borderRadius="var(--radius-lg)"
          style={{ textAlign: "center" }}
        >
          <h2 style={{
            fontSize: "var(--font-size-xl)",
            margin: 0,
            marginBottom: "var(--space-md)",
            color: "var(--color-primary-700)"
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: "var(--font-size-base)",
            color: "var(--color-primary-600)",
            margin: 0,
            marginBottom: "var(--space-lg)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Explore our components, customize themes, and integrate the design system into your projects.
          </p>
          <Flex gap={4} justify="center" wrap="wrap">
            <Button variant="primary" size="lg" asChild>
              <Link href="/primitives">Start Building</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://github.com/jovanChe/athletics" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </Flex>
        </Box>
      </Section>
    </div>
  );
}