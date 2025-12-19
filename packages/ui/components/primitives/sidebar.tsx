"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";
import { cn } from "../utilities/cn";
import { Sheet, SheetContent, SheetTitle } from "./sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import styles from "../../styles/components/sidebar.module.css";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length !== 2) return null;
  return parts.pop()!.split(";").shift() ?? null;
}

function setCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}`;
}

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange, className, style, children, ...props }, ref) => {
  const [openMobile, setOpenMobile] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  // Handle controlled/uncontrolled state
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (onOpenChange) {
        onOpenChange(openState);
      } else {
        _setOpen(openState);
      }
    },
    [open, onOpenChange]
  );

  // Mobile detection
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Keep mobile sheet closed when switching to desktop.
  React.useEffect(() => {
    if (!isMobile && openMobile) setOpenMobile(false);
  }, [isMobile, openMobile]);

  // Cookie persistence (shadcn-style)
  React.useEffect(() => {
    const cookie = getCookie(SIDEBAR_COOKIE_NAME);
    if (!cookie) return;

    const normalized = cookie.toLowerCase();
    const nextOpen =
      normalized === "expanded" ||
      normalized === "open" ||
      normalized === "true" ||
      normalized === "1";

    // Only set internal state if uncontrolled; still allow cookie writing even if controlled.
    if (openProp === undefined) {
      _setOpen(nextOpen);
    }
  }, [openProp]);

  React.useEffect(() => {
    setCookie(SIDEBAR_COOKIE_NAME, open ? "expanded" : "collapsed", SIDEBAR_COOKIE_MAX_AGE);
  }, [open]);

  // Keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  const toggleSidebar = React.useCallback(() => {
    return setOpen(!open);
  }, [open, setOpen]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn(styles.provider, className)}
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-mobile": SIDEBAR_WIDTH_MOBILE,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const sidebarVariants = cva("", {
  variants: {
    variant: {
      sidebar: styles.sidebar,
      floating: styles.sidebarFloating,
      inset: styles.sidebarInset,
    },
    side: {
      left: styles.sideLeft,
      right: styles.sideRight,
    },
  },
  defaultVariants: {
    variant: "sidebar",
    side: "left",
  },
});

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    VariantProps<typeof sidebarVariants> & {
      collapsible?: "offcanvas" | "icon" | "none";
    }
>(({ variant, side, collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar();

  const isCollapsed = state === "collapsed";
  const isIconMode = collapsible === "icon";
  const isOffcanvasMode = collapsible === "offcanvas";

  const sidebarNode = (
    <div
      ref={ref}
      className={cn(
        styles.sidebarBase,
        sidebarVariants({ variant, side }),
        // Icon mode: show icons when collapsed
        isIconMode && isCollapsed && styles.collapsed,
        // Offcanvas mode: hide completely when collapsed (on desktop)
        isOffcanvasMode && isCollapsed && !isMobile && styles.hidden,
        className
      )}
      data-state={state}
      data-collapsible={collapsible}
      data-mobile={isMobile}
      data-variant={variant ?? "sidebar"}
      data-side={side ?? "left"}
      {...props}
    >
      {children}
    </div>
  );

  if (!isMobile) return sidebarNode;

  return (
    <Sheet open={openMobile} onOpenChange={setOpenMobile}>
      <SheetContent
        side={side === "right" ? "right" : "left"}
        className={styles.sidebarSheetContent}
      >
        <SheetTitle className={styles.srOnly}>Navigation</SheetTitle>
        {sidebarNode}
      </SheetContent>
    </Sheet>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar, isMobile, setOpenMobile } = useSidebar();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isMobile) {
      setOpenMobile((value) => !value);
    } else {
      toggleSidebar();
    }
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      className={cn(styles.trigger, className)}
      onClick={handleClick}
      {...props}
    >
      <PanelLeft />
      <span className={styles.srOnly}>Toggle Sidebar</span>
    </button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      className={cn(styles.rail, className)}
      onClick={toggleSidebar}
      tabIndex={-1}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.inset, className)} {...props} />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(styles.input, className)}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.header, className)} {...props} />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.footer, className)} {...props} />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  HTMLHRElement,
  React.ComponentProps<"hr">
>(({ className, ...props }, ref) => {
  return (
    <hr ref={ref} className={cn(styles.separator, className)} {...props} />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.content, className)} {...props} />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.group, className)} {...props} />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.groupLabel, className)} {...props} />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(styles.groupAction, className)}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.groupContent, className)} {...props} />
  );
});
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => {
  return (
    <ul ref={ref} className={cn(styles.menu, className)} {...props} />
  );
});
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => {
  return (
    <li ref={ref} className={cn(styles.menuItem, className)} {...props} />
  );
});
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva("", {
  variants: {
    variant: {
      default: styles.menuButton,
      outline: styles.menuButtonOutline,
    },
    size: {
      default: styles.menuButtonSizeDefault,
      sm: styles.menuButtonSizeSm,
      lg: styles.menuButtonSizeLg,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof sidebarMenuButtonVariants> & {
      asChild?: boolean;
      isActive?: boolean;
      tooltip?: string | React.ComponentPropsWithoutRef<"div">;
    }
>(({ asChild = false, variant, size, isActive, tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;

  const buttonNode = (
    <Comp
      ref={ref}
      className={cn(
        sidebarMenuButtonVariants({ variant, size }),
        isActive && styles.menuButtonActive,
        className
      )}
      data-active={isActive}
      {...props}
    />
  );

  if (!tooltip || !isCollapsed) return buttonNode;

  const tooltipProps = typeof tooltip === "string" ? {} : tooltip;
  const tooltipLabel = typeof tooltip === "string" ? tooltip : tooltip.children;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{buttonNode}</TooltipTrigger>
        <TooltipContent side="right" align="center" sideOffset={8} {...tooltipProps}>
          {tooltipLabel}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ asChild = false, showOnHover = false, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(
        styles.menuAction,
        showOnHover && styles.menuActionShowOnHover,
        className
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.menuBadge, className)} {...props} />
  );
});
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(styles.menuSkeleton, showIcon && styles.menuSkeletonWithIcon, className)}
      {...props}
    />
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => {
  return (
    <ul ref={ref} className={cn(styles.menuSub, className)} {...props} />
  );
});
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => {
  return (
    <li ref={ref} className={cn(styles.menuSubItem, className)} {...props} />
  );
});
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    isActive?: boolean;
  }
>(({ asChild = false, isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      className={cn(
        styles.menuSubButton,
        isActive && styles.menuSubButtonActive,
        className
      )}
      data-active={isActive}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};

