/**
 * Base design tokens
 * Raw values that semantic tokens reference
 */

import { baseColors, type BaseColors } from './colors';
import { baseSpacing, type BaseSpacing } from './spacing';
import { baseTypography, type BaseTypography } from './typography';
import { baseShadows, type BaseShadows } from './shadows';
import { baseRadius, type BaseRadius } from './radius';
import { baseAnimation, type BaseAnimation } from './animation';

// Re-export individual tokens
export { baseColors, type BaseColors };
export { baseSpacing, type BaseSpacing };
export { baseTypography, type BaseTypography };
export { baseShadows, type BaseShadows };
export { baseRadius, type BaseRadius };
export { baseAnimation, type BaseAnimation };

// Combined base tokens
export const baseTokens = {
  colors: baseColors,
  spacing: baseSpacing,
  typography: baseTypography,
  shadows: baseShadows,
  radius: baseRadius,
  animation: baseAnimation,
} as const;

export type BaseTokens = typeof baseTokens;
