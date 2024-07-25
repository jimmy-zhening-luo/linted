import type { Input } from "@eslinted/core";
import MdEnable from "./objects/md/MdEnable.js";

export default [MdEnable] as const satisfies readonly Input.Rules.Entry[];
