/**
 * Base typography tokens - Fluid typography system
 * Responsive scaling with consistent relationships
 */

export const baseTypography = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    display: ['Inter', 'system-ui', 'sans-serif'],
  },

  // Font sizes with fluid scaling
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',     // 12-14px
    sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',       // 14-16px
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',       // 16-18px
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',       // 18-20px
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',       // 20-24px
    '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',      // 24-30px
    '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)', // 30-36px
    '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',      // 36-48px
    '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 3.75rem)',       // 48-60px
  },

  // Font weights
  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export type BaseTypography = typeof baseTypography;
