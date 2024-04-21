import type Props from "./props/Props.js";
import type Files from "./files/Files.js";
import type Rules from "./rules/Rules.js";

export type Config<
  Parser extends null | object,
  ParserO extends Record<string, unknown>,
  PPre extends string,
  PH extends string,
> = Files & Rules & Props<
  Parser,
  ParserO,
  PPre,
  PH
>;
