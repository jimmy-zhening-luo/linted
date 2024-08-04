import { Strings, type RuleEntry } from "../index.js";

const { Id: { Enable }, Level: { OFF } } = Strings;

export default [Enable, { "@html-eslint/require-title": OFF }] as const satisfies RuleEntry;
