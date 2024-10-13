import type { Core } from "./index.js";
import js from "./rules/js.js";
import ts from "./rules/ts.js";
import svelte from "./rules/svelte.js";
import mocha from "./rules/mocha.js";
import html from "./rules/html.js";
import json from "./rules/json.js";
import jsonc from "./rules/jsonc.js";
import yml from "./rules/yml.js";
import md from "./rules/md.js";

export default {
  js,
  ts,
  svelte,
  mocha,
  html,
  json,
  jsonc,
  yml,
  md,
} as const satisfies Core.Input.Rules.Base;
