"use client";

import * as React from "react";
import { Box, BoxProps } from "./box";
import { cn } from "../utilities/cn";

export interface FlexProps extends Omit<BoxProps, "display"> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  gap?: string | number;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      wrap = "nowrap",
      align = "stretch",
      justify = "flex-start",
      gap,
      style,
      ...props
    },
    ref
  ) => {
    const flexStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: direction,
      flexWrap: wrap,
      alignItems: align,
      justifyContent: justify,
      ...(gap && { gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap }),
      ...style,
    };

    return (
      <Box
        ref={ref}
        className={cn(className)}
        style={flexStyle}
        {...props}
      />
    );
  }
);

Flex.displayName = "Flex";

export { Flex };
