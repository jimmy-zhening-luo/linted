import type { Scopes } from "./scopes.js";
import ts from "@typescript-eslint/parser";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import jsonc from "jsonc-eslint-parser";
import yml from "yaml-eslint-parser";
import md from "eslint-plugin-markdownlint/parser";

export default {
  ts,
  svelte,
  html,
  jest: ts,
  json: jsonc,
  jsonc,
  yml,
  md,
} satisfies Partial<
  Record<
    Scopes
    ,
    unknown
  >
>;
