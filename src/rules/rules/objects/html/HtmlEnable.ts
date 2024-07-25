import type { Input } from "@eslinted/core";
import { OFF } from "../severity.js";
import { Enable } from "../id.js";

export default [
  Enable,
  { "@html-eslint/require-title": OFF },
] as const satisfies Input.Rules.Entry;
