import type { Boundary } from "@eslinted/core";

export default {
  js: ["**/*.config.js"],
  ts: [
    "**/*.config.ts",
    "src/**/*.ts",
    "types/**/*.d.ts",
  ],
  svelte: ["src/**/*.svelte"],
  mocha: ["dogfood.ts"],
  html: ["src/**/*.html"],
  json: ["**/*.json"],
  jsonc: [
    "**/*.jsonc",
    "**/tsconfig.json",
  ],
  yml: [
    "**/*.yml",
    "**/*.yaml",
    ".github/workflows/*.yml",
  ],
  md: [],
} as const satisfies Boundary.Input.Files.Base;
