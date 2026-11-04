/**
 * Shared motion animation presets used across pages.
 * Keeps framer-motion config DRY and consistent site-wide.
 */

/** Standard fade-up animation for hero/section reveals. */
export const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
} as const;

/** Slightly subtler fade-up for article/news content. */
export const FADE_UP_SUBTLE = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

/** Standard easeOut transition. Accepts an optional `delay`. */
export function easeOutTransition(delay = 0) {
  return { duration: 0.8, delay, ease: "easeOut" as const };
}
