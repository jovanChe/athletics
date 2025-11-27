/**
 * Class name utility
 * Simple class merging utility without Tailwind dependencies
 */

import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
