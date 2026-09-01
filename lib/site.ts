const FALLBACK_SITE_URL = "http://localhost:3000";

export const siteUrl = (process.env.SITE_URL || FALLBACK_SITE_URL).replace(
  /\/$/,
  "",
);
