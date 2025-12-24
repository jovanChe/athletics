"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Avatar,
  Badge,
  StatCard,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "../../../components/primitives";
import type { ChartConfig } from "../../../components/primitives";
import styles from "./page.module.css";

const stats = [
  { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", changeType: "positive" as const, trend: "up" as const, description: "from last month" },
  { title: "Subscriptions", value: "+2,350", change: "+180.1%", changeType: "positive" as const, trend: "up" as const, description: "from last month" },
  { title: "Sales", value: "+12,234", change: "+19%", changeType: "positive" as const, trend: "up" as const, description: "from last month" },
  { title: "Active Now", value: "+573", change: "+201", changeType: "neutral" as const, description: "since last hour" },
];

const recentSales = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
];

const chartData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4780 },
  { month: "May", revenue: 5890 },
  { month: "Jun", revenue: 6390 },
  { month: "Jul", revenue: 5200 },
  { month: "Aug", revenue: 6800 },
  { month: "Sep", revenue: 7100 },
  { month: "Oct", revenue: 6500 },
  { month: "Nov", revenue: 7800 },
  { month: "Dec", revenue: 8200 },
];

const chartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--color-primary-600)",
  },
};

export default function Dashboard01Page() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard 01</h1>
        <p className={styles.description}>
          Analytics dashboard with stat cards, charts, and recent activity.
        </p>
      </div>

      <div className={styles.preview}>
        <div className={styles.dashboard}>
          {/* Stats Grid using StatCard */}
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeType={stat.changeType}
                trend={stat.trend}
                description={stat.description}
              />
            ))}
          </div>

          {/* Content Grid */}
          <div className={styles.contentGrid}>
            {/* Chart using Chart component */}
            <Card className={styles.chartCard}>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className={styles.chart}>
                  <BarChart data={chartData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          formatter={(value) => `$${Number(value).toLocaleString()}`}
                        />
                      }
                    />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Recent Sales using Avatar component */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.salesList}>
                  {recentSales.map((sale) => (
                    <div key={sale.email} className={styles.saleItem}>
                      <Avatar.Root>
                        <Avatar.Fallback>
                          {sale.name.split(" ").map((n) => n[0]).join("")}
                        </Avatar.Fallback>
                      </Avatar.Root>
                      <div className={styles.saleInfo}>
                        <p className={styles.saleName}>{sale.name}</p>
                        <p className={styles.saleEmail}>{sale.email}</p>
                      </div>
                      <Badge variant="outline" className={styles.saleAmount}>
                        {sale.amount}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Components Used</h2>
        <ul className={styles.featureList}>
          <li>StatCard - for metric display with change indicators</li>
          <li>Card, CardHeader, CardTitle, CardDescription, CardContent</li>
          <li>Badge - for amounts</li>
          <li>Avatar - for user initials in sales list</li>
          <li>ChartContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis - for revenue chart</li>
          <li>ChartTooltip, ChartTooltipContent - for interactive chart tooltips</li>
        </ul>
      </div>
    </div>
  );
}
