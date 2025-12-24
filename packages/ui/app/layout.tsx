import type { Metadata } from "next";
import Link from "next/link";
import "../styles/index.css";
import { ThemeProvider } from "../components/utilities/theme-provider";
import { ThemeScript } from "../components/utilities/theme-script";
import HeaderMenu from "./components/HeaderMenu";

export const metadata: Metadata = {
  title: "UI Design System Demo",
  description: "A flexible design system built with Radix UI and CSS custom properties",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <header
            style={{
              width: "100%",
              borderBottom: "1px solid var(--color-border-primary)",
              background: "var(--color-bg-primary)",
              color: "var(--color-text-primary)",
            }}
          >
            <div
              style={{
                maxWidth: "80rem",
                margin: "0 auto",
                padding: "var(--space-lg) var(--space-2xl)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-lg)",
              }}
            >
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md)",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontWeight: 700 }}>UI</span>
                <span
                  style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-sm)" }}
                >
                  Design System
                </span>
              </Link>

              <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-xl)" }}>
                <ul
                  style={{
                    display: "flex",
                    gap: "var(--space-xl)",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li>
                    <Link
                      href="/primitives"
                      style={{ color: "var(--color-text-primary)", textDecoration: "none" }}
                    >
                      Primitives
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blocks"
                      style={{ color: "var(--color-text-primary)", textDecoration: "none" }}
                    >
                      Blocks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/icons"
                      style={{ color: "var(--color-text-primary)", textDecoration: "none" }}
                    >
                      Icons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tokens"
                      style={{ color: "var(--color-text-primary)", textDecoration: "none" }}
                    >
                      Tokens
                    </Link>
                  </li>
                </ul>
                <HeaderMenu />
              </nav>
            </div>
          </header>

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
