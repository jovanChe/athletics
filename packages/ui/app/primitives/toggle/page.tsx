"use client";

import * as React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle, ToggleGroup, ToggleGroupItem } from "../../../components/primitives";
import styles from "./page.module.css";

export default function TogglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Toggle</h1>
        <p className={styles.description}>
          A two-state button that can be either on or off.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Toggle</h2>
        <div className={styles.preview}>
          <Toggle aria-label="Toggle bold">
            <Bold />
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>With Text</h2>
        <div className={styles.preview}>
          <Toggle aria-label="Toggle italic">
            <Italic />
            Italic
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Outline Variant</h2>
        <div className={styles.preview}>
          <Toggle variant="outline" aria-label="Toggle underline">
            <Underline />
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Sizes</h2>
        <div className={styles.preview}>
          <Toggle size="sm" aria-label="Toggle small">
            <Bold />
          </Toggle>
          <Toggle size="default" aria-label="Toggle default">
            <Bold />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Bold />
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Disabled</h2>
        <div className={styles.preview}>
          <Toggle disabled aria-label="Toggle disabled">
            <Bold />
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Toggle Group (Single)</h2>
        <p className={styles.sectionDescription}>
          Only one item can be selected at a time.
        </p>
        <div className={styles.preview}>
          <ToggleGroup type="single" defaultValue="bold">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Toggle Group (Multiple)</h2>
        <p className={styles.sectionDescription}>
          Multiple items can be selected at once.
        </p>
        <div className={styles.preview}>
          <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Toggle Group with Labels</h2>
        <div className={styles.preview}>
          <ToggleGroup type="single" defaultValue="grid">
            <ToggleGroupItem value="list">
              List View
            </ToggleGroupItem>
            <ToggleGroupItem value="grid">
              Grid View
            </ToggleGroupItem>
            <ToggleGroupItem value="columns">
              Columns
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Toggle Group Sizes</h2>
        <div className={styles.preview}>
          <ToggleGroup type="single" size="sm" defaultValue="a">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="default" defaultValue="a">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg" defaultValue="a">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={styles.componentsUsed}>
        <h3>Components Used</h3>
        <ul>
          <li>Toggle</li>
          <li>ToggleGroup</li>
          <li>ToggleGroupItem</li>
        </ul>
      </div>
    </div>
  );
}

