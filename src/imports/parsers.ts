import { parser as tsParser } from "typescript-eslint";
import html from "@html-eslint/parser";
import yml from "yaml-eslint-parser";

export const parsers = {
  ts: tsParser as unknown,
  html,
  yml,
};
