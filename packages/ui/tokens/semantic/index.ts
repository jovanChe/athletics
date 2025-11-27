/**
 * Semantic design tokens
 * Intent-based tokens that reference base tokens
 */

import { semanticColors, type SemanticColors } from './colors';
import { baseSpacing, baseTypography, baseShadows, baseRadius, baseAnimation } from '../base';

// Re-export semantic colors
export { semanticColors, type SemanticColors };

export const semanticTokens = {
  colors: semanticColors,
  spacing: baseSpacing,
  typography: baseTypography,
  shadows: baseShadows,
  radius: baseRadius,
  animation: baseAnimation,
} as const;

export type SemanticTokens = typeof semanticTokens;
