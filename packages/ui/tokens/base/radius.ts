/**
 * Base border radius tokens
 * Consistent rounded corner system
 */

export const baseRadius = {
  none: '0',
  xs: '0.125rem',    // 2px
  sm: '0.25rem',     // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',    // Fully rounded

  // Component-specific radius
  button: '0.375rem',   // 6px
  input: '0.375rem',    // 6px
  dialog: '0.5rem',     // 8px
  card: '0.5rem',       // 8px
} as const;

export type BaseRadius = typeof baseRadius;
