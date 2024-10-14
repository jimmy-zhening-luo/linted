import { OFF } from "../../.strings";

export default [
  "disable-js",
  {
    // Pulled from Svelte base config:
    // http://github.com/sveltejs/eslint-plugin-svelte/tree/main/src/configs/flat
    "no-inner-declarations": OFF /* ESLint */,
    "no-self-assign": OFF /* ESLint */,
  },
] as const;
