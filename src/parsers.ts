import { parser as ts } from "typescript-eslint";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import jsonc from "jsonc-eslint-parser";
import yml from "yaml-eslint-parser";

type Parsers = "ts" | "svelte" | "html" | "jsonc" | "yml";

export const parsers: Readonly<Record<Parsers, unknown>> = {
  ts,
  svelte,
  html,
  jsonc,
  yml,
};
