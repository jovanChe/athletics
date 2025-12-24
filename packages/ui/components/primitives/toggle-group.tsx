"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/toggle-group.module.css";

export type ToggleGroupVariant = "default" | "outline";
export type ToggleGroupSize = "sm" | "default" | "lg";

const ToggleGroupContext = React.createContext<{
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
}>({
  variant: "default",
  size: "default",
});

export interface ToggleGroupProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
}

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant = "default", size = "default", children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const resolvedVariant = variant ?? context.variant ?? "default";
  const resolvedSize = size ?? context.size ?? "default";

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        styles.item,
        styles[resolvedVariant],
        styles[resolvedSize],
        className
      )}
      {...props}
    />
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

