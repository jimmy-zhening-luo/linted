import { Strings, type RuleEntry } from "../index.js";

const { Level: { OFF } } = Strings;

export default ["disable-ts", { "no-unused-vars": OFF /* ESLint Core */, "@typescript-eslint/no-unused-vars": OFF /* TS Extension */ }] as const satisfies RuleEntry;
