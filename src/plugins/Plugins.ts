import type { Boundary } from "@eslinted/core";
import stylistic from "@stylistic/eslint-plugin";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import htmlEslint from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";
import markdownlint from "eslint-plugin-markdownlint";

export default {
  "@stylistic": stylistic,
  "@typescript-eslint": typescriptEslint as unknown as { configs: unknown },
  svelte,
  "@html-eslint": htmlEslint,
  jsonc,
  yml,
  markdownlint,
} as const satisfies Boundary.Input.Plugins;
