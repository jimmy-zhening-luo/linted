import { Strings, type RuleEntry } from "../index.js";

const { Id: { Enable } } = Strings;

export default [
  Enable,
  {},
] as const satisfies RuleEntry;
