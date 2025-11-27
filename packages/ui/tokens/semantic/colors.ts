/**
 * Semantic color tokens
 * Intent-based colors that map to base colors
 */

import { baseColors } from '../base/colors';

export const semanticColors = {
  // Text colors
  text: {
    primary: baseColors.gray[900],
    secondary: baseColors.gray[600],
    muted: baseColors.gray[500],
    inverse: baseColors.white,
    disabled: baseColors.gray[400],
  },

  // Background colors
  background: {
    primary: baseColors.white,
    secondary: baseColors.gray[50],
    muted: baseColors.gray[100],
    inverse: baseColors.gray[900],
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  // Border colors
  border: {
    primary: baseColors.gray[200],
    secondary: baseColors.gray[300],
    muted: baseColors.gray[100],
    inverse: baseColors.gray[700],
    focus: baseColors.brand.primary[500],
  },

  // Interactive colors
  interactive: {
    primary: {
      default: baseColors.brand.primary[600],
      hover: baseColors.brand.primary[700],
      pressed: baseColors.brand.primary[800],
      disabled: baseColors.gray[300],
    },

    secondary: {
      default: baseColors.gray[100],
      hover: baseColors.gray[200],
      pressed: baseColors.gray[300],
      disabled: baseColors.gray[100],
    },

    ghost: {
      default: baseColors.transparent,
      hover: baseColors.gray[100],
      pressed: baseColors.gray[200],
      disabled: baseColors.transparent,
    },
  },

  // Status colors
  status: {
    success: {
      background: baseColors.success[50],
      border: baseColors.success[200],
      text: baseColors.success[700],
      icon: baseColors.success[600],
    },

    warning: {
      background: baseColors.warning[50],
      border: baseColors.warning[200],
      text: baseColors.warning[700],
      icon: baseColors.warning[600],
    },

    error: {
      background: baseColors.error[50],
      border: baseColors.error[200],
      text: baseColors.error[700],
      icon: baseColors.error[600],
    },

    info: {
      background: baseColors.brand.primary[50],
      border: baseColors.brand.primary[200],
      text: baseColors.brand.primary[700],
      icon: baseColors.brand.primary[600],
    },
  },

  // Component-specific colors
  button: {
    primary: {
      background: baseColors.brand.primary[600],
      text: baseColors.white,
      border: baseColors.brand.primary[600],
    },

    secondary: {
      background: baseColors.gray[100],
      text: baseColors.gray[900],
      border: baseColors.gray[200],
    },

    ghost: {
      background: baseColors.transparent,
      text: baseColors.gray[900],
      border: baseColors.transparent,
    },
  },

  input: {
    background: baseColors.white,
    text: baseColors.gray[900],
    placeholder: baseColors.gray[500],
    border: baseColors.gray[300],
    focusBorder: baseColors.brand.primary[500],
  },

  dialog: {
    background: baseColors.white,
    overlay: 'rgba(0, 0, 0, 0.5)',
    border: baseColors.gray[200],
  },

  menuItem: {
    background: {
      default: baseColors.transparent,
      hover: baseColors.gray[100],
      active: baseColors.brand.primary[100],
      activeHover: baseColors.brand.primary[200],
      pressed: baseColors.gray[200],
    },
    text: {
      default: baseColors.gray[600],
      hover: baseColors.gray[900],
      active: baseColors.brand.primary[900],
      disabled: baseColors.gray[400],
    },
    border: {
      default: baseColors.transparent,
      focus: baseColors.brand.primary[500],
    },
  },
} as const;

export type SemanticColors = typeof semanticColors;
