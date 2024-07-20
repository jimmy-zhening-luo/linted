import { Rule } from "@eslinted/core";
import { OFF } from "../state.js";

const SvelteDisableConflictTs = new Rule(
  "disable-ts",
  { "@typescript-eslint/no-unused-vars": OFF },
);

export default SvelteDisableConflictTs;
