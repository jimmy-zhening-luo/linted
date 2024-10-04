import type { Core } from "@eslinted/core";
import ts from "@typescript-eslint/parser";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import jsonc from "jsonc-eslint-parser";
import yml from "yaml-eslint-parser";
import md from "eslint-plugin-markdownlint/parser.js";

export default {
  ts,
  svelte,
  html,
  jsonc,
  yml,
  md,
} as const satisfies Core.Input.Parsers;
