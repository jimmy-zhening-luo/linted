import type { Boundary } from "@eslinted/core";
import js from "./presets/Js.js";
import ts from "./presets/Ts.js";
import svelte from "./presets/Svelte.js";
import mocha from "./presets/Mocha.js";
import html from "./presets/Html.js";
import json from "./presets/Json.js";
import jsonc from "./presets/Jsonc.js";
import yml from "./presets/Yml.js";
import md from "./presets/Md.js";

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
