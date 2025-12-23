"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { cn } from "../utilities/cn";
import { Button } from "./button";
import { Calendar, type CalendarProps } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import styles from "../../styles/components/date-picker.module.css";

export interface DateRangePickerProps {
  /** Selected date range */
  dateRange?: DateRange;
  /** Callback when date range changes */
  onDateRangeChange?: (range: DateRange | undefined) => void;
  /** Placeholder text when no date selected */
  placeholder?: string;
  /** Date format string (date-fns format) */
  dateFormat?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Number of months to display */
  numberOfMonths?: number;
  /** Calendar props to pass through */
  calendarProps?: Omit<CalendarProps, "mode" | "selected" | "onSelect" | "numberOfMonths">;
  /** Custom className for trigger button */
  className?: string;
  /** Popover alignment */
  align?: "start" | "center" | "end";
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Pick a date range",
  dateFormat = "LLL dd, y",
  disabled = false,
  numberOfMonths = 2,
  calendarProps,
  className,
  align = "start",
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);

  const formatDateRange = () => {
    if (!dateRange?.from) return placeholder;

    if (dateRange.to) {
      return `${format(dateRange.from, dateFormat)} - ${format(dateRange.to, dateFormat)}`;
    }

    return format(dateRange.from, dateFormat);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            styles.trigger,
            styles.rangeTrigger,
            !dateRange?.from && styles.placeholder,
            className
          )}
          disabled={disabled}
          leftIcon={<CalendarIcon className={styles.icon} />}
        >
          {formatDateRange()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles.rangeContent} align={align}>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={numberOfMonths}
          captionLayout="dropdown"
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}
DateRangePicker.displayName = "DateRangePicker";

export { DateRangePicker };
export type { DateRange };

