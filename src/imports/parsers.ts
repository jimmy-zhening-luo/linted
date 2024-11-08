import ts from "@typescript-eslint/parser";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import yml from "yaml-eslint-parser";

export default {
  ts,
  svelte,
  html,
  yml,
} as const;
