"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../components/primitives";
import styles from "./page.module.css";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll Area",
    href: "/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives focus or hover.",
  },
];

export default function NavigationMenuPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Navigation Menu</h1>
        <p className={styles.description}>
          A collection of links for navigating websites with support for mega-menus.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Usage</h2>
        <p className={styles.sectionDescription}>
          A navigation menu with dropdown content panels.
        </p>
        <div className={styles.preview}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={styles.listWide}>
                    <li className={styles.listItemFeatured}>
                      <NavigationMenuLink asChild>
                        <a className={styles.featuredLink} href="/">
                          <div className={styles.featuredTitle}>
                            UI Library
                          </div>
                          <p className={styles.featuredDescription}>
                            Beautifully designed components built with Radix UI and CSS custom properties.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={styles.listLink} href="/primitives">
                          <div className={styles.listLinkTitle}>Introduction</div>
                          <p className={styles.listLinkDescription}>
                            Re-usable components built using Radix UI and design tokens.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={styles.listLink} href="/tokens">
                          <div className={styles.listLinkTitle}>Tokens</div>
                          <p className={styles.listLinkDescription}>
                            Design tokens for consistent theming across components.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={styles.listLink} href="/blocks">
                          <div className={styles.listLinkTitle}>Blocks</div>
                          <p className={styles.listLinkDescription}>
                            Pre-built page sections and layouts.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={styles.listGrid}>
                    {components.map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <a className={styles.listLink} href={component.href}>
                            <div className={styles.listLinkTitle}>{component.title}</div>
                            <p className={styles.listLinkDescription}>
                              {component.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/icons" legacyBehavior passHref>
                  <NavigationMenuLink className={styles.plainLink}>
                    Icons
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className={styles.componentsUsed}>
        <h3>Components Used</h3>
        <ul>
          <li>NavigationMenu</li>
          <li>NavigationMenuList</li>
          <li>NavigationMenuItem</li>
          <li>NavigationMenuTrigger</li>
          <li>NavigationMenuContent</li>
          <li>NavigationMenuLink</li>
        </ul>
      </div>
    </div>
  );
}

