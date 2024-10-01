import type { Boundary } from "@eslinted/core";
import js from "./js/index.js";
import ts from "./ts/index.js";
import svelte from "./svelte/index.js";
import mocha from "./mocha/index.js";
import html from "./html/index.js";
import json from "./json/index.js";
import jsonc from "./jsonc/index.js";
import yml from "./yml/index.js";
import md from "./md/index.js";

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
} as const satisfies Boundary.Input.Files.Base;
