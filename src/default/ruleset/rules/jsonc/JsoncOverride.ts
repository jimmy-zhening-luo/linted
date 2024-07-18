import Rule from "../Rule.js";
import {
  ERROR,
  OFF,
} from "../State.js";

const JsoncOverride = new Rule(
  "override",
  {

    // Extension Only
    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF, // comments are allowed in JSONC
    "jsonc/comma-dangle": [
      ERROR,
      "always-multiline", // trailing commas are allowed in JSONC
    ],
  },
);

export default JsoncOverride;
