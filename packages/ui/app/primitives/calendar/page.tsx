"use client";

import { useState } from "react";
import { addDays, addMonths, startOfMonth } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar } from "../../../components/primitives/calendar";
import { DatePicker } from "../../../components/primitives/date-picker";
import { DateRangePicker } from "../../../components/primitives/date-range-picker";
import styles from "./page.module.css";

export default function CalendarPage() {
  // Single selection states
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [dateWithDropdown, setDateWithDropdown] = useState<Date | undefined>(new Date());

  // Range selection states
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  // Date picker states
  const [pickerDate, setPickerDate] = useState<Date | undefined>();
  const [pickerRange, setPickerRange] = useState<DateRange | undefined>();

  // Multiple selection
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(),
    addDays(new Date(), 2),
    addDays(new Date(), 5),
  ]);

  // For disabled dates example
  const disabledDays = [
    { from: addDays(new Date(), 1), to: addDays(new Date(), 3) },
    { dayOfWeek: [0, 6] }, // Weekends
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Calendar Component</h1>
        <p>A date field component that allows users to enter and edit dates.</p>
      </header>

      {/* Basic Single Selection */}
      <section className={styles.section}>
        <h2>Basic Calendar</h2>
        <p>Simple calendar with single date selection and label caption.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
            />
          </div>
        </div>
        <div className={styles.info}>
          Selected: <strong>{singleDate?.toLocaleDateString() || "None"}</strong>
        </div>
      </section>

      {/* With Dropdown Caption */}
      <section className={styles.section}>
        <h2>With Month/Year Dropdown</h2>
        <p>Calendar with dropdown selectors for month and year navigation.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="single"
              selected={dateWithDropdown}
              onSelect={setDateWithDropdown}
              captionLayout="dropdown"
            />
          </div>
        </div>
        <div className={styles.info}>
          Selected: <strong>{dateWithDropdown?.toLocaleDateString() || "None"}</strong>
        </div>
      </section>

      {/* Range Selection - Single Month */}
      <section className={styles.section}>
        <h2>Range Selection (Single Month)</h2>
        <p>Select a date range with connected visual indicators.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              captionLayout="dropdown"
            />
          </div>
        </div>
        <div className={styles.info}>
          From: <strong>{dateRange?.from?.toLocaleDateString() || "None"}</strong>
          {" → "}
          To: <strong>{dateRange?.to?.toLocaleDateString() || "None"}</strong>
        </div>
      </section>

      {/* Range Selection - Multiple Months */}
      <section className={styles.section}>
        <h2>Range Selection (Two Months)</h2>
        <p>Two-month view for easier range selection.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapperWide}>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              captionLayout="dropdown"
            />
          </div>
        </div>
      </section>

      {/* Multiple Selection */}
      <section className={styles.section}>
        <h2>Multiple Date Selection</h2>
        <p>Select multiple individual dates.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="multiple"
              selected={multipleDates}
              onSelect={setMultipleDates}
              captionLayout="dropdown"
            />
          </div>
        </div>
        <div className={styles.info}>
          Selected: <strong>{multipleDates?.length || 0} dates</strong>
          {multipleDates && multipleDates.length > 0 && (
            <span className={styles.dateList}>
              ({multipleDates.map(d => d.toLocaleDateString()).join(", ")})
            </span>
          )}
        </div>
      </section>

      {/* Date Picker (with Popover) */}
      <section className={styles.section}>
        <h2>Date Picker</h2>
        <p>Calendar opened from a button in a popover - perfect for forms.</p>
        <div className={styles.demo}>
          <DatePicker
            date={pickerDate}
            onDateChange={setPickerDate}
            placeholder="Select a date"
          />
        </div>
        <div className={styles.info}>
          Selected: <strong>{pickerDate?.toLocaleDateString() || "None"}</strong>
        </div>
      </section>

      {/* Date Range Picker (with Popover) */}
      <section className={styles.section}>
        <h2>Date Range Picker</h2>
        <p>Select a date range from a popover with two-month view.</p>
        <div className={styles.demo}>
          <DateRangePicker
            dateRange={pickerRange}
            onDateRangeChange={setPickerRange}
            placeholder="Select date range"
            numberOfMonths={2}
          />
        </div>
        <div className={styles.info}>
          From: <strong>{pickerRange?.from?.toLocaleDateString() || "None"}</strong>
          {" → "}
          To: <strong>{pickerRange?.to?.toLocaleDateString() || "None"}</strong>
        </div>
      </section>

      {/* With Week Numbers */}
      <section className={styles.section}>
        <h2>With Week Numbers</h2>
        <p>Display week numbers alongside the calendar.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
              showWeekNumber
              captionLayout="dropdown"
            />
          </div>
        </div>
      </section>

      {/* Disabled Dates */}
      <section className={styles.section}>
        <h2>Disabled Dates</h2>
        <p>Calendar with specific dates and weekends disabled.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
              disabled={disabledDays}
              captionLayout="dropdown"
            />
          </div>
        </div>
        <div className={styles.info}>
          Disabled: Next 3 days and weekends
        </div>
      </section>

      {/* Start from specific month */}
      <section className={styles.section}>
        <h2>Default Month</h2>
        <p>Start the calendar view from a specific month.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="single"
              defaultMonth={addMonths(new Date(), 3)}
              captionLayout="dropdown"
            />
          </div>
        </div>
        <div className={styles.info}>
          Default month set to 3 months from now
        </div>
      </section>

      {/* Three Months View */}
      <section className={styles.section}>
        <h2>Three Months View</h2>
        <p>Display three months at once for broader date visibility.</p>
        <div className={styles.demo}>
          <div className={styles.calendarWrapperWide}>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={3}
              captionLayout="label"
            />
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className={styles.section}>
        <h2>Features</h2>
        <ul className={styles.featureList}>
          <li>✅ Built with react-day-picker v9</li>
          <li>✅ Single, multiple, and range selection modes</li>
          <li>✅ Month/year dropdown navigation</li>
          <li>✅ Left/right arrow navigation</li>
          <li>✅ Multiple months view</li>
          <li>✅ Week numbers support</li>
          <li>✅ Disabled dates (specific dates, weekends, date ranges)</li>
          <li>✅ DatePicker component (Calendar in Popover)</li>
          <li>✅ DateRangePicker component</li>
          <li>✅ Full keyboard navigation</li>
          <li>✅ Accessible (ARIA compliant)</li>
          <li>✅ Customizable with CSS Modules</li>
          <li>✅ Design token integration</li>
        </ul>
      </section>
    </div>
  );
}
