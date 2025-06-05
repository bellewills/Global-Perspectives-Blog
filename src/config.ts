// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "My Global Perspectives Blog";
export const SITE_DESCRIPTION = "I want to develop my own finacial app and do freelance work. I want to gain a first degree and more enhaced coding knowlegde; especially with AI and hacking.";
export const MY_NAME = "Belle Williams - https://github.com/bellewills/Global-Perspectives-Blog";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
