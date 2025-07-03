import { parser as ts } from "typescript-eslint";
import html from "@html-eslint/parser";
import yml from "yaml-eslint-parser";

export const parsers = {
  ts,
  html,
  yml,
};
