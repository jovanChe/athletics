"use client";

import * as React from "react";
import { cn } from "../utilities/cn";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;

  // Spacing props
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;

  // Margin props
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;

  // Sizing props
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;

  // Positioning props
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  inset?: string | number;

  // Flex child props
  flexBasis?: string | number;
  flexShrink?: string | number;
  flexGrow?: string | number;

  // Grid child props
  gridArea?: string;
  gridColumn?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRow?: string;
  gridRowStart?: string;
  gridRowEnd?: string;

  // Display
  display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid" | "inline-grid" | "none";

  // Additional CSS properties
  bg?: string;
  border?: string;
  borderRadius?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as: Component = "div",
      className,
      children,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      position,
      top,
      right,
      bottom,
      left,
      inset,
      flexBasis,
      flexShrink,
      flexGrow,
      gridArea,
      gridColumn,
      gridColumnStart,
      gridColumnEnd,
      gridRow,
      gridRowStart,
      gridRowEnd,
      display,
      bg,
      border,
      borderRadius,
      textAlign,
      overflow,
      align,
      justify,
      style,
      ...props
    },
    ref
  ) => {
    const boxStyle: React.CSSProperties = {
      ...style,
      ...(p && { padding: typeof p === "number" ? `${p * 0.25}rem` : p }),
      ...(px && { paddingLeft: typeof px === "number" ? `${px * 0.25}rem` : px, paddingRight: typeof px === "number" ? `${px * 0.25}rem` : px }),
      ...(py && { paddingTop: typeof py === "number" ? `${py * 0.25}rem` : py, paddingBottom: typeof py === "number" ? `${py * 0.25}rem` : py }),
      ...(pt && { paddingTop: typeof pt === "number" ? `${pt * 0.25}rem` : pt }),
      ...(pr && { paddingRight: typeof pr === "number" ? `${pr * 0.25}rem` : pr }),
      ...(pb && { paddingBottom: typeof pb === "number" ? `${pb * 0.25}rem` : pb }),
      ...(pl && { paddingLeft: typeof pl === "number" ? `${pl * 0.25}rem` : pl }),
      ...(m && { margin: typeof m === "number" ? `${m * 0.25}rem` : m }),
      ...(mx && { marginLeft: typeof mx === "number" ? `${mx * 0.25}rem` : mx, marginRight: typeof mx === "number" ? `${mx * 0.25}rem` : mx }),
      ...(my && { marginTop: typeof my === "number" ? `${my * 0.25}rem` : my, marginBottom: typeof my === "number" ? `${my * 0.25}rem` : my }),
      ...(mt && { marginTop: typeof mt === "number" ? `${mt * 0.25}rem` : mt }),
      ...(mr && { marginRight: typeof mr === "number" ? `${mr * 0.25}rem` : mr }),
      ...(mb && { marginBottom: typeof mb === "number" ? `${mb * 0.25}rem` : mb }),
      ...(ml && { marginLeft: typeof ml === "number" ? `${ml * 0.25}rem` : ml }),
      ...(width && { width }),
      ...(minWidth && { minWidth }),
      ...(maxWidth && { maxWidth }),
      ...(height && { height }),
      ...(minHeight && { minHeight }),
      ...(maxHeight && { maxHeight }),
      ...(position && { position }),
      ...(top && { top }),
      ...(right && { right }),
      ...(bottom && { bottom }),
      ...(left && { left }),
      ...(inset && { inset }),
      ...(flexBasis && { flexBasis }),
      ...(flexShrink && { flexShrink }),
      ...(flexGrow && { flexGrow }),
      ...(gridArea && { gridArea }),
      ...(gridColumn && { gridColumn }),
      ...(gridColumnStart && { gridColumnStart }),
      ...(gridColumnEnd && { gridColumnEnd }),
      ...(gridRow && { gridRow }),
      ...(gridRowStart && { gridRowStart }),
      ...(gridRowEnd && { gridRowEnd }),
      ...(display && { display }),
      ...(bg && { backgroundColor: bg }),
      ...(border && { border }),
      ...(borderRadius && { borderRadius }),
      ...(textAlign && { textAlign }),
      ...(overflow && { overflow }),
      ...(align && { alignItems: align }),
      ...(justify && { justifyContent: justify }),
    };

    return React.createElement(
      Component as React.ElementType,
      {
        ref,
        className: cn(className),
        style: boxStyle,
        ...props,
      },
      children
    );
  }
);

Box.displayName = "Box";

export { Box };
