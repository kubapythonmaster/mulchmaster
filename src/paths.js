export const BASE = import.meta.env.BASE_URL || "/";

export const homeUrl = BASE;
export const contactUrl = `${BASE}kontakt/`;

export function sectionUrl(hash) {
  const clean = hash.startsWith("#") ? hash : `#${hash}`;
  return `${BASE}${clean}`;
}

export function isContactPath(pathname = "") {
  const path = pathname.replace(/\/+$/, "");
  return path.endsWith("/kontakt") || path.endsWith("kontakt");
}
