"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "../utilities/cn";
import { Button } from "./button";
import { Calendar, type CalendarProps } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import styles from "../../styles/components/date-picker.module.css";

export interface DatePickerProps {
  /** Selected date */
  date?: Date;
  /** Callback when date changes */
  onDateChange?: (date: Date | undefined) => void;
  /** Placeholder text when no date selected */
  placeholder?: string;
  /** Date format string (date-fns format) */
  dateFormat?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Calendar props to pass through */
  calendarProps?: Omit<CalendarProps, "mode" | "selected" | "onSelect">;
  /** Custom className for trigger button */
  className?: string;
  /** Popover alignment */
  align?: "start" | "center" | "end";
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  dateFormat = "PPP",
  disabled = false,
  calendarProps,
  className,
  align = "start",
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    onDateChange?.(selectedDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            styles.trigger,
            !date && styles.placeholder,
            className
          )}
          disabled={disabled}
          leftIcon={<CalendarIcon className={styles.icon} />}
        >
          {date ? format(date, dateFormat) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles.content} align={align}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          captionLayout="dropdown"
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}
DatePicker.displayName = "DatePicker";

export { DatePicker };

