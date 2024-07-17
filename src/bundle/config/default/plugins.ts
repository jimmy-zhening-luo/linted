import type { Scopes } from "./scopes.js";
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

const Plugins = {
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
} satisfies Record<
  Scopes,
  Record<
    string,
    { configs: unknown }
  >
>;

export default Plugins;
