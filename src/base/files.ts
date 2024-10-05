import type { Core } from "@eslinted/core";
import js from "./files/js/index.js";
import ts from "./files/ts/index.js";
import svelte from "./files/svelte/index.js";
import mocha from "./files/mocha/index.js";
import html from "./files/html/index.js";
import json from "./files/json/index.js";
import jsonc from "./files/jsonc/index.js";
import yml from "./files/yml/index.js";
import md from "./files/md/index.js";

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
