"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/menu-item.module.css";

// MenuItem variants configuration
interface MenuItemVariantsConfig {
  size: {
    small: string;
    default: string;
    large: string;
  };
}

const menuItemVariants: MenuItemVariantsConfig = {
  size: {
    small: styles.small || "",
    default: "",
    large: styles.large || "",
  },
};

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof MenuItemVariantsConfig["size"];
  asChild?: boolean;
  active?: boolean;
  collapsed?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  href?: string;
  children: React.ReactNode;
}

const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      className,
      size = "default",
      asChild = false,
      active = false,
      collapsed = false,
      icon,
      badge,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const menuItemClasses = cn(
      styles.menuItem,
      menuItemVariants.size[size],
      active && styles.active,
      collapsed && styles.collapsed,
      className
    );

    if (asChild) {
      return (
        <Slot
          className={menuItemClasses}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    if (href) {
      return (
        <Link
          className={menuItemClasses}
          href={href}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {icon && (
            <span className={styles.icon}>
              {icon}
            </span>
          )}
          {!collapsed && (
            <span className={styles.label}>
              {children}
            </span>
          )}
          {badge && !collapsed && (
            <span className={styles.badge}>
              {badge}
            </span>
          )}
        </Link>
      );
    }

    return (
      <button
        className={menuItemClasses}
        ref={ref}
        {...props}
      >
        {icon && (
          <span className={styles.icon}>
            {icon}
          </span>
        )}
        {!collapsed && (
          <span className={styles.label}>
            {children}
          </span>
        )}
        {badge && !collapsed && (
          <span className={styles.badge}>
            {badge}
          </span>
        )}
      </button>
    );
  }
);

MenuItem.displayName = "MenuItem";

export { MenuItem, menuItemVariants };
