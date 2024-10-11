import { id, level, state } from "../_strings.js";

const
{ override } = id,
{ ERROR, OFF } = level,
{ AlwaysMultiline } = state;

// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
export default [override, { "jsonc/no-comments": OFF /* comments are allowed in JSONC */, "jsonc/comma-dangle": [ERROR, AlwaysMultiline] /* trailing commas are allowed in JSONC */ }] as const;
