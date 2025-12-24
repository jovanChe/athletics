"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "../utilities/cn";
import styles from "../../styles/components/chart.module.css";

// Chart configuration type
export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  };
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

// ChartContainer - Wrapper component that provides context and styling
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn(styles.container, className)}
        style={
          {
            ...Object.entries(config).reduce((acc, [key, value]) => {
              if (value.color) {
                acc[`--color-${key}`] = value.color;
              }
              return acc;
            }, {} as Record<string, string>),
          } as React.CSSProperties
        }
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

// ChartTooltip - Custom tooltip component
const ChartTooltip = RechartsPrimitive.Tooltip;

// ChartTooltipContent - Custom tooltip content
const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
      labelFormatter?: (label: string, payload: unknown[]) => React.ReactNode;
      formatter?: (value: unknown, name: string, item: unknown, index: number, payload: unknown[]) => React.ReactNode;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelKey,
      nameKey,
      formatter,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const item = payload[0];
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = config[key] || config[item?.dataKey as string];
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter && payload) {
        return labelFormatter(value as string, payload);
      }

      return value;
    }, [label, labelFormatter, payload, hideLabel, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    return (
      <div ref={ref} className={cn(styles.tooltip, className)}>
        {!hideLabel && tooltipLabel && (
          <div className={styles.tooltipLabel}>{tooltipLabel}</div>
        )}
        <div className={styles.tooltipContent}>
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = config[key] || config[item.dataKey as string];
            const indicatorColor = item.color || itemConfig?.color;

            return (
              <div
                key={item.dataKey || index}
                className={styles.tooltipItem}
              >
                {!hideIndicator && (
                  <div
                    className={cn(
                      styles.tooltipIndicator,
                      indicator === "dot" && styles.indicatorDot,
                      indicator === "line" && styles.indicatorLine,
                      indicator === "dashed" && styles.indicatorDashed
                    )}
                    style={
                      {
                        "--indicator-color": indicatorColor,
                      } as React.CSSProperties
                    }
                  />
                )}
                <div className={styles.tooltipItemContent}>
                  <span className={styles.tooltipItemLabel}>
                    {itemConfig?.label || item.name}
                  </span>
                  <span className={styles.tooltipItemValue}>
                    {formatter
                      ? formatter(item.value, item.name as string, item, index, payload)
                      : item.value?.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// ChartLegend - Custom legend component
const ChartLegend = RechartsPrimitive.Legend;

// ChartLegendContent - Custom legend content
const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        styles.legend,
        verticalAlign === "top" && styles.legendTop,
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = config[key] || config[item.dataKey as string];

        return (
          <div key={item.value} className={styles.legendItem}>
            {!hideIcon && (
              <div
                className={styles.legendIcon}
                style={
                  {
                    "--legend-color": item.color || itemConfig?.color,
                  } as React.CSSProperties
                }
              />
            )}
            <span className={styles.legendLabel}>
              {itemConfig?.label || item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

// Re-export commonly used Recharts components for convenience
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChart,
};

// Re-export Recharts primitives
export {
  RechartsPrimitive as Recharts,
};

// Convenience exports for common chart types
export const BarChart = RechartsPrimitive.BarChart;
export const Bar = RechartsPrimitive.Bar;
export const LineChart = RechartsPrimitive.LineChart;
export const Line = RechartsPrimitive.Line;
export const AreaChart = RechartsPrimitive.AreaChart;
export const Area = RechartsPrimitive.Area;
export const PieChart = RechartsPrimitive.PieChart;
export const Pie = RechartsPrimitive.Pie;
export const RadialBarChart = RechartsPrimitive.RadialBarChart;
export const RadialBar = RechartsPrimitive.RadialBar;
export const CartesianGrid = RechartsPrimitive.CartesianGrid;
export const XAxis = RechartsPrimitive.XAxis;
export const YAxis = RechartsPrimitive.YAxis;
export const Cell = RechartsPrimitive.Cell;
export const Sector = RechartsPrimitive.Sector;

