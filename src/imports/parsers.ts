import ts from "@typescript-eslint/parser";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import jsonc from "jsonc-eslint-parser";
import yml from "yaml-eslint-parser";

export default {
  ts,
  svelte,
  html,
  jsonc,
  yml,
  md: null,
} as const;
