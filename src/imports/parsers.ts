import { parser as ts } from "typescript-eslint";
import html from "@html-eslint/parser";
import yml from "yaml-eslint-parser";

export default {
  ts: ts as NoInfer<typeof ts>,
  html,
  yml,
};
