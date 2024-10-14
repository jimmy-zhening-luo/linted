import type { Core } from "../index";
import js from "./js";
import ts from "./ts";
import svelte from "./svelte";
import mocha from "./mocha";
import html from "./html";
import json from "./json";
import jsonc from "./jsonc";
import yml from "./yml";
import md from "./md";

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
