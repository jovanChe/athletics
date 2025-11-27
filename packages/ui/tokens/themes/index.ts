/**
 * Theme System
 * Runtime theme switching and brand customization
 */

export interface ThemeConfig {
  name: string;
  displayName: string;
  colors?: Record<string, string>;
  spacing?: Record<string, string>;
  radius?: Record<string, string>;
  typography?: Record<string, string>;
  shadows?: Record<string, string>;
  animation?: Record<string, string>;
}

// Base theme (default)
export const baseTheme: ThemeConfig = {
  name: 'base',
  displayName: 'Base Theme',
};

// Dark theme
export const darkTheme: ThemeConfig = {
  name: 'dark',
  displayName: 'Dark Theme',
};

// Athletics brand theme
export const athleticsTheme: ThemeConfig = {
  name: 'athletics',
  displayName: 'Athletics Brand',
  colors: {
    'primary-50': '#f0f9ff',
    'primary-100': '#e0f2fe',
    'primary-200': '#bae6fd',
    'primary-300': '#7dd3fc',
    'primary-400': '#38bdf8',
    'primary-500': '#0ea5e9',
    'primary-600': '#0284c7',
    'primary-700': '#0369a1',
    'primary-800': '#075985',
    'primary-900': '#0c4a6e',
  },
};

// Purple theme
export const purpleTheme: ThemeConfig = {
  name: 'purple',
  displayName: 'Purple Theme',
  colors: {
    'primary-50': '#faf5ff',
    'primary-100': '#f3e8ff',
    'primary-200': '#e9d5ff',
    'primary-300': '#d8b4fe',
    'primary-400': '#c084fc',
    'primary-500': '#a855f7',
    'primary-600': '#9333ea',
    'primary-700': '#7c3aed',
    'primary-800': '#6b21a8',
    'primary-900': '#581c87',
  },
};

// High contrast theme
export const highContrastTheme: ThemeConfig = {
  name: 'high-contrast',
  displayName: 'High Contrast',
  colors: {
    'text-primary': '#000000',
    'text-secondary': '#333333',
    'bg-primary': '#ffffff',
    'border-primary': '#000000',
    'border-secondary': '#333333',
    'interactive-primary': '#000000',
    'interactive-primary-hover': '#333333',
    'button-primary-bg': '#000000',
    'button-primary-text': '#ffffff',
    'button-secondary-bg': '#ffffff',
    'button-secondary-text': '#000000',
    'button-secondary-border': '#000000',
  },
};

// All available themes
export const themes = {
  base: baseTheme,
  dark: darkTheme,
  athletics: athleticsTheme,
  purple: purpleTheme,
  'high-contrast': highContrastTheme,
} as const;

export type ThemeName = keyof typeof themes;

// Spacing variants
export interface SpacingConfig {
  name: string;
  displayName: string;
  values: Record<string, string>;
}

export const spacingVariants = {
  compact: {
    name: 'compact',
    displayName: 'Compact',
    values: {
      'button-x': '0.5rem',
      'button-y': '0.25rem',
      'input-x': '0.5rem',
      'input-y': '0.25rem',
    },
  },
  normal: {
    name: 'normal',
    displayName: 'Normal',
    values: {
      'button-x': '0.75rem',
      'button-y': '0.5rem',
      'input-x': '0.75rem',
      'input-y': '0.5rem',
    },
  },
  comfortable: {
    name: 'comfortable',
    displayName: 'Comfortable',
    values: {
      'button-x': '1rem',
      'button-y': '0.75rem',
      'input-x': '1rem',
      'input-y': '0.75rem',
    },
  },
} as const;

export type SpacingVariant = keyof typeof spacingVariants;
