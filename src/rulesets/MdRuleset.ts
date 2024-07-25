import type { Input } from "@eslinted/core";
import MdEnable from "./rules/md/MdEnable.js";

export default [MdEnable] as const satisfies readonly Input.RuleRecord[];
