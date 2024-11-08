import {
  override,
  ERROR,
  OFF,
  AlwaysMultiline,
} from "../../_strings";

export default [
  override,
  {
    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF /* comments ARE allowed in JSONC */,
    "jsonc/comma-dangle": [
      ERROR,
      AlwaysMultiline,
    ] /* trailing commas ARE allowed in JSONC */,
  },
] as const;
