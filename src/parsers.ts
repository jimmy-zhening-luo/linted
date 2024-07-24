import type { Scope } from "@eslinted/core";
import ts from "@typescript-eslint/parser";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import jsonc from "jsonc-eslint-parser";
import yml from "yaml-eslint-parser";

export default {
  js: null,
  ts,
  svelte,
  html,
  json: jsonc,
  jsonc,
  yml,
} as const satisfies Record<"js", null> & Omit<Record<Scope, unknown>, "js">;
