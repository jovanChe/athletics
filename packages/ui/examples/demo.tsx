/**
 * Design System Demo
 * Example implementation showing how to use the components
 */

"use client";

import * as React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  ThemeProvider,
  useTheme,
} from "../src";

// Theme Switcher Component
function ThemeSwitcher() {
  const { theme, spacing, setTheme, setSpacing } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        gap: "var(--space-lg)",
        padding: "var(--space-lg)",
        borderBottom: "1px solid var(--color-border-primary)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
        <label style={{ fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-medium)" }}>
          Theme:
        </label>
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger style={{ minWidth: "8rem" }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="base">Base</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="athletics">Athletics</SelectItem>
            <SelectItem value="purple">Purple</SelectItem>
            <SelectItem value="high-contrast">High Contrast</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
        <label style={{ fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-medium)" }}>
          Spacing:
        </label>
        <Select value={spacing} onValueChange={setSpacing}>
          <SelectTrigger style={{ minWidth: "8rem" }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="compact">Compact</SelectItem>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="comfortable">Comfortable</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// Component Examples
function ComponentExamples() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div
      style={{
        padding: "var(--space-2xl)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2xl)",
      }}
    >
      {/* Buttons Section */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
        <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: "var(--font-weight-semibold)" }}>
          Buttons
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-lg)" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-lg)" }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="icon">⭐</Button>
        </div>

        <div style={{ display: "flex", gap: "var(--space-lg)" }}>
          <Button loading={isLoading} onClick={handleSubmit}>
            {isLoading ? "Submitting..." : "Submit Form"}
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Inputs Section */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
        <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: "var(--font-weight-semibold)" }}>
          Inputs
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "var(--space-lg)",
            maxWidth: "48rem",
          }}
        >
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            description="We'll never share your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            error="Password must be at least 8 characters"
          />

          <Input label="Success State" placeholder="Valid input" success="Looks good!" />

          <Input
            label="Warning State"
            placeholder="Check this"
            warning="Please review this field"
          />
        </div>

        <div style={{ display: "flex", gap: "var(--space-lg)", maxWidth: "48rem" }}>
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </section>

      {/* Select Section */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
        <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: "var(--font-weight-semibold)" }}>
          Select
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-lg)",
            maxWidth: "48rem",
          }}
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose option..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger variant="filled">
              <SelectValue placeholder="Filled variant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="filled1">Filled 1</SelectItem>
              <SelectItem value="filled2">Filled 2</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger variant="ghost">
              <SelectValue placeholder="Ghost variant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ghost1">Ghost 1</SelectItem>
              <SelectItem value="ghost2">Ghost 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Dialog Section */}
      <section style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
        <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: "var(--font-weight-semibold)" }}>
          Dialog
        </h2>

        <div style={{ display: "flex", gap: "var(--space-lg)" }}>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a description of what this dialog is for. It uses Radix UI primitives with
                  custom styling from our design token system.
                </DialogDescription>
              </DialogHeader>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                <Input label="Name" placeholder="Enter your name" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Large Dialog</Button>
            </DialogTrigger>
            <DialogContent size="lg">
              <DialogHeader>
                <DialogTitle>Large Dialog</DialogTitle>
                <DialogDescription>
                  This dialog demonstrates the large size variant.
                </DialogDescription>
              </DialogHeader>

              <div
                style={{
                  minHeight: "12.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>Large dialog content area</p>
              </div>

              <DialogFooter>
                <Button>Got it</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}

// Main Demo Component
export function DesignSystemDemo() {
  return (
    <ThemeProvider defaultTheme="base" defaultSpacing="normal">
      <div
        style={{
          minHeight: "100vh",
          background: "var(--color-bg-primary)",
          color: "var(--color-text-primary)",
        }}
      >
        <header
          style={{
            borderBottom: "1px solid var(--color-border-primary)",
            background: "var(--color-bg-primary)",
          }}
        >
          <div style={{ padding: "var(--space-2xl)" }}>
            <h1
              style={{
                fontSize: "var(--font-size-3xl)",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              Design System Demo
            </h1>
            <p
              style={{
                color: "var(--color-text-secondary)",
                marginTop: "var(--space-sm)",
              }}
            >
              Flexible design system built with Radix UI and CSS custom properties
            </p>
          </div>
          <ThemeSwitcher />
        </header>

        <main>
          <ComponentExamples />
        </main>

        <footer
          style={{
            borderTop: "1px solid var(--color-border-primary)",
            padding: "var(--space-2xl)",
            textAlign: "center",
            color: "var(--color-text-secondary)",
          }}
        >
          <p>Design System Demo - Built with Radix UI + CSS Custom Properties</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
