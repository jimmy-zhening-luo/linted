import stylistic from "@stylistic/eslint-plugin";
import { plugin as ts } from "typescript-eslint";
import mocha from "eslint-plugin-mocha";
import chai from "eslint-plugin-chai-friendly";
import chaiExpect from "eslint-plugin-chai-expect";
import html from "@html-eslint/eslint-plugin";
import css from "@eslint/css";
import json from "@eslint/json";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

export default {
  stylistic: stylistic as NoInfer<typeof stylistic>,
  ts: ts as NoInfer<typeof ts>,
  mocha,
  chai,
  "chai-expect": chaiExpect,
  html,
  css,
  json,
  jsonc,
  yml,
};
