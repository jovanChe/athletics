"use client";

import * as React from "react";
import { Box, BoxProps } from "./box";
import { cn } from "../utilities/cn";

export interface SidebarProps extends BoxProps {
  side?: "left" | "right";
  width?: string | number;
  collapsible?: boolean;
  collapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  children: React.ReactNode;
}

export interface SidebarContentProps extends BoxProps {
  children: React.ReactNode;
}

export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SidebarContext = React.createContext<{
  collapsed: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
}>({
  collapsed: false,
});

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      side = "left",
      width = "16rem",
      collapsible = false,
      collapsed = false,
      onCollapseChange,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const sidebarStyle: React.CSSProperties = {
      width: collapsed ? "3rem" : width,
      minWidth: collapsed ? "3rem" : width,
      height: "100%",
      borderRight: side === "left" ? "1px solid var(--color-border-primary)" : "none",
      borderLeft: side === "right" ? "1px solid var(--color-border-primary)" : "none",
      transition: "width 0.2s ease-in-out, min-width 0.2s ease-in-out",
      ...style,
    };

    return (
      <SidebarContext.Provider value={{ collapsed, onCollapseChange }}>
        <Box
          ref={ref}
          className={cn(className)}
          style={sidebarStyle}
          {...props}
        >
          {children}
        </Box>
      </SidebarContext.Provider>
    );
  }
);

Sidebar.displayName = "Sidebar";

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex-1", className)}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

SidebarContent.displayName = "SidebarContent";

const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { collapsed, onCollapseChange } = React.useContext(SidebarContext);

    const handleClick = () => {
      onCollapseChange?.(!collapsed);
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "w-8 h-8 rounded-md",
          "bg-transparent hover:bg-gray-100",
          "border border-gray-200",
          "text-gray-600 hover:text-gray-900",
          "transition-colors",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SidebarTrigger.displayName = "SidebarTrigger";

export { Sidebar, SidebarContent, SidebarTrigger };
