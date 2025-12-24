"use client";

import * as React from 'react';
import { type ThemeName, type SpacingVariant, themes, spacingVariants } from '../../tokens/themes';
import { STORAGE_KEY, ATTRIBUTE } from './theme-script';

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
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

/**
 * ThemeProvider
 *
 * Manages theme and spacing state. Works in conjunction with ThemeScript
 * which prevents flash by applying the theme before React hydration.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { ThemeProvider } from '@/components/utilities/theme-provider';
 * import { ThemeScript } from '@/components/utilities/theme-script';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <head>
 *         <ThemeScript />
 *       </head>
 *       <body>
 *         <ThemeProvider>{children}</ThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function ThemeProvider({
  children,
  defaultTheme = 'base',
  defaultSpacing = 'normal',
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  // Initialize state from DOM attribute (set by ThemeScript) or default
  const [theme, setThemeState] = React.useState<ThemeName>(() => {
    // On server, use default
    if (typeof window === 'undefined') return defaultTheme;

    // On client, read from DOM attribute (set by inline script)
    const currentTheme = document.documentElement.getAttribute(ATTRIBUTE) as ThemeName | null;
    if (currentTheme && themes[currentTheme]) {
      return currentTheme;
    }

    // If no attribute, check if we should use base theme
    // (absence of attribute means base/light theme)
    return 'base';
  });

  const [spacing, setSpacingState] = React.useState<SpacingVariant>(() => {
    if (typeof window === 'undefined') return defaultSpacing;

    const currentSpacing = document.documentElement.getAttribute('data-spacing') as SpacingVariant | null;
    if (currentSpacing && spacingVariants[currentSpacing]) {
      return currentSpacing;
    }
    return 'normal';
  });

  // Apply theme to document
  const applyTheme = React.useCallback((themeName: ThemeName) => {
    const root = document.documentElement;

    // Apply new theme attribute
    if (themeName === 'base') {
      root.removeAttribute(ATTRIBUTE);
    } else {
      root.setAttribute(ATTRIBUTE, themeName);
    }

    // Apply custom CSS properties for theme (for runtime overrides)
    const themeConfig = themes[themeName];
    if (themeConfig.colors) {
      Object.entries(themeConfig.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });
    }
  }, []);

  // Apply spacing to document
  const applySpacing = React.useCallback((spacingName: SpacingVariant) => {
    const root = document.documentElement;

    // Apply spacing attribute
    if (spacingName !== 'normal') {
      root.setAttribute('data-spacing', spacingName);
    } else {
      root.removeAttribute('data-spacing');
    }

    // Apply custom CSS properties for spacing
    const spacingConfig = spacingVariants[spacingName];
    Object.entries(spacingConfig.values).forEach(([key, value]) => {
      root.style.setProperty(`--space-${key}`, value);
    });
  }, []);

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
      applyTheme(newTheme);

      // Persist to localStorage
      try {
        localStorage.setItem(`${STORAGE_KEY}-theme`, newTheme);
      } catch {
        // Ignore localStorage errors
      }
    },
    [applyTheme, disableTransitionOnChange]
  );

  const setSpacing = React.useCallback(
    (newSpacing: SpacingVariant) => {
      setSpacingState(newSpacing);
      applySpacing(newSpacing);

      // Persist to localStorage
      try {
        localStorage.setItem(`${STORAGE_KEY}-spacing`, newSpacing);
      } catch {
        // Ignore localStorage errors
      }
    },
    [applySpacing]
  );

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no manual theme is stored
      try {
        const storedTheme = localStorage.getItem(`${STORAGE_KEY}-theme`);
        if (!storedTheme) {
          const newTheme = e.matches ? 'dark' : 'base';
          setThemeState(newTheme);
          applyTheme(newTheme);
        }
      } catch {
        // Ignore localStorage errors
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystem, applyTheme]);

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
    <ThemeContext.Provider value={value}>
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
