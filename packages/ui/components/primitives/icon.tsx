"use client";

import * as React from "react";
import { cn } from "../utilities/cn";

// Icon size variants
const iconSizes = {
  xs: "0.75rem",    // 12px
  sm: "1rem",       // 16px
  md: "1.25rem",    // 20px
  lg: "1.5rem",     // 24px
  xl: "2rem",       // 32px
  "2xl": "2.5rem",  // 40px
} as const;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: keyof typeof iconSizes;
  className?: string;
  children?: React.ReactNode;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = "md", className, children, ...props }, ref) => {
    const iconSize = iconSizes[size];

    return (
      <svg
        ref={ref}
        width={iconSize}
        height={iconSize}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("inline-block flex-shrink-0", className)}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = "Icon";

export { Icon, iconSizes };
