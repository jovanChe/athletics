"use client";

import * as React from "react";
import { Box, BoxProps } from "./box";
import { cn } from "../utilities/cn";

export interface ContainerProps extends Omit<BoxProps, "maxWidth"> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  centered?: boolean;
}

const containerSizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  full: "100%",
} as const;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size = "xl",
      centered = true,
      style,
      ...props
    },
    ref
  ) => {
    const containerStyle: React.CSSProperties = {
      maxWidth: containerSizes[size],
      ...(centered && { marginLeft: "auto", marginRight: "auto" }),
      ...style,
    };

    return (
      <Box
        ref={ref}
        className={cn(className)}
        style={containerStyle}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };
