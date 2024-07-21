import type { Scope } from "@eslinted/core";
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

export default {
  js: { "@stylistic": stylistic },
  ts: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts as unknown as { configs: unknown },
  },
  svelte: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts as unknown as { configs: unknown },
    svelte,
  },
  html: { "@html-eslint": html },
  json: { jsonc },
  jsonc: { jsonc },
  yml: { yml },
} as const satisfies Record<Scope, Record<string, { configs: unknown }>>;
