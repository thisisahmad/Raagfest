/**
 * Returns the correct URL for public folder assets in both dev and production.
 * import.meta.env.BASE_URL is always set by Vite (to '/' or the configured base).
 */
export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
