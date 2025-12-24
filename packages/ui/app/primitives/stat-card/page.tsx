"use client";

import * as React from "react";
import { StatCard, Button } from "../../../components/primitives";
import styles from "./page.module.css";

// Icons for demo
const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

export default function StatCardPage() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Stat Card</h1>
        <p className={styles.description}>
          A specialized card component for displaying metrics and statistics with change indicators.
        </p>
      </div>

      {/* Basic Example */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Example</h2>
        <div className={styles.grid}>
          <StatCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1%"
            changeType="positive"
            trend="up"
            description="from last month"
          />
          <StatCard
            title="Active Users"
            value="2,350"
            change="+180"
            changeType="positive"
            trend="up"
            description="from last week"
          />
          <StatCard
            title="Bounce Rate"
            value="12.5%"
            change="-3.2%"
            changeType="negative"
            trend="down"
            description="from last month"
          />
          <StatCard
            title="Avg. Session"
            value="3m 42s"
            change="0%"
            changeType="neutral"
            description="no change"
          />
        </div>
      </section>

      {/* With Icons */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>With Icons</h2>
        <div className={styles.grid}>
          <StatCard
            title="Revenue"
            value="$12,345"
            change="+12%"
            changeType="positive"
            icon={<DollarIcon />}
          />
          <StatCard
            title="Users"
            value="1,234"
            change="+5%"
            changeType="positive"
            icon={<UsersIcon />}
          />
          <StatCard
            title="Growth"
            value="23.5%"
            change="+2.4%"
            changeType="positive"
            icon={<ChartIcon />}
          />
        </div>
      </section>

      {/* Loading State */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Loading State</h2>
        <div className={styles.controls}>
          <Button onClick={() => setLoading(!loading)}>
            {loading ? "Show Data" : "Show Loading"}
          </Button>
        </div>
        <div className={styles.grid}>
          <StatCard
            title="Revenue"
            value="$45,231.89"
            change="+20.1%"
            changeType="positive"
            loading={loading}
          />
          <StatCard
            title="Users"
            value="2,350"
            change="+180"
            changeType="positive"
            loading={loading}
          />
        </div>
      </section>

      {/* Change Types */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Change Types</h2>
        <div className={styles.grid}>
          <StatCard
            title="Positive Change"
            value="$1,234"
            change="+15%"
            changeType="positive"
            trend="up"
          />
          <StatCard
            title="Negative Change"
            value="$987"
            change="-8%"
            changeType="negative"
            trend="down"
          />
          <StatCard
            title="Neutral Change"
            value="$500"
            change="0%"
            changeType="neutral"
          />
        </div>
      </section>

      {/* Props */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Props</h2>
        <ul className={styles.featureList}>
          <li><code>title</code> - Label for the stat</li>
          <li><code>value</code> - Main value to display</li>
          <li><code>description</code> - Optional description below the value</li>
          <li><code>change</code> - Change indicator (e.g., &quot;+20.1%&quot;)</li>
          <li><code>changeType</code> - positive | negative | neutral</li>
          <li><code>trend</code> - up | down | stable (adds arrow)</li>
          <li><code>icon</code> - Optional icon</li>
          <li><code>loading</code> - Shows skeleton state</li>
        </ul>
      </div>
    </div>
  );
}

