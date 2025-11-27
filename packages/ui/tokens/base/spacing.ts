/**
 * Base spacing tokens - Consistent spacing scale
 * T-shirt sizing with mathematical relationships
 */

export const baseSpacing = {
  // Base unit: 4px (0.25rem)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px

  // Component-specific spacing
  button: {
    x: '0.75rem',   // 12px
    y: '0.5rem',    // 8px
  },

  input: {
    x: '0.75rem',   // 12px
    y: '0.5rem',    // 8px
  },

  dialog: {
    padding: '1.5rem', // 24px
    gap: '1rem',       // 16px
  },

  // Layout spacing
  container: {
    padding: '1rem',    // 16px
    margin: '0 auto',
  },

  section: {
    padding: '2rem',    // 32px
  },
} as const;

export type BaseSpacing = typeof baseSpacing;
