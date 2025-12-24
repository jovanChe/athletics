"use client";

import * as React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "../../../components/primitives";
import styles from "./page.module.css";

export default function MenubarPage() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showFullUrls, setShowFullUrls] = React.useState(false);
  const [person, setPerson] = React.useState("andy");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Menubar</h1>
        <p className={styles.description}>
          A visually persistent menu common in desktop applications.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Usage</h2>
        <p className={styles.sectionDescription}>
          A menubar with File, Edit, View, and Profiles menus.
        </p>
        <div className={styles.preview}>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email Link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Always Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>
                  Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value={person} onValueChange={setPerson}>
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Code Editor Style</h2>
        <p className={styles.sectionDescription}>
          A menubar styled for a code editor application.
        </p>
        <div className={styles.preview}>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Code</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>About Visual Studio Code</MenubarItem>
                <MenubarItem>Check for Updates...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Preferences <MenubarShortcut>⌘,</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Quit <MenubarShortcut>⌘Q</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New File <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Open... <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Open Folder...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Save <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Save As...</MenubarItem>
                <MenubarItem>Save All</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Selection</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Select All <MenubarShortcut>⌘A</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Expand Selection</MenubarItem>
                <MenubarItem>Shrink Selection</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Copy Line Up</MenubarItem>
                <MenubarItem>Copy Line Down</MenubarItem>
                <MenubarItem>Move Line Up</MenubarItem>
                <MenubarItem>Move Line Down</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Terminal</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Terminal <MenubarShortcut>⌃`</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Split Terminal</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Run Task...</MenubarItem>
                <MenubarItem>Run Build Task...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      <div className={styles.componentsUsed}>
        <h3>Components Used</h3>
        <ul>
          <li>Menubar</li>
          <li>MenubarMenu</li>
          <li>MenubarTrigger</li>
          <li>MenubarContent</li>
          <li>MenubarItem</li>
          <li>MenubarSeparator</li>
          <li>MenubarShortcut</li>
          <li>MenubarCheckboxItem</li>
          <li>MenubarRadioGroup</li>
          <li>MenubarRadioItem</li>
          <li>MenubarSub</li>
          <li>MenubarSubTrigger</li>
          <li>MenubarSubContent</li>
        </ul>
      </div>
    </div>
  );
}

