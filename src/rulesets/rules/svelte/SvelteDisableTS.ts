import type { Input } from "@eslinted/core";
import { OFF } from "../state.js";

export default [
  "disable-ts",
  { "@typescript-eslint/no-unused-vars": OFF },
] as const satisfies Input.RuleRecord;
