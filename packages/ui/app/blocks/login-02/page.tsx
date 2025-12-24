"use client";

import * as React from "react";
import Link from "next/link";
import {
  Button,
  Input,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Separator,
} from "../../../components/primitives";
import styles from "../login-01/page.module.css";

export default function Login02Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert(`Login submitted!\nEmail: ${email}`);
  };

  const handleSocialLogin = (provider: string) => {
    alert(`Login with ${provider}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Login 02</h1>
        <p className={styles.description}>
          Login form with multiple authentication options.
        </p>
      </div>

      <div className={styles.preview}>
        <div className={styles.previewInner}>
          <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Welcome back</CardTitle>
              <CardDescription>
                Choose your preferred login method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className={styles.form}>
                {/* Social Buttons using library Button component */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => handleSocialLogin("Google")}
                    style={{ width: "100%" }}
                  >
                    Continue with Google
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => handleSocialLogin("GitHub")}
                    style={{ width: "100%" }}
                  >
                    Continue with GitHub
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => handleSocialLogin("Apple")}
                    style={{ width: "100%" }}
                  >
                    Continue with Apple
                  </Button>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", margin: "var(--space-md) 0" }}>
                  <Separator style={{ flex: 1 }} />
                  <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
                    Or
                  </span>
                  <Separator style={{ flex: 1 }} />
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.field}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className={styles.submitButton} disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in with Email"}
                  </Button>
                </form>
              </div>
            </CardContent>
            <CardFooter className={styles.cardFooter}>
              <p className={styles.footerText}>
                Don&apos;t have an account?{" "}
                <Link href="/blocks/signup-01" className={styles.signupLink}>
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Components Used</h2>
        <ul className={styles.featureList}>
          <li>Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter</li>
          <li>Button - with outline variant for social options</li>
          <li>Input - for email and password fields</li>
          <li>Label - for form field labels</li>
          <li>Separator - for divider between sections</li>
        </ul>
      </div>
    </div>
  );
}
