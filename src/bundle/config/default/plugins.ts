import type { Scopes } from "./scopes.js";
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

export default {
  js: { "@stylistic": stylistic },
  ts: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
  },
  svelte: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
    svelte,
  },
  html: { "@html-eslint": html },
  jest: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
    jest,
  },
  json: { jsonc },
  jsonc: { jsonc },
  yml: { yml },
} satisfies Record<
  Scopes
  ,
  Record<
    string
    ,
    Record<
      "configs"
      ,
      unknown
    >
  >
>;
