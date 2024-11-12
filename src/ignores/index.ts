import js from "./scopes/js";
import ts from "./scopes/ts";
import svelte from "./scopes/svelte";
import mocha from "./scopes/mocha";
import html from "./scopes/html";
import json from "./scopes/json";
import jsonc from "./scopes/jsonc";
import yml from "./scopes/yml";

export default {
  "*": [
    // "**/node_modules/", /* ESLint @default */,
    // ".git/", /* ESLint @default */,
    "{,**/.git/}",
    "**/*package-lock.json",
    "**/dist/",
    "**/buil{d,t}/",
    "**/bundle{,d}/",
    "**/pack{,ed}/",
    "{,**/.svelte-kit/}",
    "{,**/.Trash/}",
  ],
  js,
  ts,
  svelte,
  mocha,
  html,
  json,
  jsonc,
  yml,
};
