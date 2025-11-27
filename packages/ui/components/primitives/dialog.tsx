"use client";

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utilities/cn';
import styles from '../../styles/components/dialog.module.css';

// Dialog Root
const Dialog = DialogPrimitive.Root;

// Dialog Trigger
const DialogTrigger = DialogPrimitive.Trigger;

// Dialog Portal
const DialogPortal = DialogPrimitive.Portal;

// Dialog Close
const DialogClose = DialogPrimitive.Close;

// Dialog Overlay
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(styles['ds-dialog-overlay'], className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// Dialog Content variants
const dialogContentVariants = cva(styles['ds-dialog-content'], {
  variants: {
    size: {
      sm: styles['ds-dialog-content--sm'],
      md: styles['ds-dialog-content--md'],
      lg: styles['ds-dialog-content--lg'],
      xl: styles['ds-dialog-content--xl'],
      full: styles['ds-dialog-content--full'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  className?: string;
  children?: React.ReactNode;
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, size, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogContentVariants({ size }), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={styles['ds-dialog-close']}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 3.75L11.25 11.25M11.25 3.75L3.75 11.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles['sr-only']}>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

// Dialog Header
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(styles['ds-dialog-header'], className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

// Dialog Footer
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(styles['ds-dialog-footer'], className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

// Dialog Title
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(styles['ds-dialog-title'], className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// Dialog Description
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(styles['ds-dialog-description'], className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
