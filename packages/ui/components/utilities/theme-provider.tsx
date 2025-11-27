"use client";

import * as React from 'react';
import { type ThemeName, type SpacingVariant, themes, spacingVariants } from '../../tokens/themes';

interface ThemeContextValue {
  theme: ThemeName;
  spacing: SpacingVariant;
  setTheme: (theme: ThemeName) => void;
  setSpacing: (spacing: SpacingVariant) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  defaultSpacing?: SpacingVariant;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = 'base',
  defaultSpacing = 'normal',
  storageKey = 'ds-theme',
  attribute = 'data-theme',
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<ThemeName>(defaultTheme);
  const [spacing, setSpacingState] = React.useState<SpacingVariant>(defaultSpacing);

  // Apply theme to document
  const applyTheme = React.useCallback((themeName: ThemeName, spacingName: SpacingVariant) => {
    const root = window.document.documentElement;

    // Remove existing theme attributes
    Object.keys(themes).forEach(name => {
      root.removeAttribute(`data-theme-${name}`);
    });

    // Remove existing spacing attributes
    Object.keys(spacingVariants).forEach(name => {
      root.removeAttribute(`data-spacing-${name}`);
    });

    // Apply new theme
    if (themeName === 'base') {
      root.removeAttribute(attribute);
    } else {
      root.setAttribute(attribute, themeName);
    }

    // Apply spacing variant
    if (spacingName !== 'normal') {
      root.setAttribute('data-spacing', spacingName);
    } else {
      root.removeAttribute('data-spacing');
    }

    // Apply custom CSS properties for theme
    const themeConfig = themes[themeName];
    if (themeConfig.colors) {
      Object.entries(themeConfig.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });
    }

    // Apply custom CSS properties for spacing
    const spacingConfig = spacingVariants[spacingName];
    Object.entries(spacingConfig.values).forEach(([key, value]) => {
      root.style.setProperty(`--space-${key}`, value);
    });
  }, [attribute]);

  const setTheme = React.useCallback(
    (newTheme: ThemeName) => {
      if (disableTransitionOnChange) {
        const css = document.createElement('style');
        css.appendChild(
          document.createTextNode(
            `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
          )
        );
        document.head.appendChild(css);

        // Force style recalculation
        window.getComputedStyle(document.body);

        requestAnimationFrame(() => {
          document.head.removeChild(css);
        });
      }

      setThemeState(newTheme);

      try {
        localStorage.setItem(`${storageKey}-theme`, newTheme);
      } catch {
        // Ignore localStorage errors
      }
    },
    [storageKey, disableTransitionOnChange]
  );

  const setSpacing = React.useCallback(
    (newSpacing: SpacingVariant) => {
      setSpacingState(newSpacing);

      try {
        localStorage.setItem(`${storageKey}-spacing`, newSpacing);
      } catch {
        // Ignore localStorage errors
      }
    },
    [storageKey]
  );

  // Initialize theme from localStorage or system preference
  React.useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(`${storageKey}-theme`) as ThemeName;
      const storedSpacing = localStorage.getItem(`${storageKey}-spacing`) as SpacingVariant;

      if (storedTheme && themes[storedTheme]) {
        setThemeState(storedTheme);
      } else if (enableSystem) {
        // Check system preference
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'base';
        setThemeState(systemTheme);
      }

      if (storedSpacing && spacingVariants[storedSpacing]) {
        setSpacingState(storedSpacing);
      }
    } catch {
      // Ignore localStorage errors, use defaults
    }
  }, [storageKey, enableSystem]);

  // Apply theme whenever it changes
  React.useEffect(() => {
    applyTheme(theme, spacing);
  }, [theme, spacing, applyTheme]);

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no manual theme is stored
      try {
        const storedTheme = localStorage.getItem(`${storageKey}-theme`);
        if (!storedTheme) {
          setThemeState(e.matches ? 'dark' : 'base');
        }
      } catch {
        // Ignore localStorage errors
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystem, storageKey]);

  const value = React.useMemo(
    () => ({
      theme,
      spacing,
      setTheme,
      setSpacing,
    }),
    [theme, spacing, setTheme, setSpacing]
  );

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
