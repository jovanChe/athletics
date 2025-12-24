"use client";

import {
  EmptyState,
  Button,
  Card,
  CardContent,
} from "../../../components/primitives";
import styles from "./page.module.css";

// Icons for demo
const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

export default function EmptyStatePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Empty State</h1>
        <p className={styles.description}>
          A placeholder component for empty content areas with icon, title, description, and optional action.
        </p>
      </div>

      {/* Basic Example */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Example</h2>
        <Card>
          <CardContent className={styles.demoCard}>
            <EmptyState
              icon={<InboxIcon />}
              title="No messages"
              description="You don't have any messages yet. When you receive a message, it will appear here."
            />
          </CardContent>
        </Card>
      </section>

      {/* With Action */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>With Action</h2>
        <Card>
          <CardContent className={styles.demoCard}>
            <EmptyState
              icon={<FileIcon />}
              title="No files uploaded"
              description="Upload your first file to get started."
              action={<Button>Upload File</Button>}
            />
          </CardContent>
        </Card>
      </section>

      {/* Search Results */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Search Results</h2>
        <Card>
          <CardContent className={styles.demoCard}>
            <EmptyState
              icon={<SearchIcon />}
              title="No results found"
              description="We couldn't find anything matching your search. Try different keywords."
              action={
                <div style={{ display: "flex", gap: "var(--space-sm)" }}>
                  <Button variant="outline">Clear Search</Button>
                  <Button>Browse All</Button>
                </div>
              }
            />
          </CardContent>
        </Card>
      </section>

      {/* Size Variants */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Size Variants</h2>
        <div className={styles.sizeGrid}>
          <Card>
            <CardContent className={styles.demoCardSmall}>
              <EmptyState
                size="sm"
                icon={<ImageIcon />}
                title="No images"
                description="Upload some images"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles.demoCard}>
              <EmptyState
                size="md"
                icon={<ImageIcon />}
                title="No images"
                description="Upload some images to see them here."
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles.demoCardLarge}>
              <EmptyState
                size="lg"
                icon={<ImageIcon />}
                title="No images"
                description="Upload some images to see them here. You can drag and drop or click to browse."
                action={<Button>Upload Images</Button>}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Props */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Props</h2>
        <ul className={styles.featureList}>
          <li><code>icon</code> - Icon to display</li>
          <li><code>title</code> - Main title (required)</li>
          <li><code>description</code> - Description text</li>
          <li><code>action</code> - Action buttons or links</li>
          <li><code>size</code> - sm | md | lg</li>
        </ul>
      </div>
    </div>
  );
}

