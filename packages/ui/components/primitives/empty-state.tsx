"use client";

import * as React from "react";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/empty-state.module.css";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon to display */
  icon?: React.ReactNode;
  /** Main title */
  title: string;
  /** Description text */
  description?: string;
  /** Optional action buttons */
  action?: React.ReactNode;
  /** Size variant */
  size?: "sm" | "md" | "lg";
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      icon,
      title,
      description,
      action,
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.container,
          size === "sm" && styles.sizeSm,
          size === "lg" && styles.sizeLg,
          className
        )}
        {...props}
      >
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {action && <div className={styles.action}>{action}</div>}
      </div>
    );
  }
);
EmptyState.displayName = "EmptyState";

export { EmptyState };

