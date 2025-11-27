/**
 * Base animation tokens
 * Consistent timing and easing for smooth interactions
 */

export const baseAnimation = {
  // Duration tokens
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  // Easing curves
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Custom curves for specific interactions
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  // Common transition combinations
  transition: {
    // Fast interactions (buttons, hover states)
    fast: '150ms cubic-bezier(0, 0, 0.2, 1)',

    // Normal interactions (dropdowns, modals)
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Slow interactions (page transitions)
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Component-specific
    button: '150ms cubic-bezier(0, 0, 0.2, 1)',
    dialog: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    dropdown: '150ms cubic-bezier(0, 0, 0.2, 1)',
  },

  // Transform values
  transform: {
    scale: {
      enter: 'scale(0.95)',
      exit: 'scale(1.05)',
      pressed: 'scale(0.98)',
    },

    translate: {
      slideUp: 'translateY(8px)',
      slideDown: 'translateY(-8px)',
      slideLeft: 'translateX(8px)',
      slideRight: 'translateX(-8px)',
    },
  },
} as const;

export type BaseAnimation = typeof baseAnimation;
