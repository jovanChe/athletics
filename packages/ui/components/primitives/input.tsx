"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/input.module.css";

const inputVariants = cva(styles["ds-input"], {
  variants: {
    variant: {
      default: styles["ds-input--default"],
      filled: styles["ds-input--filled"],
      ghost: styles["ds-input--ghost"],
    },
    size: {
      sm: styles["ds-input--sm"],
      md: styles["ds-input--md"],
      lg: styles["ds-input--lg"],
    },
    state: {
      default: "",
      error: styles["ds-input--error"],
      success: styles["ds-input--success"],
      warning: styles["ds-input--warning"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    state: "default",
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  description?: string;
  error?: string;
  success?: string;
  warning?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      state,
      type = "text",
      leftIcon,
      rightIcon,
      label,
      description,
      error,
      success,
      warning,
      id,
      ...props
    },
    ref,
  ) => {
    // Auto-generate ID if not provided
    const generatedId = React.useId();
    const inputId = id || generatedId;

    // Password visibility toggle
    const [showPassword, setShowPassword] = React.useState(false);
    const isPasswordType = type === "password";
    const actualType = isPasswordType && showPassword ? "text" : type;

    // Determine state based on props
    const computedState = error ? "error" : success ? "success" : warning ? "warning" : state;

    // Helper text content
    const helperText = error || success || warning || description;

    // Password toggle handler
    const handlePasswordToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    };

    return (
      <div className={styles["ds-input-wrapper"]}>
        {label && (
          <label htmlFor={inputId} className={styles["ds-input-label"]}>
            {label}
          </label>
        )}

        <div className={styles["ds-input-container"]}>
          {leftIcon && (
            <div className={cn(styles["ds-input-icon"], styles["ds-input-icon--left"])}>
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={actualType}
            className={cn(
              inputVariants({ variant, size, state: computedState }),
              leftIcon && styles["ds-input--with-left-icon"],
              (rightIcon || isPasswordType) && styles["ds-input--with-right-icon"],
              className,
            )}
            {...props}
          />

          {isPasswordType && (
            <button
              type="button"
              className={styles["ds-input-password-toggle"]}
              onClick={handlePasswordToggle}
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={0}
            >
              {showPassword ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.73 5.073A10.886 10.886 0 0112 5c4.664 0 8.4 2.903 9.927 7a9.776 9.776 0 01-1.549 2.484m-3.378 2.39A10.886 10.886 0 0112 19c-4.664 0-8.4-2.903-9.927-7a9.776 9.776 0 011.549-2.484M3 3l18 18M9.879 9.879a3 3 0 104.242 4.242"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 5c4.664 0 8.4 2.903 9.927 7-1.527 4.097-5.263 7-9.927 7s-8.4-2.903-9.927-7C3.6 7.903 7.336 5 12 5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </button>
          )}

          {rightIcon && !isPasswordType && (
            <div className={cn(styles["ds-input-icon"], styles["ds-input-icon--right"])}>
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && (
          <div
            className={cn(
              styles["ds-input-helper"],
              computedState === "error" && styles["ds-input-helper--error"],
              computedState === "success" && styles["ds-input-helper--success"],
              computedState === "warning" && styles["ds-input-helper--warning"],
            )}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };
