"use client";

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utilities/cn';
import styles from '../../styles/components/select.module.css';

// Select Root
const Select = SelectPrimitive.Root;

// Select Group
const SelectGroup = SelectPrimitive.Group;

// Select Value
const SelectValue = SelectPrimitive.Value;

// Select variants
const selectTriggerVariants = cva(styles['ds-select-trigger'], {
  variants: {
    variant: {
      default: styles['ds-select-trigger--default'],
      filled: styles['ds-select-trigger--filled'],
      ghost: styles['ds-select-trigger--ghost'],
    },
    size: {
      sm: styles['ds-select-trigger--sm'],
      md: styles['ds-select-trigger--md'],
      lg: styles['ds-select-trigger--lg'],
    },
    state: {
      default: '',
      error: styles['ds-select-trigger--error'],
      success: styles['ds-select-trigger--success'],
      warning: styles['ds-select-trigger--warning'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    state: 'default',
  },
});

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  leftIcon?: React.ReactNode;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, variant, size, state, leftIcon, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ variant, size, state }), className)}
    {...props}
  >
    <div className={styles['ds-select-trigger-content']}>
      {leftIcon && (
        <div className={cn(styles['ds-select-icon'], styles['ds-select-icon--left'])}>
          {leftIcon}
        </div>
      )}
      {children}
      <SelectPrimitive.Icon asChild>
        <div className={cn(styles['ds-select-icon'], styles['ds-select-icon--chevron'])}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.93179 5.43179c.15356-.15356.40251-.15356.55607 0L7.5 7.44416l2.01214-2.01237c.15356-.15356.40251-.15356.55607 0 .15356.15356.15356.40251 0 .55607l-2.28909 2.28909c-.15356.15356-.40251.15356-.55607 0L4.93179 5.98786c-.15356-.15356-.15356-.40251 0-.55607Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </SelectPrimitive.Icon>
    </div>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

// Select ScrollUpButton
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(styles['ds-select-scroll-button'], styles['ds-select-scroll-button--up'], className)}
    {...props}
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.5 4.00005L7.5 11.0001c0 .2761-.22386.5-.5.5s-.5-.2239-.5-.5L6.5 4.00005l-3.5 3.5c-.19527.1953-.51184.1953-.70711 0-.19526-.1953-.19526-.5118 0-.7071l4.5-4.50005c.19527-.19526.51184-.19526.70711 0l4.5 4.50005c.1953.1953.1953.5118 0 .7071-.1953.1953-.5118.1953-.7071 0L7.5 4.00005Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

// Select ScrollDownButton
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(styles['ds-select-scroll-button'], styles['ds-select-scroll-button--down'], className)}
    {...props}
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.5 11.0001L7.5 4.00005c0-.27614-.22386-.5-.5-.5s-.5.22386-.5.5L6.5 11.0001l-3.5-3.5c-.19527-.1953-.51184-.1953-.70711 0-.19526.1953-.19526.5118 0 .7071l4.5 4.5c.19527.1953.51184.1953.70711 0l4.5-4.5c.1953-.1953.1953-.5118 0-.7071-.1953-.1953-.5118-.1953-.7071 0L7.5 11.0001Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

// Select Content
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(styles['ds-select-content'], className)}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className={styles['ds-select-viewport']}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

// Select Label
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(styles['ds-select-label'], className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// Select Item
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(styles['ds-select-item'], className)}
    {...props}
  >
    <span className={styles['ds-select-item-indicator']}>
      <SelectPrimitive.ItemIndicator>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.4669 3.72684c.15356-.11924.38028-.09411.50547.05627.12519.15038.10006.37709-.05627.50547l-6.94315 5.4729c-.15038.1186-.37036.1075-.50506-.0254L1.53455 7.43066c-.13819-.1384-.13819-.36252 0-.50071.1384-.13819.36252-.13819.50071 0L4.51523 9.40908l6.95167-5.68224Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// Select Separator
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(styles['ds-select-separator'], className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
