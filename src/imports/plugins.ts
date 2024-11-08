import stylistic from "@stylistic/eslint-plugin";
import typescript_eslint from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import mocha from "eslint-plugin-mocha";
import html_eslint from "@html-eslint/eslint-plugin";
import json from "@eslint/json";
import yml from "eslint-plugin-yml";

export default {
  "@stylistic": stylistic,
  "@typescript-eslint": typescript_eslint as unknown as { configs: unknown },
  svelte,
  mocha,
  "@html-eslint": html_eslint,
  json,
  yml,
} as const;
