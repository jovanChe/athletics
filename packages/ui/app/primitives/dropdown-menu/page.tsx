"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
} from "../../../components/primitives/dropdown-menu";
import { Button } from "../../../components/primitives/button";
import { Avatar } from "../../../components/primitives/avatar";

export default function DropdownMenuPage() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  // Animated Hamburger Icon
  const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div
      style={{
        width: "24px",
        height: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
    >
      <span
        style={{
          width: "100%",
          height: "2px",
          background: "currentColor",
          transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          transition: "transform 0.2s",
        }}
      />
      <span
        style={{
          width: "100%",
          height: "2px",
          background: "currentColor",
          opacity: isOpen ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      />
      <span
        style={{
          width: "100%",
          height: "2px",
          background: "currentColor",
          transform: isOpen ? "rotate(-45deg) translate(7px, -6px)" : "none",
          transition: "transform 0.2s",
        }}
      />
    </div>
  );

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-lg)' }}>
        Dropdown Menu
      </h1>
      <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2xl)' }}>
        Displays a menu to the user—such as a set of actions or functions—triggered by a button.
      </p>

      {/* Three Different Triggers */}
      <section style={{ marginBottom: 'var(--space-3xl)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-lg)' }}>
          Triggers: Button, Avatar, Animated Menu Icon
        </h2>

        <div style={{
          padding: 'var(--space-lg)',
          background: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-primary)',
          display: 'flex',
          gap: 'var(--space-lg)',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {/* Button Trigger */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  New Window <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  New Incognito Window <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Print</DropdownMenuItem>
                <DropdownMenuItem>Save As...</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>History</DropdownMenuItem>
                <DropdownMenuItem>Find in Page</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings <DropdownMenuShortcut>⌘,</DropdownMenuShortcut></DropdownMenuItem>
                <DropdownMenuItem>Extensions</DropdownMenuItem>
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>

          {/* Avatar Trigger */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div style={{ cursor: 'pointer' }}>
                <Avatar.Root>
                  <Avatar.Image
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Colm Tuite"
                  />
                  <Avatar.Fallback delayMs={600}>
                    CT
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>Colm Tuite</span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>colm@example.com</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Account Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={bookmarksChecked}
                  onCheckedChange={setBookmarksChecked}
                >
                  <DropdownMenuItemIndicator />
                  Show Bookmarks
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={urlsChecked}
                  onCheckedChange={setUrlsChecked}
                >
                  <DropdownMenuItemIndicator />
                  Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Team Settings</DropdownMenuItem>
                <DropdownMenuItem>Invite Members</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>

          {/* Animated Menu Icon Trigger */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'background 0.2s',
                }}
              >
                <HamburgerIcon isOpen={false} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent>
                <DropdownMenuLabel>Projects</DropdownMenuLabel>
                <DropdownMenuItem>View All Projects</DropdownMenuItem>
                <DropdownMenuItem>Create New Project</DropdownMenuItem>
                <DropdownMenuItem>Import Project <DropdownMenuShortcut>⌘I</DropdownMenuShortcut></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Recent Files</DropdownMenuItem>
                <DropdownMenuItem>Starred Files</DropdownMenuItem>
                <DropdownMenuItem>Shared with Me</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Team</DropdownMenuLabel>
                <DropdownMenuItem>Team Members</DropdownMenuItem>
                <DropdownMenuItem>Team Settings</DropdownMenuItem>
                <DropdownMenuCheckboxItem checked>
                  <DropdownMenuItemIndicator />
                  Online Status
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                  <DropdownMenuRadioItem value="light">
                    <DropdownMenuItemIndicator />
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    <DropdownMenuItemIndicator />
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    <DropdownMenuItemIndicator />
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Preferences <DropdownMenuShortcut>⌘,</DropdownMenuShortcut></DropdownMenuItem>
                <DropdownMenuItem>Keyboard Shortcuts</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </div>
      </section>

      {/* Code Example */}
      <section style={{ marginBottom: 'var(--space-3xl)' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-md)' }}>
          Code Example
        </h2>
        <pre style={{
          padding: 'var(--space-md)',
          background: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-primary)',
          overflow: 'auto',
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-family-mono)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
{`import { DropdownMenu } from "@repo/ui";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuPortal>
    <DropdownMenuContent>
      <DropdownMenuItem>
        New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
        <DropdownMenuItemIndicator />
        Show Bookmarks
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenuPortal>
</DropdownMenu>`}
        </pre>
      </section>
    </div>
  );
}
