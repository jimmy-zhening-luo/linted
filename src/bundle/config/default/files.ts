import type { Scopes } from "./scopes.js";

export default {
  js: ["*.config.js"],
  ts: [
    "src/**/*.ts",
    "*.config.ts",
  ],
  svelte: ["src/**/*.svelte"],
  html: ["src/**/*.html"],
  json: ["**/*.json"],
  jsonc: ["tsconfig.json"],
  yml: [".github/workflows/*.yml"],
} satisfies Record<
  Scopes
  ,
  string[]
>;
