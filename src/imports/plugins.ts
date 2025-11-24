import stylistic from "@stylistic/eslint-plugin";
import { plugin as ts } from "typescript-eslint";
import html from "@html-eslint/eslint-plugin";
import css from "@eslint/css";
import json from "@eslint/json";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

export default {
  stylistic,
  ts: ts as NoInfer<typeof ts>,
  html: html as object,
  css,
  json,
  jsonc,
  yml,
};
