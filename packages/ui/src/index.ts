/**
 * Design System Entry Point
 * Export all components, utilities, and tokens
 */

// Components
export * from '../components/primitives';
export * from '../components/utilities';
export * from '../components/layout';

// Design Tokens
export * from '../tokens/base';
export * from '../tokens/semantic';
export * from '../tokens/themes';

// Examples
export { DesignSystemDemo } from '../examples/demo';

// Styles (for CSS imports)
export const styles = {
  reset: '../styles/reset.css',
  tokens: '../styles/tokens.css',
  themes: '../styles/themes.css',
  index: '../styles/index.css',
} as const;
