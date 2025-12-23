"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../../components/primitives/command";

export default function CommandPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem" }}>Command Component</h1>

      <p style={{ marginBottom: "2rem" }}>
        A command palette component for search and keyboard shortcuts. Perfect for creating
        command-K style interfaces.
      </p>

      <Command style={{ border: "1px solid var(--color-border-primary)", borderRadius: "var(--radius-md)" }}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>📅 Calendar</span>
            </CommandItem>
            <CommandItem>
              <span>😊 Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <span>🧮 Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <span>👤 Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>💳 Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>⚙️ Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Features</h2>
        <ul>
          <li>Built with cmdk library</li>
          <li>Fuzzy search built-in</li>
          <li>Keyboard navigation</li>
          <li>Customizable groups and items</li>
          <li>Keyboard shortcuts display</li>
        </ul>
      </div>
    </div>
  );
}

