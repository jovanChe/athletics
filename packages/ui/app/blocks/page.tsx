import Link from "next/link";
import styles from "./page.module.css";

const blocks = [
  {
    category: "Authentication",
    items: [
      { href: "/blocks/login-01", label: "Login 01", description: "Simple login form with email and password" },
      { href: "/blocks/login-02", label: "Login 02", description: "Login with social providers" },
      { href: "/blocks/signup-01", label: "Signup 01", description: "Registration form with validation" },
    ],
  },
  {
    category: "Dashboard",
    items: [
      { href: "/blocks/dashboard-01", label: "Dashboard 01", description: "Analytics dashboard with cards and charts" },
    ],
  },
  {
    category: "Settings",
    items: [
      { href: "/blocks/settings-01", label: "Settings 01", description: "User settings page with tabs" },
    ],
  },
];

export default function BlocksIndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Blocks</h1>
        <p className={styles.description}>
          Pre-built UI blocks that combine multiple components into ready-to-use patterns.
          Copy and customize them for your projects.
        </p>
      </div>

      {blocks.map((category) => (
        <section key={category.category} className={styles.section}>
          <h2 className={styles.sectionTitle}>{category.category}</h2>
          <div className={styles.grid}>
            {category.items.map((item) => (
              <Link key={item.href} href={item.href} className={styles.card}>
                <span className={styles.cardLabel}>{item.label}</span>
                <span className={styles.cardDescription}>{item.description}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
