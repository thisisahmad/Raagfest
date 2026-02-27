/**
 * In dev, Vite serves public/ at root (/). In production, we use base path /Raagfest/.
 * This returns the correct URL for public folder assets in both environments.
 */
export function publicUrl(path) {
  if (import.meta.env.DEV) {
    return `/${path}`;
  }
  return `${import.meta.env.BASE_URL}${path}`;
}
