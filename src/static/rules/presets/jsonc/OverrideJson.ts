import { Strings, type RuleEntry } from "../index.js";

const { Id: { Override }, Level: { ERROR, OFF }, State: { ALWAYS_MULTILINE } } = Strings;

// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
export default [Override, { "jsonc/no-comments": OFF /* comments are allowed in JSONC */, "jsonc/comma-dangle": [ERROR, ALWAYS_MULTILINE] /* trailing commas are allowed in JSONC */ }] as const satisfies RuleEntry;
