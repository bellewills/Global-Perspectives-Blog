// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "My Global Perspectives Blog";
export const SITE_DESCRIPTION = "Add here a brief description of who you are, your career ambitions, what you want to get out of the course.";
export const MY_NAME = "Corey Ford";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
