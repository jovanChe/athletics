/**
 * Theme Script
 * Inline script that runs before React hydration to prevent theme flash (FOUC)
 *
 * This must be included in the <head> of the document to run synchronously
 * before the page renders.
 */

const STORAGE_KEY = 'ds-theme';
const ATTRIBUTE = 'data-theme';

// This script will be injected inline and run before React hydration
const themeScript = `
(function() {
  const STORAGE_KEY = '${STORAGE_KEY}';
  const ATTRIBUTE = '${ATTRIBUTE}';

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY + '-theme');
    } catch {
      return null;
    }
  }

  function getSystemTheme() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'base';
    }
    return 'base';
  }

  function applyTheme(theme) {
    const root = document.documentElement;

    if (theme && theme !== 'base') {
      root.setAttribute(ATTRIBUTE, theme);
    } else {
      root.removeAttribute(ATTRIBUTE);
    }
  }

  // Get theme: stored preference > system preference > default
  const storedTheme = getStoredTheme();
  const theme = storedTheme || getSystemTheme();

  // Apply theme immediately (before React renders)
  applyTheme(theme);

  // Also apply spacing if stored
  try {
    const storedSpacing = localStorage.getItem(STORAGE_KEY + '-spacing');
    if (storedSpacing && storedSpacing !== 'normal') {
      document.documentElement.setAttribute('data-spacing', storedSpacing);
    }
  } catch {}
})();
`;

/**
 * ThemeScript component
 *
 * Include this in your root layout's <head> to prevent theme flash.
 * It injects an inline script that runs synchronously before React hydration.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { ThemeScript } from '@/components/utilities/theme-script';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <head>
 *         <ThemeScript />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 * ```
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      // Suppress hydration warning since this is intentionally different on server/client
      suppressHydrationWarning
    />
  );
}

// Export storage key and attribute for use by ThemeProvider
export { STORAGE_KEY, ATTRIBUTE };

