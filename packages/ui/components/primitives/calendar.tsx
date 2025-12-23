"use client";

import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from "@radix-ui/react-icons";
import {
  DayPicker,
  type DayPickerProps,
  type DayButtonProps,
  getDefaultClassNames
} from "react-day-picker";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/calendar.module.css";

export type CalendarProps = DayPickerProps & {
  /**
   * Show week numbers column
   */
  showWeekNumber?: boolean;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  showWeekNumber,
  numberOfMonths = 1,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      numberOfMonths={numberOfMonths}
      showWeekNumber={showWeekNumber}
      className={cn(styles.calendar, className)}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
      }}
      classNames={{
        // Root & Layout
        root: cn(styles.root, defaultClassNames.root),
        months: cn(styles.months, defaultClassNames.months),
        month: cn(styles.month, defaultClassNames.month),

        // Navigation
        nav: cn(styles.nav, defaultClassNames.nav),
        button_previous: cn(styles.navButton, styles.navButtonPrevious, defaultClassNames.button_previous),
        button_next: cn(styles.navButton, styles.navButtonNext, defaultClassNames.button_next),

        // Caption / Header
        month_caption: cn(styles.monthCaption, defaultClassNames.month_caption),
        caption_label: cn(
          styles.captionLabel,
          captionLayout === "label" ? styles.captionLabelOnly : styles.captionLabelDropdown,
          defaultClassNames.caption_label
        ),

        // Dropdowns
        dropdowns: cn(styles.dropdowns, defaultClassNames.dropdowns),
        dropdown_root: cn(styles.dropdownRoot, defaultClassNames.dropdown_root),
        dropdown: cn(styles.dropdown, defaultClassNames.dropdown),
        months_dropdown: cn(styles.monthsDropdown, defaultClassNames.months_dropdown),
        years_dropdown: cn(styles.yearsDropdown, defaultClassNames.years_dropdown),

        // Grid
        month_grid: cn(styles.monthGrid, defaultClassNames.month_grid),
        weekdays: cn(styles.weekdays, defaultClassNames.weekdays),
        weekday: cn(styles.weekday, defaultClassNames.weekday),
        week: cn(styles.week, defaultClassNames.week),
        week_number_header: cn(styles.weekNumberHeader, defaultClassNames.week_number_header),
        week_number: cn(styles.weekNumber, defaultClassNames.week_number),

        // Days
        day: cn(
          styles.day,
          showWeekNumber
            ? styles.dayWithWeekNumber
            : styles.dayWithoutWeekNumber,
          defaultClassNames.day
        ),
        day_button: cn(styles.dayButton, defaultClassNames.day_button),

        // States
        selected: cn(styles.selected, defaultClassNames.selected),
        today: cn(styles.today, defaultClassNames.today),
        outside: cn(styles.outside, defaultClassNames.outside),
        disabled: cn(styles.disabled, defaultClassNames.disabled),
        hidden: cn(styles.hidden, defaultClassNames.hidden),

        // Range
        range_start: cn(styles.rangeStart, defaultClassNames.range_start),
        range_middle: cn(styles.rangeMiddle, defaultClassNames.range_middle),
        range_end: cn(styles.rangeEnd, defaultClassNames.range_end),

        ...classNames,
      }}
      components={{
        Chevron: ({ className: chevronClassName, orientation, ...chevronProps }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn(styles.chevron, chevronClassName)} {...chevronProps} />;
          }
          if (orientation === "right") {
            return <ChevronRightIcon className={cn(styles.chevron, chevronClassName)} {...chevronProps} />;
          }
          // For dropdowns
          return <ChevronDownIcon className={cn(styles.chevronDown, chevronClassName)} {...chevronProps} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...weekProps }) => (
          <td {...weekProps}>
            <div className={styles.weekNumberCell}>{children}</div>
          </td>
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

// Custom DayButton for better state handling
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: DayButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button
      ref={ref}
      type="button"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(styles.dayButton, className)}
      {...props}
    />
  );
}

export { Calendar };
