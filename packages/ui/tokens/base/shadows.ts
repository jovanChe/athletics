/**
 * Base shadow tokens - Elevation system
 * Consistent shadow levels for depth and hierarchy
 */

export const baseShadows = {
  // Elevation shadows
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Component-specific shadows
  button: {
    default: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    hover: '0 2px 4px 0 rgb(0 0 0 / 0.1)',
    pressed: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.1)',
  },

  dialog: {
    overlay: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    content: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  dropdown: {
    default: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },

  // Focus shadows (for accessibility)
  focus: {
    ring: '0 0 0 2px var(--color-focus-ring)',
    outline: '0 0 0 1px var(--color-focus-outline)',
  },
} as const;

export type BaseShadows = typeof baseShadows;
