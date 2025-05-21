import stylistic from "@stylistic/eslint-plugin";
import { plugin as typescript_eslint } from "typescript-eslint";
import mocha from "eslint-plugin-mocha";
import chai_friendly from "eslint-plugin-chai-friendly";
import chai_expect from "eslint-plugin-chai-expect";
import svelte from "eslint-plugin-svelte";
import html_eslint from "@html-eslint/eslint-plugin";
import css from "@eslint/css";
import json from "@eslint/json";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

export const plugins: Readonly<Record<string, Partial<Record<"configs", unknown>>>> = {
  "@stylistic": stylistic,
  "@typescript-eslint": typescript_eslint,
  mocha,
  "chai-friendly": chai_friendly,
  "chai-expect": chai_expect,
  svelte,
  "@html-eslint": html_eslint,
  css,
  json,
  jsonc,
  yml,
};
