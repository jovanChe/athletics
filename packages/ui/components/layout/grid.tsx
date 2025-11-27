"use client";

import * as React from "react";
import { Box, BoxProps } from "./box";
import { cn } from "../utilities/cn";

export interface GridProps extends Omit<BoxProps, "display"> {
  columns?: string | number;
  rows?: string | number;
  gap?: string | number;
  columnGap?: string | number;
  rowGap?: string | number;
  autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
  autoColumns?: string;
  autoRows?: string;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      columns,
      rows,
      gap,
      columnGap,
      rowGap,
      autoFlow,
      autoColumns,
      autoRows,
      style,
      ...props
    },
    ref
  ) => {
    const gridStyle: React.CSSProperties = {
      display: "grid",
      ...(columns && { gridTemplateColumns: typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns }),
      ...(rows && { gridTemplateRows: typeof rows === "number" ? `repeat(${rows}, 1fr)` : rows }),
      ...(gap && { gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap }),
      ...(columnGap && { columnGap: typeof columnGap === "number" ? `${columnGap * 0.25}rem` : columnGap }),
      ...(rowGap && { rowGap: typeof rowGap === "number" ? `${rowGap * 0.25}rem` : rowGap }),
      ...(autoFlow && { gridAutoFlow: autoFlow }),
      ...(autoColumns && { gridAutoColumns: autoColumns }),
      ...(autoRows && { gridAutoRows: autoRows }),
      ...style,
    };

    return (
      <Box
        ref={ref}
        className={cn(className)}
        style={gridStyle}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";

export { Grid };
