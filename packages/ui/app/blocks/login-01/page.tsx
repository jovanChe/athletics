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
  Checkbox,
} from "../../../components/primitives";
import styles from "./page.module.css";

export default function Login01Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert(`Login submitted!\nEmail: ${email}\nRemember: ${remember}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Login 01</h1>
        <p className={styles.description}>
          A simple login form with email, password, and remember me option.
        </p>
      </div>

      {/* Preview */}
      <div className={styles.preview}>
        <div className={styles.previewInner}>
          <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Welcome back</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                  <div className={styles.labelRow}>
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className={styles.forgotLink}>
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.rememberRow}>
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(checked) => setRemember(checked === true)}
                  />
                  <Label htmlFor="remember" className={styles.rememberLabel}>
                    Remember me
                  </Label>
                </div>

                <Button type="submit" className={styles.submitButton} disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className={styles.cardFooter}>
              <p className={styles.footerText}>
                Don&apos;t have an account?{" "}
                <Link href="#" className={styles.signupLink}>
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Usage */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Components Used</h2>
        <ul className={styles.featureList}>
          <li>Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter</li>
          <li>Button - primary variant with loading state</li>
          <li>Input - for email and password fields</li>
          <li>Label - for form field labels</li>
          <li>Checkbox - for remember me option</li>
        </ul>
      </div>
    </div>
  );
}
