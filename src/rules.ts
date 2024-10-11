import type { Core } from "@eslinted/core";
import js from "./rules/_js.js";
import ts from "./rules/_ts.js";
import svelte from "./rules/_svelte.js";
import mocha from "./rules/_mocha.js";
import html from "./rules/_html.js";
import json from "./rules/_json.js";
import jsonc from "./rules/_jsonc.js";
import yml from "./rules/_yml.js";
import md from "./rules/_md.js";

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
