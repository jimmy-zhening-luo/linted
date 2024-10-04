import type { Boundary } from "@eslinted/core";
import js from "./rules/presets/Js.js";
import ts from "./rules/presets/Ts.js";
import svelte from "./rules/presets/Svelte.js";
import mocha from "./rules/presets/Mocha.js";
import html from "./rules/presets/Html.js";
import json from "./rules/presets/Json.js";
import jsonc from "./rules/presets/Jsonc.js";
import yml from "./rules/presets/Yml.js";
import md from "./rules/presets/Md.js";

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
} as const satisfies Boundary.Input.Rules.Preset;
