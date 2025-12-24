"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/input-otp.module.css";

export interface InputOTPProps
  extends React.ComponentPropsWithoutRef<typeof OTPInput> {}

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOTPProps
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(styles.container, containerClassName)}
    className={cn(styles.input, className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

export interface InputOTPGroupProps extends React.ComponentPropsWithoutRef<"div"> {}

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPGroupProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.group, className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

export interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"div"> {
  index: number;
}

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSlotProps
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index];
  
  if (!slot) {
    return null;
  }

  const { char, hasFakeCaret, isActive } = slot;

  return (
    <div
      ref={ref}
      className={cn(
        styles.slot,
        isActive && styles.slotActive,
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={styles.caretContainer}>
          <div className={styles.caret} />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

export interface InputOTPSeparatorProps extends React.ComponentPropsWithoutRef<"div"> {}

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  InputOTPSeparatorProps
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" className={styles.separator} {...props}>
    <Minus className={styles.separatorIcon} />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

