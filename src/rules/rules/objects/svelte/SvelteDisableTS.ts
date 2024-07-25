import type { Input } from "@eslinted/core";
import { OFF } from "../severity.js";

export default [
  "disable-ts",
  { "@typescript-eslint/no-unused-vars": OFF },
] as const satisfies Input.Rules.Entry;
