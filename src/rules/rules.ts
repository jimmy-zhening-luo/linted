import type { Input } from "@eslinted/core";
import js from "./rules/JsRule.js";
import ts from "./rules/TsRule.js";
import svelte from "./rules/SvelteRule.js";
import html from "./rules/HtmlRule.js";
import json from "./rules/JsonRule.js";
import jsonc from "./rules/JsoncRule.js";
import yml from "./rules/YmlRule.js";

export default {
  js,
  ts,
  svelte,
  html,
  json,
  jsonc,
  yml,
} as const satisfies Input.Rules;
