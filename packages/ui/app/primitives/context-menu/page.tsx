"use client";

import * as React from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "../../../components/primitives";
import styles from "./page.module.css";

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showFullUrls, setShowFullUrls] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Context Menu</h1>
        <p className={styles.description}>
          Displays a menu located at the pointer, triggered by a right-click.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Usage</h2>
        <p className={styles.sectionDescription}>
          Right-click on the area below to open the context menu.
        </p>
        <div className={styles.preview}>
          <ContextMenu>
            <ContextMenuTrigger className={styles.trigger}>
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Print...</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>With Submenus</h2>
        <p className={styles.sectionDescription}>
          Context menus can contain nested submenus.
        </p>
        <div className={styles.preview}>
          <ContextMenu>
            <ContextMenuTrigger className={styles.trigger}>
              Right click for more options
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>New Tab</ContextMenuItem>
              <ContextMenuItem>New Window</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Save Page As...</ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuItem>Name Window...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Undo
                <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Redo
                <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>With Checkboxes</h2>
        <p className={styles.sectionDescription}>
          Use checkbox items for toggleable options.
        </p>
        <div className={styles.preview}>
          <ContextMenu>
            <ContextMenuTrigger className={styles.trigger}>
              Right click for view options
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>Appearance</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                Show Bookmarks Bar
                <ContextMenuShortcut>⇧⌘B</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={showFullUrls}
                onCheckedChange={setShowFullUrls}
              >
                Show Full URLs
              </ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>With Radio Items</h2>
        <p className={styles.sectionDescription}>
          Use radio items for mutually exclusive options.
        </p>
        <div className={styles.preview}>
          <ContextMenu>
            <ContextMenuTrigger className={styles.trigger}>
              Right click to select person
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                <ContextMenuRadioItem value="pedro">
                  Pedro Duarte
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">
                  Colm Tuite
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="dan">
                  Dan Abramov
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>File Actions Example</h2>
        <div className={styles.preview}>
          <ContextMenu>
            <ContextMenuTrigger className={styles.fileTrigger}>
              <div className={styles.fileIcon}>📄</div>
              <span>document.pdf</span>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                Open
                <ContextMenuShortcut>⌘O</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Open With...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Cut
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Email</ContextMenuItem>
                  <ContextMenuItem>Messages</ContextMenuItem>
                  <ContextMenuItem>AirDrop</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>Get Info</ContextMenuItem>
              <ContextMenuItem>Rename</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className={styles.destructive}>
                Move to Trash
                <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <div className={styles.componentsUsed}>
        <h3>Components Used</h3>
        <ul>
          <li>ContextMenu</li>
          <li>ContextMenuTrigger</li>
          <li>ContextMenuContent</li>
          <li>ContextMenuItem</li>
          <li>ContextMenuCheckboxItem</li>
          <li>ContextMenuRadioItem</li>
          <li>ContextMenuRadioGroup</li>
          <li>ContextMenuLabel</li>
          <li>ContextMenuSeparator</li>
          <li>ContextMenuShortcut</li>
          <li>ContextMenuSub</li>
          <li>ContextMenuSubTrigger</li>
          <li>ContextMenuSubContent</li>
        </ul>
      </div>
    </div>
  );
}

