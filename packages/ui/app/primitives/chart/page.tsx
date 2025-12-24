"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/primitives";
import type { ChartConfig } from "../../../components/primitives";
import styles from "./page.module.css";

// Sample data
const barChartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const lineChartData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
];

const areaChartData = [
  { month: "Jan", visitors: 4000 },
  { month: "Feb", visitors: 3000 },
  { month: "Mar", visitors: 5000 },
  { month: "Apr", visitors: 4780 },
  { month: "May", visitors: 5890 },
  { month: "Jun", visitors: 6390 },
];

const pieChartData = [
  { name: "Chrome", value: 275, fill: "var(--color-chrome)" },
  { name: "Safari", value: 200, fill: "var(--color-safari)" },
  { name: "Firefox", value: 187, fill: "var(--color-firefox)" },
  { name: "Edge", value: 173, fill: "var(--color-edge)" },
  { name: "Other", value: 90, fill: "var(--color-other)" },
];

// Chart configs
const barChartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-primary-600)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-primary-400)",
  },
};

const lineChartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--color-success-500)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--color-error-500)",
  },
};

const areaChartConfig: ChartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--color-primary-500)",
  },
};

const pieChartConfig: ChartConfig = {
  chrome: {
    label: "Chrome",
    color: "var(--color-primary-600)",
  },
  safari: {
    label: "Safari",
    color: "var(--color-primary-500)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--color-primary-400)",
  },
  edge: {
    label: "Edge",
    color: "var(--color-primary-300)",
  },
  other: {
    label: "Other",
    color: "var(--color-gray-400)",
  },
};

export default function ChartPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Chart</h1>
        <p className={styles.description}>
          Beautiful charts built with Recharts. Supports Bar, Line, Area, and Pie charts.
        </p>
      </div>

      {/* Bar Chart */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Bar Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle>Desktop vs Mobile Usage</CardTitle>
            <CardDescription>Visitors by device type per month</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={barChartConfig} className={styles.chart}>
              <BarChart data={barChartData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      {/* Line Chart */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Line Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
            <CardDescription>Monthly financial overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={lineChartConfig} className={styles.chart}>
              <LineChart data={lineChartData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="var(--color-expenses)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      {/* Area Chart */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Area Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle>Website Visitors</CardTitle>
            <CardDescription>Total visitors over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={areaChartConfig} className={styles.chart}>
              <AreaChart data={areaChartData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="var(--color-visitors)"
                  fill="var(--color-visitors)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      {/* Pie Chart */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pie Chart</h2>
        <Card>
          <CardHeader>
            <CardTitle>Browser Usage</CardTitle>
            <CardDescription>Distribution of visitors by browser</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={pieChartConfig} className={styles.chartPie}>
              <PieChart accessibilityLayer>
                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      {/* Components Used */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Components</h2>
        <ul className={styles.featureList}>
          <li><code>ChartContainer</code> - Wrapper with config and responsive sizing</li>
          <li><code>ChartTooltip</code> + <code>ChartTooltipContent</code> - Interactive tooltips</li>
          <li><code>ChartLegend</code> + <code>ChartLegendContent</code> - Chart legends</li>
          <li><code>BarChart</code>, <code>LineChart</code>, <code>AreaChart</code>, <code>PieChart</code> - Chart types</li>
          <li><code>CartesianGrid</code>, <code>XAxis</code>, <code>YAxis</code> - Axis components</li>
        </ul>
      </div>
    </div>
  );
}

