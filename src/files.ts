import type { Core } from "@eslinted/core";
import js from "./files/js.js";
import ts from "./files/ts.js";
import svelte from "./files/svelte.js";
import mocha from "./files/mocha.js";
import html from "./files/html.js";
import json from "./files/json.js";
import jsonc from "./files/jsonc.js";
import yml from "./files/yml.js";
import md from "./files/md.js";

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
} as const satisfies Core.Input.Files.Base;
