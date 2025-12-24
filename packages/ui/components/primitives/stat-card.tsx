"use client";

import * as React from "react";
import { cn } from "../utilities/cn";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Badge } from "./badge";
import styles from "../../styles/components/stat-card.module.css";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title/label of the stat */
  title: string;
  /** The main value to display */
  value: string | number;
  /** Optional description below the value */
  description?: string;
  /** Optional change indicator (e.g., "+20.1%") */
  change?: string;
  /** Type of change for styling */
  changeType?: "positive" | "negative" | "neutral";
  /** Optional icon to display */
  icon?: React.ReactNode;
  /** Optional trend indicator */
  trend?: "up" | "down" | "stable";
  /** Loading state */
  loading?: boolean;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      title,
      value,
      description,
      change,
      changeType = "neutral",
      icon,
      trend,
      loading = false,
      ...props
    },
    ref
  ) => {
    if (loading) {
      return (
        <Card ref={ref} className={cn(styles.card, className)} {...props}>
          <CardHeader className={styles.header}>
            <div className={styles.skeletonTitle} />
          </CardHeader>
          <CardContent className={styles.content}>
            <div className={styles.skeletonValue} />
            <div className={styles.skeletonChange} />
          </CardContent>
        </Card>
      );
    }

    return (
      <Card ref={ref} className={cn(styles.card, className)} {...props}>
        <CardHeader className={styles.header}>
          <div className={styles.headerContent}>
            <CardTitle className={styles.title}>{title}</CardTitle>
            {icon && <div className={styles.icon}>{icon}</div>}
          </div>
        </CardHeader>
        <CardContent className={styles.content}>
          <div className={styles.value}>{value}</div>
          <div className={styles.footer}>
            {change && (
              <Badge
                variant={changeType === "positive" ? "default" : changeType === "negative" ? "destructive" : "secondary"}
                className={styles.badge}
              >
                {trend === "up" && "↑ "}
                {trend === "down" && "↓ "}
                {change}
              </Badge>
            )}
            {description && (
              <span className={styles.description}>{description}</span>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);
StatCard.displayName = "StatCard";

export { StatCard };

