"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/button.module.css";

// Button variants configuration
interface ButtonVariantsConfig {
  variant: {
    primary: string;
    secondary: string;
    ghost: string;
    destructive: string;
    outline: string;
    link: string;
  };
  size: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    icon: string;
  };
}

const buttonVariants: ButtonVariantsConfig = {
  variant: {
    primary: styles.primary,
    secondary: styles.secondary,
    ghost: styles.ghost,
    destructive: styles.destructive,
    outline: styles.outline,
    link: styles.link,
  },
  size: {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
    xl: styles.xl,
    icon: styles.icon,
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof ButtonVariantsConfig["variant"];
  size?: keyof ButtonVariantsConfig["size"];
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    // Get CSS Module classes
    const baseClass = styles.button;
    const variantClass = buttonVariants.variant[variant];
    const sizeClass = buttonVariants.size[size];

    if (asChild) {
      return (
        <Slot className={cn(baseClass, variantClass, sizeClass, className)} data-loading={loading}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseClass, variantClass, sizeClass, className)}
        disabled={isDisabled}
        data-loading={loading}
        {...props}
      >
        {loading && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.loadingSpinner}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="31.416"
              strokeDashoffset="31.416"
              opacity="0.25"
            />
            <path
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
              opacity="0.75"
            />
          </svg>
        )}
        {!loading && leftIcon}
        <span>{children}</span>
        {!loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
