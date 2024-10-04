import type { Core } from "@eslinted/core";

type RuleEntry = Core.Input.Rules.Base[Core.Scopes][number];

namespace RuleEntry {
  export type Object = RuleEntry[1];
}

export type { RuleEntry, RuleEntry as default };
export * as Strings from "../strings/index.js";
