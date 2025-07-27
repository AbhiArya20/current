/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "apps/web/**/*.{ts,tsx,js,jsx}": () => "pnpm run lint:web:fix",

  "apps/docs/**/*.{ts,tsx,js,jsx}": () => "pnpm run lint:docs:fix",

  // Format JSON and YAML files
  "**/*": "prettier --write --ignore-unknown",
};

export default config;
