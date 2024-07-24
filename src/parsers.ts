import type { Scope } from "@eslinted/core";
import ts from "@typescript-eslint/parser";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import jsonc from "jsonc-eslint-parser";
import yml from "yaml-eslint-parser";

export default {
  js: [],
  ts: [ts],
  svelte: [svelte, ts],
  html: [html],
  json: [jsonc],
  jsonc: [jsonc],
  yml: [yml],
} as const satisfies Partial<Record<Scope, unknown>>;
