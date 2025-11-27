"use client";

import * as React from "react";
import { Box, BoxProps } from "./box";
import { cn } from "../utilities/cn";

export interface SectionProps extends Omit<BoxProps, "py"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const sectionSizes = {
  xs: "var(--space-lg)", // 1.5rem
  sm: "var(--space-xl)", // 2rem
  md: "var(--space-2xl)", // 3rem
  lg: "var(--space-3xl)", // 4rem
  xl: "var(--space-4xl)", // 6rem
  "2xl": "var(--space-5xl)", // 8rem
} as const;

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      as: Component = "section",
      className,
      size = "md",
      style,
      ...props
    },
    ref
  ) => {
    const sectionStyle: React.CSSProperties = {
      paddingTop: sectionSizes[size],
      paddingBottom: sectionSizes[size],
      ...style,
    };

    return (
      <Box
        as={Component}
        ref={ref}
        className={cn(className)}
        style={sectionStyle}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section };
