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
import styles from "../login-01/page.module.css";

export default function Signup01Page() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert(`Signup submitted!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Signup 01</h1>
        <p className={styles.description}>
          Registration form with name, email, password confirmation, and terms.
        </p>
      </div>

      <div className={styles.preview}>
        <div className={styles.previewInner}>
          <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Create an account</CardTitle>
              <CardDescription>
                Enter your details to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

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
                    minLength={8}
                  />
                </div>

                <div className={styles.field}>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.rememberRow}>
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                  />
                  <Label htmlFor="terms" className={styles.rememberLabel}>
                    I agree to the{" "}
                    <Link href="#" className={styles.forgotLink}>
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className={styles.forgotLink}>
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button type="submit" className={styles.submitButton} disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className={styles.cardFooter}>
              <p className={styles.footerText}>
                Already have an account?{" "}
                <Link href="/blocks/login-01" className={styles.signupLink}>
                  Sign in
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
          <li>Button - primary variant with loading state</li>
          <li>Input - for name, email, and password fields</li>
          <li>Label - for form field labels</li>
          <li>Checkbox - for terms acceptance</li>
        </ul>
      </div>
    </div>
  );
}

