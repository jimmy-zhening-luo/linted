import { parser as ts } from "typescript-eslint";
import svelte from "svelte-eslint-parser";
import html from "@html-eslint/parser";
import yml from "yaml-eslint-parser";

export const parsers = {
  ts,
  svelte,
  html,
  yml,
};
