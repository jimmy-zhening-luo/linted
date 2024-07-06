import type { Scopes } from "./scopes.js";

export default {
  js: ["*.config.js"],
  ts: [
    "src/**/*.ts",
    "*.config.ts",
  ],
  svelte: ["src/**/*.svelte"],
  html: ["src/**/*.html"],
  jest: ["src/**/*.spec.ts"],
  json: ["**/*.json"],
  jsonc: ["tsconfig.json"],
  yml: [".github/workflows/*.yml"],
  md: ["**/*.md"],
} satisfies Record<
  Scopes
  ,
  string[]
>;
