import type { Boundary } from "@eslinted/core";
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

export default {
  "@stylistic": stylistic,
  "@typescript-eslint": ts as unknown as { configs: unknown },
  svelte,
  "@html-eslint": html,
  jsonc,
  yml,
} as const satisfies Boundary.Input.Plugins;
