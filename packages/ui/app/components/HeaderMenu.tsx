"use client";

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
} from '../../components/primitives/dropdown-menu';
import { Button } from '../../components/primitives/button';
import { useTheme } from '../../components/utilities/theme-provider';
import { themes, spacingVariants, type ThemeName, type SpacingVariant } from '../../tokens/themes';

export default function HeaderMenu() {
  const { theme, spacing, setTheme, setSpacing } = useTheme();

  const themeKeys = Object.keys(themes) as ThemeName[];
  const spacingKeys = Object.keys(spacingVariants) as SpacingVariant[];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={theme} onValueChange={(val) => setTheme(val as ThemeName)}>
            {themeKeys.map((key) => (
              <DropdownMenuRadioItem key={key} value={key}>
                <DropdownMenuItemIndicator />
                {themes[key].displayName}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Spacing</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={spacing} onValueChange={(val) => setSpacing(val as SpacingVariant)}>
            {spacingKeys.map((key) => (
              <DropdownMenuRadioItem key={key} value={key}>
                <DropdownMenuItemIndicator />
                {spacingVariants[key].displayName}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}


