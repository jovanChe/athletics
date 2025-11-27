import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/dropdown-menu.module.css";
import { CheckIcon, DotFilledIcon } from "@radix-ui/react-icons";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className = "", sideOffset = 5, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(styles.content, className)}
    {...props}
  />
));
DropdownMenuContent.displayName = "DropdownMenu.Content";
export { DropdownMenuContent };

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className = "", ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(styles.item, className)}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenu.Item";
export { DropdownMenuItem };

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className = "", ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(styles.checkboxItem, className)}
    {...props}
  />
));
DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";
export { DropdownMenuCheckboxItem };

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className = "", ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(styles.radioItem, className)}
    {...props}
  />
));
DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";
export { DropdownMenuRadioItem };

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className = "", ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(styles.label, className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenu.Label";
export { DropdownMenuLabel };

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className = "", ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(styles.separator, className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenu.Separator";
export { DropdownMenuSeparator };

const DropdownMenuShortcut = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn(styles.shortcut, className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenu.Shortcut";
export { DropdownMenuShortcut };

const DropdownMenuItemIndicator = ({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.ItemIndicator>) => (
  <DropdownMenuPrimitive.ItemIndicator
    className={cn(styles.itemIndicator, className)}
    {...props}
  >
    <CheckIcon />
  </DropdownMenuPrimitive.ItemIndicator>
);
DropdownMenuItemIndicator.displayName = "DropdownMenu.ItemIndicator";
export { DropdownMenuItemIndicator };

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export { DropdownMenuRadioGroup };

